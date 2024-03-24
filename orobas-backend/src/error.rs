pub type Result<T> = core::result::Result<T, Error>;

pub enum Error {
    ConfigMissingEnv(&'static str),
}
