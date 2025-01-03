'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "What are AI agents?",
    content: "An artificial intelligence (AI) agent refers to a system or program that is capable of autonomously performing tasks on behalf of a user or another system by designing its workflow and utilizing available tools.",
    imageUrl: "/aiagent.png",
  },
  {
    id: "2",
    title: "Types of AI agents",
    content: "AI agents can be developed to have varying levels of capabilities. A simple agent may be preferred for straightforward goals to limit unnecessary computational complexity. In order of simplest to most advanced, there are 5 main agent types:",
    imageUrl: "/ty.jpg",
  },
  {
    id: "3",
    title: "Benefits of using AI Agents",
    content: "AI agents can improve your business operations and your customers' experiences.AI agents can have many benefits for businesses, including: Improved operational efficiency AI agents can automate routine tasks and use resources efficiently, which can reshape how workflows are managed.",
    imageUrl: "/bebefits.png",
  },
  {
    id: "4",
    title: "Is AI Making Call Center Agents Better Or Replacing Them?",
    content: "Working in a call center is no walk in the park. Agents deal with a constant influx of calls, often from frustrated or distressed customers, while juggling the pressure to resolve issues quickly and empathetically. The emotional labor involved makes call center work one of the most demanding jobs in customer service.",
    imageUrl: "/cc.jpg",
  },
  {
    id: "5",
    title: "The Rise Of AI Agents",
    content: "In this context, the sense of “agent” is the difference between using a tool to accomplish something yourself and asking someone to do something for you. Imagine that you are trying to solve a mathematics program. The tool approach would be using a search engine to look up the problem or find a solution, after which you would have to sift through the results. The agent approach would be asking it to solve the problem for you. In doing so, the less contextual information you need to provide along with your question, the more natural the process feels. If the AI agent has a clear sense of who you are, what you know, and how you prefer to learn, it becomes very easy to think of it as an entity you are interacting with rather than a tool you are using.",
    imageUrl: "/t2.png",
  },
  {
    id: "6",
    title: "AI Agents Will Shape Every Aspect Of Education In 2025",
    content: "Artificial Intelligence has been at the forefront of educational technology and innovation discussions these past two years and will likely continue to be so for the foreseeable future. To discern what may be coming in 2025, I asked several education innovators who had shaped stories in 2024 for their takes on what they see as being just over the horizon. One theme that stood out was the rise of AI Agents.",
    imageUrl: "/t1.jpg",
  },
];

const Post: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const post = posts.find((post) => post.id === id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      setComments([...comments, { name: name.trim(), comment: comment.trim() }]);
      setName('');
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        <p className="text-xl">Post not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-300 via-gray-100 to-gray-200 min-h-screen py-24">
      <div className="flex flex-col justify-center items-center min-h-screen px-5">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={400}
              className="my-4 rounded-lg"
            />
            <p className="mt-4 whitespace-pre-wrap leading-relaxed text-gray-800">
              {post.content}
            </p>
          </div>
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {comments.length > 0 ? (
              <ul className="space-y-4">
                {comments.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800"
                  >
                    <span className="font-medium text-blue-600">{item.name}:</span>
                    <span>{item.comment}</span>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="mt-2 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete Comment
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
            <div className="mt-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full p-4 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              ></textarea>
              <button
                onClick={handleAddComment}
                className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-16 text-center">
          <Link
            href="/"
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
