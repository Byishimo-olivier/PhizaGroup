import React from 'react';
import { FaHandshake, FaGlobe, FaTruck, FaBuilding, FaWineBottle, FaAward } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Partners = () => {
  // const { t } = useLanguage(); // Commented out as not used in current implementation

  const partnerCategories = [
    {
      icon: FaTruck,
      title: 'Logistics Partners',
      description: 'International shipping and freight forwarding companies',
      partners: [
        { name: 'DHL Express', logo: 'https://via.placeholder.com/200x100?text=DHL', description: 'Global express delivery services' },
        { name: 'Maersk Line', logo: 'https://via.placeholder.com/200x100?text=Maersk', description: 'Container shipping and logistics' },
        { name: 'FedEx', logo: 'https://via.placeholder.com/200x100?text=FedEx', description: 'International courier services' },
        { name: 'UPS', logo: 'https://via.placeholder.com/200x100?text=UPS', description: 'Package delivery and supply chain' }
      ]
    },
    {
      icon: FaBuilding,
      title: 'Real Estate Partners',
      description: 'Property developers and management companies',
      partners: [
        { name: 'Kigali Heights', logo: 'https://via.placeholder.com/200x100?text=Kigali+Heights', description: 'Premium property development' },
        { name: 'Urban Living', logo: 'https://via.placeholder.com/200x100?text=Urban+Living', description: 'Modern apartment complexes' },
        { name: 'Prime Properties', logo: 'https://via.placeholder.com/200x100?text=Prime+Properties', description: 'Luxury real estate management' },
        { name: 'City Residences', logo: 'https://via.placeholder.com/200x100?text=City+Residences', description: 'Serviced apartments provider' }
      ]
    },
    {
      icon: FaWineBottle,
      title: 'Wine Distributors',
      description: 'Wineries and distribution partners worldwide',
      partners: [
        { name: 'Bordeaux Wines', logo: 'https://via.placeholder.com/200x100?text=Bordeaux', description: 'French wine producers' },
        { name: 'Tuscany Estates', logo: 'https://via.placeholder.com/200x100?text=Tuscany', description: 'Italian wine collection' },
        { name: 'Napa Valley', logo: 'https://via.placeholder.com/200x100?text=Napa+Valley', description: 'California premium wines' },
        { name: 'Stellenbosch', logo: 'https://via.placeholder.com/200x100?text=Stellenbosch', description: 'South African vintages' }
      ]
    }
  ];

  const achievements = [
    { number: '50+', label: 'Active Partners' },
    { number: '15+', label: 'Countries' },
    { number: '10+', label: 'Years Partnership' },
    { number: '95%', label: 'Partner Satisfaction' }
  ];

  const benefits = [
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Access to international markets and opportunities through our extensive partner network.'
    },
    {
      icon: FaHandshake,
      title: 'Mutual Growth',
      description: 'Collaborative partnerships focused on shared success and sustainable business growth.'
    },
    {
      icon: FaAward,
      title: 'Quality Standards',
      description: 'All partners meet our high standards for quality, reliability, and professional service.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Building strong partnerships to deliver exceptional value across logistics, real estate, and wine distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating partnerships that drive mutual success and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {partnerCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="text-center mb-12">
                    <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="mb-4">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-24 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {partner.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {partner.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Statistics */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Partnership by Numbers
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our partnerships continue to grow and strengthen across all business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-primary-100">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for strategic partners who share our commitment to excellence. 
              Let's explore how we can grow together.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="mailto:partnerships@phizergroup.com"
                className="inline-block border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-colors duration-300"
              >
                Email Partnerships Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;