import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import Acceuil from "./pages/acceuil/Acceuil.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header style={styles.navbar}>
          <Appbar.Action icon="menu" onPress={() => {}} color="white" />
          <Text style={styles.title}><Appbar.Content title="Mademoiselle passepoil" color="white" /></Text>
          <Appbar.Action icon="cart" onPress={() => {}} color="white" />
        </Appbar.Header>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Acceuil />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  navbar:{
    backgroundColor: "#720B21",
  },
});
