import React, { useState } from 'react';
import { FaWineBottle, FaGlobe, FaShippingFast, FaAward, FaFilter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Wines = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWine, setSelectedWine] = useState(null);

  const wineCategories = [
    { id: 'all', name: 'All Wines', count: 24 },
    { id: 'red', name: 'Red Wine', count: 12 },
    { id: 'white', name: 'White Wine', count: 8 },
    { id: 'sparkling', name: 'Sparkling', count: 4 }
  ];

  const wines = [
    {
      id: 1,
      name: 'Château Margaux 2018',
      origin: 'Bordeaux, France',
      type: 'red',
      price: 450,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506377247777-fd62c2645da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Exceptional Bordeaux blend with complex flavors of dark fruits and elegant tannins.',
      alcohol: '14.5%',
      vintage: 2018,
      region: 'Bordeaux',
      grapes: ['Cabernet Sauvignon', 'Merlot', 'Petit Verdot']
    },
    {
      id: 2,
      name: 'Chablis Premier Cru',
      origin: 'Burgundy, France',
      type: 'white',
      price: 85,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1558346489-19413928158b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Crisp and mineral-driven Chardonnay with citrus notes and a long finish.',
      alcohol: '12.5%',
      vintage: 2020,
      region: 'Burgundy',
      grapes: ['Chardonnay']
    },
    {
      id: 3,
      name: 'Dom Pérignon 2012',
      origin: 'Champagne, France',
      type: 'sparkling',
      price: 320,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Prestigious Champagne with fine bubbles and notes of brioche and white flowers.',
      alcohol: '12%',
      vintage: 2012,
      region: 'Champagne',
      grapes: ['Chardonnay', 'Pinot Noir']
    },
    {
      id: 4,
      name: 'Barolo DOCG Reserva',
      origin: 'Piedmont, Italy',
      type: 'red',
      price: 120,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Bold and structured Nebbiolo with earthy undertones and cherry flavors.',
      alcohol: '14%',
      vintage: 2017,
      region: 'Piedmont',
      grapes: ['Nebbiolo']
    },
    {
      id: 5,
      name: 'Sauvignon Blanc Reserve',
      origin: 'Marlborough, New Zealand',
      type: 'white',
      price: 35,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Fresh and vibrant wine with tropical fruit aromas and herbaceous notes.',
      alcohol: '13%',
      vintage: 2022,
      region: 'Marlborough',
      grapes: ['Sauvignon Blanc']
    },
    {
      id: 6,
      name: 'Rioja Gran Reserva',
      origin: 'La Rioja, Spain',
      type: 'red',
      price: 95,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Aged Tempranillo with vanilla and spice notes from oak aging.',
      alcohol: '13.5%',
      vintage: 2015,
      region: 'La Rioja',
      grapes: ['Tempranillo', 'Graciano']
    }
  ];

  const services = [
    {
      icon: FaGlobe,
      title: 'Wine Import',
      description: 'Direct import from renowned wine regions worldwide with proper documentation and storage.'
    },
    {
      icon: FaShippingFast,
      title: 'Distribution Network',
      description: 'Extensive distribution network across Rwanda and East Africa for restaurants and retailers.'
    },
    {
      icon: FaAward,
      title: 'Quality Assurance',
      description: 'Expert selection and proper storage conditions to maintain wine quality and authenticity.'
    }
  ];

  const team = [
    {
      name: 'Marie Claire',
      position: 'Head Sommelier',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '15 years experience'
    },
    {
      name: 'Jean Baptiste',
      position: 'Wine Buyer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '12 years experience'
    },
    {
      name: 'Claudine',
      position: 'Distribution Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '10 years experience'
    }
  ];

  const filteredWines = selectedCategory === 'all' 
    ? wines 
    : wines.filter(wine => wine.type === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506377247777-fd62c2645da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {t('wines.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t('wines.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Wine Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From import to distribution, we provide comprehensive wine services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wine Collection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('wines.products')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium wines from renowned regions worldwide.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {wineCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Wine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWines.map((wine) => (
              <div
                key={wine.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedWine(wine)}
              >
                <div className="relative">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${wine.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {wine.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{wine.origin}</p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {wine.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm text-gray-600">{wine.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{wine.vintage}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedWine(wine);
                      }}
                      className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition-colors"
                    >
                      View Details
                    </button>
                    <a
                      href={`https://wa.me/250784393716?text=Hello%20PhizerGroup,%20I'm%20interested%20in%20${encodeURIComponent(wine.name)}%20-%20${encodeURIComponent(wine.origin)}%20($${wine.price}).%20Please%20provide%20availability%20and%20ordering%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Wine Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team ensures the highest quality in wine selection and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-lg p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Detail Modal */}
      {selectedWine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              <img
                src={selectedWine.image}
                alt={selectedWine.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedWine(null)}
                className="absolute top-4 right-4 bg-white text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedWine.name}
              </h2>
              <p className="text-gray-600 mb-4">{selectedWine.origin}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Vintage:</span> {selectedWine.vintage}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Alcohol:</span> {selectedWine.alcohol}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Region:</span> {selectedWine.region}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Rating:</span> ★ {selectedWine.rating}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="font-semibold text-gray-700">Grape Varieties:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedWine.grapes.map((grape, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm"
                    >
                      {grape}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedWine.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-purple-600">
                  ${selectedWine.price}
                </span>
                <div className="flex space-x-3">
                  <a
                    href={`https://wa.me/250784393716?text=Hello%20PhizerGroup,%20I'm%20interested%20in%20purchasing%20${encodeURIComponent(selectedWine.name)}%20(${selectedWine.vintage})%20for%20$${selectedWine.price}.%20Please%20provide%20availability%20and%20ordering%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <button className="bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                    Contact Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wines;