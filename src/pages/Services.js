import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaHome, FaWineBottle, FaArrowRight, FaGlobe, FaShieldAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  // const { t } = useLanguage(); // Commented out as not used in current implementation

  const mainServices = [
    {
      icon: FaTruck,
      title: 'Phizer Logistics & Transport',
      description: 'Comprehensive logistics solutions including import, export, and transit services across East Africa.',
      features: ['Import Services', 'Export Services', 'Transit & Warehousing', 'Custom Clearance'],
      link: '/logistics',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1566312592196-ed43e0c53b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FaHome,
      title: 'Phizer Apartments',
      description: 'Premium furnished apartments in prime locations for short-term and long-term accommodations.',
      features: ['Short-term Rentals', 'Long-term Leasing', 'Fully Furnished', 'Prime Locations'],
      link: '/apartments',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FaWineBottle,
      title: 'Phizer Wines Operator',
      description: 'Curated selection of premium wines with import, distribution, and retail services.',
      features: ['Wine Import', 'Distribution Network', 'Retail Sales', 'Wine Consultation'],
      link: '/wines',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1506377247777-fd62c2645da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const whyChooseUs = [
    {
      icon: FaGlobe,
      title: 'Regional Expertise',
      description: 'Deep understanding of East African markets and regulations.'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Assurance',
      description: 'Strict quality controls and professional service standards.'
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              PhizerGroup offers integrated solutions across logistics, real estate, and wine distribution, 
              serving clients throughout Rwanda and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isReversed = index % 2 !== 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.link}
                      className={`inline-flex items-center bg-white ${service.color} border-2 ${service.color.replace('text-', 'border-')} px-6 py-3 rounded-lg font-semibold hover:${service.color.replace('text-', 'bg-')} hover:text-white transition-all duration-300`}
                    >
                      Learn More
                      <FaArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                  
                  <div className={isReversed ? 'lg:col-start-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full h-96 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PhizerGroup?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, reliability, and innovation to deliver exceptional value across all our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about how our services can meet your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us Now
            <FaArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;