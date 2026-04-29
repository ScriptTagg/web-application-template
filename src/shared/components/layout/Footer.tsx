import { siteConfig } from "@/config/site";
import SectionWrapper from "../shared/SectionWrapper";
import Navbar from "./nav/Navbar";
import { H5 } from "../ui/Typography";
import Clock from "../shared/Clock";
import Copyright from "../shared/Copyright";

export default function Footer() {
  let currentTime = setTimeout(() => {
    new Date();
  }, 5000);
  return (
    <footer className="">
      <SectionWrapper className="flex flex-col gap-4 items-center">
        <p className="text-green-500">{siteConfig.name}</p>
        <Navbar />
        <Clock />
        <Copyright />
      </SectionWrapper>
    </footer>
  );
}
