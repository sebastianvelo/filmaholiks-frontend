const ENV = "production";

const config =
  ENV === "production"
    ? {
        baseUrl: "http://localhost:5000"
      }
    : {
        baseUrl: "http://localhost:5000"
      };

export default config;
