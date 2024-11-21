const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] md:h-[800px] lg:h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/doinitaLashStudio.png')`,
        backgroundPosition: 'center 75%'
      }}
    >
      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/0"></div> */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.7) 35%, rgba(17, 24, 39, 0) 100%)',
        }}
      ></div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 md:px-20">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Doinitalash</h1>
        <p className="mt-4 text-lg md:text-2xl">Elevate your beauty with premium lash services and products</p>
        <button className="mt-6 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition">
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default Hero
