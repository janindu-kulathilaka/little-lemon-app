import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#ffffff' }
          : { backgroundColor: '#333333' },
      ]}
    >
      <ScrollView>
        <View style={styles.containerLogo}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel="Little Lemon logo"
          />
          <Text
            style={[
              styles.logoText,
              colorScheme === 'light' ? { color: 'black' } : { color: 'white' },
            ]}
          >
            Little Lemon
          </Text>
        </View>

        <Text
          style={[
            styles.paragraph,
            colorScheme === 'light' ? { color: 'black' } : { color: 'white' },
          ]}
        >
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
  containerLogo: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: 'white',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
