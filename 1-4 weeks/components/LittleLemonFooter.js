import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#EE9972',
    bottom: 0,
    width: '100%',
  },
  text: {
    padding: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
});
