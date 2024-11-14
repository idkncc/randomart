use crate::{
    expect_number, expect_triple, node_boolean, node_clone, node_number, node_triple,
    nodes::{self, Node},
    utils::Color,
};

pub fn eval_node(node: &Node, x: f32, y: f32, t: f32) -> Box<Node> {
    match node {
        Node::X => node_number!(x),
        Node::Y => node_number!(y),
        Node::T => node_number!(t),

        Node::Random | Node::Rule(_) => {
            panic!("This node is valid only for Grammar definitions")
        }

        Node::Number(_) | Node::Boolean(_) => node_clone!(node),

        Node::Sqrt(unop) => {
            if let Node::Number(value) = eval_node(&unop.value, x, y, t).as_ref() {
                return node_number!(value.sqrt());
            } else {
                panic!("Expected sqrt argument to be number")
            }
        }
        Node::Add(binop) => {
            if let Node::Number(lhs) = eval_node(&binop.lhs, x, y, t).as_ref() {
                if let Node::Number(rhs) = eval_node(&binop.rhs, x, y, t).as_ref() {
                    return node_number!(lhs + rhs);
                } else {
                    panic!("Expected left-hand-side to be number")
                }
            } else {
                panic!("Expected right-hand-side to be number")
            }
        }
        Node::Mult(binop) => {
            if let Node::Number(lhs) = eval_node(&binop.lhs, x, y, t).as_ref() {
                if let Node::Number(rhs) = eval_node(&binop.rhs, x, y, t).as_ref() {
                    return node_number!(lhs * rhs);
                } else {
                    panic!("Expected left-hand-side to be number")
                }
            } else {
                panic!("Expected right-hand-side to be number")
            }
        }
        Node::Mod(binop) => {
            if let Node::Number(lhs) = eval_node(&binop.lhs, x, y, t).as_ref() {
                if let Node::Number(rhs) = eval_node(&binop.rhs, x, y, t).as_ref() {
                    return node_number!(lhs / rhs);
                } else {
                    panic!("Expected left-hand-side to be number")
                }
            } else {
                panic!("Expected right-hand-side to be number")
            }
        }
        Node::Gt(binop) => {
            if let Node::Number(lhs) = eval_node(&binop.lhs, x, y, t).as_ref() {
                if let Node::Number(rhs) = eval_node(&binop.rhs, x, y, t).as_ref() {
                    return node_boolean!(lhs > rhs);
                } else {
                    panic!("Expected left-hand-side to be number")
                }
            } else {
                panic!("Expected right-hand-side to be number")
            }
        }
        Node::Triple(triple) => {
            let first = eval_node(&triple.first, x, y, t);
            let second = eval_node(&triple.second, x, y, t);
            let third = eval_node(&triple.third, x, y, t);

            node_triple!(first, second, third)
        }
        Node::If(iff) => {
            if let Node::Boolean(value) = eval_node(&iff.cond, x, y, t).as_ref() {
                if value == &true {
                    return eval_node(&iff.then, x, y, t);
                } else {
                    return eval_node(&iff.elze, x, y, t);
                }
            } else {
                panic!("Expected if condition to be number")
            }
        }
    }
}

/// Evals node, but expects it to return `Node::Triple` to set as `Color`
pub fn eval_func(node: &Node, x: f32, y: f32, t: f32, color: &mut Color) {
    let node = eval_node(node, x, y, t);

    let triple = expect_triple!(node);
    color.r = expect_number!(triple.first);
    color.g = expect_number!(triple.second);
    color.b = expect_number!(triple.third);
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::*;

    #[test]
    fn simple_node() {
        let node = node_add!(node_number!(1.0), node_number!(2.0));

        if let Node::Number(result) = eval_node(&node, 0.0, 0.0, 0.0).as_ref() {
            assert_eq!(result, &3.0);
        } else {
            panic!("Expected to return number")
        }
    }

    #[test]
    fn node_x_plus_y() {
        let node = node_add!(node_x!(), node_y!());

        if let Node::Number(result) = eval_node(&node, 34.0, 35.0, 0.0).as_ref() {
            assert_eq!(result, &69.0);
        } else {
            panic!("Expected to return number")
        }
    }

    // TODO: make more tests
}
