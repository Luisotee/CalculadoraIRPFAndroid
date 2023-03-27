import { Box, Center, Pressable, Text, useColorModeValue } from "native-base";
import { useState } from "react";
import { Animated, StatusBar, Dimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { MainCard } from "../main-card";
import { FormMonthly } from "./form-monthly";
import { FormYearly } from "./form-yearly";

const FirstRoute = () => <FormMonthly />;

const SecondRoute = () => <FormYearly />;

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function Example() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "Renda mensal",
    },
    {
      key: "second",
      title: "Renda anual",
    },
  ]);

  const renderTabBar = (props: {
    navigationState: { routes: any[] };
    position: {
      interpolate: (arg0: { inputRange: any; outputRange: any }) => any;
    };
  }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
}

export function FormsTab() {
  return <Example />;
}
