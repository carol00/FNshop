module.exports = {
  pages: {
      index: {
        // entry for the page
        entry: 'src/main.js',
        title: 'FN Shop',
      },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/FNshop/'
    : '/'
  }