#![allow(unused)]

//! Macros module
//!
//! exports useful macros for constructing nodes in code.

macro_rules! node_x {
    () => {{
        Box::new(Node::X)
    }};
}

macro_rules! node_y {
    () => {{
        Box::new(Node::Y)
    }};
}

macro_rules! node_t {
    () => {{
        Box::new(Node::T)
    }};
}

macro_rules! node_random {
    () => {{
        Box::new(Node::Random)
    }};
}

macro_rules! node_rule {
    ($r:expr) => {{
        Box::new(Node::Rule($r))
    }};
}

macro_rules! node_number {
    ($f:expr) => {{
        Box::new(Node::Number($f))
    }};
}

macro_rules! node_boolean {
    ($b:expr) => {{
        Box::new(Node::Boolean($b))
    }};
}

macro_rules! node_sqrt {
    ($v:expr) => {{
        Box::new(Node::Sqrt(Unop { value: $v }))
    }};
}

macro_rules! node_add {
    ($a:expr, $b:expr) => {{
        Box::new(Node::Add(Binop { lhs: $a, rhs: $b }))
    }};
}

macro_rules! node_mult {
    ($a:expr, $b:expr) => {{
        Box::new(Node::Mult(Binop { lhs: $a, rhs: $b }))
    }};
}

macro_rules! node_mod {
    ($a:expr, $b:expr) => {{
        Box::new(Node::Mod(Binop { lhs: $a, rhs: $b }))
    }};
}

macro_rules! node_gt {
    ($a:expr, $b:expr) => {{
        Box::new(Node::Gt(Binop { lhs: $a, rhs: $b }))
    }};
}

macro_rules! node_triple {
    ($a:expr, $b:expr, $c:expr) => {{
        Box::new(Node::Triple(Triple {
            first: $a,
            second: $b,
            third: $c,
        }))
    }};
}

macro_rules! node_if {
    ($c:expr, $t:expr, $e:expr) => {{
        Box::new(Node::If(If {
            cond: $c,
            then: $t,
            elze: $e,
        }))
    }};
}

// - Expect macros

macro_rules! expect_number {
    ($n:expr) => {{
        if let Node::Number(value) = $n.as_ref() {
            value.clone()
        } else {
            panic!("Expected node to be number")
        }
    }};
}

macro_rules! expect_boolean {
    ($n:expr) => {{
        if let Node::Boolean(value) = $n.as_ref() {
            value.clone()
        } else {
            panic!("Expected node to be boolean")
        }
    }};
}

macro_rules! expect_triple {
    ($n:expr) => {{
        if let Node::Triple(triple) = $n.as_ref() {
            triple
        } else {
            panic!("Expected node to be triple")
        }
    }};
}

/// Clones node
macro_rules! node_clone {
    ($n:expr) => {
        Box::new($n.clone())
    };
}

pub(crate) use expect_boolean;
pub(crate) use expect_number;
pub(crate) use expect_triple;

pub(crate) use node_add;
pub(crate) use node_boolean;
pub(crate) use node_clone;
pub(crate) use node_gt;
pub(crate) use node_if;
pub(crate) use node_mod;
pub(crate) use node_mult;
pub(crate) use node_number;
pub(crate) use node_random;
pub(crate) use node_rule;
pub(crate) use node_sqrt;
pub(crate) use node_triple;

pub(crate) use node_t;
pub(crate) use node_x;
pub(crate) use node_y;
