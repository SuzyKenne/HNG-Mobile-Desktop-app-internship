import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '../config/colors';
import { decrypt } from '../config/encryptionUtils';

export default function DecryptScreen() {
  const [decryptedText, setDecryptedText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [encryptedText, SetEncryptedText] = useState('');
  const handleDecrypt = () => {
    if (!encryptedText || !secretKey) {
      alert('Please enter both encrypted text and secret key.');
    }

    const decrypted = decrypt(encryptedText, secretKey);
    setDecryptedText(decrypted);
  };

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Decrypt your message.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter encrypted text"
          value={encryptedText}
          onChangeText={SetEncryptedText}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your secret key"
          value={secretKey}
          onChangeText={setSecretKey}
          secureTextEntry
        />
        <Button title="Decrypt" onPress={handleDecrypt} color="#2196F3" />
        {decryptedText ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Decrypted text:</Text>
            <Text style={styles.resultText}>{decryptedText}</Text>
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
    color: colors.decrypt,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 14,
    color: colors.medium,
  },
});
