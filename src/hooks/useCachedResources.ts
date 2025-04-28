import { useFonts } from 'expo-font';

export default function CachedResources(): boolean {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_500Medium: require('../assets/fonts/Poppins-Medium.ttf'),
    Poppins_700Bold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  return fontsLoaded;
}
