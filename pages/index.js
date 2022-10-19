import { useState } from 'react'
import { BsArrowRight, BsArrowLeft, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

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


  let slideIndex = 1;

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  return (
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

      <div className='laptopCarousel'>
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
      <div className=' absolute headTab -top-5  z-40  right-0  font-josefin flex flex-col space-y-3 px-4 pt-8  justify-end  tracking-widest items-center  '>
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


      <div className="md:flex md:items-center   md:justify-start lg:justify-center  lg:items-center overflow-x-visible  md:space-x-6 pb-10 lg:translate-x-36 z-20 lg:-translate-y-8 md:-translate-y-4 md:translate-x-8">
        {/* left div */}
        <div className="lg:pl-12 md:pl-6 py-10 lg:pr-12  card bg-white ">

          <p className="GetinTouch">Get In Touch</p>
          <p className="mobile">Mobile</p>

          <p className="number">+91 9389725398</p>
          <p className="email">Email</p>
          <p className="emailaddress">groundzero@gmail.com</p>
          <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>

        </div>

        {/* right div */}
        <div className='rightDiv  w-[90%]  flex flex-col screenDiv    xl:p-4  items-start '>

          <Carousel width={1200} infiniteLoop={true}  showArrows={false}   sshowIndicators={false}  >

            <div className='flex justify-start slideshow-container items-center gap-8'>

              <p className="one  mySlides"></p>
              <p className="two "></p>
              <p className="three"></p>
              <p className="twelve  "></p>



            </div>
            <div className='flex justify-start slideshow-container items-center gap-8'>
            <p className="five mySlides"></p>
            <p className="six"></p>
            <p className="seven"></p>
            <p className="eight"></p>
           
            </div>
            <div className='flex justify-start slideshow-container items-center gap-8'>
            <p className="nine mySlides"></p>
            <p className="ten"></p>
            <p className="elevan"></p>
            <p className="four"></p>
           
           
            </div>
            
            


          </Carousel>



          <div className='flex justify-center  items-center text-2xl text-gray-700 space-x-3  ml-20 lg:ml-12 '>
            <div>
              <button className="hover:border hover:scale-110 hover:duration-300 hover:ease-in-out px-2 py-1 text-semibold " onClick={()=>plusSlides(-1)} ><BsArrowLeft /></button>
            </div>
            <div>
              <button  className='hover:border   hover:scale-110 hover:duration-300 hover:ease-in-out text-semibold px-2 py-1' onClick={() =>plusSlides(1)} > <BsArrowRight />  </button>
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
      <div className="mx-10  h-2 w-auto font-bold ">
      <hr/>
      </div>
      <div className='mt-16 lg:px-32 md:px-8 '>
      
        <div className='pt-1 pb-4 mt-2 md:mt-0 px-8 md:px-0 md:flex justify-between items-center'>
          <p className='text-[#787878]  font-Montserrat tracking-[10%] '>	&#169;groundzero | All rights reserved</p>
          <div className='flex mt-[5rem] space-x-8 text-xl text-gray-700 lg:mt-2'>
            <p className='p-2 rounded-full bg-gray-300'>
            <a href="https://www.facebook.com/" >
              <FaFacebookF />
             </a>
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
            <a href="https://www.instagram.com/">
              <BsInstagram />
              </a>
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
            <a href="https://twitter.com/">
              <BsTwitter />
              </a>
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
               <a href="https://www.linkedin.com/">
              <FaLinkedinIn />
               </a>
            </p>
          </div>
        </div>

      </div>



    </div>
  )
}
