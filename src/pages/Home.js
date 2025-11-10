import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaHome, FaWineBottle, FaArrowRight, FaShieldAlt, FaUsers, FaGlobe } from 'react-icons/fa';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FaTruck,
      title: 'Phizer Logistics',
      description: 'Import, export, and transit services with reliable delivery across East Africa.',
      link: '/logistics',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FaHome,
      title: 'Phizer Apartments',
      description: 'Premium furnished apartments in prime locations for short and long-term stays.',
      link: '/apartments',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FaWineBottle,
      title: 'Phizer Wines',
      description: 'Curated selection of premium wines with import and distribution services.',
      link: '/wines',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: t('about.excellence'),
      description: 'We strive for excellence in every service we provide.'
    },
    {
      icon: FaUsers,
      title: t('about.reliability'),
      description: 'Our clients trust us for consistent, reliable service delivery.'
    },
    {
      icon: FaGlobe,
      title: t('about.innovation'),
      description: 'We embrace innovation to provide cutting-edge solutions.'
    }
  ];

  const partners = [
    { name: 'Partner 1', logo: 'https://via.placeholder.com/150x80?text=Partner+1' },
    { name: 'Partner 2', logo: 'https://via.placeholder.com/150x80?text=Partner+2' },
    { name: 'Partner 3', logo: 'https://via.placeholder.com/150x80?text=Partner+3' },
    { name: 'Partner 4', logo: 'https://via.placeholder.com/150x80?text=Partner+4' },
    { name: 'Partner 5', logo: 'https://via.placeholder.com/150x80?text=Partner+5' },
    { name: 'Partner 6', logo: 'https://via.placeholder.com/150x80?text=Partner+6' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PhizerGroup provides comprehensive solutions across logistics, real estate, and wine distribution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className={`inline-flex items-center ${service.color} hover:${service.color} font-semibold group-hover:translate-x-2 transition-transform duration-300`}
                  >
                    {t('home.learnMore')}
                    <FaArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('home.mission')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('home.missionText')}
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('home.vision')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('home.visionText')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with trusted partners to deliver exceptional value and service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/partners"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              View All Partners
              <FaArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about how PhizerGroup can serve your logistics, accommodation, and wine needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Get In Touch
            <FaArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;