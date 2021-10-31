const ENV = "production";

const config =
  ENV === "production"
    ? {
        baseUrl: "https://us-central1-internetfilmdb.cloudfunctions.net/default"
      }
    : {
        baseUrl: "http://localhost:5001/internetfilmdb/us-central1/default"
      };

export default config;
