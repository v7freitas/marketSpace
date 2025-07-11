import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";
import { StatusBar, View } from "react-native";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? (
        <Center flex={1} bg="$gray600">
          <Text color="$gray100">Home</Text>
        </Center>
      ) : (
        <View />
      )}
    </GluestackUIProvider>
  );
}
