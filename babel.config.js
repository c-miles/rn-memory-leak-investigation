module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@react-native/babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {},
        extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};