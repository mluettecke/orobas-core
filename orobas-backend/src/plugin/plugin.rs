use core::fmt;
use serde_derive::Deserialize;

#[derive(Debug)]
pub struct AvailablePlugin {
    pub name: String,
    pub identifier: String,
    pub version: String,
}

#[derive(Deserialize)]
pub struct PluginToml {
    pub general: PluginTomlGeneral,
}

#[derive(Deserialize)]
pub struct PluginTomlGeneral {
    pub name: String,
    pub identifier: String,
    pub version: String,
}

pub trait Plugin {
    fn name(&self) -> &'static str;
    fn identifier(&self) -> &'static str;
    fn version(&self) -> &'static str;
}

impl fmt::Debug for dyn Plugin {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.name())
    }
}
