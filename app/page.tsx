import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          {/* Your main content goes here */}
      
       {/* Hero Section */}
      <section className=" py-20">
        <div className="container mx-auto text-center">
          <h5 className="text-xl text-gray-800 font-normal mb-2">
            Sell Your Car on PakWheels and Get the Best Price
          </h5>
          
          <div className="flex items-center justify-center mb-8">
  <div className="border-t border-gray-400 w-1/2"></div>
  <span className="mx-4 text-gray-600 font-medium">OR</span> {/* font-medium added */}
  <div className="border-t border-gray-400 w-1/2"></div>
</div>

          
          <div className="grid grid-cols-1 justify-center  md:grid-cols-2 gap-20">
            {/* Card for Post Your Ad */}
            <div className="bg-white shadow-lg  rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 text-gray-800 text-lg mb-2">
                Post your Ad on PakWheels
              </h3>
              <br></br>
              <p className="text-sm text-gray-600 mb-2">
              ✔️ Post your Ad for Free in 3 Easy Steps
              </p>
              <p className="text-sm text-gray-600 mb-2">
              ✔️ Get Genuine offers from Verified Buyers
              </p>
              <p className="text-sm text-gray-600">
              ✔️ Sell your car Fast at the Best Price
              </p>
              <br></br>
              <button className="bg-red-800 text-white  py-2 px-4 rounded-md hover:bg-red-700 transition">
  Post your Ad
</button>

            </div>

            {/* Card for Try PakWheels Sell It For Me */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 text-gray-800 mb-2">
                Try PakWheels Sell It For Me
              </h3>
              <br></br>
              <p className="text-sm text-gray-600 mb-2">
              ✔️ Dedicated Sales Expert to Sell your Car
              </p>
              <p className="text-sm text-gray-600 mb-2">
              ✔️ We Bargain for you and share the Best Offer
              </p>
              <p className="text-sm text-gray-600">
              ✔️ We ensure Safe & Secure Transaction
              </p>
<br></br>
              <button className="bg-blue-800 text-white  py-2 px-4 rounded-md hover:bg-blue-700 transition">
  Register Your Car
</button>
            </div>
          </div>
        </div>
 </section>

           {/* Featured New Cars Section */}
           <section className="py-20">
            <div className="container mx-auto ">
              <h2 className="text-2xl font-semibold mb-5">Featured New Cars</h2>
              <div className="flex  space-x-6 mb-8">
                <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Popular</span>
                <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Upcoming</span>
                <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Newly Launched</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card for Toyota Corolla */}
                <Link href="/corolla">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <Image src="/corolla.jpeg" alt="Toyota Corolla" width={300} height={200} className="object-cover rounded-md mb-4" />
                  <h3 className="text-base text-center  ">Toyota Corolla</h3>
                  <p className="text-gray-600 text-center font-sm">PKR 59.7 - 75.5 lacs</p>
                </div>
                </Link>
                {/* Card for Suzuki Alto */}
                <Link href="/alto">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <Image src="/Alto.png" alt="Suzuki Alto" width={300} height={200} className="object-cover rounded-md mb-4" />
                  <h3 className="text-base text-center">Suzuki Alto</h3>
                  <p className="text-gray-600 text-center">PKR 23.3 - 30.5 lacs</p>
                </div>
</Link>
                {/* Card for Honda City */}
                <Link href="/city">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <Image src="/City.jpg" alt="Honda City" width={300} height={200} className="object-cover rounded-md mb-4" />
                  <h3 className="text-base text-center">Honda City</h3>
                  <p className="text-gray-600 text-center">PKR 46.5 - 58.5 lacs</p>
                </div>
</Link>
                {/* Card for Honda Civic */}
                <Link href="/civic">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <Image src="/civic.jpg" alt="Honda Civic" width={300} height={200} className="object-cover rounded-md mb-4" />
                  <h3 className="text-base text-center">Honda Civic</h3>
                  <p className="text-gray-600 text-center">PKR 86.6 - 99.0 lacs</p>
                </div>
                </Link>
              </div>
            </div>
          </section>
 
        </div>
      </main>
   
      </div>
  );
}
