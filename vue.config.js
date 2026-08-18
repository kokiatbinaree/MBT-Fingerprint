module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Mind Booster",
        appId: "com.ics.mindbooster",
        mac: {
          icon: 'src/assets/icons-app/logo-mb.icns'
        },
        win: {
          icon: 'src/assets/icons-app/logo-mb.ico',
          target: [
            {
              target: 'portable',
              arch: ['x64']
            }
          ]
        }
      }
    }
  },
  productionSourceMap: false,
}