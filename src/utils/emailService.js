import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

// Initialize EmailJS with user ID
emailjs.init(emailConfig.USER_ID);

// Generic email sending function
export const sendEmail = async (templateId, templateParams, options = {}) => {
  try {
    const result = await emailjs.send(
      emailConfig.SERVICE_ID,
      templateId,
      templateParams
    );
    
    console.log('Email sent successfully:', result);
    return {
      success: true,
      message: 'Email sent successfully!',
      result
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again or contact us directly.',
      error
    };
  }
};

// Contact form email
export const sendContactEmail = async (formData) => {
  const templateParams = {
    company_name: 'PhizerGroup',
    customer_name: formData.name,
    customer_email: formData.email,
    customer_phone: formData.phone || 'Not provided',
    message: formData.message,
    date: new Date().toLocaleDateString(),
    to_email: emailConfig.COMPANY_EMAIL
  };

  // Send email to company
  const companyEmailResult = await sendEmail(
    emailConfig.TEMPLATES.CONTACT,
    templateParams
  );

  // Send confirmation email to customer
  const customerConfirmationParams = {
    ...templateParams,
    to_email: formData.email,
    to_name: formData.name
  };

  const customerEmailResult = await sendEmail(
    emailConfig.TEMPLATES.CUSTOMER_CONFIRMATION,
    customerConfirmationParams
  );

  return {
    companyEmail: companyEmailResult,
    customerEmail: customerEmailResult,
    success: companyEmailResult.success
  };
};

// Logistics quote request email
export const sendLogisticsQuoteEmail = async (formData) => {
  const templateParams = {
    company_name: 'PhizerGroup',
    customer_name: formData.name,
    customer_email: formData.email,
    customer_phone: formData.phone || 'Not provided',
    service_type: formData.service,
    cargo_type: formData.cargoType || 'Not specified',
    weight: formData.weight || 'Not specified',
    destination: formData.destination || 'Not specified',
    message: formData.message || 'Quote request',
    date: new Date().toLocaleDateString(),
    to_email: emailConfig.COMPANY_EMAIL
  };

  // Send email to company
  const companyEmailResult = await sendEmail(
    emailConfig.TEMPLATES.LOGISTICS,
    templateParams
  );

  // Send confirmation email to customer
  const customerConfirmationParams = {
    ...templateParams,
    to_email: formData.email,
    to_name: formData.name
  };

  const customerEmailResult = await sendEmail(
    emailConfig.TEMPLATES.CUSTOMER_CONFIRMATION,
    customerConfirmationParams
  );

  return {
    companyEmail: companyEmailResult,
    customerEmail: customerEmailResult,
    success: companyEmailResult.success
  };
};

// Apartment booking email
export const sendApartmentBookingEmail = async (formData, apartmentData) => {
  const templateParams = {
    company_name: 'PhizerGroup',
    customer_name: formData.name,
    customer_email: formData.email,
    customer_phone: formData.phone || 'Not provided',
    apartment_name: apartmentData.name,
    check_in: formData.checkIn,
    check_out: formData.checkOut,
    guests: formData.guests,
    message: formData.message || 'Booking request',
    date: new Date().toLocaleDateString(),
    to_email: emailConfig.COMPANY_EMAIL
  };

  // Send email to company
  const companyEmailResult = await sendEmail(
    emailConfig.TEMPLATES.APARTMENT_BOOKING,
    templateParams
  );

  // Send confirmation email to customer
  const customerConfirmationParams = {
    ...templateParams,
    to_email: formData.email,
    to_name: formData.name
  };

  const customerEmailResult = await sendEmail(
    emailConfig.TEMPLATES.CUSTOMER_CONFIRMATION,
    customerConfirmationParams
  );

  return {
    companyEmail: companyEmailResult,
    customerEmail: customerEmailResult,
    success: companyEmailResult.success
  };
};

// Wine order email
export const sendWineOrderEmail = async (formData, wineData) => {
  const templateParams = {
    company_name: 'PhizerGroup',
    customer_name: formData.name,
    customer_email: formData.email,
    customer_phone: formData.phone || 'Not provided',
    wine_name: wineData.name,
    wine_type: wineData.type,
    quantity: formData.quantity || '1',
    price: wineData.price,
    message: formData.message || 'Wine order request',
    date: new Date().toLocaleDateString(),
    to_email: emailConfig.COMPANY_EMAIL
  };

  // Send email to company
  const companyEmailResult = await sendEmail(
    emailConfig.TEMPLATES.WINE_ORDER,
    templateParams
  );

  // Send confirmation email to customer
  const customerConfirmationParams = {
    ...templateParams,
    to_email: formData.email,
    to_name: formData.name
  };

  const customerEmailResult = await sendEmail(
    emailConfig.TEMPLATES.CUSTOMER_CONFIRMATION,
    customerConfirmationParams
  );

  return {
    companyEmail: companyEmailResult,
    customerEmail: customerEmailResult,
    success: companyEmailResult.success
  };
};