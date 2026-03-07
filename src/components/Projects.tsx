import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filters = ["All", "WordPress","WooCommerce","Full Stack", "Static", "Portfolios"];

  const dummyProjects = [ 
      
    {
      title: "My Protfolio",
      category: "Static",
      desc: "Fullstack Developer with 9 years of experience building scalable web applications using PHP, Node.js, React, and WordPress. building 150+ real-world projects, scalable web applications, and modern business solutions.",
      image:"/images/projects/santanusabata.png",
      github: "#",
      live: "https://santanusabata.netlify.app/",
    },
    {
      title: "My Souce",
      category: "WooCommerce",
      desc: "Distributor of  Gluten free, quality chilli sauces, Suitable for Vegans. We supply our products direct to retail across London. We are also interested in developing a new range of functional products.",
      image:"/images/projects/mysauce.png",
      github: "#",
      live: "https://mysauce.co.uk/",
    },
    {
      title: "Momento Box",
      category: "WooCommerce",
      desc: "Where artistry meets functionality, and every item tells a story. Since our establishment in 2012, we have been passionately committed to creating unique, high-quality products that cater to a wide range of needs.",
      image:"/images/projects/momentobox.png",
      github: "#",
      live: "https://momentobox.co/",
    },
    {
      title: "Cocopandy",
      category: "WooCommerce",
      desc: "Cocopandy was started in 2021 by a family with children. When the family's first child started attending preschool.",
      image:"/images/projects/cocopandy-com.png",
      github: "#",
      live: "https://cocopandy.com/",
    },
    {
      title: "B Dialdas",
      category: "WooCommerce",
      desc: "From modest beginnings to a worldwide trading network, we’ve grown by putting people first. As a Hong Kong-based import-export firm, we specialize in sourcing and distributing quality products—from industrial chemicals and wax to bakery goods,",
      image:"/images/projects/bdialdas-com.png",
      github: "#",
      live: "https://bdialdas.com/",
    },
    {
      title: "Harley-Davidson strongholds.",
      category: "WooCommerce",
      desc: "Since 1985, we’ve been one of Melbourne’s original Harley-Davidson strongholds. No fluff, no gimmicks just decades of experience and a passion for HD.",
      image:"/images/projects/hddev.png",
      github: "#",
      live: "https://hddev.com.au/",
    },
    {
      title: "Poke Hub",
      category: "WooCommerce",
      desc: "Welcome to Poke Hub, a curated destination for authentic Pokémon trading cards.",
      image:"/images/projects/pokehub-in.jpg",
      github: "#",
      live: "https://pokehub.in/",
    },
    {
      title: "Galli family oral tradition Watch ",
      category: "WooCommerce",
      desc: "Galli family oral tradition has it that the “Galli” came from Italy.",
      image:"/images/projects/galli-ch.png",
      github: "#",
      live: "https://galli.ch/",
    },
    {
      title: "Akums",
      category: "WordPress",
      desc: "Largest Pharmaceutical CDMO delivering Innovation, Quality, and excellence across Diverse Formulations.",
      image:"/images/projects/Akums.png",
      github: "#",
      live: "https://akums.in/",
    },

    {
      title: "Garage Door Installations & Repair Services in Florida ",
      category: "WordPress",
      desc: "Delivering Excellence In Every Garage Door Repair Task With years of experience, Go Pro Garage Door Service provides unmatched quality and reliability. ",
      image:"/images/projects/goprogaragedoorservice.png",
      github: "#",
      live: "https://goprogaragedoorservice.com/",
    },

    {
      title: "Music From Anotehr Planet",
      category: "WordPress",
      desc: "Ivan's Musical Compositions and Guitar Playing are Recognised Worldwide. Played daily to an audience of hundreds of millions in USA, Europe and Asia. His library contains a huge body of work covering all genres.",
      image: "/images/projects/bertolla.png",
      github: "#",
      live: "https://bertolla.com/",
    },

    {
      title: "Bilge Nur Saltik's",
      category: "WordPress",
      desc: "Bilge Nur Saltik's intent is to incorporate culture with contemporary design. Pairing the old with the new, she works with traditional craftsmen–tapping into their age-old techniques and knowledge–and introduces them to new materials and fabrication processes.",
      image:"/images/projects/bilgenursaltik.png",
      github: "#",
      live: "https://www.bilgenursaltik.com/",
    },

    {
      title: "EduLearn Online Course Platform",
      category: "WordPress",
      desc: "Quist Watches is an online retailer and brand that offers a collection of wristwatches designed with a focus on timeless design, craftsmanship, and simplicity, often blending elements of traditional watchmaking with modern aesthetic sensibilities.",
      image:"/images/projects/quistwatches.png",
      github: "#",
      live: "https://quistwatches.com/",
    },
      {
      title: "TravelReconnect Tourism Website",
      category: "Static",
      desc: "At TravelReconnect, we are passionate about creating meaningful travel experiences that connect people to the world around them.",
      image:
        "/images/projects/travelreconnect.png",
      github: "#",
      live: "https://travelreconnect.in/",
    },

    {
      title: "ParcelX",
      category: "Static",
      desc: "ParcelX offers AI-based smoother, easier and reliable platform to manage your end to end shipping needs for your business.",
      image:
        "/images/projects/Parcelx.png",
      github: "#",
      live: "https://parcelx.in/",
    },


    {
      title: "TravelX Tourism Website",
      category: "Static",
      desc: "Travel and tourism website showcasing destinations, packages, booking enquiry forms, and immersive visual design.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },
  
    {
      title: "FinanceTracker Dashboard",
      category: "Full Stack",
      desc: "Personal finance management dashboard enabling expense tracking, budgeting, transaction history, and financial insights visualization.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },

    {
      title: "Creative Agency Landing Page",
      category: "Static",
      desc: "High-conversion agency landing page with service highlights, animations, testimonials, and lead capture forms.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },

    {
      title: "EventSphere Event Booking Platform",
      category: "Full Stack",
      desc: "Event booking platform allowing users to browse events, reserve tickets, manage bookings, and receive notifications.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Azafashions",
      category: "Full Stack",
      desc: "Aza, which means 'desire' in Sanskrit, was founded in 2005 by Dr Alka Nishar. Her vision was to create a friendly, welcoming space showcasing the best luxury Indian fashion for women and men.",
      image:"/images/projects/azafashion.png",
      github: "#",
      live: "https://www.azafashions.com/",
    },
  ];

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleCount(3);
  }, [activeFilter]);

  // Filter logic
  const filteredProjects =
    activeFilter === "All"
      ? dummyProjects
      : dummyProjects.filter((p) => p.category === activeFilter);

  // Show limited projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="
        relative py-32
        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my real-world and personal projects.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-full font-semibold transition
                ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="
                  group rounded-3xl overflow-hidden
                  bg-white dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  shadow-xl dark:shadow-none
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                    {project.category}
                  </span>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.desc}
                  </p>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-sm hover:text-blue-500"
                    >
                      <Github size={16} />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-sm hover:text-blue-500"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="
                px-8 py-3 rounded-full font-semibold
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white shadow-lg
                hover:shadow-xl transition
              "
            >
              View More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
