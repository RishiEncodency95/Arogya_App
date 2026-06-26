module.exports = {
  // Force cache invalidation
  presets: [
    ['module:@react-native/babel-preset', { jsxImportSource: 'nativewind' }],
    'nativewind/babel',
  ],
  plugins: [
    ['module:react-native-dotenv', {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: true,
      verbose: false
    }],
    'react-native-reanimated/plugin'
  ],
};