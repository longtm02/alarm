import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";
import { NativeBaseProvider, extendTheme } from "native-base";
import App from "./App";
import { themeConfig } from "./constants/themeConfig";
import configureStore from "./store";

/*------------------ extend the theme -------------------- */
export const theme = extendTheme({ themeConfig });

/*------------------ config store redux -------------------- */
const store = configureStore();

const Container = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
};

registerRootComponent(Container);
