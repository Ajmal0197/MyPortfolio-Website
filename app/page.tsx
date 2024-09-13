import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (<div><Navbar /><Hero /><Technologies /><Experience />
    <Contact />
  </div>);
}
