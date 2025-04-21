import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DumbbellIcon, Bath, Trophy, Volleyball, GraduationCap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Home = () => {
  const services = [
    { id: 'gym', title: 'Gym', icon: DumbbellIcon, description: 'State-of-the-art equipment, personal training, and group classes.' },
    { id: 'swimming', title: 'Swimming Pool', icon: Bath, description: 'Olympic-sized pool with professional coaching and amenities.' },
    { id: 'cricket', title: 'Cricket', icon: Trophy, description: 'Professional cricket coaching with top-notch facilities.' },
    { id: 'football', title: 'Football', icon: Volleyball, description: 'Football training with expert coaches on premium turf.' },
    { id: 'turf', title: 'Turf', icon: GraduationCap, description: 'Premium synthetic turf for various sporting activities.' }
  ];
  
  
  return (
    <div className="bg-with-logo">
      {/* Full Background Hero Section */}
      <section className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Elite Fitness Hero" 
          className="hero-bg-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Fitness <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">For Every Champion</span>
          </h1>
          <p className="hero-description">
            Experience world-class facilities, expert training, and a supportive community to transform your body and elevate your performance.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-hero-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-hero-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="section-padding bg-white">
  <div className="container-custom">
    <ScrollAnimation>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Services</span>
      </h2>
    </ScrollAnimation>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <ScrollAnimation key={service.title} delay={index * 100}>
      <div className="relative h-full bg-white rounded-lg p-8 shadow-md border-b-4 border-red-600 hover:border-red-800 transition-all duration-300">
        {/* Always-visible image */}
        <div className="mb-6">
          <img 
            src={`${
              service.id === 'gym' 
                ? 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
                : service.id === 'swimming' 
                ? 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
                : service.id === 'cricket' 
                ? 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
                : service.id === 'football' 
                ? 'https://tse1.mm.bing.net/th?id=OIP.ONUF2gIsOHqmILSozWH12AHaE8&pid=Api&P=0&h=220' 
                : 'https://5.imimg.com/data5/SELLER/Default/2021/11/VH/DO/LX/15402353/cricket-pitch-astro-turf-1000x1000.jpg'
            }`} 
            alt={service.title} 
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
        </div>

        {/* Icon and content */}
        <div className="h-14 w-14 rounded-full bg-red-600/10 flex items-center justify-center mb-6">
          <service.icon className="h-7 w-7 text-red-700" />
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <Link
          to={`/services#${service.title.toLowerCase()}`}
          className="inline-flex items-center text-red-600 font-medium hover:translate-x-2 transition-all duration-300"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </ScrollAnimation>
  ))}
</div>

  </div>
</section>


      
      {/* About Preview */}
      <section className="section-padding bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="About Our Fitness Club" 
              className="rounded-lg shadow-xl w-full h-auto border-4 border-red-600 transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Our Club</span>
            </h2>
            <p className="text-gray-300 mb-6">
              With state-of-the-art facilities, expert trainers, and a supportive community, we're committed to helping you achieve your fitness goals. Our holistic approach to fitness encompasses physical training, nutrition guidance, and mental wellness.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Premium equipment and facilities',
                'Professional trainers and coaches',
                'Diverse range of fitness programs',
                'Two convenient locations',
                'Flexible membership options'
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              to="/about" 
              className="bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-6 rounded-md font-medium hover:shadow-lg transition-all duration-300 inline-block transform hover:scale-105"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Members Say</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                role: 'Gym Member',
                comment: 'The facilities are top-notch and the trainers are extremely knowledgeable. I\'ve seen amazing results in just 3 months!',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Priya Patel',
                role: 'Swimming Enthusiast',
                comment: 'The swimming coaching has transformed my technique. The pool is always clean and well-maintained with friendly staff.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Amit Kumar',
                role: 'Cricket Player',
                comment: 'The cricket coaching program has significantly improved my game. The coaches are experienced and provide personalized attention.',
                image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600 hover:border-red-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-red-600"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center font-medium text-red-600 hover:text-red-800 transition-all duration-300 group">
              Join our community today <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10">
              Join our fitness community today and get access to premium facilities, expert guidance, and a supportive environment to achieve your fitness goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-red-700 py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Link>
              <Link to="/franchise" className="bg-transparent border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Franchise Opportunities
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
