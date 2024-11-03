import Image from "next/image";

export default function Thankyou() {
  return (
<div className="flex flex-col min-h-screen bg-gray-100">
<main className="container mx-auto p-20 flex-grow text-center">

  {/* Heading */}
  <h1 className="text-3xl font-bold text-gray-800 mb-10">
    Thank You for Shopping!
  </h1>

  {/* Paragraph */}
  <p className="text-gray-700 text-lg">
    Your order will be delivered within 3 business days.
  </p>
</main>
</div>
 );
}