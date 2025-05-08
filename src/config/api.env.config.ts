const config: { [key: string]: { [key: string]: string } } = {
  production: {
    baseUrl: process.env.BACKEND_PRD_URL!
  },
  development: {
    baseUrl: process.env.BACKEND_LOCAL_URL!
  }
};

const env = process.env.BACKEND_ENV || "development";

export default config[env];
