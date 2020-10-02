import * as dotenv from 'dotenv';
import ProcessEnv = NodeJS.ProcessEnv;

dotenv.config();
const env: ProcessEnv = process.env;

export const    environment: any = {
  
  appCors: env.APP_CORS === 'true',
  applicationName: env.APP_NAME,

  mongodb: env.MONGODB_URL,
  port: env.APP_PORT,
  
};