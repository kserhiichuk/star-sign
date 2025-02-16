import dotenv from 'dotenv';

dotenv.config();

interface Config {
  postgresUri: string;
  secretKey: string;
  cloudinary: {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
  };
  astronomy: {
    apiId: string;
    apiSecret: string;
  };
  gemini: {
    apiKey: string;
  };
}

function requireEnv(variable: string | undefined, name: string): string {
  if (!variable) {
    throw new Error(`${name} is required but not defined in the environment variables`);
  }
  return variable;
}

const config: Config = {
  postgresUri: requireEnv(process.env.POSTGRES_URI, 'POSTGRES_URI'),
  secretKey: requireEnv(process.env.SECRET_KEY, 'SECRET_KEY'),
  cloudinary: {
    cloudName: requireEnv(process.env.CLOUDINARY_CLOUD_NAME, 'CLOUDINARY_CLOUD_NAME'),
    apiKey: requireEnv(process.env.CLOUDINARY_API_KEY, 'CLOUDINARY_API_KEY'),
    apiSecret: requireEnv(process.env.CLOUDINARY_API_SECRET, 'CLOUDINARY_API_SECRET'),
  },
  astronomy: {
    apiId: requireEnv(process.env.ASTRONOMY_API_ID, 'ASTRONOMY_API_ID'),
    apiSecret: requireEnv(process.env.ASTRONOMY_API_SECRET, 'ASTRONOMY_API_SECRET'),
  },
  gemini: {
    apiKey: requireEnv(process.env.GEMINI_API_KEY, 'GEMINI_API_KEY'),
  },
};

export default config;
