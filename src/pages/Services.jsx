
import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ArrowRight, DumbbellIcon, Bath, Trophy, Volleyball, GraduationCap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Services = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Define services with their details
  const services = [
    {
      id: 'gym',
      title: 'Gym',
      icon: DumbbellIcon,
      description: 'Our state-of-the-art gym facility offers the latest equipment, expert trainers, and specialized programs to help you achieve your fitness goals.',
      features: [
        'Modern cardio and strength equipment',
        'Functional training zone',
        'Free weights area',
        'Personalized training programs',
        'Nutritional guidance',
        'Fitness assessment'
      ],
      subservices: [
        {
          title: 'Steam',
          description: 'Relax and rejuvenate with our premium steam room facilities, perfect for post-workout recovery.',
          image: 'https://tse2.mm.bing.net/th?id=OIP.rDHR6XxLByY9TuZpENr-GwHaFr&pid=Api&P=0&h=220'
        },
        {
          title: 'Private Coaching',
          description: 'One-on-one training sessions with our certified fitness experts tailored to your specific goals and needs.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'CrossFit',
          description: 'High-intensity functional training in a motivating group environment to push your limits and improve overall fitness.',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Personal Training',
          description: 'Customized workout plans and dedicated guidance from our fitness professionals to accelerate your results.',
          image: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Group X Activities',
          description: 'Energetic group classes including Zumba, Yoga, and more led by passionate instructors in a fun, social setting.',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹1,500',
          duration: 'per month',
          features: ['Gym access', 'Basic equipment', 'Locker usage', 'Fitness assessment']
        },
        {
          name: 'Premium',
          price: '₹2,500',
          duration: 'per month',
          features: ['Full gym access', 'Steam room', '2 PT sessions/month', 'Nutrition consultation', 'All group classes']
        },
        {
          name: 'Elite',
          price: '₹4,000',
          duration: 'per month',
          features: ['24/7 gym access', 'Private coaching', 'Unlimited PT sessions', 'Custom nutrition plan', 'CrossFit access', 'All premium amenities']
        }
      ],
      offers: [
        'Join with a friend and get 10% off both memberships',
        'Annual membership discount of 15%',
        'First-time visitors get a free 3-day pass',
        'Corporate packages available'
      ]
    },
    {
      id: 'swimming',
      title: 'Swimming Pool',
      icon: Bath,
      description: 'Our Olympic-sized swimming pool provides the perfect environment for swimmers of all levels, from beginners to competitive athletes.',
      features: [
        'Olympic-sized pool',
        'Temperature-controlled water',
        'Dedicated lanes for different speeds',
        'Kids swimming area',
        'Qualified lifeguards',
        'Changing rooms and showers'
      ],
      subservices: [
        {
          title: 'Personal Coaching',
          description: 'One-on-one swimming lessons with our certified coaches to improve your technique and confidence in the water.',
          image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Swimming Gear',
          description: 'High-quality swimming caps, goggles, and other accessories available for purchase at our facility.',
          image: 'https://www.enjoy-swimming.com/wp-content/uploads/swimming-gear-1.jpg'
        },
        {
          title: 'Pool Construction',
          description: 'Professional swimming pool design and construction services for residential and commercial properties.',
          image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹1,200',
          duration: 'per month',
          features: ['Pool access', 'Changing facilities', 'Shower access']
        },
        {
          name: 'Premium',
          price: '₹2,000',
          duration: 'per month',
          features: ['Unlimited pool access', '2 coaching sessions/month', 'Swimming gear discount', 'Reserved lane option']
        },
        {
          name: 'Family',
          price: '₹3,500',
          duration: 'per month',
          features: ['Access for 4 family members', '4 coaching sessions/month', 'Kids swimming lessons', 'Reserved family area']
        }
      ],
      offers: [
        'Senior citizen discount of 15%',
        'Early morning swimming special rates',
        'Group coaching packages available',
        'Seasonal discounts'
      ]
    },
    {
      id: 'cricket',
      title: 'Cricket',
      icon: Trophy,
      description: 'Our cricket facilities and academy offer professional coaching and practice areas for players of all skill levels.',
      features: [
        'Professional cricket nets',
        'Bowling machines',
        'Video analysis',
        'Specialized coaching',
        'Practice pitches',
        'Indoor and outdoor facilities'
      ],
      subservices: [
        {
          title: 'Personal Coaching',
          description: 'One-on-one cricket training with our expert coaches focusing on batting, bowling, or fielding techniques.',
          image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹1,800',
          duration: 'per month',
          features: ['Access to nets', 'Basic equipment', 'Group training sessions']
        },
        {
          name: 'Advanced',
          price: '₹3,000',
          duration: 'per month',
          features: ['Unlimited access', 'Premium equipment', '2 personal coaching sessions/week', 'Video analysis']
        },
        {
          name: 'Professional',
          price: '₹5,000',
          duration: 'per month',
          features: ['Complete access', 'All equipment', 'Daily personal coaching', 'Custom training plan', 'Match practice', 'Performance tracking']
        }
      ],
      offers: [
        'Weekend special training camps',
        'School team discounts',
        'Refer a friend and get 10% off',
        'Summer intensive programs'
      ]
    },
    {
      id: 'football',
      title: 'Football',
      icon: Volleyball,
      description: 'Our football facilities provide the perfect environment for training, practice, and recreational play with professional coaching.',
      features: [
        'Professional football field',
        'Quality turf',
        'Training equipment',
        'Expert coaching',
        'Team facilities',
        'Floodlights for evening practice'
      ],
      subservices: [
        {
          title: 'Personal Coaching',
          description: 'One-on-one football training with our professional coaches to improve your skills, technique, and game strategy.',
          image: 'https://image.freepik.com/foto-gratis/entrenador-futbol-vistiendo-camiseta-blanca-coach-campo-deportes-al-aire-libre-entrenando-su-equipo_41451-762.jpg'
        }
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹1,500',
          duration: 'per month',
          features: ['Field access', 'Basic training', 'Group practice sessions']
        },
        {
          name: 'Intermediate',
          price: '₹2,500',
          duration: 'per month',
          features: ['Regular field access', 'Specialized training', '2 coaching sessions/week', 'Equipment usage']
        },
        {
          name: 'Advanced',
          price: '₹4,000',
          duration: 'per month',
          features: ['Priority field access', 'Intensive coaching', 'Personalized training plan', 'Video analysis', 'Match opportunities', 'Full equipment access']
        }
      ],
      offers: [
        'Team registration discounts',
        'Early bird training sessions at special rates',
        'Family packages available',
        'Multi-sport discounts'
      ]
    },
    {
      id: 'turf',
      title: 'Turf',
      icon: GraduationCap,
      description: 'Our premium synthetic turf provides an excellent surface for various sporting activities with consistent play quality in all weather conditions.',
      features: [
        'High-quality synthetic turf',
        'Multi-sport usage',
        'Durable all-weather surface',
        'Proper drainage system',
        'Floodlights',
        'Boundary markings'
      ],
      packages: [
        {
          name: 'Hourly',
          price: '₹800',
          duration: 'per hour',
          features: ['Turf access', 'Basic equipment', 'Changing rooms']
        },
        {
          name: 'Half Day',
          price: '₹3,500',
          duration: '4 hours',
          features: ['Exclusive turf access', 'All equipment', 'Changing facilities', 'Refreshments']
        },
        {
          name: 'Full Day',
          price: '₹6,000',
          duration: '8 hours',
          features: ['Complete turf access', 'Premium equipment', 'Changing rooms', 'Refreshments', 'Event support']
        }
      ],
      offers: [
        'Early morning special rates',
        'Regular booking discounts',
        'Corporate event packages',
        'Off-peak hour discounts'
      ]
    }
  ];
  
  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.substring(1);
      const tabIndex = services.findIndex(service => service.id === serviceId);
      if (tabIndex !== -1) {
        setSelectedTab(tabIndex);
      }
    }
  }, [location]);
  
  return (
    <div className="bg-with-logo">
      {/* Hero Banner with Full Background Image */}
      <section className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Services Hero" 
          className="hero-bg-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">For Your Fitness Journey</span>
          </h1>
          <p className="hero-description">
            Discover our comprehensive range of world-class facilities designed to elevate your performance and transform your fitness experience.
          </p>
          <div className="hero-buttons">
            <a href="#gym" className="btn-hero-primary">
              Explore Gym
            </a>
            <a href="#swimming" className="btn-hero-secondary">
              Swimming Facilities
            </a>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <ScrollAnimation>
              <Tab.List className="flex flex-wrap justify-center gap-2 mb-12">
                {services.map((service) => (
                  <Tab key={service.id} className={({ selected }) => 
                    `px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                      selected 
                        ? 'bg-gradient-fitness text-white shadow-md' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`
                  }>
                    <span className="flex items-center">
                      <service.icon className="mr-2 h-4 w-4" />
                      {service.title}
                    </span>
                  </Tab>
                ))}
              </Tab.List>
            </ScrollAnimation>
            
            <Tab.Panels>
              {services.map((service, idx) => (
                <Tab.Panel key={idx}>
                  <div className="space-y-16">
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
  {/* Image Section */}
  <div className="lg:w-1/2">
  <img 
  src={`${
    service.id === 'gym' 
      ? 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
      : service.id === 'swimming' 
      ? 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
      : service.id === 'cricket' 
      ? 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
      : service.id === 'football' 
      ? 'https://images.unsplash.com/photo-1599204606350-d7fb87de75f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' 
      : service.id === 'turf'
      ? 'https://plus.unsplash.com/premium_photo-1661912014730-cb332faa85ad?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEyNTY4OTEzfA&ixlib=rb-4.0.3'
      : 'https://images.unsplash.com/photo-1590057097412-3f7ca9190cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }`} 
  alt={service.title} 
  className="rounded-lg shadow-xl w-full h-auto object-cover"
/>





  </div>

  {/* Text Section */}
  <div className="lg:w-1/2">
    <h2 className="text-3xl font-bold mb-6">
      {service.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Services</span>
    </h2>
    
    <p className="text-gray-600 mb-6">
      {service.description}
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
      {service.features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <Link to="/contact" className="btn-primary">
      Enquire Now
    </Link>
  </div>
</div>

                    
                    {service.subservices && service.subservices.length > 0 && (
                      <div>
                        <ScrollAnimation>
                          <h3 className="text-2xl font-bold mb-10 text-center">
                            Our {service.title} <span className="text-transparent bg-clip-text bg-gradient-fitness">Programs</span>
                          </h3>
                        </ScrollAnimation>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {service.subservices.map((subservice, index) => (
                            <ScrollAnimation key={index} delay={index * 100}>
                              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="h-48 overflow-hidden">
                                  <img 
                                    src={subservice.image} 
                                    alt={subservice.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                  />
                                </div>
                                <div className="p-6">
                                  <h4 className="text-xl font-bold mb-3">{subservice.title}</h4>
                                  <p className="text-gray-600">{subservice.description}</p>
                                </div>
                              </div>
                            </ScrollAnimation>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <ScrollAnimation>
                        <h3 className="text-2xl font-bold mb-10 text-center">
                          {service.title} <span className="text-transparent bg-clip-text bg-gradient-fitness">Packages</span>
                        </h3>
                      </ScrollAnimation>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.packages.map((pkg, index) => (
                          <ScrollAnimation key={index} delay={index * 100}>
                            <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                              index === 1 ? 'border-fitness-purple' : 'border-gray-200'
                            }`}>
                              <div className={`p-6 ${
                                index === 1 ? 'bg-gradient-fitness text-white' : 'bg-gray-50'
                              }`}>
                                <h4 className="text-xl font-bold">{pkg.name} Package</h4>
                                <div className="mt-4 flex items-end">
                                  <span className="text-3xl font-bold">{pkg.price}</span>
                                  <span className="ml-2 text-sm opacity-80">{pkg.duration}</span>
                                </div>
                              </div>
                              <div className="p-6">
                                <ul className="space-y-3">
                                  {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <Check className="h-5 w-5 text-fitness-purple mr-2" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                
                                <div className="mt-8">
                                  <Link to="/contact" className={`w-full text-center py-3 px-6 rounded-md font-medium block ${
                                    index === 1 
                                      ? 'bg-gradient-fitness text-white' 
                                      : 'border border-fitness-purple text-fitness-purple hover:bg-fitness-purple hover:text-white'
                                  } transition-all duration-300`}>
                                    Select Plan
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </ScrollAnimation>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <ScrollAnimation>
                        <h3 className="text-2xl font-bold mb-10 text-center">
                          Current <span className="text-transparent bg-clip-text bg-gradient-fitness">Offers</span>
                        </h3>
                      </ScrollAnimation>
                      
                      <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {service.offers.map((offer, index) => (
                            <ScrollAnimation key={index} delay={index * 100}>
                              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex">
                                <div className="h-10 w-10 rounded-full bg-fitness-purple/10 flex items-center justify-center mr-4 flex-shrink-0">
                                  <service.icon className="h-5 w-5 text-fitness-purple" />
                                </div>
                                <div>
                                  <p className="font-medium">{offer}</p>
                                </div>
                              </div>
                            </ScrollAnimation>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-fitness-purple to-fitness-blue text-white">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10">
              Contact us today to learn more about our services, packages, and special offers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-fitness-purple py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-all duration-300">
                Contact Us
              </Link>
              <Link to="/gallery" className="bg-transparent border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-all duration-300">
                View Gallery
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
