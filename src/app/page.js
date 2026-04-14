import Image from "next/image";
import Hero from "./components/Hero";
import Friends from "./components/Friends";

export default function Home() {
  return (
    <div className="max-w-[1110px] mx-auto w-[90%]">
      <Hero/>
      <Friends/>
  </div>
  );
}
