import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBoxOpen,
  faCoins,
  faRocket,
  faNewspaper,
  faLock,
  faBars,
  faXmark,
  faChevronRight,
  faTags,
  faWarehouse,
  faMoneyCheckDollar,
  faDolly,
  faRectangleAd,
  faArrowUpRightDots,
  faChartLine,
  faChartSimple,
  faHandshake,
  faHammer,
  faBuilding,
  faShield,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { icon } from "@fortawesome/fontawesome-svg-core";

// Reusable Dropdown Item Component
const DropdownItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-2 py-3">
    <FontAwesomeIcon icon={icon} className="text-lg" />
    <div>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Reusable Dropdown Menu Component
const DropdownMenu = ({ title, items }) => (
  <div className="relative group">
    <button className="flex items-center h-20 cursor-pointer">
      {title} <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
    </button>
    <div className="absolute hidden group-hover:block bg-white border-t w-screen top-20 shadow-lg">
      <div className="flex p-6">
        {["1/3", "2/3"].map((width, colIndex) => (
          <div
            key={colIndex}
            className={`${colIndex === 0 ? "w-1/3 border-r pr-4" : "w-2/3 pl-4"}`}
          >
            <h3 className="text-lg font-bold">{title}</h3>
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Sidebar Menu Component
const SidebarMenu = ({ isOpen, toggleSidebar, sidebarItems, expandedMenu, handleExpandMenu }) => (
  <div
  className={`fixed top-0 left-0 z-50 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Sidebar Header */}
  <div className="flex justify-between items-center p-4 text-2xl font-bold">
    <a
      href="/"
      className="bg-gradient-to-r from-orange-600 to-gray-600 text-transparent bg-clip-text"
    >
      SnapStore|Seller
    </a>
    <FontAwesomeIcon icon={faXmark} className="cursor-pointer" onClick={toggleSidebar} />
  </div>

  {/* Sidebar Content */}
  <div className="flex flex-col p-4 h-full overflow-y-auto scrollbar-hide">
    {sidebarItems.map((item, index) => (
      <div key={index} className="flex flex-col mb-4">
        <div
          className="flex justify-between py-1 items-center text-sm cursor-pointer"
          onClick={() => handleExpandMenu(item.name)}
        >
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={item.icons} />
            <p className="font-medium">{item.name}</p>
          </div>
          {item.subItems && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`transition-transform ${
                expandedMenu === item.name ? "rotate-90" : ""
              }`}
            />
          )}
        </div>
        {item.subItems && expandedMenu === item.name && (
          <div className="flex flex-col mt-2 pl-4">
            {item.subItems.map((subItem, subIndex) => (
              <Link
                to={subItem.link}
                key={subIndex}
                className="text-gray-600 hover:bg-gray-200 rounded-md p-2"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
);

// Navbar Component
const Navbar = ({ setShowLogin, isLoggedIn, handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState("");

  const sidebarItems = [
    {
      name: "Catalog",
      icons: faTags,
      subItems: [
        { name: "Add Product", link: "/productlist" },
        { name: "Add Product via Upload Products", link: "#" },
        { name: "Complete Your Draft", link: "#" },
        { name: "View Selling Application", link: "#" },
        { name: "Improve Liting Quality", link: "#" },
        { name: "Upload Images", link: "#" },
        { name: "Upload and Manages Videos", link: "#" },
        { name: "Manage Product Documents", link: "#" },
      ],
    },
    {
      name: "Inventory",
      icons: faWarehouse,
      subItems: [
        { name: "Manage All Inventory", link: "#" },
        { name: "Sell Globaly", link: "#" },
        { name: "Inventroty Planning", link: "#" },
        { name: "Store and Distribute", link: "#" },
      ],
    },
    {
      name: "Pricing",
      icons: faMoneyCheckDollar,
      subItems: [
        { name: "Pricing Health", link: "#" },
        { name: "Manage Pricing", link: "#" },
        { name: "Resolve Price Alerts", link: "#" },
        { name: "Automate Pricing", link: "#" },
        { name: "Fee Discounts", link: "#" },
      ],
    },
    {
      name: "Orders",
      icons: faDolly,
      subItems: [
        { name: "Manage Orders", link: "#" },
        { name: "Order Reports", link: "#" }, 
        { name: "Upload Order Related Files", link: "#" },
        { name: "Manage Returns", link: "#" },
        { name: "Manage Safe-T Claims", link: "#" },
      ],
    },
    {
      name: "Advertising",
      icons: faRectangleAd,
      subItems: [
        { name: "Campaign Manager", link: "#" },
        { name: "A+ Contatnt Manager", link: "#" },
        { name: "Deals", link: "#" },
        { name: "Coupons", link: "#" },
        { name: "Promotions", link: "#" },
      ],
    },
    {
      name: "Growth",
      icons: faArrowUpRightDots,
      subItems: [
        { name: "Growth Opertunity", link: "#" },
        { name: "Explore Programme", link: "#" },
        { name: "Custom Programme", link: "#" },
        { name: "Marketplace programme Guidance", link: "#" },
        { name: "Seller Rewards", link: "#" },
        { name: "Refer a friend", link: "#" },
        { name: "Product Suggetions", link: "#" },
        { name: "Multi-Channel Fulfilment (MCF)", link: "#" },
      ],
    },
    {
      name: "Reports",
      icons: faChartLine,
      subItems: [
        { name: "Payments", link: "#" },
        { name: "Snapstore Selling Coach", link: "#" },
        { name: "Business Reports", link: "#" },
        { name: "Return Reports", link: "#" },
        { name: "Custom Reports", link: "#" },
        { name: "Inventory Reports", link: "#" },
        { name: "Tax Document library", link: "#" },
        { name: "Manage Taxes", link: "#" },
      ],
    },
    {
      name: "Performance",
      icons: faChartSimple,
      subItems: [
        { name: "Account Health", link: "#" },
        { name: "Feedback", link: "#" },
        { name: "A-to-z guarantee Claims", link: "#" },
        { name: "Chargeback Claims", link: "#" },
        { name: "Performance Notifications", link: "#" },
        { name: "Product Insughts", link: "#" },
        { name: "Voice Of the Customer", link: "#" },
        { name: "STEP(Your Growth Plan)", link: "#" },
      ],
    },
    {
      name: "Partner Network",
      icons: faHandshake,
      subItems: [
        { name: "Selling Partner AppStore", link: "#" },
        { name: "Manage Your Apps", link: "#" },
        { name: "Manage Services Requests", link: "#" },
        { name: "Develop Apps", link: "#" },
      ],
    },
    {
      name: "Services",
      icons: faHammer,
      subItems: [
        { name: "Explore Services", link: "#" },
        { name: "Account Management", link: "#" },
        { name: "Accounting", link: "#" },
        { name: "Advertising Optimization", link: "#" },
        { name: "cataloging", link: "#" },
        { name: "Domestic Shipping", link: "#" },
        { name: "Enhanced Brand Content", link: "#" },
        { name: "Imaging", link: "#" },
        { name: "Training", link: "#" },
        { name: "Seller Reinstatement", link: "#" },
        { name: "Taxes", link: "#" },
      ],
    },
    {
      name: "B2B",
      icons: faBuilding,
      subItems: [
        { name: "B2B Central", link: "#" },
        { name: "Product Opertinity", link: "#" },
        { name: "Manage Qoutes", link: "#" },
        { name: "Business Discount Insights", link: "#" },
        { name: "Case PackRecommandations", link: "#" },
      ],
    },
    {
      name: "Brand",
      icons: faShield,
      subItems: [
        { name: "Brand Registry", link: "#" },
        { name: "Build Your Brand", link: "#" },
      ],
    },
    {
      name: "Learn",
      icons: faGraduationCap,
      subItems: [
        { name: "Seller University", link: "#" },
        { name: "Forums", link: "#" },
        { name: "News", link: "#" },
      ],
    },
  ];

  const dropdownItems = [
    {
      icon: faNewspaper,
      title: "Get Ready to Sell",
      description: "Choose a selling plan, create and configure your seller account",
    },
    {
      icon: faRocket,
      title: "Enroll Your Brand",
      description: "Unlock brand-building tools and protection benefits",
    },
    {
      icon: faBoxOpen,
      title: "List Product",
      description: "Match or create product listings in Snapstore",
    },
    {
      icon: faCoins,
      title: "Price Product",
      description: "Set competitive prices to become the featured offer",
    },
  ];

  const handleExpandMenu = (menuName) => {
    setExpandedMenu((prev) => (prev === menuName ? "" : menuName));
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <SidebarMenu
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        sidebarItems={sidebarItems}
        expandedMenu={expandedMenu}
        handleExpandMenu={handleExpandMenu}
      />

      {/* Navbar */}
      <div className="bg-white fixed top-0 w-full h-20 shadow-md flex items-center justify-between px-6 z-40">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBars} className="cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
          <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-gray-600">
            SnapStore|Seller
          </a>
        </div>

        {/* Dropdown Menus */}
        {!isLoggedIn && (
          <div className="hidden md:flex gap-8">
            {["Start", "Grow", "Explore", "Learn", "Pricing"].map((title, index) => (
              <DropdownMenu key={index} title={title} items={dropdownItems} />
            ))}
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="px-4 py-2 bg-gray-100 rounded-full text-black">
              <FontAwesomeIcon icon={faLock} /> Logout
            </button>
          ) : (
            <>
              <button onClick={() => setShowLogin(true)} className="px-4 py-2 bg-orange-600 text-white rounded-full">
                Sign-Up
              </button>
              <button className="px-4 py-2 bg-gray-100 text-black rounded-full">
                <FontAwesomeIcon icon={faLock} /> Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
