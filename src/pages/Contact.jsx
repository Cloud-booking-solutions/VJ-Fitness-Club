
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, interests: [...formData.interests, value] });
    } else {
      setFormData({ 
        ...formData, 
        interests: formData.interests.filter(interest => interest !== value) 
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: [],
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };
  
  const locations = [
    {
      name: 'Gym Facility',
      address: "VJ's fitness, 6th floor, Balewadi High st, Pune, 411045",
      phone: '+91 8421517771',
      whatsapp: '+91 8421517771',
      email: 'gym@.com',
      hours: 'Mon-Sat: 6:00 AM - 10:00 PM\nSunday: 7:00 AM - 8:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7563.90165974129!2d73.76881804207825!3d18.57625538011245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVJS%20Fitness%20Club%20%26%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1744617991734!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    
    {
      name: 'Swimming Pool Facility',
      address: ' Near by Rohan Ekam, F Residences road, Balewadi, 411045 ',
      phone: '+91 8421517771',
      whatsapp: '+91 8421517771',
      email: 'swimmingpool@.com',
      hours: 'Mon-Sat: 6:00 AM - 8:00 PM\nSunday: 7:00 AM - 6:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7563.90165974129!2d73.76881804207825!3d18.57625538011245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVJS%20Fitness%20Club%20%26%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1744617991734!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  ];
  
  const contactCards = [
    {
      icon: <Phone className="h-8 w-8 text-fitness-purple" />,
      title: "Phone",
      items: [
        { label: "+91 98765 43210 (Gym)", url: "tel:+919876543210" },
        { label: "+91 98765 43211 (Pool)", url: "tel:+919876543211" }
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-fitness-purple" />,
      title: "Email",
      items: [
        { label: "info@fitnessclub.com", url: "mailto:info@fitnessclub.com" },
        { label: "support@fitnessclub.com", url: "mailto:support@fitnessclub.com" }
      ]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-fitness-purple" />,
      title: "WhatsApp",
      items: [
        { label: "+91 8421517771 (Gym)", url: "https://wa.me/8421517771" },
        { label: "+91 8421517771 (Pool)", url: "https://wa.me/8421517771" }
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-fitness-purple" />,
      title: "Working Hours",
      items: [
        { label: "Mon-Sat: 6:00 AM - 10:00 PM", url: null },
        { label: "Sunday: 7:00 AM - 8:00 PM", url: null }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, url: "https://facebook.com" },
    { icon: <Instagram size={20} />, url: "https://instagram.com" },
    { icon: <Twitter size={20} />, url: "https://twitter.com" },
    { icon: <Youtube size={20} />, url: "https://youtube.com" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com" }
  ];
  
  return (
    <div className="pt-20 bg-with-logo">
     {/* Hero Section */}
     <section
  className="py-32 md:py-48 bg-gradient-to-br from-fitness-purple/10 to-fitness-blue/10 bg-cover bg-center"
  style={{ backgroundImage: "url('https://png.pngtree.com/background/20230516/original/pngtree-large-room-full-of-equipment-in-a-gym-picture-image_2611111.jpg')" }}
>
  <div className="container-custom">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-red-500">
        Contact <span className="text-transparent bg-clip-text bg-gradient-fitness">Us</span>
      </h1>
      <p className="text-lg text-yellow-500 animate-fade-in animation-delay-200">
        Reach out to us for any inquiries or to start your fitness journey today.
      </p>
    </div>
  </div>
</section>


      
      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact cards with equal height */}
            {contactCards.map((card, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-16 w-16 rounded-full bg-fitness-purple/10 flex items-center justify-center mx-auto mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <div className="flex-grow">
                    {card.items.map((item, i) => (
                      <p key={i} className="text-gray-600 mb-2">
                        {item.url ? (
                          <a href={item.url} className="hover:text-fitness-purple transition-colors">
                            {item.label}
                          </a>
                        ) : (
                          item.label
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          {/* Locations */}
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Locations</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {locations.map((location, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe 
                      src={location.mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy"
                      title={`Map for ${location.name}`}
                    ></iframe>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a 
                            href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-fitness-purple transition-colors"
                          >
                            {location.address}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="hover:text-fitness-purple transition-colors">
                            {location.phone}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href={`https://wa.me/${location.whatsapp}`} className="hover:text-fitness-purple transition-colors">
                            WhatsApp: {location.phone}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href={`mailto:${location.email}`} className="hover:text-fitness-purple transition-colors">
                            {location.email}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-fitness-purple mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 whitespace-pre-line">{location.hours}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-4 bg-gradient-fitness text-white rounded-md font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          {/* Contact Form */}
          {/* Contact Form */}
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Left Column - Contact Form */}
    <div className="p-8 lg:p-12">
      <h2 className="text-3xl font-bold mb-6">
        Send Us a <span className="text-transparent bg-clip-text bg-gradient-fitness">Message</span>
      </h2>
      <p className="text-gray-600 mb-8">
        Have questions or ready to start your fitness journey? Fill out the form and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in (check all that apply)</label>
            <div className="grid grid-cols-2 gap-3">
              {['Gym', 'Swimming Pool', 'Cricket', 'Football', 'Turf'].map(interest => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    id={interest.toLowerCase()}
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-fitness-purple focus:ring-fitness-purple rounded"
                  />
                  <label htmlFor={interest.toLowerCase()} className="ml-2 text-sm text-gray-700">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-fitness text-white rounded-md font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </div>

          {/* Success */}
          {formStatus === 'success' && (
            <div className="bg-green-50 text-green-800 p-4 rounded-md">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
        </div>
      </form>
    </div>

    {/* Right Column - Image and Info */}
    <div className="relative min-h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Contact Us"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-fitness-purple/80 to-fitness-blue/80 flex flex-col justify-center text-white p-8 lg:p-12">
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
            <div>
              <p className="font-medium">Our Locations</p>
              <p className="mt-1 text-sm text-white/80">Two premium facilities to serve you better</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="h-6 w-6 mr-4 flex-shrink-0" />
            <div>
              <p className="font-medium">Working Hours</p>
              <p className="mt-1 text-sm text-white/80">Open 7 days a week for your convenience</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
            <div>
              <p className="font-medium">Contact Numbers</p>
              <p className="mt-1 text-sm text-white/80">Call us directly for immediate assistance</p>
            </div>
          </div>
          <div className="flex items-start">
            <MessageCircle className="h-6 w-6 mr-4 flex-shrink-0" />
            <div>
              <p className="font-medium">WhatsApp</p>
              <p className="mt-1 text-sm text-white/80">Message us anytime for quick responses</p>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-10">
          <p className="font-medium mb-4">Connect with Us</p>
          <div className="flex space-x-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          
          {/* Video Section */}
          {/* <div className="mt-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Take a <span className="text-transparent bg-clip-text bg-gradient-fitness">Virtual Tour</span>
              </h2>
            </ScrollAnimation>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/5yz9qbvMx6Y"
                  title="Fitness Club Virtual Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
