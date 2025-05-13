module.exports = {
  expo: {
    name: "gofinance",
    slug: "gofinance",
    version: "1.0.4",
    icon: "./assets/icon.png",
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#5636D3',
    },
    updates: {
      url: "https://u.expo.dev/86270e17-8f77-4832-a5fa-39dd5abea03d"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.gofinance",
      buildNumber: "1.0.4",
      runtimeVersion: {
        policy: "appVersion"
      }
    },
    android: {
      package: "com.gofinance",
      versionCode: 6,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#5636D3',
      },
      runtimeVersion: "1.0.4"
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

