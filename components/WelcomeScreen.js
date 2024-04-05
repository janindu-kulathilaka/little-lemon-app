import { View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View
      style={{
        flex: 0.7,
        backgroundColor: '#495E57',
        alignItems: 'center',
        marginTop: 40,
      }}
    >
      <ScrollView>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Welcome to Little Lemon
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            marginTop: 10,
            color: 'white',
            padding: 20,
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!.
        </Text>
      </ScrollView>
    </View>
  );
}
