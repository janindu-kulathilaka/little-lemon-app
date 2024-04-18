import * as React from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState("");

  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon logo Grey"
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={"email"}
        keyboardType={"email-address"}
      />
      <Pressable
        style={validateEmail(email) ? styles.btn : styles.btnDisabled}
        onPress={() =>
          alert.apply(null, ["Thanks for subscribing,\nstay tuned!"])
        }
        disabled={!validateEmail(email)}
      >
        <Text style={styles.btnText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
    width: 100,
    height: 150,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#3E524B",
    color: "#ffffff",
    padding: 8,
    borderRadius: 5,
    margin: 10,
    width: 80 + "%",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    width: 80 + "%",
    borderRadius: 5,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  btnDisabled: {
    backgroundColor: "#3E524B",
    color: "#ffffff",
    padding: 8,
    borderRadius: 5,
    margin: 10,
    width: 80 + "%",
    opacity: 0.5,
  },
});
