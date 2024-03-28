use sea_orm::{Database, DatabaseConnection, DbErr};

pub async fn connect_to_db(connection_string: String) -> Result<DatabaseConnection, DbErr> {
    let database_connection = match Database::connect(connection_string).await {
        Ok(connection) => connection,
        Err(e) => {
            return Err(e);
        }
    };

    return Ok(database_connection);
}
