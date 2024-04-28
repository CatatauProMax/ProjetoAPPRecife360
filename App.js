import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importe o arquivo de configuração do i18n
import AppNavigator from './navigation/AppNavigator'; // Supondo que você tenha um navegador de aplicativo
import { useWindowDimensions, View } from 'react-native';

const App = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <I18nextProvider i18n={i18n}>
      <View style={{ flex: 1, flexDirection: windowHeight > windowWidth ? 'column' : 'row' }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </I18nextProvider>
  );
};

export default App;
