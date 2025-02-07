import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What would like to do?</Text>

      {/* encryption */}
      <TouchableOpacity style={[styles.optionButton, styles.encryptButton]}>
        <Text style={styles.optionButtonText}>Encrypt Message</Text>
        <Text style={styles.optionDescription}>
          Secure your message with encryption
        </Text>
      </TouchableOpacity>

      {/* decryption */}
      <TouchableOpacity style={[styles.optionButton, styles.decryptButton]}>
        <Text style={styles.optionButtonText}>Decrypt Message</Text>
        <Text style={styles.optionDescription}>
          Decrypt and encrypted message
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 10,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  encryptButton: {
    backgroundColor: colors.secondary,
  },
  decryptButton: {
    backgroundColor: colors.medium,
  },
  optionButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionDescription: {
    color: colors.white,
    fontSize: 14,
    opacity: 0.9,
  },
});
