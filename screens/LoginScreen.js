import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const LoginScreen = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    // Se o login for bem-sucedido, redirecionar para a página do mapa
    navigation.navigate('MainTabs');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t('username')}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={t('login')} onPress={handleLogin} />
      <Text style={styles.dontHaveAccount}>{t('dontHaveAccount')}</Text>
      <Button title={t('register')} onPress={handleRegister} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  dontHaveAccount: {
    marginVertical: 10,
  },
});

export default LoginScreen;
