import { Avatar, Button, Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Nav = () => {
  const [user, setUser] = useContext(AuthContext);
  console.log('Userinfo Nav => ', user);
  const location = useLocation();
  return (
    <Navbar className="shadow-md mb-4 border-b-2 border-gray-3v00" fluid={true} rounded={true}>
      <Link to="/">
        <Navbar.Brand>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/625/004/small/3d-document-insurance-icon-illustration-rendering-png.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TODUKU
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2">
        {user?.email ? (
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            bordered={true}
          />
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
