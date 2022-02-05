const config: { [key: string]: { [key: string]: string } } = {
  production: {
    baseUrl: "https://us-central1-internetfilmdb.cloudfunctions.net/default"
  },
  development: {
    baseUrl: "http://localhost:5001/internetfilmdb/us-central1/default"
  }
};

const env = "production"; // process.env.NODE_ENV || "development";

export default config[env];
