import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isPT, setIsPT] = useState(false);

  const toggleLanguage = () => {
    const newIsPT = !isPT;
    setIsPT(newIsPT);
    i18n.changeLanguage(newIsPT ? 'pt' : 'en');
  };

  return (
    <TouchableOpacity style={styles.toggleContainer} onPress={toggleLanguage}>
      <Text style={styles.languageText}>EN</Text>
      <Text style={styles.languageText}>PT</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('login')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>{t('register')}</Text>
        </TouchableOpacity>
      </View>
      <LanguageToggle />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribui os botões igualmente no espaço disponível
  },
  button: {
    backgroundColor: '#007bff',
    width: screenWidth * 0.4, // Define a largura com base na largura da tela
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  languageText: {
    marginHorizontal: 10,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
