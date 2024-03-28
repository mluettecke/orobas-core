use orobas_backend::database::connect_to_db;
#[warn(dead_code)]
use orobas_backend::{app::App, config::load_config, plugin::PluginManager};
use sea_orm::DatabaseConnection;
use std::{net::SocketAddr, path::PathBuf};

//type PluginCreate = unsafe fn() -> *mut dyn Plugin;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt().with_target(false).init();

    // load the config
    let config = load_config();

    // init plugin manager
    let mut plugin_manager = PluginManager::new(PathBuf::from(config.plugins_folder.as_str()));
    plugin_manager.discover_plugins();

    let database_connection = match connect_to_db(config.db_url()).await {
        Ok(connection) => {
            tracing::info!("Successfully established db connection");
            connection
        }
        Err(e) => {
            tracing::error!("Database connection failed with error: {}", e);
            std::process::exit(1);
        }
    };

    let app = App::new();
    let address = SocketAddr::from(([0, 0, 0, 0], config.port));
    let listener = tokio::net::TcpListener::bind(address).await.unwrap();
    tracing::info!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app.router).await.unwrap();
}
