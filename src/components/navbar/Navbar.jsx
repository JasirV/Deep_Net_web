import React from 'react';
import Logo from '../../assets/Logo.png'; // Adjust the path if necessary

const Navbar = () => {
  return (
    <header className="">
      <nav className="bg-[#121618]">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side (Logo or other elements can go here) */}
          {/* <img src={Logo} alt="Logo" className="w-12 h-auto" /> Add a logo if needed */}

          {/* Right side (Navigation Links) */}
          <div className="ml-auto hidden mr-24 md:flex p-4">
            <p className="text-white mr-8 hover:text-[#0796EF]">HOME</p> {/* Adjust mr for desired spacing */}
            <p className="text-white mr-8 hover:text-[#0796EF]">MENU</p>
            <p className="text-white mr-8 hover:text-[#0796EF]">MAKE A RESERVATION</p>
            <p className="text-white hover:text-[#0796EF]">CONTACT US</p> {/* No margin on the last item */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
