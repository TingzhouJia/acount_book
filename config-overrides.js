const { override, fixBabelImports } = require("customize-cra");
const webpack = require("webpack");

module.exports = function override(config, env) {
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/^\.\/locale$/, (context) => {
        if (!/\/moment\//.test(context.context)) {
          return;
        }
        // context needs to be modified in place
        Object.assign(context, {
          // include locales
          regExp: /^\.\/(fr|en)/,
          // point to the locale data folder relative to moment's src/lib/locale
          request: "../../locale",
        });
      })
    );
    return config;
  };

// module.exports = override(
//   fixMomentJs,
//   fixBabelImports("import", {
//     libraryName: "antd",
//     libraryDirectory: "es",
//     style: "css",
//   })
// );