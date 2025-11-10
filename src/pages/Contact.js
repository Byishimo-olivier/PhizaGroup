import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { sendContactEmail } from '../utils/emailService';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaPhone,
      title: t('contact.phone'),
      details: ['+250 788 123 456', '+250 722 987 654'],
      color: 'text-blue-600'
    },
    {
      icon: FaEnvelope,
      title: t('contact.email'),
      details: ['info@phizergroup.com', 'support@phizergroup.com'],
      color: 'text-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: t('contact.address'),
      details: ['KG 7 Ave, Kigali', 'Rwanda, East Africa'],
      color: 'text-red-600'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      color: 'text-purple-600'
    }
  ];

  const socialMedia = [
    { 
      icon: FaFacebook, 
      name: 'Facebook', 
      url: '#', 
      color: 'text-blue-600 hover:bg-blue-600',
      followers: '2.5K'
    },
    { 
      icon: FaInstagram, 
      name: 'Instagram', 
      url: '#', 
      color: 'text-pink-600 hover:bg-pink-600',
      followers: '1.8K'
    },
    { 
      icon: FaTiktok, 
      name: 'TikTok', 
      url: '#', 
      color: 'text-gray-800 hover:bg-gray-800',
      followers: '950'
    },
    { 
      icon: FaWhatsapp, 
      name: 'WhatsApp', 
      url: 'https://wa.me/250788123456', 
      color: 'text-green-600 hover:bg-green-600',
      followers: 'Chat Now'
    }
  ];

  const services = [
    'Logistics & Transport',
    'Apartment Booking',
    'Wine Distribution',
    'Partnership Inquiry',
    'General Information',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using EmailJS service
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        console.log('Contact form submitted successfully:', formData);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
      
      setTimeout(() => setSubmitStatus(null), 7000);
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`${info.color} w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('contact.send')}
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="+250 788 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      {t('contact.send')}
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! We\'ll get back to you soon.' 
                      : 'There was an error sending your message. Please try again.'}
                  </div>
                )}
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Find Us
                </h3>
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <FaMapMarkerAlt size={48} className="mx-auto mb-4" />
                    <p className="text-lg">Interactive Map</p>
                    <p className="text-sm">KG 7 Ave, Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.followUs')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center p-4 bg-gray-50 rounded-lg ${social.color} hover:text-white transition-all duration-300 group`}
                      >
                        <IconComponent size={24} className="mr-3" />
                        <div>
                          <div className="font-semibold">{social.name}</div>
                          <div className="text-sm opacity-70">{social.followers}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent inquiries, you can reach us directly:
                </p>
                <div className="space-y-2">
                  <a href="tel:+250788123456" className="flex items-center text-primary-600 hover:text-primary-700">
                    <FaPhone className="mr-2" />
                    +250 788 123 456
                  </a>
                  <a href="https://wa.me/250788123456" className="flex items-center text-green-600 hover:text-green-700">
                    <FaWhatsapp className="mr-2" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;