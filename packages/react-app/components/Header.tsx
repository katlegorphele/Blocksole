import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";


// import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white text-black border-black border-b">
      <h1 className="text-2xl font-bold lg:hidden">BlockSole</h1>
      <p className="hidden lg:block">est. 2024</p>
      <nav className="hidden lg:flex">
        <a href="/" className="mx-2">Home</a>
        <a href="/account" className="mx-2">Account</a>
      </nav>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          &#9776; {/* Hamburger icon */}
        </button>
        {isOpen && (
          <div className="absolute right-4 top-16 bg-black text-white p-2 rounded-md shadow-md">
            <a href="/" className="block px-4 py-2">Home</a>
            <a href="/landingPage" className="block px-4 py-2">Connect Wallet</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
  
