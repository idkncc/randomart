mod branches;
mod eval;
mod gen;
mod nodes;
mod utils;

use branches::{print_grammar, Grammar, GrammarBranch};
use eval::eval_func;
use gen::gen_rule;
use indicatif::ProgressBar;
use nodes::{print_node, Node};
use utils::Color;

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

fn create_image(f: &Node, width: u32, height: u32) {
    // Create a new ImgBuf with width: imgx and height: imgy
    let mut imgbuf = image::ImageBuffer::new(width, height);

    let bar = ProgressBar::new((width * height) as u64);
    for (x, y, pixel) in imgbuf.enumerate_pixels_mut() {
        let nx = ((x as f32) / (width as f32)) * 2.0 - 1.0;
        let ny = ((y as f32) / (height as f32)) * 2.0 - 1.0;

        let mut color = Color::new(0.0, 0.0, 0.0);
        eval_func(f, nx, ny, 0.0, &mut color);

        *pixel = image::Rgb(color.to_u8());

        bar.inc(1);
    }

    imgbuf.save("randomart.png").unwrap();
}

fn main() {
    rand::thread_rng();

    let grammar = generate_grammar();

    println!("Grammar:");
    print_grammar(&grammar);

    let Some(f) = gen_rule(&grammar, 0, 40) else {
        panic!("Couldn't generate grammar")
    };

    println!("Generating image...");

    create_image(&f, 400, 400);
}
