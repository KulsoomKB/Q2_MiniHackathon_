import Image from "next/image";
import Link from "next/link";
export default function Civicc() {
  return (
   
        <div className="flex flex-col min-h-screen bg-sky-60">
          
          <main className="flex-grow container mx-auto p-6">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
              CIVIC 2024 Price in Pakistan, Images, Reviews & Specs
            </h1>
    
            {/* Image */}
            <div className="flex justify-center mb-4">
              <Image
                src="/civic.jpg" // Ensure this path matches the image in your `public` folder
                alt="Civic 2024"
                width={600} // Adjust the width and height as needed
                height={100}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
    
            {/* Description */}
            <p className="text-gray-700 text-base text-center mb-4">
              The 2024 Civic offers a perfect blend of style, efficiency, and cutting-edge technology. 
              Known for its reliability and fuel economy, the Civic remains a top choice for those looking 
              for a practical and stylish vehicle in Pakistan. The 2024 model includes advanced safety features, 
              a sleek interior, and an enhanced driving experience.
            </p>
    
            {/* Price */}
            <p className="text-lg text-center font-semibold text-green-700 mb-6">
              Price: PKR 90,000,00
            </p>
            <Link href="/payment">
            {/* Make Payment Button */}
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Make Payment
              </button>
            </div>
            </Link>
          </main>
         
        </div>
   


  );}