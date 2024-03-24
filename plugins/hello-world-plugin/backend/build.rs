fn main() {
    println!("cargo:rerun-if-changed=build.rs");
    println!("cargo:rustc-link-search=../../orobas-backend/target/debug");
    println!("cargo:rustc-link-search=../../orobas-backend/target/debug/deps");
    println!("cargo:rustc-link-lib=orobas_backend");
}
