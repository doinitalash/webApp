import { useState, useEffect } from 'react'

// Dynamically import all images from the carousel folder
const importAllImages = () => {
  const images = import.meta.glob('../assets/carousel/*.{jpg,png,jpeg,gif}')
  return Object.keys(images).map((path) => path.replace('../assets', '/src/assets'))
}

const images = importAllImages()

const About = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="bg-gray-900 text-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Doinitalash</h2>
          <p className="text-lg leading-relaxed">
            At Doinitalash, we take pride in offering premium lash services and
            products that elevate your natural beauty. Our mission is to
            provide you with a luxurious and relaxing experience, ensuring you
            leave feeling confident and radiant. With a commitment to quality
            and excellence, we bring you customized lash extensions, lash lifts,
            and a range of beauty products tailored to your needs.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Explore our premium services and experience the artistry and care
            that make Doinitalash the go-to destination for lash beauty.
          </p>
        </div>

        {/* Right Side: Image Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {/* Carousel Images */}
          <img
            src={images[currentImage]}
            alt="Artistry"
            className="rounded-lg shadow-lg object-cover h-80 w-full"
          />

          {/* Carousel Navigation */}
          <button
            aria-label='Previous image'
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-pink-500 transition"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            aria-label='Next image'
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-pink-500 transition"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
