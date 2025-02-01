import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const links = [
    {
      name: 'GitHub Repository',
      url: 'https://github.com/SuzyKenne/HNG-Mobile-Desktop-app-internship.git',
    },
    {
      name: 'HNG React-native Developers',
      url: 'https://hng.tech/hire/react-native-developers',
    },
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HNG Assignment Stage-0</Text>
      {links.map((link) => (
        <TouchableOpacity
          key={link.name}
          style={styles.button}
          onPress={() => handlePress(link.url)}
        >
          <Text style={styles.buttonText}>{link.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
