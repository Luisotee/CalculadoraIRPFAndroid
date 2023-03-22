import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider } from "native-base";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const AppWrapper = ({ children }: Props) => (
  <NavigationContainer>
    <NativeBaseProvider>
      <Box
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        flex={1}
      >
        {children}
      </Box>
    </NativeBaseProvider>
  </NavigationContainer>
);
