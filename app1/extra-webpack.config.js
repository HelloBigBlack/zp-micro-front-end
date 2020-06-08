const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require("webpack-merge");

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);
  const singleSpaConfig = {
    output: {
      library: 'app1',
      libraryTarget: 'umd',
      filename: '[name].js',
      chunkFilename: '[id].[chunkhash].js'
    },
    externals: {
      ...angularWebpackConfig.externals,
      // rxjs: "rxjs",
      // '@angular/core': '@angular/core',
      // '@angular/common': 'angular/common/bundles/common.umd.js',
      // '@angular/compiler': 'angular/compiler/bundles/compiler.umd.js',
      // '@angular/platform-browser': 'angular/platform-browser/bundles/platform-browser.umd.js',
      // '@angular/platform-browser-dynamic': 'angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      // '@angular/http': 'angular/http/bundles/http.umd.js',
      // '@angular/router': 'angular/router/bundles/router.umd.js',
      // '@angular/forms': 'angular/forms/bundles/forms.umd.js',
    },
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
}