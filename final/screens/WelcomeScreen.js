import * as React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon logo"
      />
      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.btnText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 250,
  },
  btn: {
    backgroundColor: "#3E524B",
    color: "#ffffff",
    padding: 8,
    borderRadius: 5,
    margin: 20,
    width: 80 + "%",
    position: "absolute",
    bottom: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
});
