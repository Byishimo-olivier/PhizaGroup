import React from 'react';
import { FaShieldAlt, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: FaShieldAlt,
      title: t('about.excellence'),
      description: 'We maintain the highest standards in all our services, ensuring quality that exceeds expectations.'
    },
    {
      icon: FaUsers,
      title: t('about.reliability'),
      description: 'Our clients can depend on us for consistent, timely, and professional service delivery.'
    },
    {
      icon: FaGlobe,
      title: t('about.innovation'),
      description: 'We embrace new technologies and methods to provide cutting-edge solutions.'
    },
    {
      icon: FaHandshake,
      title: t('about.integrity'),
      description: 'We conduct business with transparency, honesty, and ethical practices.'
    }
  ];

  const team = [
    {
      name: 'John Doe',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'With over 15 years of experience in logistics and business development.'
    },
    {
      name: 'Jane Smith',
      position: 'Head of Logistics',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Expert in supply chain management and international trade operations.'
    },
    {
      name: 'Mike Johnson',
      position: 'Real Estate Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Specialized in premium property management and client relations.'
    },
    {
      name: 'Sarah Williams',
      position: 'Wine Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Certified sommelier with expertise in wine selection and distribution.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Successful Logistics Operations' },
    { number: '200+', label: 'Satisfied Apartment Guests' },
    { number: '50+', label: 'Wine Brands Distributed' },
    { number: '10+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Established with a vision to excel in logistics, real estate, and wine distribution across Rwanda and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('about.story')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('about.storyText')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our journey began with a simple mission: to bridge the gap between quality services and customer satisfaction. Today, we stand as a testament to the power of dedication, innovation, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our headquarters in Kigali, we've expanded our reach across East Africa, building lasting relationships with clients and partners who share our vision for excellence.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About PhizerGroup"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">2014</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.values')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team is dedicated to delivering exceptional service across all our business divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and growth.
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
    </div>
  );
};

export default About;