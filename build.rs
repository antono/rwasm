use std::fs;

fn main() {
    fs::copy(
        String::from("./static/index.html"),
        String::from("./dist/index.html"),
    ).expect("Cannot copy index.html to build dir");
}
