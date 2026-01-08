

import profileImg from "../assets/img.jpg";
import profileImage from "../assets/image1.png";
import profileImage2 from "../assets/image2.png";
import profileImage3 from "../assets/image3.png";
import ContactSection from "../components/ContactSection";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";


const Home = () => {
  return (
    <div >
{/* HERO */}
<section
  id="home"
  className="min-h-screen flex items-center bg-gradient-to-br from-[#0d0d28] via-[#0f0f2d] to-[#050510] pt-0"
>
  <div className="max-w-7xl mx-auto px-1 grid md:grid-cols-2 gap-8 items-center">

    {/* LEFT TEXT */}
    <div className="text-left mt-25">
      <h1 className="text-7xl md:text-5xl font-extrabold mb-6">
  <span className="text-orange-500">Hi,I’m a  Rishu Raj 👋</span></h1>
      <p className="text-5xl md:text-2xl text-white mb-6 font-bold">
         
        <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400
        bg-[length:200%_200%] text-transparent bg-clip-text animate-gradientSlide">
    MERN STACK  Developer 
  </span>
   | Backend Focused
      </p>
      <p className="text-2xl text-white mb-8 leading-relaxed">
        I am a full-stack MERN developer who enjoys building scalable web
        applications, secure backends, and clean user interfaces.
         creating beautiful digital experience with modern web technologies 
      </p>

      <button
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4
        rounded-full text-lg transition transform hover:scale-105"
      >
        View My Skills
      </button>

    </div>

   
<div className="flex justify-center md:justify-end">
  <div className="relative w-100 h-100 md:w-[400px] md:h-[400px] group">

    {/* OUTER GLOW RING */}
    <div
      className="absolute inset-0 rounded-full blur-xl opacity-70
      bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
      animate-pulseSlow"
    />

    {/* ROTATING BORDER */}
    <div
      className="absolute inset-0 rounded-full
      bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
      animate-spinSlow"
    />
    <div
  className="relative z-10 w-full h-full rounded-full p-3
  bg-emerald-50
  transform transition duration-700
  group-hover:scale-105 group-hover:rotate-2"
>
  <img
    src={profileImg}
    alt="Profile"
    className="w-full h-full object-cover rounded-full shadow-2xl"
  />
</div>
  </div>
</div>

  </div>
</section>
  
<section
  id="about"
  className="py-24 bg-gradient-to-br from-[#625b90] via-[#232351] to-[#10102e]"
>
  <div className="max-w-7xl mx-auto px-6 text-3xl">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
      About <span className="text-blue-600">Me</span>
    </h2>

    {/* CONTENT CARD */}
    <div
      className="bg-slate-300 rounded-3xl shadow-xl p-10 md:p-14
      transition transform hover:-translate-y-2 hover:shadow-2xl"
    >
      <p className="text-3xl md:text-2xl text-grey leading-relaxed text-center">
        I am a passionate{" "}
        <span className="font-semibold text-slate-800">
          MERN Stack Developer
        </span>{" "}
        with a strong foundation in building full-stack web applications using{" "}
        <span className="font-semibold text-slate-800">
          MongoDB, Express.js, React.js, and Node.js
        </span>.
        <br /><br />
        I enjoy turning complex problems into{" "}
        <span className="font-semibold text-slate-800">
          simple, efficient, and scalable solutions
        </span>.
        My focus is on writing{" "}
        <span className="font-semibold text-slate-800">
          clean code
        </span>, creating{" "}
        <span className="font-semibold text-slate-800">
          responsive user interfaces
        </span>, and developing{" "}
        <span className="font-semibold text-slate-800">
          secure backend systems
        </span>.
        <br /><br />
        I am always eager to learn new technologies and continuously improve my
        skills to deliver{" "}
        <span className="font-semibold text-slate-800">
          high-quality digital experiences
        </span>.
      </p>
    </div>

  </div>
</section>



{/* EDUCATION */}
<section
  id="Education"
  className="min-h-screen py-40
  bg-gradient-to-br from-[#242440] via-[#17173e] to-[#0f0f2d]
  text-white"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION TITLE */}
    <h2 className="text-5xl font-extrabold text-center mb-4">
      Education
    </h2>
    <div className="w-24 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>

    {/* GRID */}
    <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* COLLEGE - TOP LEFT */}
      <div
        className="group bg-white/5 backdrop-blur-xl
        border border-white/20 rounded-2xl p-6 shadow-2xl
        transition transform hover:-translate-y-3 hover:scale-[1.03]
        hover:shadow-purple-500/40
        lg:-translate-y-12"
      >
        <h3 className="text-2xl font-bold text-purple-400 mb-1">
          B.Tech – Computer Science (Software Devloper)
        </h3>
        <p className="text-2xl  mb-3 text-orange-400">
         Centurion University Technology and management • 2022 – 2026
        </p>
        <p className="text-red-400 mb-2 font-semibold text-xl">
          CGPA: <span className="text-red-400">8.5</span>
        </p>
        <p className="text-gray-300 leading-relaxed text-2xl">
          Studying Computer Science with specialization in Software Devlopment in (Mern Stack).
          Strong foundation in DSA, Web Development, Databases, and
          Software Engineering concepts.
        </p>
      </div>

      {/* INTERMEDIATE  */}
      <div
        className="group bg-white/5 backdrop-blur-xl
        border border-white/20 rounded-2xl p-6 shadow-2xl
        transition transform hover:-translate-y-3 hover:scale-[1.03]
        hover:shadow-blue-500/40
        lg:translate-y-8"
      >
        <h3 className="text-2xl font-bold text-blue-400 mb-1">
          BSEB (XII) – PCM 
        </h3>
        <p className="text-2xl  mb-3  text-orange-400">
          Rajendra College Chapra  • 2019 – 2021
        </p>
        <p className="text-red-400 mb-2 font-semibold text-xl">
          Percentage: <span className="text-red-400">63.2%</span>
        </p>
        <p className="text-gray-300 leading-relaxed text-2xl">
          Completed higher secondary education with Physics, Chemistry,
          Mathematics,  under BSEB board.
        </p>
      </div>

      {/* MATRICULATION */}
      <div
        className="group bg-white/5 backdrop-blur-xl
        border border-white/20 rounded-2xl p-6 shadow-2xl
        transition transform hover:-translate-y-3 hover:scale-[1.03]
        hover:shadow-pink-500/40
        lg:translate-y-24"
      >
        <h3 className="text-xl font-bold text-pink-400 mb-1">
          CBSE (X) – Science 
        </h3>
        <p className="text-2xl  mb-3  text-orange-400">
          Tajpur High School • 2018 – 2019
        </p>
        <p className="text-red-400 mb-2 font-bold text-xl">
          Percentage: <span className="text-red-400">67.2%</span>
        </p>
        <p className="text-gray-300 leading-relaxed text-2xl">
          Completed matriculation ,
          building strong analytical and technical foundations.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* SKILLS */}
<section
  id="skills"
  className="py-28 bg-gradient-to-br from-[#625b90] via-[#1e1e4a] to-[#050510]">
  <div className="max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
      Skills
    </h2>

 
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-20 gap-x-10 perspective-1000">

      {[
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-700" },
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
      ].map((skill, index) => (
        <div
          key={index}
          className={`
            group relative bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-2xl p-6
            flex flex-col items-center justify-center
            shadow-xl cursor-pointer

            transform transition-all duration-500
            hover:-translate-y-5 hover:rotate-1 hover:scale-[1.08]
            hover:shadow-2xl

            animate-floatSlow
            ${index % 3 === 0 ? "lg:-translate-y-6" : ""}
            ${index % 3 === 1 ? "lg:translate-y-4" : ""}
            ${index % 3 === 2 ? "lg:translate-y-10" : ""}
          `}
        >
       
          <div
            className="absolute inset-0 rounded-2xl
            bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400
            opacity-0 group-hover:opacity-30 blur-xl transition"
          />

    
          <div
            className={`relative text-5xl mb-4 ${skill.color}
            transition-transform duration-500
            group-hover:scale-125 group-hover:rotate-12`}
          >
            {skill.icon}
          </div>

          <h3 className="relative text-lg font-semibold text-white">
            {skill.name}
          </h3>
        </div>
      ))}

    </div>
  </div>
</section>
     
<section id="projects" className="py-24 bg-indigo-300 rounded text-white font-semibold hover:scale-110 transition">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
      Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-10 ">

      {/* SWIGGY CLONE */}
      <div className="group bg-orange-300 rounded-2xl shadow-lg p-6 transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl">
       <h3 className="text-black  font-bold text-2xl mx-4 my-4">Swiggy Frontend clone </h3>
        <div className="  w-full max-w-md  aspect-video  rounded-2xl  border-4 border-indigo-500 shadow-xl 
         bg-black/40  overflow-hidden mb-4">
  <img
    src={profileImage3}
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>

        <p className="text-black  mb-4 text-xl ">
          Food delivery web app with restaurant listing, cart system, and
          dynamic UI inspired by Swiggy.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["React", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/rishurajYadav/Swiggy_clone"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
        >
          View Code
        </a>
      </div>

      {/* PORTFOLIO WEBSITE */}
      <div className="group bg-blue-300 rounded-2xl shadow-lg p-6 transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl">
        
        <h3 className="text-black  font-bold text-2xl mx-10 my-4">Personal Portfolio </h3>
            <div className="  w-full max-w-md aspect-video rounded-2xl border-4 border-indigo-500 shadow-xl 
             bg-black/40 overflow-hidden mb-4">
              <img
                src={profileImage2}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

        <p className="text-black mb-4 text-xl">
          Personal MERN portfolio with admin dashboard, authentication, and
          project management.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["React", "Tailwind", "Node.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/rishurajYadav/Personal-Portfolio"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          View Code
        </a>
      </div>

      {/* LEETCODE PLATFORM */}
      <div className="group bg-green-300 rounded-2xl shadow-lg p-6 transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl">
         <h3 className="text-black  font-bold text-2xl mx-10 my-4">Coding Platfrom </h3>
        <div className="  w-full  max-w-md  aspect-video  rounded-2xl  border-4 border-indigo-500 shadow-xl 
  bg-black/40  overflow-hidden  mb-4">
  <img
    src={profileImage}
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>
        <p className="text-black mb-4 text-xl">
          Online coding platform with problem solving, test cases, and Judge0
          API integration.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["React", "Node.js", "Judge0", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="bg-emerald-100 text-emerald-600 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/yourusername/leetcode-platform"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
        >
          View Code
        </a>
      </div>

    </div>
  </div>
</section>

<ContactSection />


    <footer className="bg-gradient-to-br from-[#0d0d28] via-[#0f0f2d] to-[#050510] text-white py-8">

 
  <p className="text-center text-2xl font-bold mb-6 text-orange-500">
    Rishu Raj
  </p>

 
  <div className="flex justify-center gap-12 mb-6">


    <a
      href="https://github.com/rishurajYadav"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full
        bg-gradient-to-br from-gray-700 to-black
        shadow-lg transition transform
        group-hover:scale-110 group-hover:rotate-6"
      >
        <FaGithub className="text-white text-2xl" />
      </div>
    </a>

  
    <a
      href="https://www.linkedin.com/in/rishu-raj-a28ab2269/"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full
        bg-gradient-to-br from-blue-500 to-blue-700
        shadow-lg transition transform
        group-hover:scale-110 group-hover:-rotate-6"
      >
        <FaLinkedin className="text-white text-2xl" />
      </div>
    </a>

    <a
      href="https://x.com/raj_rishu12?t=hjztZb5RRhpUfxShjmZQFQ&s=09"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full
        bg-gradient-to-br from-sky-400 to-sky-600
        shadow-lg transition transform
        group-hover:scale-110 group-hover:rotate-6"
      >
        <FaTwitter className="text-white text-2xl" />
      </div>
    </a>

  </div>


  <p className="text-center text-gray-400 text-sm">
    © 2025 Rishu Raj. All rights reserved.
  </p>

</footer>


   
    </div>
  );
};

export default Home;



