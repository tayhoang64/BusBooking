import { Check, Bus, CreditCard, Clock, Shield, Phone, Users } from "lucide-react"
import Bus1 from '../../assets/bus1.png'
import Bus2 from '../../assets/bus.png'
import Bus3 from '../../assets/bus5.png'
import Bus4 from '../../assets/bus4.png'
import Bus5 from '../../assets/bus7.png'
import Bus6 from '../../assets/bus6.png'
export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#8A2BE2] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Discover the range of services we offer to make your bus travel experience seamless and enjoyable.
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <Bus className="h-12 w-12 text-[#8A2BE2] mb-6" />
            <h3 className="text-xl font-bold mb-4">Bus Ticket Booking</h3>
            <p className="text-gray-600 mb-6">
              Book bus tickets for any route with just a few clicks. Choose from thousands of routes and hundreds of bus
              operators.
            </p>
            <ul className="space-y-2">
              {["Easy online booking", "Instant confirmation", "Secure payment", "24/7 availability"].map(
                (feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <CreditCard className="h-12 w-12 text-[#8A2BE2] mb-6" />
            <h3 className="text-xl font-bold mb-4">Flexible Payment Options</h3>
            <p className="text-gray-600 mb-6">
              Choose from multiple payment methods for your convenience. We support credit cards, debit cards, net
              banking, and more.
            </p>
            <ul className="space-y-2">
              {["Credit & debit cards", "Net banking", "UPI payments", "Wallet payments"].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <Clock className="h-12 w-12 text-[#8A2BE2] mb-6" />
            <h3 className="text-xl font-bold mb-4">Real-time Tracking</h3>
            <p className="text-gray-600 mb-6">
              Track your bus in real-time to know exactly when it will arrive. No more waiting at the bus stop for
              hours.
            </p>
            <ul className="space-y-2">
              {["Live GPS tracking", "Delay notifications", "ETA updates", "Route visualization"].map(
                (feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-6">
                <Shield className="h-12 w-12 text-[#8A2BE2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Travel Insurance</h3>
                <p className="text-gray-600">
                  Protect your journey with our affordable travel insurance options. Coverage includes trip
                  cancellation, medical emergencies, and baggage loss.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <Phone className="h-12 w-12 text-[#8A2BE2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
                <p className="text-gray-600">
                  Our dedicated customer support team is available round the clock to assist you with any queries or
                  issues.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <Users className="h-12 w-12 text-[#8A2BE2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Group Bookings</h3>
                <p className="text-gray-600">
                  Special discounts and dedicated service for group bookings. Perfect for corporate outings, school
                  trips, or family vacations.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#8A2BE2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Booking</h3>
                <p className="text-gray-600">
                  Your data security is our priority. All transactions are encrypted and processed through secure
                  payment gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bus Types */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Types of Buses Available</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Standard Buses",
              features: ["Comfortable seating", "Air conditioning", "Reading lights", "Charging ports"],
            },
            {
              name: "Luxury Buses",
              features: ["Reclining seats", "Extra legroom", "Entertainment systems", "Refreshments"],
            },
            { name: "Sleeper Buses", features: ["Flat beds", "Privacy curtains", "Reading lights", "Charging ports"] },
          ].map((busType, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <img
                src={Bus1}
                alt={Bus1}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4">{busType.name}</h3>
              <ul className="space-y-2">
                {busType.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#8A2BE2] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the convenience of booking bus tickets online with BusTickets. Start your journey today!
          </p>
          <button className="bg-white text-[#8A2BE2] hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

