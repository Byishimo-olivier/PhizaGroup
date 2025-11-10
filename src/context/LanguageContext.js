import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      logistics: 'Logistics',
      apartments: 'Apartments',
      wines: 'Wines',
      partners: 'Partners',
      contact: 'Contact'
    },
    home: {
      title: 'PhizerGroup',
      subtitle: 'Excellence in Logistics, Apartments & Wines',
      mission: 'Our Mission',
      missionText: 'To provide exceptional services in logistics, real estate, and wine distribution across Rwanda and East Africa.',
      vision: 'Our Vision',
      visionText: 'To be the leading multi-service company in Rwanda, known for quality, reliability, and innovation.',
      learnMore: 'Learn More'
    },
    about: {
      title: 'About PhizerGroup',
      story: 'Our Story',
      storyText: 'PhizerGroup was founded with a vision to provide comprehensive services in logistics, real estate, and wine distribution. We have grown to become a trusted partner for businesses and individuals across Rwanda.',
      values: 'Our Values',
      excellence: 'Excellence',
      reliability: 'Reliability',
      innovation: 'Innovation',
      integrity: 'Integrity'
    },
    logistics: {
      title: 'Phizer Logistics & Transport',
      subtitle: 'Reliable logistics solutions for your business',
      import: 'Import Services',
      export: 'Export Services',
      transit: 'Transit Services',
      quote: 'Request Transport Quote'
    },
    apartments: {
      title: 'Phizer Apartments',
      subtitle: 'Quality living spaces in prime locations',
      booking: 'Book Now',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      checkIn: 'Check-in Date',
      duration: 'Duration (months)',
      submit: 'Submit Booking'
    },
    wines: {
      title: 'Phizer Wines Operator',
      subtitle: 'Premium wine selection and distribution',
      products: 'Our Wine Products',
      distribution: 'Distribution Network'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      phone: 'Phone',
      address: 'Address',
      followUs: 'Follow Us'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      logistics: 'Logistique',
      apartments: 'Appartements',
      wines: 'Vins',
      partners: 'Partenaires',
      contact: 'Contact'
    },
    home: {
      title: 'PhizerGroup',
      subtitle: 'Excellence en Logistique, Appartements et Vins',
      mission: 'Notre Mission',
      missionText: 'Fournir des services exceptionnels en logistique, immobilier et distribution de vins à travers le Rwanda et l\'Afrique de l\'Est.',
      vision: 'Notre Vision',
      visionText: 'Être la première entreprise multi-services au Rwanda, reconnue pour la qualité, la fiabilité et l\'innovation.',
      learnMore: 'En Savoir Plus'
    },
    about: {
      title: 'À Propos de PhizerGroup',
      story: 'Notre Histoire',
      storyText: 'PhizerGroup a été fondée avec la vision de fournir des services complets en logistique, immobilier et distribution de vins. Nous sommes devenus un partenaire de confiance pour les entreprises et particuliers à travers le Rwanda.',
      values: 'Nos Valeurs',
      excellence: 'Excellence',
      reliability: 'Fiabilité',
      innovation: 'Innovation',
      integrity: 'Intégrité'
    },
    logistics: {
      title: 'Phizer Logistique & Transport',
      subtitle: 'Solutions logistiques fiables pour votre entreprise',
      import: 'Services d\'Import',
      export: 'Services d\'Export',
      transit: 'Services de Transit',
      quote: 'Demander un Devis Transport'
    },
    apartments: {
      title: 'Phizer Appartements',
      subtitle: 'Espaces de vie de qualité dans des emplacements privilégiés',
      booking: 'Réserver Maintenant',
      name: 'Nom Complet',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone',
      checkIn: 'Date d\'Arrivée',
      duration: 'Durée (mois)',
      submit: 'Soumettre la Réservation'
    },
    wines: {
      title: 'Phizer Opérateur de Vins',
      subtitle: 'Sélection et distribution de vins premium',
      products: 'Nos Produits de Vin',
      distribution: 'Réseau de Distribution'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Entrez en contact avec notre équipe',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le Message',
      phone: 'Téléphone',
      address: 'Adresse',
      followUs: 'Suivez-Nous'
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Abo Turi',
      services: 'Serivisi',
      logistics: 'Logistique',
      apartments: 'Amazu',
      wines: 'Divayi',
      partners: 'Abafatanyabikorwa',
      contact: 'Dutubabarire'
    },
    home: {
      title: 'PhizerGroup',
      subtitle: 'Ubuhanga mu Logistique, Amazu na Divayi',
      mission: 'Intego Yacu',
      missionText: 'Gutanga serivisi zidasanzwe mu logistique, imitungo itimukanwa na divayi mu Rwanda no mu Burasirazuba bwa Afrika.',
      vision: 'Icyerekezo Cyacu',
      visionText: 'Kuba ikigo cy\'ibanze mu Rwanda mu gutanga serivisi nyinshi, kizwi ku buhanga, kwizera n\'ubushakashatsi.',
      learnMore: 'Menya Byinshi'
    },
    about: {
      title: 'Abo Turi PhizerGroup',
      story: 'Inkuru Yacu',
      storyText: 'PhizerGroup yashinzwe ifite icyerekezo cyo gutanga serivisi zuzuye mu logistique, imitungo itimukanwa na divayi. Twahindutse abafatanyabikorwa bizwi n\'abikorera no mu muntu ku giti cye mu Rwanda.',
      values: 'Indangagaciro Zacu',
      excellence: 'Ubuhanga',
      reliability: 'Kwizera',
      innovation: 'Ubushakashatsi',
      integrity: 'Ubunyangamugayo'
    },
    logistics: {
      title: 'Phizer Logistics & Transport',
      subtitle: 'Ibisubizo by\'ubwikorezi bwizewe bw\'ubucuruzi bwawe',
      import: 'Serivisi zo Kuzana',
      export: 'Serivisi zo Kohereza',
      transit: 'Serivisi zo Kwnyura',
      quote: 'Saba Igiciro cy\'Ubwikorezi'
    },
    apartments: {
      title: 'Phizer Amazu',
      subtitle: 'Aho gutura neza mu bice byiza',
      booking: 'Tanga Ubwiyunge',
      name: 'Amazina Yuzuye',
      email: 'Aderesi ya Email',
      phone: 'Numero ya Telefoni',
      checkIn: 'Itariki yo Kwinjira',
      duration: 'Igihe (amezi)',
      submit: 'Kohereza Ubwiyunge'
    },
    wines: {
      title: 'Phizer Divayi Operator',
      subtitle: 'Guhitamo divayi nziza no kuzigurisha',
      products: 'Ibicuruzwa byacu bya Divayi',
      distribution: 'Urusobe rwo Kugurisha'
    },
    contact: {
      title: 'Dutubabarire',
      subtitle: 'Muvugane n\'ikipe yacu',
      name: 'Izina',
      email: 'Email',
      message: 'Ubutumwa',
      send: 'Kohereza Ubutumwa',
      phone: 'Telefoni',
      address: 'Aderesi',
      followUs: 'Dukurikire'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return path; // Return the key if translation not found
      }
    }
    
    return value || path;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};