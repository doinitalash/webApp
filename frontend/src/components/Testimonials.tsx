const Testimonials = () => {
    return (
      <section
        id="testimonials"
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <p className="italic mb-4">
                "The best lash extensions I've ever had. Dlashart truly knows how to make me feel confident!"
              </p>
              <p className="font-bold text-pink-500">- Jane Doe</p>
            </div>
            <div className="card p-6">
              <p className="italic mb-4">
                "The growth serum is amazing! My lashes have never been this healthy."
              </p>
              <p className="font-bold text-pink-500">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  