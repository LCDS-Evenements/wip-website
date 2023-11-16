import type { ReactElement } from "react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, Globe } from "lucide-react";

export const Footer = (): ReactElement => {
  return (
    <footer className="absolute bottom-4 left-2/4 -translate-x-2/4 flex gap-2 flex-col items-center">
      <p className="text-center text-sm text-gray-400">
        &copy; 2023 <a target="_blank" href="https://cuicuitedays.fr" className="text-[#F3CE49]">Cuicuitedays</a>
      </p>
      <div className="flex gap-2">
        <a target="_blank" href="https://instagram.com/cuicuitedays">
          <InstagramIcon className="text-[#F3CE49]" size={20} />
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100089684250095&mibextid=LQQJ4d">
          <FacebookIcon className="text-[#F3CE49]" size={20} />
        </a>
        <a target="_blank" href="https://m.youtube.com/@lescuicuitedays">
          <YoutubeIcon className="text-[#F3CE49]" size={20} />
        </a>
        <a target="_blank" href="https://cuicuitedays.fr">
          <Globe className="text-[#F3CE49]" size={20} />
        </a>
      </div>
    </footer>
  );
};