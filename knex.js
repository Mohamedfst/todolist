import 'dotenv/config';
const environment = process.env.ENVIRONMENT || 'development'
import configuration from './knexfile.js';
const config = configuration[environment];
export default ('knex')(config);