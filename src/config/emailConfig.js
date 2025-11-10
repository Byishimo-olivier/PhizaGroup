// EmailJS Configuration
// To setup EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create email templates
// 5. Get your Service ID, Template ID, and User ID
// 6. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  // Replace with your EmailJS Service ID
  SERVICE_ID: 'service_k2bvdm2',
  
  // Replace with your EmailJS Template IDs for different forms
  TEMPLATES: {
    // Contact form template
    CONTACT: 'template_contact',
    
    // Logistics quote request template
    LOGISTICS: 'template_logistics',
    
    // Apartment booking template
    APARTMENT_BOOKING: 'template_apartment',
    
    // Wine order template
    WINE_ORDER: 'template_wine',
    
    // Confirmation email template (sent to customer)
    CUSTOMER_CONFIRMATION: 'template_customer_confirmation'
  },
  
  // Replace with your EmailJS User ID (Public Key)
  USER_ID: 'eiCAJTdt70nZ0e5EO',
  
  // Company email (where inquiries will be sent)
  COMPANY_EMAIL: 'info@phizergroup.com'
};

// Email template variables that will be used in EmailJS templates
export const emailTemplateVars = {
  // Standard variables for all templates
  COMPANY_NAME: '{{company_name}}',
  CUSTOMER_NAME: '{{customer_name}}',
  CUSTOMER_EMAIL: '{{customer_email}}',
  CUSTOMER_PHONE: '{{customer_phone}}',
  MESSAGE: '{{message}}',
  DATE: '{{date}}',
  
  // Logistics specific variables
  SERVICE_TYPE: '{{service_type}}',
  CARGO_TYPE: '{{cargo_type}}',
  WEIGHT: '{{weight}}',
  DESTINATION: '{{destination}}',
  
  // Apartment specific variables
  APARTMENT_NAME: '{{apartment_name}}',
  CHECK_IN: '{{check_in}}',
  CHECK_OUT: '{{check_out}}',
  GUESTS: '{{guests}}',
  
  // Wine specific variables
  WINE_NAME: '{{wine_name}}',
  WINE_TYPE: '{{wine_type}}',
  QUANTITY: '{{quantity}}',
  PRICE: '{{price}}'
};