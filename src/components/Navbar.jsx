import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menuTitles = [
    { title: "Books", link: "/" },
    { title: "Authors", link: "/authors" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-col md:flex-row md:justify-between items-center px-4 py-2 bg-gray-200 text-black'>
      <div className='flex justify-between w-full md:w-auto'>
        <div className='font-bold'>Books Management</div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='md:hidden text-white'
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <ul className={`md:flex md:gap-4 md:items-center mt-2 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
        {menuTitles.map((menu) => (
          <li key={menu.title}>
            <NavLink 
              to={menu.link} 
              className={({ isActive }) => 
                `text-black md:py-4 px-3 ${isActive ? 'bg-white text-black' : ''}`
              }
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='mt-2 md:mt-0'>
        <button className='text-black md:block hidden'>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
