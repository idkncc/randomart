use crate::{funcs::get_random, macros::*, prelude::*};

const GEN_RULE_MAX_ATTEMPTS: usize = 100;

pub fn gen_rule(grammar: &Grammar, rule: usize, depth: i32) -> Option<Box<Node>> {
    if depth <= 0 {
        return None;
    }

    assert!(rule < grammar.len());

    let branches = grammar.get(rule).unwrap();

    let mut node = None;
    for _attempts in 0..GEN_RULE_MAX_ATTEMPTS {
        if node.is_some() {
            break;
        }

        // [0......][...][...1]
        let p: f32 = get_random();
        let mut t = 0.0;

        for branch in branches {
            t += branch.probability;
            if t >= p {
                node = gen_node(grammar, branch.node.as_ref(), depth - 1);
                break;
            }
        }
    }
    node
}

pub fn gen_node(grammar: &Grammar, node: &Node, depth: i32) -> Option<Box<Node>> {
    match node {
        Node::X | Node::Y | Node::T | Node::Number(_) | Node::Boolean(_) => Some(node_clone!(node)),
        Node::Random => Some(node_number!(get_random() * 2.0 - 1.0)),
        Node::Rule(rule) => gen_rule(grammar, rule.clone(), depth - 1),
        Node::Sqrt(unop) => {
            let Some(value) = gen_node(grammar, &unop.value, depth) else {
                return None;
            };

            Some(node_sqrt!(value))
        }
        Node::Add(binop) => {
            let Some(lhs) = gen_node(grammar, &binop.lhs, depth) else {
                return None;
            };
            let Some(rhs) = gen_node(grammar, &binop.rhs, depth) else {
                return None;
            };

            Some(node_add!(lhs, rhs))
        }
        Node::Mult(binop) => {
            let Some(lhs) = gen_node(grammar, &binop.lhs, depth) else {
                return None;
            };
            let Some(rhs) = gen_node(grammar, &binop.rhs, depth) else {
                return None;
            };

            Some(node_mult!(lhs, rhs))
        }
        Node::Mod(binop) => {
            let Some(lhs) = gen_node(grammar, &binop.lhs, depth) else {
                return None;
            };
            let Some(rhs) = gen_node(grammar, &binop.rhs, depth) else {
                return None;
            };

            Some(node_mod!(lhs, rhs))
        }
        Node::Gt(binop) => {
            let Some(lhs) = gen_node(grammar, &binop.lhs, depth) else {
                return None;
            };
            let Some(rhs) = gen_node(grammar, &binop.rhs, depth) else {
                return None;
            };

            Some(node_gt!(lhs, rhs))
        }

        Node::Triple(triple) => {
            let Some(first) = gen_node(grammar, &triple.first, depth) else {
                return None;
            };
            let Some(second) = gen_node(grammar, &triple.second, depth) else {
                return None;
            };
            let Some(third) = gen_node(grammar, &triple.third, depth) else {
                return None;
            };

            Some(node_triple!(first, second, third))
        }
        Node::If(iff) => {
            let Some(cond) = gen_node(grammar, &iff.cond, depth) else {
                return None;
            };
            let Some(then) = gen_node(grammar, &iff.then, depth) else {
                return None;
            };
            let Some(elze) = gen_node(grammar, &iff.elze, depth) else {
                return None;
            };

            Some(node_if!(cond, then, elze))
        }
    }
}
