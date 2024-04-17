import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const InputTextFunction = () => {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.text}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={onChangeFirstName}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={onChangeLastName}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          onChangeText={onChangeMessage}
          value={message}
          multiline={true}
        />
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 80 + '%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default InputTextFunction;
