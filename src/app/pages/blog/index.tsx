import Link from "next/link";
import react from "react";

const blogPosts = [
  {
    id: "1",
    title: "What are AI agents?",
    content: "An artificial intelligence (AI) agent refers to a system or program that is capable of autonomously performing tasks on behalf of a user or another system by designing its workflow and utilizing available tools.",
    image: "/aiagent.png",
  },
  {
    id: "2",
    title: "Types of AI agents",
    content: "AI agents can be developed to have varying levels of capabilities. A simple agent may be preferred for straightforward goals to limit unnecessary computational complexity. In order of simplest to most advanced, there are 5 main agent types:",
    image: "/ty.jpg",
  },
  {
    id: "3",
    title: "Benefits of using AI Agents",
    content: "AI agents can improve your business operations and your customers' experiences.AI agents can have many benefits for businesses, including: Improved operational efficiency AI agents can automate routine tasks and use resources efficiently, which can reshape how workflows are managed.",
    image: "/bebefits.png",
  },
  {
    id: "4",
    title: "Is AI Making Call Center Agents Better Or Replacing Them?",
    content: "Working in a call center is no walk in the park. Agents deal with a constant influx of calls, often from frustrated or distressed customers, while juggling the pressure to resolve issues quickly and empathetically. The emotional labor involved makes call center work one of the most demanding jobs in customer service.",
    image: "/cc.jpg",
  },
  {
    id: "5",
    title: "The Rise Of AI Agents",
    content: "In this context, the sense of “agent” is the difference between using a tool to accomplish something yourself and asking someone to do something for you. Imagine that you are trying to solve a mathematics program. The tool approach would be using a search engine to look up the problem or find a solution, after which you would have to sift through the results. The agent approach would be asking it to solve the problem for you. In doing so, the less contextual information you need to provide along with your question, the more natural the process feels. If the AI agent has a clear sense of who you are, what you know, and how you prefer to learn, it becomes very easy to think of it as an entity you are interacting with rather than a tool you are using.",
    image: "/t2.png",
  },
  {
    id: "6",
    title: "AI Agents Will Shape Every Aspect Of Education In 2025",
    content: "Artificial Intelligence has been at the forefront of educational technology and innovation discussions these past two years and will likely continue to be so for the foreseeable future. To discern what may be coming in 2025, I asked several education innovators who had shaped stories in 2024 for their takes on what they see as being just over the horizon. One theme that stood out was the rise of AI Agents.",
    image: "/t1.jpg",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-300 mb-8">Blog Posts</h1>
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li
              key={post.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl"
            >
              <Link href={`/blog/${post.id}`}>
                <a className="text-xl font-bold text-yellow-300 hover:underline">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
