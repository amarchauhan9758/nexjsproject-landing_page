import { useState } from 'react'
import { BsArrowRight, BsArrowLeft, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn ,  } from 'react-icons/fa'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
import logo from '../assets/Images/logo.png'
import { Pivot as Hamburger } from 'hamburger-react'
import loder from '../assets/Images/git.gif'
import circle from "../assets/Images/Ellipse3.png"
import verticle from "../assets/Images/Rectangle1.png"
import horizontal from "../assets/Images/Rectangle2.png"
import one from "../assets/Images/Apartment\ 1.jpg"



export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const [loader, setLoader] = useState(true)
  const [count, setCount] = useState(false)


  const modalHandler = () => {
    setOpen(!isOpen)
  }

  function plusSlides() {
    setCount(!count)
  }

  setTimeout(() => {
    setLoader(false)
  }, 10000)

  return (
    <div className={loader ? `fixed h-screen w-screen` : ' '}>
      {loader && <div style={{ height: '100vh', width: '100vw' }} className="flex justify-center items-center ">
        <div>
          <Image src={loder} alt="laoser" />
        </div>

      </div>}

      <div className='flex Navbar  justify-between  items-center bg-white lg:px-20   '>
          <div className=' w-20 xl:w-[10rem]  mt-2 ml-2 lg:ml-0 md:ml-0 md:mt-0 lg:mt-0  pt-2' >
            <Image className="logo  " src={logo} alt='image' width={100}
              height={74} />
           
          </div>
          <div className='right-side  tracking-widest  '>

            <ul className='flex   items-center py-5 lg:gap-12  md:gap-5    uppercase' >
              <li className='right-side-text   h-[16px] font-josefin font-[16px]  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>Home</li>
              <li className=' right-side-text  h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >About us</li>
              <li className=' right-side-text  h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>Look book</li>
              <li className=' right-side-text  h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >Press</li>
              <li className=' right-side-text  h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >Process</li>
              <li className=' right-side-text  h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >contact</li>
            </ul>

          </div>
        </div>





      <div className="relative" style={{ overflowX: "clip" }}>

        {/* =================Background Img====================== */}

        {/* carousel for tab/mob */}

        <div className='mobCarousel'>
          <Carousel infiniteLoop={true} showIndicators={false} autoPlay={true} showArrows={false}    >
            <div className="heroImg relative">

            </div>
            <div className="heroImgTwo relative">

            </div>
            <div className="heroImgThree relative">

            </div>
            <div className="heroImgFour relative">

            </div>
          </Carousel>
        </div>

        {/* carousel for laptop  */}



        <div className='laptopCarousel  relative '>

          <Carousel showIndicators={true} autoPlay={true} showArrows={false} infiniteLoop={true}   >
            <div className="heroImg relative">

            </div>
            <div className="heroImgTwo relative">

            </div>
            <div className="heroImgThree relative">

            </div>
            <div className="heroImgFour relative">

            </div>

          </Carousel>


        </div>

        {/* ==================head=============================== */}

       


        {/* head mob and tab */}
        <div className=' absolute headTab -top-24  z-40  right-0  font-josefin flex flex-col space-y-3 px-4 pt-8  justify-end  tracking-widest items-center  '>
          <Hamburger toggled={isOpen} toggle={setOpen} onClick={modalHandler} />
        </div>

        {/* sliding header hamburger icon */}
        <div id="slidingDiv" className={isOpen ? `mobDropDown absolute -top-96 bg-white  w-full  px-8 space-y-4 py-4` : loader ? 'hidden' : ' absolute -top-96 bg-white  w-full  px-8 space-y-4 py-4'}>
          <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >HOME</p>
          <p className=' h-[10px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>ABOUT US</p>
          <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>LOOK BOOK</p>
          <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>PRESS</p>
          <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>PROCESS</p>
          <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>CONTACT</p>
        </div>


        <div className='absolute herotextTab top-52 lg:top-72  px-36 text-white font-josefin  w-full tracking-widest'>
          <p className=' herotextTabP1 text-2xl font-josefin '>HEADLINE TEXT</p>
          <p className='herotextTabP2 text-lg  font-josefin font-[16px] text-white  leading-6 tracking-[5%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p className="mt-4  herotextTabP2 text-lg font-josefin font-[16px] text-white  leading-6 tracking-[5%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p className="mt-4 herotextTabP2 text-lg    font-josefin font-[16px] text-white  leading-6 tracking-[5%]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p className="mt-4 herotextTabP2 text-lg  font-josefin font-[16px] text-white  leading-6 tracking-[5%]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        </div>

        {/* <div className="absolute px-8  md:px-36 flex dots space-x-8 items-center">
        <div className="border-orange-300 p-1 border rounded-full ">
          <p className="rounded-full h-3 w-3 bg-orange-300"></p>
        </div>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
      </div> */}

        <div className="flex justify-center  items-center heroText font-josefin font-extrabold tracking-widest ">
          <p className="-mt-10 text-gray-100">MEDIA</p>
        </div>


        <div className="md:flex md:items-center   md:justify-start lg:justify-center  lg:items-center overflow-x-visible  md:space-x-6 pb-10  -translate-y-8 z-20 lg:-translate-y-24 md:-translate-y-14 ">
          {/* left div */}
          <div className="lg:pl-12 md:pl-6 py-10   card bg-white ">
            <p className="GetinTouch">Get In Touch</p>
            <p className="mobile">Mobile</p>
            <p className="number">+91 9389725398</p>
            <p className="email">Email</p>
            <p className="emailaddress">groundzero@gmail.com</p>
            <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>
          </div>

          {/* right div */}
          <div className=' flex flex-col screenDiv z-20   items-start '>
            <div style={{ width: '1000px' }} className=' overflow-x-hidden flex justify-between items-center'>
              <div  className={!count ? 'flex lg:animate-rightFadeIn md:animate-rightFadeInTab  justify-start  items-center gap-8' : `lg:animate-rightFadeOut md:animate-rightFadeOutTab flex justify-start  items-center gap-8`}>
                <p className="one z-20   ">
                  {/* <Image src={one} width="100%" height="100%" layout="responsive" objectFit="contain" /> */}
                </p>
                <p className="two z-20 "></p>
                <p className="three z-20 "></p>
                <p className="twelve z-20  "></p>
              </div>
              <div  className={count ? `flex justify-start lg:animate-leftFadeIn md:animate-leftFadeInTab  z-20   items-center gap-8 ` : ` lg:animate-leftFadeOut flex justify-start items-center md:animate-leftFadeOutTab gap-8`}>
                <p className="five  z-20 "></p>
                <p className="six z-20 "></p>
                <p className="seven z-20 "></p>
                <p className="eight z-20 "></p>
              </div>
            </div>
            <div className='flex justify-center  mt-5 items-center text-2xl text-gray-700 space-x-2  '>
              <div>
                <button className="hover:border  hover:shadow-sm shadow-black hover:scale-110 hover:duration-300 hover:ease-in-out px-2 py-1 text-semibold " onClick={plusSlides} ><BsArrowLeft /></button>
              </div>
              <div>
                <button className='hover:border shadow-sm shadow-black   hover:scale-110 hover:duration-300 hover:ease-in-out text-semibold px-2 py-1' onClick={plusSlides} > <BsArrowRight />  </button>
              </div>

            </div>
          </div>
          {/* visible only in mob screen */}
          <div className="lg:pl-12 pl-5 ml-10 xl:ml-0 mt-8 md:mt-0 md:pl-6 py-10 lg:pr-12 otherCard bg-white border  ">
            <p className="lg:text-4xl text-3xl md:text-3xl font-josefin font-extrabold tracking-widest">Get In Touch</p>
            <p className="mobile">Mobile</p>

            <p className="number">+91 9389725398</p>
            <p className="email">Email</p>
            <p className='emailaddress'>groundzero@gmail.com</p>
            <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>
          </div>
        </div>
        {/* Footer */}
        <div className=" relative mx-10  h-2 w-auto font-bold ">
          <hr />
        </div>
        <div className=' lg:px-32 md:px-8 '>

          <div className='pt-1 pb-4 mt-2 md:mt-0 px-8 md:px-0 md:flex justify-between items-center'>


            <p className='text-[#787878]  font-Montserrat tracking-[10%] '>	&#169;groundzero | All rights reserved</p>
            <div className='flex mt-[5rem] space-x-8 text-xl text-gray-700 lg:mt-2'>
              <p className='p-2 rounded-full text-black bg-[#D9D9D9]'>
                <a href="https://www.facebook.com/" >
                  <FaFacebookF />
                </a>
              </p>
              <p className='p-2 rounded-full text-black z-10 bg-[#D9D9D9]'>
                <a href="https://www.instagram.com/">
                  <BsInstagram />
                </a>
              </p>

              <p className='p-2 rounded-full text-black bg-[#D9D9D9]'>
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn />
                </a>
              </p>

              <p className='p-2 rounded-full text-black bg-[#D9D9D9]'>
                <a href="https://www.youtube.com/">
                  <BsYoutube />
                </a>
              </p>
             


              {/* <div className='border-4 border-red-500 absolute right-0 bottom-24'>

                      <p className="circle"></p>
                      <p className="vertical-line"></p>
                      <p className="horizontal-line"> </p>

                  </div> */}

              <div className='absolute bottom-0 -z-10 right-0'>
                <Image src={circle} />
              </div>
              <div className='absolute bottom-28 -z-10 right-0'>
                <Image src={verticle} />
              </div>
              <div className='absolute bottom-0 -z-10 right-28'>
                <Image src={horizontal} />
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
