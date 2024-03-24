extern crate axum;
extern crate orobas_backend;
use chrono::Utc;
use orobas_backend::plugin::Plugin;

struct HelloWorldPlugin;

impl Plugin for HelloWorldPlugin {
    fn name(&self) -> &'static str {
        let router: axum::Router = axum::Router::new();
        println!("{:?}", Utc::now());
        println!("{:?}", router);
        "Hello World Plugin"
    }
    fn identifier(&self) -> &'static str {
        "hello-world-plugin"
    }
    fn version(&self) -> &'static str {
        "0.0.1"
    }
}

#[no_mangle]
pub fn get_plugin() -> *mut dyn Plugin {
    Box::into_raw(Box::new(HelloWorldPlugin {}))
}
