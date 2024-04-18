import React from 'react';
import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

const loginPage = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [submitLogin, setSubmitLogin] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {!submitLogin && (
          <View style={styles.form}>
            <Text style={styles.formHeader}>Login to continue.</Text>
            <TextInput
              placeholder="email"
              value={email}
              onChangeText={onChangeEmail}
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="password"
              secureTextEntry={true}
              value={password}
              onChangeText={onChangePassword}
              style={styles.input}
            />
          </View>
        )}
        {submitLogin && (
          <View style={styles.form}>
            <Text style={styles.formHeader}>You are logged in!</Text>
          </View>
        )}

        <Pressable
          style={styles.button}
          onPress={() => setSubmitLogin((preState) => !preState)}
        >
          <Text style={styles.btnText}>
            {submitLogin ? 'Sign Out' : 'Login'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  form: {
    width: 100 + '%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formHeader: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 80 + '%',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#EE9972',
    borderRadius: 10,
    width: 40 + '%',
    margin: 10,
  },
  btnText: {
    color: '#333333',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default loginPage;
