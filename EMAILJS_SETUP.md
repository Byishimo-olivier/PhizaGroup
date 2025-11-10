# 📧 EmailJS Setup Guide for PhizerGroup Website

This guide will help you set up EmailJS to enable email functionality for all forms on your PhizerGroup website.

## 🚀 Quick Setup Overview

1. **Create EmailJS Account**
2. **Set up Email Service**
3. **Create Email Templates**
4. **Update Configuration**
5. **Test Forms**

---

## 📋 Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address
4. Log in to your EmailJS dashboard

### 2. Set up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (Recommended for ease of setup)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**

#### For Gmail Setup:
1. Select **Gmail**
2. Click **Connect Account**
3. Sign in with your Gmail account
4. Allow EmailJS permissions
5. Your Service ID will be generated (e.g., `service_1234567`)

### 3. Create Email Templates

You need to create **5 email templates**:

#### Template 1: Contact Form (ID: `template_contact`)
```
Subject: New Contact Form Submission - PhizerGroup

Hello,

You have received a new contact form submission from your PhizerGroup website:

Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}
Service Interest: {{service}}
Subject: {{subject}}

Message:
{{message}}

Submitted on: {{date}}

Best regards,
PhizerGroup Website System
```

#### Template 2: Logistics Quote (ID: `template_logistics`)
```
Subject: New Logistics Quote Request - PhizerGroup

Hello,

You have received a new logistics quote request:

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}

Service Details:
- Service Type: {{service_type}}
- Origin: {{origin}}
- Destination: {{destination}}
- Cargo Type: {{cargo_type}}
- Weight: {{weight}}

Additional Message:
{{message}}

Submitted on: {{date}}

Please contact the customer soon with a detailed quote.

Best regards,
PhizerGroup Logistics Team
```

#### Template 3: Apartment Booking (ID: `template_apartment`)
```
Subject: New Apartment Booking Request - PhizerGroup

Hello,

You have received a new apartment booking request:

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}

Booking Details:
- Apartment: {{apartment_name}}
- Check-in: {{check_in}}
- Check-out: {{check_out}}
- Guests: {{guests}}

Special Requests:
{{message}}

Submitted on: {{date}}

Please contact the customer to confirm the booking.

Best regards,
PhizerGroup Hospitality Team
```

#### Template 4: Wine Order (ID: `template_wine`)
```
Subject: New Wine Order Request - PhizerGroup

Hello,

You have received a new wine order request:

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}

Wine Details:
- Wine: {{wine_name}}
- Type: {{wine_type}}
- Quantity: {{quantity}}
- Price: {{price}}

Additional Notes:
{{message}}

Submitted on: {{date}}

Please contact the customer to process the order.

Best regards,
PhizerGroup Wine Distribution Team
```

#### Template 5: Customer Confirmation (ID: `template_customer_confirmation`)
```
Subject: Thank You for Your Interest - PhizerGroup

Dear {{customer_name}},

Thank you for contacting PhizerGroup! We have successfully received your inquiry.

Our team will review your request and get back to you within 24 hours. In the meantime, feel free to contact us directly:

📞 Phone: +250 784 393 716
📧 Email: info@phizergroup.com
🌐 Website: www.phizergroup.com

For urgent matters, you can also reach us on WhatsApp: +250 784 393 716

We appreciate your interest in our services and look forward to serving you.

Best regards,
The PhizerGroup Team

---
This email was sent automatically from our website contact system.
```

### 4. Update Configuration

1. Open your project file: `src/config/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  // Replace with your actual EmailJS Service ID
  SERVICE_ID: 'service_your_service_id_here',
  
  TEMPLATES: {
    CONTACT: 'template_contact',
    LOGISTICS: 'template_logistics',
    APARTMENT_BOOKING: 'template_apartment',
    WINE_ORDER: 'template_wine',
    CUSTOMER_CONFIRMATION: 'template_customer_confirmation'
  },
  
  // Replace with your EmailJS User ID (found in Account settings)
  USER_ID: 'user_your_user_id_here',
  
  // Replace with your actual business email
  COMPANY_EMAIL: 'info@phizergroup.com'
};
```

### 5. Get Your User ID (Public Key)

1. In EmailJS dashboard, go to **Account**
2. Look for **Public Key** or **User ID**
3. Copy this value (e.g., `user_ABC123DEF456`)

### 6. Environment Variables (Optional but Recommended)

Create a `.env` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_your_service_id
REACT_APP_EMAILJS_USER_ID=user_your_user_id
REACT_APP_COMPANY_EMAIL=info@phizergroup.com
```

Then update `emailConfig.js`:

```javascript
export const emailConfig = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_default',
  USER_ID: process.env.REACT_APP_EMAILJS_USER_ID || 'user_default',
  COMPANY_EMAIL: process.env.REACT_APP_COMPANY_EMAIL || 'info@phizergroup.com',
  // ... rest of config
};
```

---

## 🧪 Testing Your Setup

### Test Contact Form
1. Go to `/contact` page
2. Fill out and submit the contact form
3. Check both your email and the customer email

### Test Other Forms
1. **Logistics**: Go to `/logistics` and submit quote request
2. **Apartments**: Go to `/apartments` and submit booking
3. **Wines**: Go to `/wines` and submit order

### Debugging
- Check browser console for any errors
- Verify template IDs match exactly
- Ensure all required variables are included in templates
- Check EmailJS dashboard for delivery status

---

## 📊 EmailJS Dashboard

Monitor your email usage:
1. **Analytics**: See email delivery rates
2. **Templates**: Edit email templates
3. **Services**: Manage email services
4. **Usage**: Track monthly email limits

**Free Plan Limits**: 200 emails/month

---

## 🔧 Troubleshooting

### Common Issues:

**1. "Service not found" error**
- Check if SERVICE_ID is correct
- Verify service is active in EmailJS dashboard

**2. "Template not found" error**
- Verify template IDs match exactly
- Check if templates are published

**3. "Invalid user ID" error**
- Copy User ID from EmailJS Account settings
- Make sure it starts with 'user_'

**4. Emails not sending**
- Check browser console for errors
- Verify internet connection
- Check spam/junk folders

**5. Variables not replacing**
- Ensure template variables use double braces: `{{variable_name}}`
- Check variable names match exactly

---

## 🎯 Production Deployment

Before deploying:
1. Test all forms thoroughly
2. Update company email address
3. Configure proper email signatures
4. Set up email forwarding if needed
5. Monitor email delivery rates

---

## 📞 Support

If you encounter issues:
1. Check EmailJS documentation: [docs.emailjs.com](https://docs.emailjs.com)
2. Contact EmailJS support for service issues
3. Check browser developer tools for JavaScript errors

---

**🎉 That's it! Your PhizerGroup website now has full email functionality for all forms.**

Users will receive confirmation emails, and you'll get detailed notifications for all inquiries.