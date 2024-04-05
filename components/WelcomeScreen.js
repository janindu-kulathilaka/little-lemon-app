import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Welcome to Little Lemon</Text>

        <Text style={styles.paragraph}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: 'white',
    padding: 20,
  },
});
