import { Avatar, Button, Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider from '../context/AuthProvider';

const Nav = () => {
  const user = useContext(AuthProvider);
  return (
    <Navbar className="shadow-md mb-4 border-b-2 border-gray-3v00" fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/012/625/004/small/3d-document-insurance-icon-illustration-rendering-png.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TODUKU
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Avatar />
        ) : (
          <Link to="/login">
            <Button className="">Log in</Button>
          </Link>
        )}
      </div>
    </Navbar>
  );
};

export default Nav;
