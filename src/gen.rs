use crate::{
    branches::Grammar,
    expect_number, node_add, node_clone, node_gt, node_if, node_mod, node_mult, node_number,
    node_sqrt, node_triple,
    nodes::{self, Binop, Node, Unop},
};

const GEN_RULE_MAX_ATTEMPTS: usize = 100;

fn gen_rule(grammar: &Grammar, rule: usize, depth: i32) -> Option<Box<Node>> {
    if depth <= 0 {
        panic!("Exceeded depth");
    }

    assert!(rule < grammar.len());

    let branches = grammar.get(rule).unwrap();

    let mut node: Option<Box<Node>> = None;

    for attempts in 0..GEN_RULE_MAX_ATTEMPTS {
        // [0......][...][...1]
        let p: f32 = rand::random();
        let mut t = 0.0;

        for branch in branches {
            t += branch.probability;
            if t >= p {
                node = Some(gen_node(grammar, branch.node.as_ref(), depth - 1));
                break;
            }
        }
    }

    node
}

fn gen_node(grammar: &Grammar, node: &Node, depth: i32) -> Box<Node> {
    match node {
        Node::X | Node::Y | Node::T | Node::Number(_) | Node::Boolean(_) => node_clone!(node),
        Node::Random => node_number!(rand::random::<f32>() * 2.0 - 1.0),
        Node::Rule(rule) => gen_rule(grammar, rule.clone(), depth - 1).unwrap(),
        Node::Sqrt(unop) => node_sqrt!(gen_node(grammar, &unop.value, depth)),
        Node::Add(binop) => {
            let lhs = gen_node(grammar, &binop.lhs, depth);
            let rhs = gen_node(grammar, &binop.rhs, depth);

            node_add!(lhs, rhs)
        }
        Node::Mult(binop) => {
            let lhs = gen_node(grammar, &binop.lhs, depth);
            let rhs = gen_node(grammar, &binop.rhs, depth);

            node_mult!(lhs, rhs)
        }
        Node::Mod(binop) => {
            let lhs = gen_node(grammar, &binop.lhs, depth);
            let rhs = gen_node(grammar, &binop.rhs, depth);

            node_mod!(lhs, rhs)
        }
        Node::Gt(binop) => {
            let lhs = gen_node(grammar, &binop.lhs, depth);
            let rhs = gen_node(grammar, &binop.rhs, depth);

            node_gt!(lhs, rhs)
        }

        Node::Triple(triple) => {
            let first = gen_node(grammar, &triple.first, depth);
            let second = gen_node(grammar, &triple.second, depth);
            let third = gen_node(grammar, &triple.third, depth);

            node_triple!(first, second, third)
        }
        Node::If(iff) => {
            let cond = gen_node(grammar, &iff.cond, depth);
            let then = gen_node(grammar, &iff.then, depth);
            let elze = gen_node(grammar, &iff.elze, depth);

            node_if!(cond, then, elze)
        }
    }
}
