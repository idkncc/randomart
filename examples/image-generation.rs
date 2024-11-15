use randomart::prelude::*;

fn create_image(f: &Node, width: u32, height: u32) {
    // Create a new ImgBuf with width: imgx and height: imgy
    let mut imgbuf = image::ImageBuffer::new(width, height);

    let bar = indicatif::ProgressBar::new((width * height) as u64);
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

    let (grammar, entry) = generate_grammar();

    println!("Grammar:");
    print_grammar(&grammar);

    let Some(f) = gen_rule(&grammar, entry, 40) else {
        panic!("Couldn't generate grammar")
    };

    println!("Generating image...");

    create_image(&f, 400, 400);
    // println!("{}", compile_fragment_expression(&f))
}
