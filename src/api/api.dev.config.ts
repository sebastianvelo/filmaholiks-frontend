const ENV = "production";

const config =
  ENV === "production"
    ? {
        baseUrl: "http://localhost:5001/internetfilmdb/us-central1/default"
      }
    : {
        baseUrl: "http://localhost:5001/internetfilmdb/us-central1/default"
      };

export default config;
