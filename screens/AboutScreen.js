import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const AboutScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('aboutTitle')}</Text>
      <Text style={styles.text}>{t('aboutDescription')}</Text>
      <Text style={styles.heading}>{t('team')}</Text>
      <View style={styles.members}>
        <Text style={styles.member}>Fábio Henrique S. Marques - 01551939</Text>
        <Text style={styles.member}>Gabriel Henrique dos Santos Oliveira - 01607719</Text>
        <Text style={styles.member}>Cauã Ferreira - 01597629</Text>
        <Text style={styles.member}>Danilo Leite - 01608104</Text>
        <Text style={styles.member}>Geraldo Neto - 01600900</Text>
        <Text style={styles.member}>Thiago José Falcão de Freitas - 01597267</Text>
        <Text style={styles.member}>Hugo Duarte - 01635828</Text>
        <Text style={styles.member}>Caio Gomes Ferrão D'Avila - 01600639</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  text: {
    marginBottom: 20,
    textAlign: 'left',
  },
  members: {
    marginLeft: 20,
  },
  member: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
  },
});

export default AboutScreen;
