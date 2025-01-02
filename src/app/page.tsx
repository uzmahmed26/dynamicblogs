
import Image from "next/image";
// import BlogIndex from "@/app/blog/index";
import Hero from "@/app/component/hero";
import Post from "@/app/component/Blog";



export default function Home() {
  return (
    <div>
      <Hero />
      <Post />
      {/* <BlogIndex /> */}
     
    </div>
  );
}
