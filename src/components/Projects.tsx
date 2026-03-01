import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filters = ["All", "Full Stack", "Static", "Portfolios"];

  const dummyProjects = [
    {
      title: "FitTrack — Fitness Tracking App",
      category: "Full Stack",
      desc: "Fitness tracking web application allowing users to monitor workouts, track calories, set goals, and visualize progress through analytics dashboards.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },

    {
      title: "FoodieHub Restaurant Website",
      category: "Static",
      desc: "Modern restaurant website featuring menu showcase, online reservation system, customer reviews, and responsive mobile-first design.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },

    {
      title: "TaskFlow Project Management Tool",
      category: "Full Stack",
      desc: "Collaborative project management platform with task assignment, deadlines, progress tracking, team roles, and productivity analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },

    {
      title: "EduLearn Online Course Platform",
      category: "Full Stack",
      desc: "Online learning platform with course enrollment, video lessons, quizzes, progress tracking, and student dashboard.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
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
