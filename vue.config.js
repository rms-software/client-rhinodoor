module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/client-rhinodoor/' : '/',
    devServer: {
      disableHostCheck: true
    }
}