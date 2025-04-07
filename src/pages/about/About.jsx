import { PhoneCall, Mail, MapPin } from "lucide-react"

import BusBg from '../../assets/bg1.jpg'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#8A2BE2] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BusTickets</h1>
          <p className="text-xl max-w-2xl">
            We're dedicated to making bus travel simple, convenient, and affordable for everyone.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, BusTickets started with a simple mission: to revolutionize the way people book bus
              tickets. We noticed that the traditional bus booking process was often complicated, time-consuming, and
              frustrating.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of travel enthusiasts and tech experts came together to create a platform that makes booking bus
              tickets as easy as a few clicks. Since then, we've grown to partner with hundreds of bus operators across
              the country, offering thousands of routes to our valued customers.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve millions of travelers each year, helping them reach their destinations safely,
              comfortably, and affordably.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={BusBg} alt="Our team" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#8A2BE2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Safety First</h3>
              <p className="text-gray-600 text-center">
                We prioritize the safety of our customers by partnering only with reliable and well-maintained bus
                operators.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#8A2BE2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Efficiency</h3>
              <p className="text-gray-600 text-center">
                We strive to make the booking process as quick and efficient as possible, saving you time and hassle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#8A2BE2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Customer-Centric</h3>
              <p className="text-gray-600 text-center">
                Our customers are at the heart of everything we do. We're committed to providing exceptional service and
                support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src={`/placeholder.svg?height=200&width=200&text=Team Member ${item}`}
                  alt={`Team Member ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-[#8A2BE2]">CEO & Co-Founder</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <PhoneCall className="h-10 w-10 text-[#8A2BE2] mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 text-center">+91 1234567890</p>
              <p className="text-gray-600 text-center">Monday to Friday, 9am to 6pm</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Mail className="h-10 w-10 text-[#8A2BE2] mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 text-center">info@bustickets.com</p>
              <p className="text-gray-600 text-center">support@bustickets.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <MapPin className="h-10 w-10 text-[#8A2BE2] mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">123 Main Street</p>
              <p className="text-gray-600 text-center">Anytown, USA 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
