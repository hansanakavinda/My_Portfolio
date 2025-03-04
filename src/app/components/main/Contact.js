export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white/0 text-white py-20 px-5">
  {/* Section Title */}
  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
    Contact Me
  </h1>
  <p className="text-base md:text-md lg:text-lg text-gray-300 text-center w-3/4 md:w-1/2 mb-12">
    Feel free to reach out for collaborations or inquiries!
  </p>

  {/* Contact Form */}
  <div className="w-full max-w-lg bg-white/5  p-8 rounded-lg shadow-lg text-sm md:text-md lg:text-lg">
    <form action="#" method="POST" >
      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-2">Name</label>
        <input type="text" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your name" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-2">Email</label>
        <input type="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-2">Message</label>
        <textarea className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" rows="4" placeholder="Enter your message" required></textarea>
      </div>

      <button type="submit" className="w-full bg-purple-800 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition">
        Send Message
      </button>
    </form>
  </div>

</section>
    );
}