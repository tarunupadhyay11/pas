const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
               '@primary-color':'#3751ff',
               '@layout-header-background': '#fff',
               '@layout-header-padding': '0 10px', 
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};