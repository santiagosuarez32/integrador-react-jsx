import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">BoxyCharm</div>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-600 hover:text-black outline-none" onClick={(e) => e.currentTarget.blur()}>Our Boxes</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black outline-none" onClick={(e) => e.currentTarget.blur()}>Learn</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black outline-none" onClick={(e) => e.currentTarget.blur()}>Support</a></li>
      </ul>
      <div className="space-x-3">
        <button className="border px-3 py-1 rounded-lg outline-none" onClick={(e) => e.currentTarget.blur()}>Log In</button>
        <button className="bg-black text-white px-3 py-1 rounded-lg outline-none" onClick={(e) => e.currentTarget.blur()}>Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
