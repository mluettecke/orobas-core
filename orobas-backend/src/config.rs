use core::fmt;
use std::error::Error;
use std::path::Path;

use clap::Parser;

#[derive(clap::Parser, Debug)]
pub struct Config {
    #[clap(long, env, default_value = "3000")]
    pub port: u16,

    #[clap(long, env, value_parser = validate_plugin_folder)]
    pub plugins_folder: String,

    #[clap(long, env)]
    pub postgres_db: String,

    #[clap(long, env)]
    pub postgres_host: String,

    #[clap(long, env)]
    pub postgres_user: String,

    #[clap(long, env)]
    pub postgres_password: String,
}

impl Config {
    pub fn db_url(&self) -> String {
        return format!(
            "postgres://{}:{}@{}:5432/{}",
            self.postgres_user, self.postgres_password, self.postgres_host, self.postgres_db
        );
    }
}

#[derive(Debug)]
pub enum PluginFolderError {
    PathNotAvailableError,
    PathNotADirectoryError,
}

impl Error for PluginFolderError {}

impl fmt::Display for PluginFolderError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            PluginFolderError::PathNotADirectoryError => write!(f, "The path is not a directory"),
            PluginFolderError::PathNotAvailableError => write!(f, "The path is not available"),
        }
    }
}

pub fn validate_plugin_folder(file_path: &str) -> Result<String, PluginFolderError> {
    let path = Path::new(file_path);
    if !path.exists() {
        return Err(PluginFolderError::PathNotAvailableError);
    }
    if !path.is_dir() {
        return Err(PluginFolderError::PathNotADirectoryError);
    }
    Ok(file_path.to_string())
}

pub fn load_dotenv() -> Result<(), dotenvy::Error> {
    match dotenvy::dotenv() {
        Ok(_) => Ok(()),
        Err(e) => return Err(e),
    }
}

pub fn load_config() -> Config {
    // check if env
    load_dotenv().unwrap();
    return Config::parse();
}
