// Update with your config settings.
const localPg = {
  host: "localhost",
  database: "hobbits",
  user: "student",
  password: "hired"
};
const productionDbConnection = process.env.DATABASE_URL || localPg;
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/fav-animals.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: productionDbConnection, // could be an object or a string
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
