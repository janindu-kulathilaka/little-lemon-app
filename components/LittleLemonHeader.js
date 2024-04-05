import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#EE9972',
  },
  text: {
    paddingTop: 45,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
