/// Color structure
///
/// `r`, `g`, `b` fields are in range [0; 1]
#[derive(Debug, Clone)]
pub struct Color {
    pub r: f32,
    pub g: f32,
    pub b: f32,
}

impl Color {
    pub fn new(r: f32, g: f32, b: f32) -> Self {
        Self { r, g, b }
    }

    pub fn to_u8(&mut self) -> [u8; 3] {
        [
            ((self.r + 1.0) / 2.0 * 255.0) as u8,
            ((self.g + 1.0) / 2.0 * 255.0) as u8,
            ((self.b + 1.0) / 2.0 * 255.0) as u8,
        ]
    }
}
