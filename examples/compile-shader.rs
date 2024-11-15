//! Generates GLSL Fragment shader.

use randomart::prelude::*;

fn main() {
    rand::thread_rng();

    let (grammar, entry) = generate_grammar();
    let Some(f) = gen_rule(&grammar, entry, 40) else {
        panic!("Couldn't generate grammar")
    };

    println!("#version 330");
    println!("in vec2 fragTexCoord;");
    println!("out vec4 finalColor;");
    println!("uniform float time;");
    println!("");
    println!("vec4 map_color(vec3 rgb) {{");
    println!("    return vec4((rgb + 1)/2.0, 1.0);");
    println!("}}");
    println!("");
    println!("void main()");
    println!("{{");
    println!("    float x = fragTexCoord.x*2.0 - 1.0;");
    println!("    float y = fragTexCoord.y*2.0 - 1.0;");
    println!("    float t = sin(time);");
    println!(
        "    finalColor = map_color({});",
        compile_fragment_expression(&f)
    );
    println!("}}");
}
