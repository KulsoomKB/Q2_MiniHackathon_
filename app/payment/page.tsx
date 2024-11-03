import Link from "next/link";

Link
export default function Paymentt() {
    return (
     
        <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="container mx-auto p-6 flex-grow">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Enter Your Details
          </h1>

          {/* Form */}
          <form className="bg-white p-8 shadow-md rounded-lg max-w-md mx-auto">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Card Number Field */}
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Card Number"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Address Field */}
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Your Address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Place Order Button */}
            <Link href="/Thankyou">
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Place Order
              </button>
            </div>
            </Link>
          </form>
          
        </main>
      </div>


    );
  }