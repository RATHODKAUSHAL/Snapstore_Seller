import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBoxOpen, faCoins, faRocket, faNewspaper, faLock } from '@fortawesome/free-solid-svg-icons';

const DropdownItem = ({ icon, title, description }) => (
  <div className='flex flex-row pt-6 gap-2 items-center'>
    <FontAwesomeIcon icon={icon} />
    <div>
      <p className='text-lg font-medium'>{title}</p>
      <p className='text-gray-600'>{description}</p>
    </div>
  </div>
);

const NavbarDropdown = ({ title, items }) => (
  <div className="relative group">
    <p className="flex items-center cursor-pointer h-20">
      {title} <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
    </p>

    {/* drop down */}
    <section className="absolute hidden group-hover:block bg-white border-t border-b w-screen top-20 shadow-lg">
      <div className='flex p-6'>
        <div className='w-1/3 border-r-2 pr-3'>
          <h3 className='text-lg font-bold'>{title}</h3>
          {items.map((item, index) => (
            <DropdownItem 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </div>
        <div className='w-1/2 pl-3'>
          <h3 className='text-lg font-bold'>{title}</h3>
          {items.map((item, index) => (
            <DropdownItem 
              key={index + items.length} 
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Navbar = ({ setShowLogin }) => {
  const dropdownItems = [
    { icon: faNewspaper, title: "Get Ready to Sell", description: "Choose a selling plan, create and configure your seller account" },
    { icon: faRocket, title: "Enroll Your Brand", description: "Unlock brand-building tools and protection benefits" },
    { icon: faBoxOpen, title: "List Product", description: "Match or create product listings in Snapstore" },
    { icon: faCoins, title: "Price Product", description: "Set competitive prices to become the featured offer" },
  ];

  return (
    <div className='bg-white flex items-center justify-between h-20 w-full text-2xl border shadow-md fixed'>
      <div className='flex flex-row gap-4 items-center'>
        <div className='text-2xl font-bold bg-clip-text pl-10 text-transparent bg-gradient-to-r from-orange-600 to-gray-600'>
          <a href='/' className='font-mono'>SnapStore</a>
        </div>
        <div className='flex flex-row text-base gap-10'>
          <NavbarDropdown title="Start" items={dropdownItems} />
          <NavbarDropdown title="Grow" items={dropdownItems} />
          <NavbarDropdown title="Explore" items={dropdownItems} />
          <NavbarDropdown title="Learn" items={dropdownItems} />
          <NavbarDropdown title="Pricing" items={dropdownItems} />
        </div>
      </div>
      <div className='pr-10 gap-4 flex flex-row'> 
    <div>
    <button className='text-base px-4 py-3 rounded-full font-medium text-black bg-gray-100'> <FontAwesomeIcon icon={faLock} /> Log in</button>
    </div>
<div>
<button onClick={() => setShowLogin(true)} className='text-base  px-4 py-3 rounded-full text-white bg-orange-600'>Sign-Up</button>
</div>        
</div>
    </div>
  );
};

export default Navbar;
