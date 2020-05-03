module.exports = {
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
  },
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
        regenerator: true,
      },
    ],
  ],
};
