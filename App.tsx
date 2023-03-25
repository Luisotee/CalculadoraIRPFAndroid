import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Box,
  Center,
  CloseIcon,
  Collapse,
  HStack,
  IconButton,
  Link,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppWrapper } from "./components/app-wrapper";
import { FormsTab } from "./components/form";
import { FormMonthly } from "./components/form/form-monthly";
import { MainCard } from "./components/main-card";
import { ResultScreen } from "./components/result-screen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <AppWrapper>
      <AlertStart />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={FormsTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </AppWrapper>
  );
}

function AlertStart() {
  const [show, setShow] = useState(true);
  return (
    <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert maxW="400" status="info">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                  Este não é um aplicativo oficial!
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: "coolGray.600",
                }}
                onPress={() => setShow(false)}
              />
            </HStack>
            <Box
              pl="6"
              _dark={{
                _text: {
                  color: "coolGray.600",
                },
              }}
            >
              Para informações mais precisas simule no site oficial da receita
              federal em:
              <Link>https://www27.receita.fazenda.gov.br/simulador-irpf/</Link>
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
  );
}
