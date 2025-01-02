import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-gradient-to-tr from-white via-blue-100 to-teal-50 text-gray-900 min-h-screen flex flex-col items-center justify-center">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 py-16 text-center">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <Image
              src="/aipic.png"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full blur-2xl opacity-50"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Hi, I'm Uzma Ahmed
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I'm a passionate <span className="text-blue-600 font-semibold">Fullstack Developer</span> and tech enthusiast who loves creating intuitive and dynamic web applications. From crafting interactive user experiences to exploring the latest tech trends, I aim to bring ideas to life.
            </p>
            <p className="text-md sm:text-lg text-gray-600">
              Join me on this journey of innovation, where coding meets creativity, and let’s shape the future of web development together.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 bg-gradient-to-tr from-blue-200 to-teal-300 w-48 h-48 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 bg-gradient-to-tr from-teal-300 to-green-200 w-64 h-64 rounded-full blur-2xl opacity-30"></div>
    </div>
  );
}
