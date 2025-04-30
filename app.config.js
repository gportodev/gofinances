module.exports = {
  expo: {
    name: "gofinance",
    slug: "gofinance",
    version: "1.0.1",
    icon: "./assets/logo.png",
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.gofinance",
      buildNumber: "1.0.1",
    },
    android: {
      package: "com.gofinance",
      versionCode: 3,
    },
    plugins: ['expo-font', '@react-native-google-signin/google-signin'],
    scheme: "gofinance",
    extra: {
      eas: {
        "projectId": "86270e17-8f77-4832-a5fa-39dd5abea03d"
      }
    },
    newArchEnabled: true,
    jsEngine: 'hermes',
  },
};

