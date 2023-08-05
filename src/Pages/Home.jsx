import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFire, BsFillPersonFill } from "react-icons/bs";
import { AiFillRocket } from "react-icons/ai";
import { FaRoad } from "react-icons/fa";
import Roadmap from "../components/Roadmap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const callAction = useRef(null);
  const aboutUs = useRef(null);
  const roadMap = useRef(null);

  const [toggleNav, setToggleNav] = useState(false);
  const gamesData = [
    {
      title: "DICE",
      imgUrl:
        "https://mediumrare.imgix.net/30688668d7d2d48d472edd0f1e2bca0758e7ec51cbab8c04d8b7f157848640e0?&dpr=1.25&format=auto&auto=format&q=50&w=220",
      company: "Multi-chain",
    },
    {
      title: "CRASH",
      imgUrl:
        "https://mediumrare.imgix.net/c830595cbd07b2561ac76a365c2f01869dec9a8fe5e7be30634d78c51b2cc91e?&dpr=1.25&format=auto&auto=format&q=50&w=220",
      company: "Multi-chain",
    },
    {
      title: "PLINKO",
      imgUrl:
        "https://mediumrare.imgix.net/5cbb2498c956527e6584c6af216489b85bbb7a909c7d3c4e131a3be9bd1cc6bf?&dpr=1.25&format=auto&auto=format&q=50&w=220",
      company: "Multi-chain",
    },
    {
      title: "MINES",
      imgUrl:
        "https://mediumrare.imgix.net/15a51a2ae2895872ae2b600fa6fe8d7f8d32c9814766b66ddea2b288d04ba89c?&dpr=1.25&format=auto&auto=format&q=50&w=220",
      company: "Multi-chain",
    },
    {
      title: "WHEEL",
      imgUrl:
        "https://mediumrare.imgix.net/e0a4131a16c28a1c1516958c93ec90c6f0f1bb00f41de87f72f6800c535b9c6f?&dpr=1.25&format=auto&auto=format&q=50&w=220",
      company: "Multi-chain",
    },
    {
      title: "LIMBO",
      imgUrl:
        "https://mediumrare.imgix.net/11caec5df20098884ae9071848e1951b8b34e5ec84a7241f2e7c5afd4b323dfd?&dpr=1.25&format=auto&auto=format&q=50&w=220",
      company: "Multi-chain",
    },
  ];

  const aboutInfo = [
    {
      infoTitle: "Information 1",
      infoDescription:
        "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquamtotam a pariatur voluptatibus maiores perspiciatis rem velit vitae ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores    deserunt voluptate!  debitis adipisci, et doloremque quod corporis autem vel neque, dolorem minima voluptatibus laborum esse consectetur ",
    },
    {
      infoTitle: "Information 2",
      infoDescription:
        "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquamtotam a pariatur voluptatibus maiores perspiciatis rem velit vitae ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores    deserunt voluptate!m debitis adipisci, et doloremque quod corporis autem vel neque, dolorem minima voluptatibus laborum esse consectetur ",
    },
    {
      infoTitle: "Information 3",
      infoDescription:
        "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquamtotam a pariatur voluptatibus maiores perspiciatis rem velit vitae ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores    deserunt voluptate!m debitis adipisci, et doloremque quod corporis autem vel neque, dolorem minima voluptatibus laborum esse consectetur ",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 850, min: 420 },
      items: 2,
      slidesToSlide: 2,
    },
    smallMobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const LiClass =
    "p-4  transition-all duration-500 hover:bg-[#17202e] cursor-pointer border-l-4 border-[#d5a77600] text-[#D5A776] hover:border-[#D5A776]  hover:text-white";

  const handleClick = (clickedRef) => {
    clickedRef.current?.scrollIntoView({ behavior: "smooth" });
    setToggleNav(false);
  };

  return (
    <div className=" select-none relative">
      <div
        className={`    grid grid-cols-12  md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-6`}
      >
        <div className={` col-span-2 md:col-span-2 md:w-full lg:col-span-1 `}>
          <div
            className={`h-16 px-5 shadow-sm shadow-gray-700 flex items-center bg-[#080B10]`}
          >
            <GiHamburgerMenu
              onClick={() => setToggleNav(!toggleNav)}
              className={` cursor-pointer   text-2xl text-[#d5a777] md:hidden  `}
            />
          </div>
        </div>
        <div
          className={`  col-span-10 md:col-span-5 lg:col-span-4 xl:col-span-5`}
        >
          <Navbar />
        </div>
      </div>
      <div
        className={` grid grid-cols-5 transition duration-500 relative md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-6   `}
      >
        <div
          className={`   transition-all duration-400  bg-[#080B10]   ${
            toggleNav
              ? " absolute top-0 left-0  "
              : " absolute top-0 left-[-100%]  "
          }  md:fixed top-0 md:left-0  w-4/6 sm:w-1/3  md:w-[250px] md:col-span-2  lg:col-span-1 z-50  `}
        >
          <div className={` p-3  h-[calc(100vh)] z-50  `}>
            <div
              className={` mt-[4rem] w-full shadow-sm shadow-[#235462] rounded  bg-gradient-to-tr from-[#235462] to-[#594755] `}
            >
              <ul
                className={` list-none uppercase  text-[14px] font-semibold `}
              >
                <li
                  onClick={() => handleClick(callAction)}
                  className={`${LiClass}`}
                >
                  <div className={`flex items-center`}>
                    <div className=" text-[18px] mr-2">
                      {" "}
                      <AiFillRocket />
                    </div>
                    <div>Call to Action</div>
                  </div>
                </li>
                <li
                  onClick={() => handleClick(aboutUs)}
                  className={`${LiClass}`}
                >
                  <div className={`flex items-center`}>
                    <div className=" text-[16px] mr-2">
                      {" "}
                      <BsFire />
                    </div>
                    <div>About</div>
                  </div>
                </li>
                <li
                  onClick={() => handleClick(roadMap)}
                  className={`${LiClass}`}
                >
                  <div className={`flex items-center`}>
                    <div className=" text-[16px] mr-2">
                      {" "}
                      <FaRoad />
                    </div>
                    <div>Roadmap</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={` section-scrollbar relative top-0 left-0 md:left-[250px]  col-span-5 md:col-span-5 lg:col-span-4 xl:col-span-5 px-5 py-3`}
        >
          <section className=" pt-8" ref={callAction}>
            <div className="">
              <div className=" text-4xl  md:text-5xl  font-semibold text-white">
                Multi-Chain <span className={` text-[#d5a777]`}> Madness</span>
              </div>
              <p className=" mt-6 text-md text-gray-200">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                aliquid voluptatem ut nesciunt? Doloribus inventore repellat
                dignissimos aliquam numquam iure, fugit labore quas eligendi
                voluptatem itaque possimus molestias quasi quia.{" "}
              </p>
              <div
                className={` mt-6 ml-0 w-fit uppercase text-[#d5a777] font-semibold  bg-gradient-to-tl from-[#235462] to-[#594755] rounded-md mx-3 py-2 px-5 cursor-pointer hover:text-white transition-all duration-300   `}
              >
                Call to Action
              </div>
            </div>
            <div className=" mt-10 mb-5 uppercase text-2xl  md:text-3xl  font-semibold text-white">
              <span className={` text-[#d5a777]`}> Games</span>
            </div>

            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              className="h-[300px] flex z-0  "
            >
              {gamesData.map((game, id) => {
                return (
                  <div
                    key={id}
                    className={`  group relative left-[50%] transform translate-x-[-50%] w-[180px] h-[241px]  `}
                  >
                    <img
                      className="transition-all duration-300 absolute top-0 group-hover:top-[-20px] rounded w-full"
                      src={game.imgUrl}
                      alt={game.imgUrl}
                    />
                    <div
                      className={`rounded transition-all duration-300 absolute top-0 group-hover:top-[-20px] bg-[#d5a777] w-full h-full opacity-0 group-hover:opacity-80 `}
                    >
                      <p
                        className={`text-2xl font-semibold   text-white p-2  `}
                      >
                        {game.title}
                      </p>
                      <p
                        className={`  text-lg font-semibold text-white p-2 absolute bottom-0 left-[20%]   `}
                      >
                        {game.company}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </section>
          <section ref={aboutUs} className=" text-center mt-16 py-5 ">
            <div className=" text-4xl  md:text-6xl  font-semibold text-white uppercase md:mb-16">
              <span className={` text-[#d5a777] `}> About</span> US
            </div>
            <p className=" my-6 text-md text-gray-200 text-start">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              totam a pariatur voluptatibus maiores perspiciatis rem velit vitae
              ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores
              deserunt voluptate! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi, reiciendis explicabo tenetur commodi
              sint eum debitis adipisci, et doloremque quod corporis autem vel
              neque, dolorem minima voluptatibus laborum esse consectetur.
            </p>
            <div className="  grid grid-cols-6 my-20 px-4 lg:px-10  ">
              {aboutInfo.map((info, id) => {
                return (
                  <div
                    key={id}
                    className="m-1 transition-all duration-150  group border-2 border-opacity-30 border-[#d5a777]  hover:border-white hover:border-opacity-30   col-span-6  lg:col-span-3 xl:col-span-2 rounded-lg   "
                  >
                    <div className="   transition-all duration-150   m-2 bg-gradient-to-tr from-[#235462] to-[#594755] p-6 rounded-lg ">
                      <div className="  text-4xl mb-2 flex justify-center text-[#d5a777]">
                        {" "}
                        <BsFillPersonFill className=" group-hover:text-white " />{" "}
                      </div>
                      <div className=" text-xl text-[#d5a777] font-semibold">
                        {info.infoTitle}
                      </div>
                      <p className=" text-gray-200 text-center">
                        {info.infoDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section ref={roadMap} className=" text-center my-10 pt-6 ">
            <div className=" text-4xl  md:text-6xl mb-10  font-semibold text-white uppercase">
              <span className={` text-[#d5a777] `}> Road</span>map
            </div>
            <Roadmap />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
