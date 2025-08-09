import Logo from "@/assets/logo.png";
import Instagram from "@/assets/instagram";
import Linkedin from "@/assets/linkedin";
import Facebook from "@/assets/facebook";
import Youtube from "@/assets/youtube";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-primary py-20 px-10">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="mt-6">
          <a className="btn btn-ghost pl-1 btn-no-bg-hover border">
            <Image
              src={Logo}
              className="w-[300px]"
              alt="logo"
              width={1000}
              height={1000}
            />
          </a>
        </div>
        <div className="text-center mt-10 text-4xl">
          &copy; {new Date().getFullYear()} Waste Zero Hub. All rights reserved.
        </div>
        <div>
          <p className="space-y-2">
            <span className="flex items-center space-x-1">
              <a href="https://www.instagram.com/feeldx/">
                <Instagram colorVariant="primary" />
              </a>
              <a href="https://www.linkedin.com/company/feeldx/">
                <Linkedin colorVariant="primary" />
              </a>
              <a href="https://www.facebook.com/feeldx">
                <Facebook colorVariant="primary" />
              </a>
              <a href="https://www.youtube.com/channel/UC9kmR0LVnaZahPLxodFdesQ">
                <Youtube colorVariant="primary" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
