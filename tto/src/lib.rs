
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_tic_tac_toe_board() -> Vec<i32> {
    vec![
        0.into(), 0.into(), 0.into(),
        (-1).into(), (-1).into(), 0.into(),
        1.into(), 1.into(), 1.into(),
    ]
}