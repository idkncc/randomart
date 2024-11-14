//! Module for compiling GL

use crate::nodes::Node;

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
