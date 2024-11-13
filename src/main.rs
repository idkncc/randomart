mod branches;
mod eval;
mod nodes;

use branches::{print_grammar, Grammar, GrammarBranch};

fn generate_grammar() -> Grammar {
    const E: usize = 0usize;
    const A: usize = 1usize;
    const C: usize = 2usize;

    let mut grammar: Grammar = vec![];

    {
        let mut branches: Vec<GrammarBranch> = vec![];

        branches.push(GrammarBranch::new(
            node_triple!(node_rule!(C), node_rule!(C), node_rule!(C)),
            1f32,
        ));

        grammar.push(branches);
    }

    {
        let mut branches: Vec<GrammarBranch> = vec![];

        branches.push(GrammarBranch::new(node_random!(), 0f32));

        branches.push(GrammarBranch::new(node_x!(), 0f32));

        branches.push(GrammarBranch::new(node_y!(), 0f32));

        branches.push(GrammarBranch::new(node_t!(), 0f32));

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

    return grammar;
}

fn main() {
    let grammar = generate_grammar();
    print_grammar(&grammar);
}
