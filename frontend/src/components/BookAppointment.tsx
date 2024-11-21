const BookAppointment = () => {
    return (
      <section
        id="appointment"
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Book an Appointment</h2>
          <p className="text-lg mb-8">
            Choose from our lash consultation or training classes
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg"
            />
            <select className="w-full p-4 border rounded-lg">
              <option>Lash Consultation</option>
              <option>Training Class</option>
            </select>
            <button type="submit" className="bg-pink-600 text-white py-3 px-8 rounded-lg">
              Book Now
            </button>
          </form>
        </div>
      </section>
    )
  }
  
  export default BookAppointment
  