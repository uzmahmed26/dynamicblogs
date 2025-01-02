import Link from 'next/link';

export default function Contact() {
  return (
    <div className="relative bg-gradient-to-r from-teal-100 to-blue-200 text-black min-h-screen flex flex-col items-center justify-center pt-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-300 opacity-15 rounded-full w-96 h-96 absolute -top-20 left-10 animate-pulse"></div>
        <div className="bg-gradient-to-r from-teal-400 via-green-300 to-yellow-400 opacity-15 rounded-full w-72 h-72 absolute -bottom-28 right-16 animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 drop-shadow-xl">
          Let's Connect
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700">
          Whether you have a question, an idea, or just want to say hello, I would love to hear from you. Reach out to me through the form or explore other ways to connect.
        </p>

        {/* Contact Form */}
        <form className="max-w-4xl mx-auto bg-gradient-to-r from-white via-gray-100 to-gray-200 text-black rounded-2xl shadow-lg p-10 space-y-8 border border-gray-200">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-lg hover:from-green-500 hover:to-blue-500 focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Other Ways to Connect */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600">
            Other Ways to Connect
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-700">
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <Link href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
                  abc@gmail.com
                </Link>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <Link href="tel:+123456789" className="text-blue-500 hover:underline">
                  +92-333 456 789
                </Link>
              </p>
              <p>
                <span className="font-semibold">Location:</span> Blog City, Pakistan
              </p>
            </div>

            <p className="text-gray-700 mt-6 md:mt-0">
              Or connect with me on{" "}
              <Link href="https://linkedin.com" className="text-blue-500 hover:underline">
                LinkedIn
              </Link>
              ,{" "}
              <Link href="https://twitter.com" className="text-blue-500 hover:underline">
                Twitter
              </Link>
              , and{" "}
              <Link href="https://github.com" className="text-blue-500 hover:underline">
                GitHub
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
