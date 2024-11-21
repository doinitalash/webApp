import { useState } from 'react'
import { FaEye, FaMagic, FaPaintBrush, FaUserFriends } from 'react-icons/fa'

interface Service {
  id: number
  name: string
  icon: JSX.Element
  description: string
  pricing: string
}

const servicesData: Service[] = [
  {
    id: 1,
    name: 'Lash Extensions',
    icon: <FaEye className="text-pink-500 text-4xl" />,
    description: 'Get fuller, longer lashes with our custom extensions. Perfect for enhancing your natural beauty.',
    pricing: '$150 per session',
  },
  {
    id: 2,
    name: 'Lash Lifts',
    icon: <FaMagic className="text-pink-500 text-4xl" />,
    description: 'A natural, lifted look to enhance your lashes. Lasts up to 8 weeks.',
    pricing: '$90 per session',
  },
  {
    id: 3,
    name: 'Brow Shaping',
    icon: <FaPaintBrush className="text-pink-500 text-4xl" />,
    description: 'Expert brow shaping and styling to frame your face beautifully.',
    pricing: '$40 per session',
  },
  {
    id: 4,
    name: 'Beauty Consultations',
    icon: <FaUserFriends className="text-pink-500 text-4xl" />,
    description: 'Personalized consultations to find the perfect look and products for you.',
    pricing: '$50 per consultation',
  },
]

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const openModal = (service: Service) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <section className="bg-gray-900 text-white py-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:shadow-pink-500 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <button
                onClick={() => openModal(service)}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md">
              <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
              <p className="mb-4">{selectedService.description}</p>
              <p className="mb-4 font-semibold">{selectedService.pricing}</p>
              <button
                onClick={closeModal}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
