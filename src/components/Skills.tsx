import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Cpu, Globe } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "React.js", level: 75 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "Codeignator", level: 90 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 85 },
        { name: "PL/SQL", level: 75 },
      ],
    },
    {
      title: "Core CS",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "OOP", level: 90 },
        { name: "DSA", level: 88 },
        { name: "OS", level: 80 },
        { name: "DBMS", level: 85 },
        { name: "Networks", level: 75 },
      ],
    },
    {
      title: "Deployment & SEO",
      icon: Globe,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Hostinger hPanel", level: 85 },
        { name: "Custom Domain Setup", level: 90 },
        { name: "Shared Hosting", level: 80 },
        { name: "Website Deployment", level: 88 },
        { name: "Basic SEO", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative py-32 overflow-hidden

        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[150px] -top-40 -left-40"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[150px] bottom-[-150px] right-[-150px]"
        animate={{ scale: [1.3, 1, 1.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center space-y-6 mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technical expertise for building, deploying, and maintaining
            scalable web applications.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
              }}
              className="
                relative group rounded-3xl p-6

                bg-white/80 dark:bg-white/5
                backdrop-blur-xl

                border border-gray-200 dark:border-white/10
                shadow-xl dark:shadow-none

                transition-all duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-25 blur-xl transition" />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                >
                  <category.icon size={22} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="relative space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>

                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.1 + j * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= TOOLS ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
    mt-28 p-10 rounded-3xl text-center

    bg-gradient-to-r
    from-blue-50 to-purple-50
    dark:from-white/5 dark:to-white/5

    border border-gray-200 dark:border-white/10
    backdrop-blur-xl
  "
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {[
              {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              {
                name: "GitHub",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "GitHub Copilot",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "GitHub Actions",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              },
              {
                name: "Postman",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
              },
              {
                name: "Hoppscotch",
                icon: "https://i0.wp.com/oss.capital/wp-content/uploads/2025/02/hoppscotch%402x.png?fit=556%2C264&ssl=1",
              },
              {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              },
              {
                name: "Netlify",
                icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
              },
              {
                name: "Render",
                icon: "https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg",
              },
              {
                name: "Vercel",
                icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
              },
              {
                name: "Hostinger",
                icon: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hostinger_Logotype.png",
              },
              {
                name: "Amazon Q",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              },
              {
                name: "Squoosh",
                icon: "https://web.dev/static/blog/squoosh-v2/image/thumbnail.jpg",
              },
              {
                name: "ChatGpt",
                icon: "data:image/png;base64,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",
              },
              {
                name: "Perplexity",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUfHx////8AAAAWFhZnZ2evr6+VlZUICAja2tqqqqq0tLS9vb0SEhKenp5tbW0cHBzExMTi4uL39/c2NjZ2dnaNjY3t7e0uLi5gYGBVVVWEhITNzc1OTk5BQUHT09M7OzsnJycmOu4sAAAEGklEQVRogbXabWOCIBAAYDhLzUjEyvU26///ygGHipiuQO7TlusJCQ84Rug46vvufCo3X0d5Ou/utYORkby9MgDGEo9g6p3XbT2D12eAhJOA4AlAWr/DCwJBsvGBFBO8LtegkS/rMd4cYR1aBRwbG29ebD2bEPZqBrz+WdWW+k/d45dsXZuQ7NLhhxX7uws4IN6sNU7s4NBo/LR6p6jITgpvInSKCtl0QtMoDZdNTyV+jNDjKviREjHfK5NP5cmbxDbbNhBkN4vzh3OJHx+PX9fKnnM67Mht9uGEvfPBshfp3vlAOM3eOruRSzKLF5KymzXFuXxW8jk8uZDZu1I4bcH67AnOYU/ncf4krzlb41RY+dLFWZLTBXyBNjhtnv1z4ODZr06s8/hSgJmv+kEzxmGDl/3xVr29hDc43NSlpT7/F091Xr6Bi3PYqgvXMgQ/wEPNKTjgBzxhd/11wCkMz/RsW6gB3+OMCNXZnLFAXLZSDbg24z0OV3U36gELxmX/qj7IE2ZwKFV3p/oWgnGpF9jDGtezIz1pcgXcTLf171nhe/WjGfur4Diq64rSqrVzgg8uh4EMxBkGdjRGBVn3qsbVTx9PZ/xRqtjIhu43pYlN2tntpexflN0l9K+PT3UYFsEfR/Fp5+Cj/V1sv8Gb3I22W3W3k0vNl/gO3Lh1jTxMLu2+xp3X0vkuCMW1LeTYqFQqcC+G4foJFeoTKsgnbQ/D0SaIa318OQRXb6aCJZnG+UQPwfWwzwHzeQVkovvjmG/zzMxElU7wY90bR7vVy7oOd3VfXC/YjD3ghGe27olzkJmR3s1ydMDHbffD0a66pa6Fj9ruhXNobXuE2233wdG2V542buk+uF5RFNbyf4wbXW4GvfDGmWAcHHX5F164XLNd7B2Ti+tkE4BvlvGDLw4THM7OnkjhW4+ZKC+Koh7juE0pLUXhQv5h/iVuwsLhii+drHR48Jj9izf4sORKh3Q44B+vW1h5UJE2Fq76u4shHUo81397KD+ukjFcMVhfKC5zZXdVwnqyui9UxrcVuAHHxNtwPVryId+YoegTPY5bC5yg95C1fYZfAU8SgY3FbQvehkiSNXD201DcXpk9kdnFyA1AMA4PXB8Sa6todjFZKI47/JuzydUDs74G4le9tt1MtudqvyJzZhqE77GFxMVNzeIehKtv7tgVXMZVi8eXz/07XJC+EDWut2TP5l/8tYy32VDkcipFOEYX8NdSAU3QcXnOrXElmVjC+XOp9Cdk/lss/XGZCubx5LJUtBTn8Rvf1RUrt4o5BLstlFuTi3PpTbmVZ5v5O98tFYonb3tXKJ61VaE4aok7bnE+6rFC1AORuEc5UQ+h4h6fxT34i3pkGfewNe4xMY16wE3jHs3TqP9UgP6a/w7xB00RPXMaffToAAAAAElFTkSuQmCC",
              },
              {
                name: "BalsaMiq",
                icon: "data:image/jpeg;base64,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",
              },
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="
          group flex flex-col items-center justify-center gap-2
          px-4 py-4 rounded-2xl

          bg-white dark:bg-white/5
          border border-gray-200 dark:border-white/10

          shadow-md dark:shadow-none
          transition-all duration-300
        "
              >
                {/* Logo */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  loading="lazy"
                  className="
            w-10 h-10 object-contain
            group-hover:scale-110 transition
          "
                />

                {/* Name */}
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-300 text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
