use crate::{macros::*, prelude::*};

pub type Grammar = Vec<GrammarBranches>;
pub type GrammarBranches = Vec<GrammarBranch>;

pub struct GrammarBranch {
    pub node: Box<Node>,
    pub probability: f32,
}

impl GrammarBranch {
    pub fn new(node: Box<Node>, probability: f32) -> Self {
        Self { node, probability }
    }
}

pub fn print_grammar(grammar: &Grammar) {
    for (i, branches) in grammar.iter().enumerate() {
        let declr = format!("{} ::= ", i);
        println!("{}", declr);

        for branch in branches {
            print!("{}| ", " ".repeat(declr.len() - 2));
            print_grammar_branch(branch);
            println!()
        }
    }
}

pub fn print_grammar_branch(branch: &GrammarBranch) {
    print_node(&branch.node);
    print!(" [{:.0}%]", branch.probability * 100f32);
}

pub fn generate_grammar() -> (Grammar, usize) {
    const E: usize = 0usize;
    const A: usize = 1usize;
    const C: usize = 2usize;

    let mut grammar: Grammar = vec![];

    // E ::=
    {
        let mut branches: Vec<GrammarBranch> = vec![];

        branches.push(GrammarBranch::new(
            node_triple!(node_rule!(C), node_rule!(C), node_rule!(C)),
            1f32,
        ));

        grammar.push(branches);
    }

    // A ::=
    {
        let mut branches: Vec<GrammarBranch> = vec![];

        branches.push(GrammarBranch::new(node_random!(), 0f32));

        branches.push(GrammarBranch::new(node_x!(), 0f32));

        branches.push(GrammarBranch::new(node_y!(), 0f32));

        // branches.push(GrammarBranch::new(node_t!(), 0f32));

        branches.push(GrammarBranch::new(
            node_sqrt!(node_add!(
                node_add!(
                    node_mult!(node_x!(), node_x!()),
                    node_mult!(node_y!(), node_y!())
                ),
                node_mult!(node_t!(), node_t!())
            )),
            0f32,
        ));

        let branches_count = branches.len() as f32;
        for branch in branches.iter_mut() {
            (*branch).probability = 1.0 / branches_count
        }

        grammar.push(branches);
    }

    // C ::=
    {
        let mut branches: Vec<GrammarBranch> = vec![];

        branches.push(GrammarBranch::new(node_rule!(A), 1.0 / 4.0));

        branches.push(GrammarBranch::new(
            node_add!(node_rule!(C), node_rule!(C)),
            3.0 / 8.0,
        ));
        branches.push(GrammarBranch::new(
            node_mult!(node_rule!(C), node_rule!(C)),
            3.0 / 8.0,
        ));

        grammar.push(branches);
    }

    return (grammar, E);
}
