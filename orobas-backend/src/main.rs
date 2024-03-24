#[warn(dead_code)]
use orobas_backend::{app::App, config::load_config, plugin::PluginManager};
use std::{net::SocketAddr, path::PathBuf};

//type PluginCreate = unsafe fn() -> *mut dyn Plugin;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt().with_target(false).init();

    let config = load_config();

    let mut plugin_manager = PluginManager::new(PathBuf::from(config.plugins_folder.as_str()));
    plugin_manager.discover_plugins();

    let app = App::new();
    let address = SocketAddr::from(([0, 0, 0, 0], config.port));
    let listener = tokio::net::TcpListener::bind(address).await.unwrap();
    tracing::info!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app.router).await.unwrap();
}
