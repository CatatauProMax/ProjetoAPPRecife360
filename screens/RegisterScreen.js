import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const RegisterScreen = () => {
  const { t } = useTranslation();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleCpfChange = (input) => {
    // Remove todos os caracteres não numéricos
    let cpfFormatted = input.replace(/\D/g, '');
    // Limita o tamanho máximo do CPF
    cpfFormatted = cpfFormatted.substring(0, 11);
    // Insere os pontos e traço no formato XXX.XXX.XXX-XX
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d)/, '$1.$2');
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d)/, '$1.$2');
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d{2})$/, '$1-$2');
    setCpf(cpfFormatted);
  };

  const handleRegister = () => {
    // Verifica se todos os campos estão preenchidos
    if (nome && cpf && idade && senha) {
      // Aqui você pode implementar a lógica para registrar o usuário
      // Por exemplo, enviar os dados para um servidor ou armazená-los localmente
      console.log('Nome:', nome);
      console.log('CPF:', cpf);
      console.log('Idade:', idade);
      console.log('Senha:', senha);

      // Redirecionar para a página do mapa e do about
      navigation.navigate('MainTabs');
    } else {
      // Mostrar mensagem de erro para o usuário
      alert(t('fillAllFields'));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t('name')}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder={t('cpf')}
        value={cpf}
        onChangeText={handleCpfChange}
        keyboardType="numeric"
        maxLength={14} // Limita o número máximo de caracteres do CPF
      />
      <TextInput
        style={styles.input}
        placeholder={t('age')}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title={t('register')} onPress={handleRegister} />
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
});

export default RegisterScreen;
