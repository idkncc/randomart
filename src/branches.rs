use crate::nodes::{print_node, Node};

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
