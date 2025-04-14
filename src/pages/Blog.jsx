
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Search, Tag } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample blog posts with image URLs
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Effective Weight Training',
      excerpt: 'Maximize your gym sessions with these proven weight training techniques that deliver results.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Fitness',
      author: 'Rahul Sharma',
      date: 'April 5, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Benefits of Swimming for All Age Groups',
      excerpt: 'Discover why swimming is one of the best full-body workouts with benefits for people of all ages.',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Swimming',
      author: 'Priya Patel',
      date: 'March 22, 2023',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Nutrition Guide for Active Athletes',
      excerpt: 'Learn about the optimal nutrition strategies to fuel your athletic performance and recovery.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Nutrition',
      author: 'Dr. Amit Kumar',
      date: 'March 15, 2023',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Improving Your Cricket Batting Technique',
      excerpt: 'Professional tips to enhance your cricket batting skills and score more runs consistently.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Cricket',
      author: 'Vijay Jambre',
      date: 'March 8, 2023',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'The Mental Benefits of Regular Exercise',
      excerpt: 'How regular physical activity can boost your mental health, reduce stress, and improve cognitive function.',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Wellness',
      author: 'Preeti Dhumale',
      date: 'February 25, 2023',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Football Training Drills for Improved Performance',
      excerpt: 'Essential drills to enhance your football skills, agility, and game-time decision making.',
      image: 'https://thumbs.dreamstime.com/z/young-boys-sports-club-soccer-football-training-kids-enhance-skills-natural-turf-grass-pitch-practice-session-children-148328878.jpg',
      category: 'Football',
      author: 'Suresh Singh',
      date: 'February 12, 2023',
      readTime: '8 min read'
    }
  ];
  
  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-20 bg-with-logo">
{/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Fitness <span className="text-fitness-purple">Blog</span>
            </h1>
            <p className="text-lg md:text-xl animate-fade-in animation-delay-200">
              Insights, tips, and knowledge to support your fitness journey.
            </p>
          </div>
        </div>
      </section>


      
      {/* Blog Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <ScrollAnimation>
                {/* <div className="mb-12">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div> */}
              </ScrollAnimation>
              
              {/* Category Tabs (Mobile) */}
              <ScrollAnimation>
                <div className="mb-8 lg:hidden">
                  <select 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fitness-purple focus:border-transparent"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </ScrollAnimation>
              
              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <ScrollAnimation key={post.id} delay={index % 2 * 100}>
                      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <Link to={`/blog/${post.id}`} className="block">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-3">
                              <span className="text-xs font-medium py-1 px-2 rounded-full bg-fitness-purple/10 text-fitness-purple">
                                {post.category}
                              </span>
                              {/* <span className="text-gray-500 text-sm ml-3 flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                              </span> */}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-fitness-purple transition-all duration-300">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              {/* <div className="flex items-center mr-4">
                                <User className="h-3 w-3 mr-1" /> {post.author}
                              </div> */}
                              {/* <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" /> {post.date}
                              </div> */}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found matching your criteria.</p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <ScrollAnimation>
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <button 
                          onClick={() => setActiveCategory(category)}
                          className={`w-full text-left px-2 py-1.5 rounded-md transition-all duration-300 flex items-center ${
                            activeCategory === category 
                              ? 'bg-fitness-purple/10 text-fitness-purple font-medium' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <Tag className="h-4 w-4 mr-2" />
                          {category}
                          <span className="ml-auto text-sm text-gray-500">
                            {category === 'All' 
                              ? blogPosts.length 
                              : blogPosts.filter(post => post.category === category).length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <li key={post.id} className="flex items-start">
                        <div className="h-14 w-14 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <Link to={`/blog/${post.id}`} className="font-medium text-sm hover:text-fitness-purple transition-colors">
                            {post.title}
                          </Link>
                          {/* <p className="text-xs text-gray-500 mt-1">{post.date}</p> */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Newsletter */}
                {/* <div className="bg-gradient-to-br from-fitness-purple to-fitness-blue rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Stay updated with our latest fitness tips and news.
                  </p>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full py-2 px-4 rounded-md mb-3 bg-white/20 placeholder-white/60 border border-white/30 focus:outline-none focus:bg-white/30"
                  />
                  <button className="w-full py-2 px-4 bg-white text-fitness-purple rounded-md font-medium hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </div> */}
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
