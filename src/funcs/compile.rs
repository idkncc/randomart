//! Module for compiling GL

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

use crate::prelude::*;

pub fn compile_fragment_expression(node: &Node) -> String {
    match node {
        Node::X => format!("x"),
        Node::Y => format!("y"),
        Node::T => format!("t"),
        Node::Random | Node::Rule(_) => {
            panic!("Cannot compile `Random` and `Rule` nodes into fragment expression.")
        }
        Node::Number(value) => format!("({})", value),
        Node::Boolean(value) => {
            if value == &true {
                "true".to_string()
            } else {
                "false".to_string()
            }
        }
        Node::Sqrt(unop) => {
            format!("sqrt({})", compile_fragment_expression(&unop.value))
        }
        Node::Add(binop) => format!(
            "({}+{})",
            compile_fragment_expression(&binop.lhs),
            compile_fragment_expression(&binop.rhs)
        ),
        Node::Mult(binop) => format!(
            "({}*{})",
            compile_fragment_expression(&binop.lhs),
            compile_fragment_expression(&binop.rhs)
        ),
        Node::Mod(binop) => format!(
            "mod({},{})",
            compile_fragment_expression(&binop.lhs),
            compile_fragment_expression(&binop.rhs)
        ),
        Node::Gt(binop) => format!(
            "({}>{})",
            compile_fragment_expression(&binop.lhs),
            compile_fragment_expression(&binop.rhs)
        ),
        Node::Triple(triple) => format!(
            "vec3({},{},{})",
            compile_fragment_expression(&triple.first),
            compile_fragment_expression(&triple.second),
            compile_fragment_expression(&triple.third)
        ),
        Node::If(iff) => format!(
            "({}?{}:{})",
            compile_fragment_expression(&iff.cond),
            compile_fragment_expression(&iff.then),
            compile_fragment_expression(&iff.elze)
        ),
    }
}

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub fn compile_webgl_fragment_shader() -> String {
    let (grammar, entry) = generate_grammar();
    let Some(f) = gen_rule(&grammar, entry, 40) else {
        panic!("Couldn't generate grammar")
    };

    let mut shader = String::new();
    shader.push_str(&format!("#define GLSLIFY 1\n"));
    shader.push_str(&format!("precision highp float;\n"));
    shader.push_str(&format!("uniform vec2 resolution;\n"));
    shader.push_str(&format!("uniform float time;\n"));
    shader.push_str(&format!("\n"));
    shader.push_str(&format!("vec4 map_color(vec3 rgb) {{\n"));
    shader.push_str(&format!("    return vec4((rgb + 1.0)/2.0, 1.0);\n"));
    shader.push_str(&format!("}}\n"));
    shader.push_str(&format!("\n"));
    shader.push_str(&format!("void main()\n"));
    shader.push_str(&format!("{{\n"));
    shader.push_str(&format!(
        "    float x = (gl_FragCoord.x/resolution.x)*2.0 - 1.0;\n"
    ));
    shader.push_str(&format!(
        "    float y = (gl_FragCoord.y/resolution.y)*2.0 - 1.0;\n"
    ));
    shader.push_str(&format!("    float t = sin(time);\n"));
    shader.push_str(&format!(
        "    gl_FragColor = map_color({});\n",
        compile_fragment_expression(&f)
    ));
    // shader.push_str(&format!("    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n"));

    shader.push_str(&format!("}}\n"));

    shader
}
