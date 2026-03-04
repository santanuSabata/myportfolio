import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
  X,
} from "lucide-react";
import { EmailJSResponseStatus } from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sabatasantanu@gmail.com",
      href: "mailto:sabatasantanu@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gurugram, Haryana, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/santanuSabata",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/santanu-sabata-1977383b2/",
    },
    {
      icon: X,
      title: "X",
      href: "https://x.com/SabataSanttanu",
    },
     
  ];

  return (
    <section
      id="contact"
      className="
        relative py-32 overflow-hidden

        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      {/* ===== Floating Blobs ===== */}

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[160px] top-[-200px] left-[-200px]"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[160px] bottom-[-200px] right-[-200px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ===== Header ===== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Let’s build something amazing together 🚀
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* ===== Grid ===== */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ===== Left Info ===== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-10"
          >
            {/* About */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let’s Connect
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Open for internships, freelance projects, and full-time
                opportunities.
              </p>
            </div>

            {/* Info Cards */}

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="
                    flex items-center gap-4 p-5 rounded-2xl

                    bg-white/80 dark:bg-white/5
                    backdrop-blur-xl

                    border border-gray-200 dark:border-white/10
                    shadow-lg transition
                  "
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    <info.icon size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="
                    p-4 rounded-xl

                    bg-white/80 dark:bg-white/5
                    backdrop-blur-xl

                    border border-gray-200 dark:border-white/10
                    shadow-lg transition
                  "
                >
                  <social.icon
                    size={24}
                    className="text-gray-800 dark:text-gray-300"
                  />
                </motion.a>
              ))}
            </div>

            {/* Status */}

            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-400/30">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                Available for Work
              </div>

              <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                Ready to start new projects immediately.
              </p>
            </div>
          </motion.div>

          {/* ===== Form ===== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="
              p-8 rounded-3xl

              bg-white/80 dark:bg-white/5
              backdrop-blur-xl

              border border-gray-200 dark:border-white/10
              shadow-2xl
            "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inputs */}

              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Subject", name: "subject", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {field.label}
                  </label>

                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleInputChange}
                    required
                    className="
                      mt-2 w-full px-4 py-3 rounded-xl

                      bg-white dark:bg-gray-900
                      border border-gray-300 dark:border-gray-700

                      focus:ring-2 focus:ring-blue-500
                      outline-none transition
                    "
                  />
                </div>
              ))}

              {/* Message */}

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="
                    mt-2 w-full px-4 py-3 rounded-xl

                    bg-white dark:bg-gray-900
                    border border-gray-300 dark:border-gray-700

                    focus:ring-2 focus:ring-blue-500
                    outline-none resize-none transition
                  "
                />
              </div>

              {/* Button */}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                type="submit"
                className="
                  w-full py-4 rounded-xl font-semibold text-white

                  bg-gradient-to-r from-blue-600 to-purple-600
                  shadow-xl hover:shadow-2xl transition

                  flex items-center justify-center gap-2
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle size={20} />
                    Sent Successfully
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <AlertCircle size={20} />
                    Failed
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
