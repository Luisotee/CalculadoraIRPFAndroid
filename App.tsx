import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppWrapper } from "./components/app-wrapper";
import { MainCard } from "./components/main-card";

export default function App() {
  return (
    <AppWrapper>
      <MainCard />
      <StatusBar style="auto" />
    </AppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
