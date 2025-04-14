
import React, { useState } from 'react';
import { Check, Info, Users, TrendingUp, Award, Building } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import gym10 from '../Assets/vj-gym10.jpg';
import gym11 from '../Assets/vj-gym11.jpg';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '',
    experience: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Franchise form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        investment: '',
        experience: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };
  
  const benefits = [
    {
      icon: Building,
      title: 'Established Brand',
      description: 'Join a recognized fitness brand with proven market presence and customer loyalty.'
    },
    {
      icon: TrendingUp,
      title: 'High ROI',
      description: 'Benefit from our profitable business model with multiple revenue streams.'
    },
    {
      icon: Users,
      title: 'Comprehensive Support',
      description: 'Receive end-to-end operational, marketing, and technical support.'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Maintain premium service quality with our standardized processes and training.'
    }
  ];
  
  const faqs = [
    {
      question: 'What is the initial investment required?',
      answer: 'The initial investment ranges from ₹50 lakhs to ₹1.5 crores depending on the location, size, and services offered at the franchise.'
    },
    {
      question: 'What is the franchise term?',
      answer: 'Our standard franchise agreement is for 5 years with an option to renew for additional terms upon mutual agreement.'
    },
    {
      question: 'What ongoing fees are involved?',
      answer: 'Franchisees pay a monthly royalty fee (percentage of gross revenue) and contribute to a marketing fund for national and regional promotional activities.'
    },
    {
      question: 'Do you provide training and support?',
      answer: 'Yes, we provide comprehensive initial training for you and your staff, ongoing operational support, marketing assistance, and regular business reviews.'
    },
    {
      question: 'What are the space requirements?',
      answer: 'The space requirement varies based on services: Gym-only locations require 3,000-5,000 sq ft, while full-service locations with pool facilities need 8,000-15,000 sq ft.'
    },
    {
      question: 'How long does it take to open a franchise?',
      answer: 'Typically, it takes 4-6 months from signing the agreement to opening, depending on construction, equipment delivery, and staff training.'
    }
  ];
  
  return (
    <div className="pt-20 bg-with-logo">
      {/* Hero Section */}
      <section
  className="py-32 md:py-48 bg-gradient-to-br from-fitness-purple/10 to-fitness-blue/10 bg-cover bg-center"
  style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2482799.jpg')" }}
>
  <div className="container-custom">
    <div className="text-center max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-red-500">
  Franchise <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-700">Opportunities</span>
</h1>


      <p className="text-lg text-orange-400 animate-fade-in animation-delay-200">
        Join our successful fitness brand and become a part of the growing health and wellness industry.
      </p>
    </div>
  </div>
</section>



      {/* Overview Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      
      {/* Image Section */}
      <div className="lg:w-1/2">
        <ScrollAnimation animateIn="fadeInLeft">
          <img
            src={gym10} // Change this to your actual image path
            alt="Franchise Opportunity"
            className="w-full rounded-lg shadow-lg"
          />
        </ScrollAnimation>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2">
        <ScrollAnimation animateIn="fadeInRight">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Franchise</span>
          </h2>
          <p className="text-gray-600 mb-6">
            With the fitness industry experiencing significant growth, our franchise model offers a lucrative business opportunity with comprehensive support and a proven track record of success.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              'Access to our established brand and loyal customer base',
              'Comprehensive training and operational support',
              'Turnkey business model with multiple revenue streams',
              'Marketing and sales support',
              'Exclusive territory rights',
              'Centralized purchasing power'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gradient-fitness flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center p-4 bg-fitness-purple/10 rounded-lg">
            <Info className="h-6 w-6 text-fitness-purple mr-3 flex-shrink-0" />
            <p className="text-sm">
              Our franchise partners enjoy an average ROI within 24-36 months with ongoing growth potential.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
</section>

      
      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-16 text-center">
              Franchise <span className="text-transparent bg-clip-text bg-gradient-fitness">Benefits</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-start">
                  <div className="h-14 w-14 rounded-full bg-fitness-purple/10 flex items-center justify-center mr-6 flex-shrink-0">
                    <benefit.icon className="h-7 w-7 text-fitness-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-16 text-center">
              Franchise <span className="text-transparent bg-clip-text bg-gradient-fitness">Process</span>
            </h2>
          </ScrollAnimation>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-[22px] top-[22px] h-[calc(100%-44px)] w-1 bg-gradient-to-b from-fitness-purple to-fitness-blue"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {[
                {
                  title: 'Initial Inquiry',
                  description: 'Fill out our franchise inquiry form to express your interest and provide basic information.'
                },
                {
                  title: 'Qualification & Discussion',
                  description: 'Our franchise team evaluates your application and schedules a call to discuss the opportunity in detail.'
                },
                {
                  title: 'Discovery Day',
                  description: 'Visit our headquarters to meet the team, tour existing facilities, and learn more about our operations.'
                },
                {
                  title: 'Business Planning',
                  description: 'Develop a business plan with guidance from our team, including location selection and financial projections.'
                },
                {
                  title: 'Agreement Signing',
                  description: 'Review and sign the franchise agreement after careful consideration and legal advice if needed.'
                },
                {
                  title: 'Setup & Training',
                  description: 'We assist with location setup, equipment procurement, staff hiring, and comprehensive training.'
                },
                {
                  title: 'Grand Opening',
                  description: 'Launch your franchise with marketing support and operational assistance from our team.'
                }
              ].map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="flex items-start">
                    <div className="h-11 w-11 rounded-full bg-gradient-fitness flex items-center justify-center mr-6 flex-shrink-0 z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex-grow">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-16 text-center">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-fitness">Questions</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Inquiry Form Section */}
      <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-fitness-purple to-fitness-blue rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Form Section */}
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Join Our Franchise Network?</h2>
                <p className="mb-8 text-white/90">
                  Complete the form below to initiate the franchise inquiry process. Our team will review your application and contact you to discuss the next steps.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">

                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/60 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/60 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/60 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-white/90 mb-1">Preferred City/Location</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/60 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                        placeholder="Mumbai"
                      />
                    </div>

                    {/* Investment */}
                    <div>
                      <label htmlFor="investment" className="block text-sm font-medium text-white/90 mb-1">Investment Budget</label>
                      <select
                        id="investment"
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="1Cr-1.5Cr">₹1 Crore - ₹1.5 Crore</option>
                        <option value="1.5Cr+">Above ₹1.5 Crore</option>
                      </select>
                    </div>

                    {/* Experience */}
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-white/90 mb-1">Business Experience</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                      >
                        <option value="">Select Experience Level</option>
                        <option value="No Prior Experience">No Prior Experience</option>
                        <option value="1-3 Years">1–3 Years</option>
                        <option value="3-5 Years">3–5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white/60 text-white border border-white/30 focus:outline-none focus:bg-white/30"
                        placeholder="Tell us about yourself and why you're interested in our franchise..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-white text-fitness-purple rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-fitness-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </span>
                        ) : 'Submit Inquiry'}
                      </button>
                    </div>

                    {formStatus === 'success' && (
                      <div className="bg-white/20 text-white p-4 rounded-md">
                        Thank you for your interest! Your inquiry has been submitted successfully.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </ScrollAnimation>

            {/* Image Section */}
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className="relative h-96 lg:h-full">
                {/* <img
                  src={gym11}
                  alt="Franchise Opportunity"
                  className="h-full w-full object-cover"
                /> */}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Franchise;
