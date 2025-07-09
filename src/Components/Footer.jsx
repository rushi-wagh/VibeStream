import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex h-auto justify-around bg-gray-700 text-white font-serif font-semibold">
      <div id="left" className="">
        <div className="flex flex-col mt-3 mb-2">
          <h3 className="font-bold text-2xl">VibeStream</h3>
          <Link to="/mission" >Our mission</Link>
          <Link to="/vision"> Our vision</Link>
        </div>
      </div>
     
      <div id="center" className="flex flex-col mt-3">
        <Link to="/">Home</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/fav">
          Favourites
        </Link>
      </div>
       <div id="right" className="gap-2 mt-3">
        <h3 className="font-bold text-2xl">Follow us on socials</h3>
        <div className="flex ">
            <Link to='#' className="p-2 text-2xl rounded-full text-white hover:text-blue-600"><FaFacebook/></Link>
            <Link to='#' className="p-2 text-2xl rounded-full text-white hover:text-pink-600"><FaInstagram/></Link>
            <Link to='#' className="p-2 text-2xl rounded-full text-white hover:text-black"><FaTwitter/></Link>
            </div>
        
      </div>
      <div id="bottom"></div>
    </div>
  );
};

export default Footer;
