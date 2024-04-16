import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import SectionList from './components/SectionList';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      {/* <WelcomeScreen /> */}
      <SectionList />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
