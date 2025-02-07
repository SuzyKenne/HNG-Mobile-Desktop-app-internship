import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  GestureHandlerRootView,
  TextInput,
} from 'react-native-gesture-handler';
import colors from '../config/colors';
import { encrypt } from '../config/encryptionUtils';

export default function EncryptScreen() {
  const [plaintext, setPlaintext] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleEncrypt = () => {
    if (!plaintext || !secretKey) {
      alert('Please enter both plaintext and secret key.');
      return;
    }

    const encrypted = encrypt(plaintext, secretKey);
    setEncryptedText(encrypted);
  };
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>EncryptScreen</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter plaintext"
          value={plaintext}
          onChangeText={setPlaintext}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your secret key"
          value={secretKey}
          onChangeText={setSecretKey}
          secureTextEntry
        />
        <Button title="Encrypt" onPress={handleEncrypt} color="#4caf50" />
        {encryptedText ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Encrypted text:</Text>
            <Text style={styles.resultText}>{encryptedText}</Text>
          </View>
        ) : null}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 100,
    borderColor: colors.text,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 5,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 14,
    color: colors.medium,
  },
});
