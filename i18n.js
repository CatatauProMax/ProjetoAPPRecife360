import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';

// Importe os arquivos de tradução
import translationEN from './locales/en.json';
import translationPT from './locales/pt.json';

// Configuração do i18next
i18n
  .use(initReactI18next) // Adiciona o plugin React-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // Traduções em inglês
      },
      pt: {
        translation: translationPT, // Traduções em português
      },
    },
    lng: 'en', // Define o idioma padrão
    fallbackLng: 'en', // Idioma de fallback caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false, // Evita a escapagem automática de valores
    },
  });

export default i18n;
