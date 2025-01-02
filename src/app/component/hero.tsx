"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// interface BlogData {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// Mock async function to fetch data
// async function getData(): Promise<BlogData[]> {
//   return [
//     {
//       id: "1",
//       title: "Discover the Future of Technology",
//       description: "Explore the latest advancements in tech that are shaping our future.",
//       imageUrl: "/public/ai.png",
//     },
//     {
//       id: "2",
//       title: "Sustainable Living Tips",
//       description: "Learn how to live sustainably and make a positive impact on the environment.",
//       imageUrl: "/public/ai.png",
//     },
//   ];
// }

export default function Hero() {
  // const [data, setData] = useState<BlogData[]>([]);

  // useEffect(() => {
  //   // Fetch data asynchronously
  //   const fetchData = async () => {
  //     try {
  //       const result = await getData();
  //       setData(result); // Update the state with fetched data
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  return (
    <div className="min-h-screen bg-gradient-to-br to-gray-100  text-white flex items-center">
     
        <section className="w-full">
          <div className="container mx-auto flex flex-col sm:mt-12 md:flex-row items-center my-8 px-6 sm:px-12 lg:px-28 py-12 md:py-24">
            {/* Left Content: Title and Description */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <h1 className="title-font p-4 text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-green-400 to-blue-500 mt-4 sm:mt-14 md:mt-12">
                AI Agent
              </h1>
              <p className="text-blue-900 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
                A computer scientist explains the next wave of artificial intelligence tools. An artificial intelligence (AI) agent is a software program that can interact with its environment, collect data, and use the data to perform self-determined tasks to meet predetermined goals. Humans set goals, but an AI agent independently chooses the best actions it needs to perform to achieve those goals.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link href={"/blog"}>
                  <button className="inline-flex text-white bg-gradient-to-r from-green-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 transform transition-transform duration-300 rounded text-sm sm:text-base md:text-lg shadow-lg">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content: Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Link href={"/blog"}>
                <Image
                  className="object-cover object-center rounded-lg shadow-2xl hover:scale-105 transform transition-transform duration-300"
                  alt={"pic"}
                  src={"/p1.jpg"}
                  width={500}
                  height={500}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </div>
        </section>
    
    </div>
  );
}
