import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import Calculator from "./src/screens/Calculator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const fontConfig = {
    Poppins: {
      400: {
        normal: "Poppins_400Regular",
      },
      500: {
        medium: "Poppins_500Medium",
      },
      600: {
        semiBold: "Poppins_600SemiBold",
      },
    },
  };

  const customeColor = {
    primary: {
      50: "#FFA0A0",
      100: "#FF5757",
      200: "#930707",
    },
  };

  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
    config: { initialColorMode: "light" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Calculator />
      </NativeBaseProvider>
    );
  }
}
