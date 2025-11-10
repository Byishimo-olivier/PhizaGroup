import React, { useState } from 'react';
import { FaWifi, FaParking, FaSwimmingPool, FaUtensils, FaMapMarkerAlt, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { sendApartmentBookingEmail } from '../utils/emailService';

const Apartments = () => {
  const { t } = useLanguage();
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    apartmentId: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const apartments = [
    {
      id: 1,
      title: 'Executive Suite - Kigali City',
      location: 'Kigali City Center',
      price: 150,
      rating: 4.8,
      reviews: 24,
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['WiFi', 'Parking', 'Kitchen', 'Air Conditioning', 'Balcony'],
      description: 'Luxurious 2-bedroom executive suite in the heart of Kigali with stunning city views.'
    },
    {
      id: 2,
      title: 'Lake View Studio - Gisenyi',
      location: 'Gisenyi, Lake Kivu',
      price: 100,
      rating: 4.6,
      reviews: 18,
      bedrooms: 1,
      bathrooms: 1,
      area: 75,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['WiFi', 'Lake View', 'Kitchen', 'Terrace', 'Swimming Pool Access'],
      description: 'Charming studio apartment overlooking beautiful Lake Kivu with private terrace.'
    },
    {
      id: 3,
      title: 'Family Apartment - Nyarutarama',
      location: 'Nyarutarama, Kigali',
      price: 200,
      rating: 4.9,
      reviews: 31,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['WiFi', 'Parking', 'Full Kitchen', 'Garden', 'Security', 'Playground'],
      description: 'Spacious family apartment perfect for longer stays with garden access and child-friendly amenities.'
    },
    {
      id: 4,
      title: 'Business Suite - Kimihurura',
      location: 'Kimihurura, Kigali',
      price: 120,
      rating: 4.7,
      reviews: 22,
      bedrooms: 1,
      bathrooms: 1,
      area: 90,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['WiFi', 'Work Desk', 'Kitchenette', 'Gym Access', 'Meeting Room'],
      description: 'Modern business-oriented apartment with dedicated workspace and premium amenities.'
    }
  ];

  const amenityIcons = {
    WiFi: FaWifi,
    Parking: FaParking,
    'Swimming Pool Access': FaSwimmingPool,
    Kitchen: FaUtensils,
    'Full Kitchen': FaUtensils,
    Kitchenette: FaUtensils
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBooking = (apartmentId) => {
    setBookingForm(prev => ({
      ...prev,
      apartmentId: apartmentId.toString()
    }));
    setSelectedApartment(apartmentId);
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Find the selected apartment data
      const apartmentData = apartments.find(apt => apt.id === parseInt(bookingForm.apartmentId));
      
      // Send apartment booking email using EmailJS service
      const result = await sendApartmentBookingEmail(bookingForm, apartmentData);
      
      if (result.success) {
        setSubmitStatus('success');
        console.log('Apartment booking submitted successfully:', bookingForm);
        
        // Reset form and close modal
        setTimeout(() => {
          setSelectedApartment(null);
          setBookingForm({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            guests: 1,
            apartmentId: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error(result.message || 'Failed to send booking request');
      }
      
    } catch (error) {
      console.error('Apartment booking submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {t('apartments.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t('apartments.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Available Apartments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of premium apartments in prime locations across Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={apartment.image}
                    alt={apartment.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${apartment.price}/night
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" size={16} />
                      <span className="text-sm text-gray-600">
                        {apartment.rating} ({apartment.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2" size={14} />
                    <span className="text-sm">{apartment.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {apartment.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <span>{apartment.bedrooms} Bed</span>
                    <span>{apartment.bathrooms} Bath</span>
                    <span>{apartment.area}m²</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {apartment.amenities.slice(0, 4).map((amenity, index) => {
                      const IconComponent = amenityIcons[amenity];
                      return (
                        <div
                          key={index}
                          className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600"
                        >
                          {IconComponent && <IconComponent className="mr-1" size={12} />}
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/250784393716?text=Hello%20PhizerGroup,%20I'm%20interested%20in%20booking%20${encodeURIComponent(apartment.title)}%20at%20$${apartment.price}/night.%20Please%20provide%20availability%20and%20booking%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                      </svg>
                      WhatsApp Booking
                    </a>
                    <button
                      onClick={() => handleBooking(apartment.id)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                      {t('apartments.booking')} Form
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedApartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Book Your Stay
                </h3>
                <button
                  onClick={() => setSelectedApartment(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              
              <form onSubmit={submitBooking} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apartments.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apartments.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('apartments.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleBookingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+250 788 123 456"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apartments.checkIn')} *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={bookingForm.checkIn}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={bookingForm.checkOut}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={bookingForm.guests}
                      onChange={handleBookingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleBookingChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any special requests or requirements..."
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus && (
                  <div className={`text-center p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitStatus === 'success' 
                      ? 'Booking request sent successfully! We will contact you soon to confirm your reservation.' 
                      : 'Failed to send booking request. Please try again or contact us at +250 784 393 716.'
                    }
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedApartment(null)}
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : (t('apartments.submit') || 'Submit Booking')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apartments;