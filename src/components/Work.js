import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/todolist.png";
import Img2 from "../assets/airplane.png";
import Img3 from "../assets/portfolio.svg";
import { Link } from "react-scroll";

const projects = [
  {
    title: "📝 Todolist",
    type: "Mobile App",
    image: Img1,
    description: "Aplikasi untuk mencatat dan mengelola aktivitas harian. Menggunakan flutter sebagai framework untuk pengembangan aplikasi.",
    Link: "↗️",
    href: "https://github.com/bayu-Apps/Todo-list-application",
  },
  {
    title: "✈️ Airplane",
    type: "Mobile Apps",
    image: Img2,
    description: "Sebuah aplikasi mobile untuk memesan tiket pesawat, Menggunakan flutter sebagai framework untuk pengembangan aplikasi.",
    Link: "↗️",
  },
  {
    title: "🌐Portfolio",
    type: "Frontend Web",
    image: Img3,
    description: "Website portfolio pribadi dengan animasi interaktif. Menggunakan tailwindcss, react.js, sebagai framework untuk pengembangan aplikasi.",
    Link: "↗️",
  },
];

const Work = () => {
  return (
    <section className="section bg-[#0f0f0f] text-white py-20" id="work">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-400">My Projects</h2>
          <p className="text-gray-400 mt-2">
            Beberapa hasil karya yang pernah saya buat sebagai programmer pelajar.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-blue-400 font-medium">{project.type}</p>
                <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
              </div>
              <div className="p-5 flex justify-end">
                <a href={project.href || "#"} className="text-[24px] text-blue-400 hover:text-blue-500">
                  {project.Link}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
