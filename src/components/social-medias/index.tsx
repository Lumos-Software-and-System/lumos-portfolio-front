import Image from "next/image";
import instagram from "../../../src/assets/Instagram.svg";
import wpp from "../../../src/assets/WhatsApp.svg";
import linkedin from "../../../src/assets/Linkedin.svg";

const SocialMedias = () => {
  return (
    <ul>
      <li>
        <Image src={instagram} alt="instagram" />
        <Image src={wpp} alt="wpp" />
        <Image src={linkedin} alt="linkedin" />
      </li>
    </ul>
  );
};

export default SocialMedias;
