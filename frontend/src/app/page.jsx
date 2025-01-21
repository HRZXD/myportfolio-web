import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
//Components
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Analytics />
    </div>
  );
}
