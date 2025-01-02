import Link from "next/link";
import Image from "next/image";

// Type for blog posts
type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
};

// Sample blog posts
const posts: Post[] = [
  {
    id: "1",
    title: "What are AI agents?",
    content:
      "An artificial intelligence (AI) agent refers to a system or program that is capable of autonomously performing tasks on behalf of a user or another system by designing its workflow and utilizing available tools.",
    image: "/aiagent.png",
  },
  {
    id: "2",
    title: "Types of AI agents",
    content:
      "AI agents can be developed to have varying levels of capabilities. A simple agent may be preferred for straightforward goals to limit unnecessary computational complexity. In order of simplest to most advanced, there are 5 main agent types:",
    image: "/ty.jpg",
  },
  {
    id: "3",
    title: "Benefits of using AI Agents",
    content:
      "AI agents can improve your business operations and your customers' experiences.AI agents can have many benefits for businesses, including: Improved operational efficiency AI agents can automate routine tasks and use resources efficiently, which can reshape how workflows are managed.",
    image: "/bebefits.png",
  },
  {
    id: "4",
    title: "Is AI Making Call Center Agents Better Or Replacing Them?",
    content:
      "Working in a call center is no walk in the park. Agents deal with a constant influx of calls, often from frustrated or distressed customers, while juggling the pressure to resolve issues quickly and empathetically. The emotional labor involved makes call center work one of the most demanding jobs in customer service.",
    image: "/cc.jpg",
  },
  {
    id: "5",
    title: "The Rise Of AI Agents",
    content:
      "In this context, the sense of “agent” is the difference between using a tool to accomplish something yourself and asking someone to do something for you. Imagine that you are trying to solve a mathematics program. The tool approach would be using a search engine to look up the problem or find a solution, after which you would have to sift through the results. The agent approach would be asking it to solve the problem for you. In doing so, the less contextual information you need to provide along with your question, the more natural the process feels. If the AI agent has a clear sense of who you are, what you know, and how you prefer to learn, it becomes very easy to think of it as an entity you are interacting with rather than a tool you are using.",
    image: "/t2.png",
  },
  {
    id: "6",
    title: "AI Agents Will Shape Every Aspect Of Education In 2025",
    content:
      "Artificial Intelligence has been at the forefront of educational technology and innovation discussions these past two years and will likely continue to be so for the foreseeable future. To discern what may be coming in 2025, I asked several education innovators who had shaped stories in 2024 for their takes on what they see as being just over the horizon. One theme that stood out was the rise of AI Agents.",
    image: "/t1.jpg",
  },
];

const Blog = () => {
  return (
    <div
      id="blog"
      className="relative bg-pink-600 py-10 text-gray-900 min-h-screen flex flex-col items-center"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Blog Header */}
      <div className="relative z-10 text-center py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Welcome to Your AI Assistant
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto text-green-600">
          Discover smart solutions, personalized support, and expert guidance for all your coding, design, and learning needs.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="relative container mx-auto px-6 sm:px-12 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-6 text-gray-800">
              <h3 className="text-xl font-semibold text-pink-400">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {post.content.substring(0, 70)}...
              </p>
              <Link
                href={`/post/${post.id}`}
                className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded hover:scale-105 transform transition-transform"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Redesigned Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-blue-100 via-purple-500 to-pink-500 opacity-30 rounded-full w-96 h-96 absolute -top-20 -left-20 animate-pulse"></div>
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-40 rounded-full w-52 h-52 mr-3 absolute -bottom-24 -right-1 animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Blog;
