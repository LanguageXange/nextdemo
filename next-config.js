const dotenvLoad = require("dotenv-load");
const nextEnv = require("next-env");

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = withNextEnv();
