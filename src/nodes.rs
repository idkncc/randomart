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

pub struct Unop {
    pub value: Box<Node>,
}

pub struct Binop {
    pub lhs: Box<Node>,
    pub rhs: Box<Node>,
}

pub struct Triple {
    pub first: Box<Node>,
    pub second: Box<Node>,
    pub third: Box<Node>,
}

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

// - Macros:
#[macro_export]
macro_rules! node_x {
    () => {{
        Box::new(nodes::Node::X)
    }};
}

#[macro_export]
macro_rules! node_y {
    () => {{
        Box::new(nodes::Node::Y)
    }};
}

#[macro_export]
macro_rules! node_t {
    () => {{
        Box::new(nodes::Node::T)
    }};
}

#[macro_export]
macro_rules! node_random {
    () => {{
        Box::new(nodes::Node::Random)
    }};
}

#[macro_export]
macro_rules! node_rule {
    ($r:expr) => {{
        Box::new(nodes::Node::Rule($r))
    }};
}

#[macro_export]
macro_rules! node_number {
    ($f:expr) => {{
        Box::new(nodes::Node::Number($f))
    }};
}

#[macro_export]
macro_rules! node_boolean {
    ($b:expr) => {{
        Box::new(nodes::Node::Boolean($b))
    }};
}

#[macro_export]
macro_rules! node_sqrt {
    ($v:expr) => {{
        Box::new(nodes::Node::Sqrt(nodes::Unop { value: $v }))
    }};
}

#[macro_export]
macro_rules! node_add {
    ($a:expr, $b:expr) => {{
        Box::new(nodes::Node::Add(nodes::Binop { lhs: $a, rhs: $b }))
    }};
}

#[macro_export]
macro_rules! node_mult {
    ($a:expr, $b:expr) => {{
        Box::new(nodes::Node::Mult(nodes::Binop { lhs: $a, rhs: $b }))
    }};
}

#[macro_export]
macro_rules! node_mod {
    ($a:expr, $b:expr) => {{
        Box::new(nodes::Node::Mod(nodes::Binop { lhs: $a, rhs: $b }))
    }};
}

#[macro_export]
macro_rules! node_gt {
    ($a:expr, $b:expr) => {{
        Box::new(nodes::Node::Gt(nodes::Binop { lhs: $a, rhs: $b }))
    }};
}

#[macro_export]
macro_rules! node_triple {
    ($a:expr, $b:expr, $c:expr) => {{
        Box::new(nodes::Node::Triple(nodes::Triple {
            first: $a,
            second: $b,
            third: $c,
        }))
    }};
}
