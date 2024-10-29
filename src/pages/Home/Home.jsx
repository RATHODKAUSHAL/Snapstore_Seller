// import React from "react";
import React from "react";
import Seller from "./../../assets/Seller.jpg";
import America from "./../../assets/American.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
  faEarth,
  faMoneyBillTransfer,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

const cardsData = [
    {
      id: 1,
      image: America,
      title: "Sell in the Americas",
      description:
        "Use a North America and Brazil unified account to reach Amazon customers in the US, Canada, Mexico, and Brazil.",
    },
    {
      id: 2,
      image: America,
      title: "Sell in Europe",
      description:
        "Expand your business across the European Union and reach millions of customers.",
    },
    {
      id: 3,
      image: America,
      title: "Sell in Asia-Pacific",
      description:
        "Engage with customers in fast-growing markets in Asia-Pacific.",
    },
    // Add more card data as needed
  ];



const Home = () => {;
  return (
    <div>
      <div className="flex flex-col h-screen md:flex-row items-center justify-center p-10 md:p-20 bg-gray-100">
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <div>
            <h4 className="text-xl font-medium">Global Selling</h4>
          </div>
          <header>
            <p className="text-4xl md:text-6xl font-roboto-mono font-bold mt-4">
              Sell Worldwide With SnapStore
            </p>
            <p className="text-lg md:text-xl font-roboto-mono font-normal mt-4">
              Expand your reach by selling to SnapStore customers in other
              countries. Sell globally from the US, or sell from another country
              to US customers shopping on{" "}
              <a className="underline" href="">
                Snapstore.com
              </a>
              .
            </p>
          </header>
          <div className="flex flex-col md:flex-row gap-3 mt-6">
            <div>
              <p className="font-medium">Based in the US?</p>
              <button className="bg-gray-800 text-base p-2 font-bold border-4 border-white  rounded-full text-white mt-2">
                Sell Globally
              </button>
            </div>
            <div>
              <p className="font-medium">Based outside the US?</p>
              <button className="text-gray-800 text-base font-bold p-2 border-4 rounded-full bg-white mt-2">
                Sell to Us Customers
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img src={Seller} className="rounded-md w-3/5" alt="Seller" />
        </div>
      </div>
      <section className="h-screen bg-white p-20">
        <div className="flex rounded-lg bg-blue-100">
          <div className="mt-4 p-10  w-1/2">
            <h1 className="text-2xl md:text-5xl font-roboto-mono font-bold ">
              Why Global Selling?
            </h1>
            <p className="pt-3 text-base">
              Connect with customers around the world using Snapstore tools and
              services.
            </p>
            <div className="pt-10">
              <div className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faTags} />
                <h1 className="text-xl font-medium">
                  {" "}
                  Accelerate sales with Snapstore's global brand
                </h1>
              </div>
              <p className="pl-6">
                The Snapstore brand can help you attract more customers. We
                continue to reach new customers around the world and were ranked
                the most trusted brand by US consumers in 2022.
              </p>
            </div>
            <div className="pt-10">
              <div className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
                <h1 className="text-xl font-medium">
                  {" "}
                  Grow and diversify your sales
                </h1>
              </div>
              <p className="pl-6">
                Reduce the impact of fluctuating sales periods by taking
                advantage of busy shopping seasons in other countries. We
                provide tools you can use to explore customer search patterns
                and demand.
              </p>
            </div>
            <div className="pt-10">
              <div className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faEarth} />
                <h1 className="text-xl font-medium">
                  {" "}
                  Grow and diversify your sales
                </h1>
              </div>
              <p className="pl-6">
                Streamline your global operations with cross-listing, supply
                chain solutions, vetted global shipping providers, and automatic
                currency conversion.
              </p>
            </div>
          </div>
          <div className="mt-4 p-10 w-1/2">
            <div className="bg-white rounded-t-md p-10 font-mono">
              <p className="text-2xl">
                "We thought, if we succeed on Amazon US, we can succeed over the
                world. We achieved 107% year-over-year growth for five
                consecutive years since we started selling on Amazon."
              </p>
              <p className="text-xl text-end font-medium">-Youngjo Kim</p>
            </div>
            <div className="bg-white rounded-b-md p-10 font-mono">
              <p className="text-2xl">
                "Amazon Canada has been a game-changer for us. Within months it
                accounted for over 10% of our US Sales which has been
                incredible! Because the customers are so similar to the US, I
                think most products that do well on Amazon US will thrive on
                Amazon CA!"
              </p>
              <p className="text-xl text-end font-medium">-Leslie Pierson</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full p-20 bg-gray-100 mt-32">
      <div className="text-4xl md:text-5xl font-roboto-mono font-bold mt-4">
        <h1>Sell globally from the US</h1>
      </div>
      <div className="pt-5">
        <p className="text-lg">
          Start selling in the Americas, Europe, the Asia-Pacific, and the Middle East and North Africa.
        </p>
      </div>
      <div className="flex gap-10 mt-10">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white rounded-md shadow-lg max-w-md">
            <div className="mb-4">
              <img className="rounded-md" src={card.image} alt={card.title} />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="text-base text-gray-600">{card.description}</p>
              <p className="pt-8">Learn more about selling:</p>
              <p className="pt-8 font-medium">
                To Canada <FontAwesomeIcon icon={faArrowRight} />
              </p>
              <p className="pt-5 font-medium">
                To Mexico and Brazil <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Home;
