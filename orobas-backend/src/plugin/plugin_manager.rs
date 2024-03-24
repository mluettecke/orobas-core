use core::fmt;
use std::{collections::HashMap, fs, path::PathBuf};

use super::plugin::{AvailablePlugin, Plugin, PluginToml};

#[derive(Debug)]
pub enum PluginErrors {
    MissingFrontendFolder,
    MissingBackendFolder,
    MissingPluginToml,
    InvalidPluginToml(String),
}

impl fmt::Display for PluginErrors {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            PluginErrors::MissingFrontendFolder => write!(f, "The frontend folder is missing"),
            PluginErrors::MissingBackendFolder => write!(f, "The backend folder is missing"),
            PluginErrors::MissingPluginToml => write!(f, "No plugin.toml available"),
            PluginErrors::InvalidPluginToml(message) => write!(f, "{}", message),
        }
    }
}

pub struct PluginManager {
    plugins_folder: PathBuf,
    pub plugins: HashMap<&'static str, Box<dyn Plugin>>,
    pub available_plugins: Vec<AvailablePlugin>,
}

impl PluginManager {
    pub fn new(plugins_folder: PathBuf) -> PluginManager {
        PluginManager {
            plugins_folder: plugins_folder,
            plugins: HashMap::new(),
            available_plugins: Vec::new(),
        }
    }
    pub fn discover_plugins(&mut self) {
        for folder in fs::read_dir(&self.plugins_folder).expect("Failed to read directory") {
            if let Ok(folder) = folder {
                match self.verify_plugin(PathBuf::from(folder.path())) {
                    Ok(available_plugin) => self.available_plugins.push(available_plugin),
                    Err(e) => {
                        tracing::error!(
                            "Error occured when verifying plugin-folder {:?}: {}",
                            folder.file_name(),
                            e,
                        );
                    }
                }
            }
        }
    }
    pub fn verify_plugin(&mut self, plugin_path: PathBuf) -> Result<AvailablePlugin, PluginErrors> {
        let frontend_folder = plugin_path.join("frontend");
        let backend_folder = plugin_path.join("backend");
        let plugin_toml = plugin_path.join("plugin.toml");

        if !frontend_folder.exists() || !frontend_folder.is_dir() {
            return Err(PluginErrors::MissingFrontendFolder);
        }
        if !backend_folder.exists() || !backend_folder.is_dir() {
            return Err(PluginErrors::MissingBackendFolder);
        }
        if !plugin_toml.exists() {
            return Err(PluginErrors::MissingPluginToml);
        }
        self.read_plugin_toml(plugin_toml)
    }
    pub fn read_plugin_toml(
        &mut self,
        toml_path: PathBuf,
    ) -> Result<AvailablePlugin, PluginErrors> {
        let toml_file = match fs::read_to_string(toml_path) {
            Ok(c) => c,
            Err(_) => {
                return Err(PluginErrors::InvalidPluginToml(
                    "Error when reading plugin.toml".to_string(),
                ))
            }
        };
        let toml_contents: PluginToml = match toml::from_str(&toml_file) {
            Ok(d) => d,
            Err(e) => {
                return Err(PluginErrors::InvalidPluginToml(format!(
                    "Error when reading plugin.toml {}",
                    e.message()
                )));
            }
        };
        Ok(AvailablePlugin {
            name: toml_contents.general.name.to_string(),
            version: toml_contents.general.version.to_string(),
            identifier: toml_contents.general.identifier.to_string(),
        })
    }
}
