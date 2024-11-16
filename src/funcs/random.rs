#[cfg(not(target_arch = "wasm32"))]
pub fn get_random() -> f32 {
    return rand::random();
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::wasm_bindgen;

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = Math, js_name = "random")]
    fn mathjs_random() -> f32;
}

#[cfg(target_arch = "wasm32")]
pub fn get_random() -> f32 {
    return mathjs_random();
}
