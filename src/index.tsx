import { registerRootComponent } from "expo";
import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import App from "./App";
import { themeConfig } from "./constants/themeConfig";

// extend the theme
export const theme = extendTheme({ themeConfig });

const Container = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
};

registerRootComponent(Container);
