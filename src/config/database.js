require('dotenv').config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT || 'postgres',
  // dialect: 'sqlite',
  storage: './__tests_/database.sqlite',
  operatorAliases: false,
  logging: false,
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}