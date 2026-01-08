import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { admin, logout } = useContext(AuthContext);

  // PUBLIC PROFILE IMAGE (NOT DEPENDENT ON ADMIN)
  const BASE_URL = "http://localhost:3000"; // backend
  const storedProfileImage = localStorage.getItem("profileImage");

  const profileImage = storedProfileImage
    ? `${BASE_URL}/${storedProfileImage}`
    : "/default-avatar.png";

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const NavButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="
        relative
        px-3 py-1 text-xs
        sm:px-4 sm:py-1.5 sm:text-sm
        md:px-6 md:py-2 md:text-base
        lg:px-10 lg:text-xl

        rounded-full text-black
        transition-all duration-300
        whitespace-nowrap

        before:absolute before:inset-0 before:rounded-full
        before:border before:border-transparent
        before:bg-gradient-to-r before:from-pink-300 before:via-purple-400 before:to-cyan-300
        before:opacity-0 hover:before:opacity-100
        before:transition before:duration-300
        before:-z-10">
      {children}
    </button>
  );

  return (
    <nav className="fixed top-1 w-full z-50 flex justify-center px-2">
      <div
        className="
          flex flex-wrap items-center justify-center
          gap-1 sm:gap-2 md:gap-3

          px-3 py-2
          sm:px-4 sm:py-2.5
          md:px-6 md:py-3

          rounded-2xl sm:rounded-full
          bg-amber-50 backdrop-blur-md
          border border-white/20 shadow-xl

          max-w-[95%] 
        "
      >
        <NavButton onClick={() => scrollToSection("home")}>Home</NavButton>
        <NavButton onClick={() => scrollToSection("about")}>About</NavButton>
        <NavButton onClick={() => scrollToSection("Education")}>
          Education
        </NavButton>
        <NavButton onClick={() => scrollToSection("skills")}>
          Skills
        </NavButton>
        <NavButton onClick={() => scrollToSection("projects")}>
          Projects
        </NavButton>
        <NavButton onClick={() => scrollToSection("contact")}>
          Contact Us
        </NavButton>

        <a
          href="https://drive.google.com/file/d/18mHzSNQ0CKYJ1WPGJ12v5PNoUsiEb588/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-3 py-1 text-xs
            sm:px-4 sm:py-1.5 sm:text-sm
            md:px-5 md:py-2 md:text-base

            rounded-full font-semibold
            bg-gradient-to-r from-blue-500 to-indigo-600
            text-white transition transform hover:scale-105
            whitespace-nowrap">
          Resume
        </a>

        <div className="relative" ref={dropdownRef}>
          <img
            src={profileImage}
            alt="profile"
            onClick={() => setOpen(!open)}
            className="
              w-7 h-7
              sm:w-8 sm:h-8
              md:w-10 md:h-10

              rounded-full cursor-pointer
              border-2 border-indigo-500
              hover:scale-105 transition
              object-cover"
          />

          {open && (
            <div className="absolute right-0 mt-3 w-48 rounded-xl bg-black border border-white/20 shadow-xl text-white overflow-hidden">
              {!admin ? (
                <>
                  <Link
                    to="/admin/login"
                    className="block px-4 py-3 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    Admin Login
                  </Link>

                  <button
                    onClick={() => scrollToSection("about")}
                    className="w-full text-left px-4 py-3 hover:bg-white/10"
                  >
                    About Us
                  </button>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full text-left px-4 py-3 hover:bg-white/10"
                  >
                    Contact Us
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/admin/profile"
                    className="block px-4 py-3 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>

                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-3 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-red-500/20 text-red-400"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
