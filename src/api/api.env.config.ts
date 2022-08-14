const config: { [key: string]: { [key: string]: string } } = {
  production: {
    baseUrl: "https://us-central1-filmaholiks.cloudfunctions.net/default"
  },
  development: {
    baseUrl: "http://192.168.0.171:5001/filmaholiks/us-central1/default"
  }
};

const env = process.env.NODE_ENV || "development";

export default config[env];
