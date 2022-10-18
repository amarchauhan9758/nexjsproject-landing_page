import { useState } from 'react'
import { BsArrowRight, BsArrowLeft, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
import logo from '../assets/Images/logo.png'
import { Pivot as Hamburger } from 'hamburger-react'

export default function Home() {
  const [isOpen, setOpen] = useState(false)

  const modalHandler = () => {
    setOpen(!isOpen)
  }
  if (typeof window !== "undefined") {
    if (isOpen) {
      const element = window.document.getElementById('slidingDiv');
      element.classList.add('mobDropDown')
    } else {
      const element = window.document.getElementById('slidingDiv');
      element.classList.remove('mobDropDown')
    }
  }


  return (
    <div className="relative" style={{ overflowX: "clip" }}>

      {/* =================Background Img====================== */}

      {/* carousel for tab/mob */}

      <div className='mobCarousel'>
        <Carousel infiniteLoop={true} showIndicators={false} showArrows={false} >
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

      <div className='laptopCarousel'>
        <Carousel infiniteLoop={true} showIndicators={false}  >
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

      <div className='headerNew flex  items-center bg-white xl:py-8 xl:px-20  '>
        <div className='LogoIMg w-20 xl:w-[10rem]    pt-2' >
          <Image className="logoFirst" src={logo} alt='image' width={120}
            height={80} />
          {/* <p className='lg:-translate-x-4 lg:translate-y-6 logoMainText text-xs font-josefin '>GROUND ZERO</p> */}
          <p className='lg:hidden logoMainText1'>ARCHITECTURE | INTERIOR</p>
        </div>
        <div className=' header w-full tracking-widest  '>

          <ul className='flex    py-5 gap-12   w-full uppercase' >
            <li className='  h-[16px] font-josefin font-[16px]  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>Home</li>
            <li className=' h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >About us</li>
            <li className=' h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>Look book</li>
            <li className=' h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >Press</li>
            <li className=' h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >Process</li>
            <li className=' h-[16px] font-josefin font-[16px] text-black font-normal leading-4  hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >contact</li>
          </ul>

        </div>
      </div>
      {/* head mob and tab */}
      <div className=' absolute headTab -top-5  z-40  right-0  font-nezto flex flex-col space-y-3 px-4 pt-8  justify-end  tracking-widest items-center  '>
        <Hamburger toggled={isOpen} toggle={setOpen} onClick={modalHandler} />
      </div>

      {/* sliding header hamburger icon */}
      <div id="slidingDiv" className=' absolute -top-96 bg-white  w-full  px-8 space-y-4 py-4'>
        <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6' >HOME</p>
        <p className=' h-[10px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>ABOUT US</p>
        <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>LOOK BOOK</p>
        <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>PRESS</p>
        <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>PROCESS</p>
        <p className=' h-[16px] font-josefin text-sm  font-normal leading-4 hover:text-[#F0B342] transition duration-300  hover:border-b-2 hover:border-[#F0B342] pb-6'>PROCESS</p>
      </div>

      <div className='absolute herotextTab top-72 px-36 text-white font-nezto  tracking-widest'>
        <p className='text-7xl herotextTabP1 font-josefin   mb-6'>HEADLINE TEXT</p>
        <p className='herotextTabP2   font-josefin font-[16px] text-white  leading-6 tracking-[5%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="mt-4  font-josefin font-[16px] text-white  leading-6 tracking-[5%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="mt-4 herotextTabP2    font-josefin font-[16px] text-white  leading-6 tracking-[5%]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="mt-4 herotextTabP2  font-josefin font-[16px] text-white  leading-6 tracking-[5%]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>

      <div className="absolute px-8  md:px-36 flex dots space-x-8 items-center">
        <div className="border-orange-300 p-1 border rounded-full ">
          <p className="rounded-full h-3 w-3 bg-orange-300"></p>
        </div>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
      </div>

      <div className="flex justify-center  items-center heroText font-nezto font-extrabold tracking-widest ">
        <p className="-mt-10 text-gray-100">MEDIA</p>
      </div>


      <div className="md:flex md:items-center   md:justify-start lg:justify-center  lg:items-center overflow-x-visible  md:space-x-6 pb-10 lg:translate-x-36 z-20 lg:-translate-y-8 md:-translate-y-4 md:translate-x-8">
        {/* left div */}
        <div className="lg:pl-12 md:pl-6 py-10 lg:pr-12  card bg-white ">

          <p className="lg:text-4xl md:text-3xl font-bold leading-[100%] w-[284px] h-[40px] not-italic  text-[40px] font-josefin tracking-[0.1em] ">Get In Touch</p>
          <p className="mt-10  font-bold leading-[100%] w-[61px] h-[16px] not-italic  text-[16px] font-josefin tracking-[0.1em]  ">Mobile</p>

          <p className="font-nezto tracking-wider text-sm mt-1">+91 9389725398</p>
          <p className="mt-6  font-bold leading-['100%'] w-['50px'] h-['16px'] not-italic  text-['16px'] font-josefin tracking-[0.1em] ">Email</p>
          <p className="font-nezto tracking-wider mt-1 text-sm">groundzero@gmail.com</p>
          <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>

        </div>

        {/* right div */}
        <div className='rightDiv  flex flex-col screenDiv   xl:p-4  items-start '>

          <Carousel className="Sliding" width={1000} showArrows={false} showIndicators={false} infiniteLoop={true}  >
            <div className='flex justify-center items-center gap-8'>
              <p className="one "></p>
              <p className="two "></p>
              <p className="three "></p>
              <p className="four  "></p>

            </div>
            <div className='flex justify-center items-center gap-8'>
              <p className="one "></p>
              <p className="two "></p>
              <p className="three"></p>
              <p className="four "></p>

            </div>
            <div className='flex justify-center items-center gap-8'>
              <p className="one "></p>
              <p className="two "></p>
              <p className="three"></p>
              <p className="four "></p>

            </div>


          </Carousel>

          <Carousel className="newSliding" width={1000} showArrows={true} showIndicators={false} infiniteLoop={true}  >
            <div className='flex justify-center items-center gap-8'>
              <p className="one "></p>
              <p className="two "></p>
              <p className="three "></p>
              <p className="four  "></p>

            </div>
            <div className='flex justify-center items-center gap-8'>
              <p className="one "></p>
              <p className="two "></p>
              <p className="three"></p>
              <p className="four "></p>

            </div>
            <div className='flex justify-center items-center gap-8'>
              <p className="one "></p>
              <p className="two "></p>
              <p className="three"></p>
              <p className="four "></p>

            </div>


          </Carousel>



          <div className='flex text-2xl text-gray-700 space-x-3  sm:ml-20  '>
            <p className=' p-2'>
              <BsArrowLeft />
            </p>
            <p className='p-2 arrowCard'>
              <BsArrowRight />
            </p>

          </div>

        </div>

        {/* visible only in mob screen */}
        <div className="lg:pl-12 pl-5 ml-10 xl:ml-0 mt-8 md:mt-0 md:pl-6 py-10 lg:pr-12 otherCard bg-white border  ">
          <p className="lg:text-4xl text-3xl md:text-3xl font-nezto font-extrabold tracking-widest">Get In Touch</p>
          <p className="mt-10 font-nezto tracking-wider font-semibold">Mobile</p>

          <p className="font-nezto tracking-wider text-sm mt-1">+91 9389725398</p>
          <p className="mt-6 font-nezto tracking-wider font-semibold">Email</p>
          <p className="font-nezto tracking-wider mt-1 text-sm">groundzero@gmail.com</p>
          <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>
        </div>
      </div>


      {/* Footer */}

      <div className='mt-16 lg:px-32 md:px-8 '>
        <p className='w-full h-0.5 bg-gray-300'></p>
        <div className='pt-1 pb-4 mt-2 md:mt-0 px-8 md:px-0 md:flex justify-between items-center'>
          <p className='text-gray-600 text-sm xl:text-normal mb-8 md:mb-0 font-nezto tracking-widest'>	&#169;groundzero | All rights reserved</p>
          <div className='flex space-x-8 text-xl text-gray-700 mt-2'>
            <p className='p-2 rounded-full bg-gray-300'>
              <FaFacebookF />
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
              <BsInstagram />
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
              <BsTwitter />
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
              <FaLinkedinIn />
            </p>
          </div>
        </div>

      </div>



    </div>
  )
}
