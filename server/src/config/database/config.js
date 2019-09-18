require("dotenv").config();
export const development = {
  use_env_variable: "DATABASE_URL",
  dialect: process.env.DB_DIALECT,
  operatorsAliases: false
};
export const test = {
  use_env_variable: "DATABASE_URL",
  dialect: process.env.DB_DIALECT,
  operatorsAliases: false
};
export const production = {
  use_env_variable: "DATABASE_URL",
  dialect: process.env.DB_DIALECT,
  operatorsAliases: false
};
