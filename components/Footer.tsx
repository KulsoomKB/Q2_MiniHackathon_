// footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Cars By Make</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Toyota Cars for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Suzuki Cars for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Honda Cars for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Daihatsu Cars for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Nissan Cars for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Mercedes Cars for Sale</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Cars By City</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Karachi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Islamabad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Lahore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Rawalpindi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Sialkot</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Faisalabad</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Explore PakWheels</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs ">Used Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Used Bikes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">New Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs ">Autoparts and accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cool Rides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Autoshow</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">PakWheels.com</h5>
            <ul>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs ">About Pakwheels.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Our Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Advertise with us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs ">How to Pay</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Careers</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Sell on Pakwheels</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Sell your car</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Sell your Bike</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Sell Accessories</a></li>
              <br></br>
              <h5 className="">Subscribe to our Newsletter</h5>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Cars By Categories</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Jeep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Japanese Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Imported Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Automatic Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Low priced Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">660CC cars</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Cars By Body Type</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Sedan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cross Over</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Mini Van</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Hatchback</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Van</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Compact SUV</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Cars By Colors</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">White Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Black Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">blue Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Red Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Gold Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Grey Cars</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <h5 className="">Cars By Province</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Sindh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Punjab</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Balochistan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Azad Kashmir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Fedrally Adminstrated</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Cars in Tribal Areas</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
           
            <ul>
             
            </ul>
          </div>

          
        </div>
        
        {/* Divider */}
      
<div className="w-full h-px bg-slate-700 mb-2" />
        <div className="mt-8">
          <p className="text-center text-gray-400">
          copyrights  © {new Date().getFullYear()} PakWheels. All rights reserved.
            
          </p>
        
        </div>
        
        <p className="text-center text-gray-400">
            designed by Kulsoom</p>
       
      </div>
    </footer>
  );
};

export default Footer;
