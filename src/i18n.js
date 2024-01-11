import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome!",
          description: {
            line1: "Welcome to my New Project Website",
            line2: "This project website is a Internationalisation website",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour bienvenue!",
          description: {
            line1: "Bienvenue sur mon nouveau site Web de projet",
            line2:
              "Ce site Web de projet est un site Web d'internationalisation",
          },
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते,आपका स्वागत है!",
          description: {
            line1: "मेरी नई परियोजना वेबसाइट में आपका स्वागत है",
            line2: "यह प्रोजेक्ट वेबसाइट एक अंतर्राष्ट्रीयकरण वेबसाइट है",
          },
        },
      },
      ar: {
        translation: {
          greeting: "مرحبا أهلا وسهلا!",
          description: {
            line1: "مرحبا بكم في موقع مشروعي الجديد",
            line2: "موقع المشروع هذا هو موقع التدويل",
          },
        },
      },
    },
  });
