import { useFonts } from 'expo-font';

export default function CachedResources(): boolean {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_600SemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_700Bold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  return fontsLoaded;
}
