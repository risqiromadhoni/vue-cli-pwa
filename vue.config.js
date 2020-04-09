const path = require("path");

module.exports = {
  pwa: {
    name: "FoodPedia Pesanduluan",
    manifestOptions: {
      background_color: "#4A4A4A"
    }
  },

  pluginOptions: {
    moment: {
      locales: ["en", "id"]
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    }
  }
};
