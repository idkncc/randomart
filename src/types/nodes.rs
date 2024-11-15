#[derive(Debug, Clone)]
pub enum Node {
    X,
    Y,
    T,
    Random,

    Rule(usize),
    Number(f32),
    Boolean(bool),

    Sqrt(Unop),

    Add(Binop),
    Mult(Binop),
    Mod(Binop),
    Gt(Binop),

    Triple(Triple),
    If(If),
}

#[derive(Debug, Clone)]
pub struct Unop {
    pub value: Box<Node>,
}

#[derive(Debug, Clone)]
pub struct Binop {
    pub lhs: Box<Node>,
    pub rhs: Box<Node>,
}

#[derive(Debug, Clone)]
pub struct Triple {
    pub first: Box<Node>,
    pub second: Box<Node>,
    pub third: Box<Node>,
}

#[derive(Debug, Clone)]
pub struct If {
    pub cond: Box<Node>,
    pub then: Box<Node>,
    pub elze: Box<Node>,
}

// - Utils:

pub fn print_node(node: &Node) {
    match node {
        Node::X => print!("x"),
        Node::Y => print!("y"),
        Node::T => print!("t"),
        Node::Random => print!("random"),
        Node::Rule(id) => print!("rule({})", id),
        Node::Number(num) => print!("{:.3}", num),
        Node::Boolean(bool) => print!("{}", bool),
        Node::Sqrt(unop) => {
            print!("sqrt(");
            print_node(&unop.value);
            print!(")");
        }
        Node::Add(binop) => {
            print!("add(");
            print_node(&binop.lhs);
            print!(", ");
            print_node(&binop.rhs);
            print!(")");
        }
        Node::Mult(binop) => {
            print!("mult(");
            print_node(&binop.lhs);
            print!(", ");
            print_node(&binop.rhs);
            print!(")");
        }
        Node::Mod(binop) => {
            print!("mod(");
            print_node(&binop.lhs);
            print!(", ");
            print_node(&binop.rhs);
            print!(")");
        }
        Node::Gt(binop) => {
            print!("gt(");
            print_node(&binop.lhs);
            print!(", ");
            print_node(&binop.rhs);
            print!(")");
        }
        Node::Triple(triple) => {
            print!("(");
            print_node(&triple.first);
            print!(", ");
            print_node(&triple.second);
            print!(", ");
            print_node(&triple.third);
            print!(")");
        }
        Node::If(iff) => {
            print!("if ");
            print_node(&iff.cond);
            print!(" then ");
            print_node(&iff.then);
            print!(" else ");
            print_node(&iff.elze);
        }
    }
}
