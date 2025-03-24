import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" relative h-[630px]" >
      {/* <div className="flex justify-center items-center bg-gray-900 p-4"> */}
    <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="h-[630px] -z-10 absolute w-full object-cover"
        style={{ pointerEvents: "none" }} // Disable user interaction
        
    >
        <source className=" overflow-hidden" src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
{/* </div> */}
<div className=" h-full  flex justify-center items-center">
  
    
<Link href={"/signup"} className=" bg-blue-950 w-[150px] flex justify-center items-center text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-900 hover:shadow-xl">
  Join Us
</Link>
 
</div>
    <div className=" bg-sky-500 flex justify-end gap-[300px] " >
      <div className=" w-[700px] ml-[300px] " >
        <div className=" mt-[70px] text-[40px] font-bold " >Online Personal Trainer</div>
        <div className=" text-black text-[20px] mt-[30px] " >
        Gym has certified personal trainers that provide you with customised workout plans depending on your goals. Our trainers track your progress, coach and motivate you daily through our web and smartphone app.
        </div>
        <div className=" mt-[20px] bg-blue-950 w-[200px] flex justify-center items-center h-[60px] mb-[40px] rounded-2xl " >Learn More</div>
      </div>
      <div className=" relative mr-[50px] " >
        <img src="/support.jpg" className=" inset-0 bg-blue-500 opacity-40 z-10 h-[450px]" ></img>
      </div>
    </div>
    <div className="bg-gray-200 h-[350px] flex flex-col items-center justify-center py-10">
      {/* Number Counter */}
      <div className="flex space-x-2">
        {["1", "2", "0", "6", "1", "7", "6", "5", "4", "0"].map((digit, index) => (
          <span key={index} className="bg-white text-black text-3xl md:text-4xl font-bold px-4 py-2 rounded-md shadow">
            {digit}
          </span>
        ))}
        <span className="text-black text-3xl md:text-4xl font-bold ml-2">kg</span>
      </div>

      {/* Text Below */}
      <p className="text-black text-lg mt-4 font-semibold">LIFTED USING GYM</p>
    </div>
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg text-black">ABOUT</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-bold text-lg text-black">LEGAL</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
          </ul>
        </div>

        {/* Get the App Section */}
        <div>
          <h3 className="font-bold text-lg text-black">Get the app</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                 alt="Google Play" className="w-32" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" 
                 alt="App Store" className="w-8 h-8 mt-2" />
          </div>
        </div>

        {/* Social & Language Section */}
        <div>
          <h3 className="font-bold text-lg text-black">SOCIAL</h3>
          <div className="mt-2">
            <a href="#" className="inline-block border border-white rounded-full p-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                   alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
          <h3 className="font-bold text-lg text-black mt-4">LANGUAGE</h3>
          <p className="mt-1">Eesti keeles</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-white opacity-50 text-center text-sm py-4">
        Copyright © Gymwolf OÜ. All Rights Reserved. E-mail: <a href="mailto:info@gymwolf.com" className="underline">info@gymwolf.com</a>
      </div>
    </footer>
    </div>
  );
}
