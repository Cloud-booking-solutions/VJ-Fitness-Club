
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Trophy, Clock, Heart } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  const milestones = [
    { 
      year: '2010', 
      title: 'Foundation', 
      description: 'Established our first gym location with a vision to transform fitness in the region.' 
    },
    { 
      year: '2013', 
      title: 'Swimming Pool', 
      description: 'Expanded our services by opening a world-class swimming facility.' 
    },
    { 
      year: '2016', 
      title: 'Cricket Academy', 
      description: 'Launched professional cricket coaching with state-of-the-art training infrastructure.' 
    },
    { 
      year: '2018', 
      title: 'Football & Turf', 
      description: 'Added premium football coaching and synthetic turf facilities.' 
    },
    { 
      year: '2021', 
      title: 'Franchise Model', 
      description: 'Started expanding through franchising to bring our fitness vision to more communities.' 
    },
  ];
  
  return (
    <div className="bg-with-logo">
      {/* Hero Banner with Full Background Image */}
      <section className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="About Us Hero" 
          className="hero-bg-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Our Story of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Excellence & Passion</span>
          </h1>
          <p className="hero-description">
            Discover the journey that turned our vision into the region's premier fitness destination, dedicated to transforming lives through sports and wellness.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section-padding bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Section */}
      <div className="md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Our Story" 
          className="rounded-lg shadow-xl w-full h-auto"
        />
      </div>
      
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Story</span>
        </h2>
        <p className="text-gray-700 mb-4">
          Founded in 2010 by fitness enthusiasts Mr. Vijay Jambre and Ms. Preeti Dhumale, our club began with a simple mission: to create a comprehensive fitness destination that caters to diverse sporting and wellness needs.
        </p>
        <p className="text-gray-700 mb-4">
          What started as a small gym has grown into a multi-facility fitness hub offering world-class gym equipment, Olympic-sized swimming pool, cricket academy, football training, and premium synthetic turf.
        </p>
        <p className="text-gray-700">
          Our journey has been fueled by the transformations we've witnessed in our members' lives, and we continue to evolve with the latest in fitness technology and methodology.
        </p>
      </div>
    </div>
  </div>
</section>

      
      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Values</span>
              </h2>
              <p className="text-gray-600">
                These core principles guide everything we do, from how we design our facilities to how we interact with our members.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: 'Passion for Fitness', 
                description: 'We are passionate about fitness and dedicated to helping our members achieve their goals.' 
              },
              { 
                icon: Users, 
                title: 'Community', 
                description: 'We foster a supportive community where everyone feels welcome and motivated.' 
              },
              { 
                icon: Target, 
                title: 'Excellence', 
                description: 'We strive for excellence in our facilities, programs, and customer service.' 
              },
              { 
                icon: Clock, 
                title: 'Consistency', 
                description: 'We believe in the power of consistent effort and sustainable fitness habits.' 
              },
              { 
                icon: Trophy, 
                title: 'Achievement', 
                description: 'We celebrate every achievement, big or small, on our members\' fitness journeys.' 
              }
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-14 w-14 rounded-full bg-gradient-fitness flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Journey</span>
              </h2>
              <p className="text-gray-600">
                Key milestones in our evolution from a single gym to a comprehensive fitness ecosystem.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-fitness-purple to-fitness-blue"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-6 md:mb-0 flex md:justify-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-md">
                        <div className="text-3xl font-bold text-fitness-purple mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 relative flex justify-center">
                      <div className="h-6 w-6 rounded-full bg-gradient-fitness absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10"></div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-fitness">Leadership Team</span>
              </h2>
              <p className="text-gray-600">
                Meet the visionaries and experts behind our fitness club.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Vijay Jambre',
                role: 'Managing Director',
                bio: 'With over 15 years in the fitness industry, Vijay brings expertise and vision to our club.',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Preeti Dhumale',
                role: 'Operations Director',
                bio: 'Preeti ensures smooth operations across all our facilities with attention to detail and excellence.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Rajesh Kumar',
                role: 'Head Fitness Coach',
                bio: 'An internationally certified trainer, Rajesh leads our team of fitness professionals.',
                image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((member, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-fitness-purple mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fitness-purple to-fitness-blue text-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Fitness Community</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10">
              Experience our world-class facilities and expert guidance to achieve your fitness goals.
            </p>
            <Link to="/contact" className="bg-white text-fitness-purple py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
