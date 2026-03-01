import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Team Leader",
      company: "iAmaze Consultancy",
      period: "Mar 2020 - Till To Date",
      location: "Remote",
      description:
        "WordPress Team Leader | iAmaze Consultancy | 6 Years Leading a team of developers to deliver high-quality, scalable WordPress websites and applications. Oversee custom theme/plugin development, API integrations, and performance optimization. Manage project timelines, conduct code reviews, and ensure on-time delivery while mentoring junior developers.",
      achievements: [
        "Successfully led 20+ WordPress projects from concept to deployment over 6 years.",
        "Developed custom plugins and themes that improved client workflow and user experience.",
        "Implemented API integrations (payment gateways, CRM, ERP) enhancing business automation.",
        "Implemented API integrations (payment gateways, CRM, ERP) enhancing business automation.",
        "Optimized website performance, reducing load times by 30–40% across major projects.",
        "Mentored and trained junior developers, improving team productivity and code quality.",
        "Established version control and deployment best practices, ensuring smooth project releases.",
        "Delivered projects on time consistently, maintaining high client satisfaction and retention.",
      ],
      technologies: ["WordPress", "Performance Optimization","WooCommerce Development", "Custom Theme Development", "Divi", "Avada","Astra Pro","OceanWP","MySql","Figma","Balsamiq "],
    },

    {
      title: "WordPress Developer",
      company: "MPower Softech Pvt.Ltd.",
      period: "Dec 2017 - Feb 2020",
      location: "Ahmedabad",
      description:
        "A skilled WordPress Developer to design, develop, and maintain high-performance websites. The role includes custom theme and plugin development, WooCommerce customization, and API integrations. You will be responsible for optimizing website speed, security, and overall performance. The ideal candidate should have strong PHP, HTML, CSS, JavaScript, and MySQL skills with experience in WordPress best.",
      achievements: [
        "Developed high-performance WordPress websites with optimized speed, security, and scalability.",
        "Created custom themes and plugins to meet unique client requirements, improving website functionality.",
        "Implemented WooCommerce customizations that enhanced user experience and streamlined eCommerce operations",
        "Integrated third-party APIs for payment gateways, CRM systems, and ERP solutions, automating workflows.",
        "Reduced website load times and improved Core Web Vitals by 30–40% through optimization techniques",
        "Maintained secure, bug-free websites by following WordPress best practices, regular updates, and audits.",

      ],
      technologies: ["WordPress","HTML5", "CSS", "JavaScript", "REST APIs","WIX","Divi", "Avada","Astra Pro","OceanWP"],
    },

    {
      title: "Software Engineer",
      company: "Online Infocom Pvt.Ltd.",
      period: "Jan 2014 - Nov 2016",
      location: "Ahmedabad",
      description:
        "Software Engineer responsible for installing, configuring, and maintaining desktop software applications. The role includes troubleshooting technical issues, providing user support, and ensuring smooth system performance. The ideal candidate should have strong technical knowledge, problem-solving skills, and the ability to handle software deployment efficiently.",
      achievements: [
        "Successfully installed, configured, and maintained 100+ desktop software applications, ensuring smooth operation across multiple systems.",
        "Resolved technical issues promptly, reducing system downtime by 30% and improving user productivity.",
        "Implemented standardized software deployment procedures, streamlining rollouts and updates across the organization.",
        "Provided user support and training, improving end-user satisfaction and reducing repetitive helpdesk requests",
      ],
      technologies: ["VB", "MS Access", "SQL"],
    },

    {
      title: "Software Engineer",
      company: "Compaq Software Pvt.Ltd.",
      period: "Apr 2012 - Dec 2013",
      location: "Surat",
      description:
        "Software Engineer responsible for installing, configuring, and maintaining desktop software applications. The role includes troubleshooting technical issues, providing user support, and ensuring smooth system performance. The ideal candidate should have strong technical knowledge, problem-solving skills, and the ability to handle software deployment efficiently.",
      achievements: [
        "Installed, configured, and maintained 100+ desktop applications, ensuring smooth system performance.",
        "Troubleshot technical issues, reducing system downtime by 30%",
        "Provided user support and training, improving end-user satisfaction",
      ],
      technologies: ["VB", "SQL", "MS Access", "FoxPro"],
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative py-32 overflow-hidden

        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      {/* Glow Background */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[180px] top-[-150px] left-[-150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[180px] bottom-[-150px] right-[-150px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in building scalable and impactful solutions
          </p>

          <div className="mt-6 w-28 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* ================= EXPERIENCE CARDS ================= */}

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="
                  relative p-8 md:p-10 rounded-3xl

                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl

                  border border-gray-200 dark:border-white/10

                  shadow-xl
                  transition-all duration-300
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 blur-xl transition" />

                <div className="relative grid md:grid-cols-3 gap-8">
                  {/* LEFT */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Briefcase className="text-blue-600 dark:text-blue-400" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>

                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE */}
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                        <Award size={16} />
                        Key Achievements
                      </h4>

                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            px-3 py-1 rounded-full text-xs font-medium

                            bg-blue-100 dark:bg-blue-900/30
                            text-blue-700 dark:text-blue-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
            mt-32 text-center p-12 rounded-3xl

            bg-gradient-to-r
            from-blue-500/10 to-purple-500/10

            border border-gray-200 dark:border-white/10
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I’m open to exciting opportunities and collaborations. Let’s build
            something impactful.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-8 py-3 rounded-full

              bg-gradient-to-r from-blue-600 to-purple-600
              text-white font-semibold

              shadow-lg hover:shadow-xl
              transition
            "
          >
            Contact Me 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
