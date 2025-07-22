import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSymfony, SiMysql, SiTailwindcss, SiGreensock } from "react-icons/si";

const techItems = [
    { label: "React", icon: <FaReact size="2em" />, color: "blue" },
    { label: "Next.js", icon: <TbBrandNextjs size="2em" />, color: "red" },
    { label: "Symfony", icon: <SiSymfony size="2em" />, color: "purple" },
    { label: "SQL", icon: <SiMysql size="2em" />, color: "gray" },
    { label: "GSAP", icon: <SiGreensock size="2em" />, color: "green" },
    { label: "TailwindCSS", icon: <SiTailwindcss size="2em" />, color: "indigo" },
];

export default techItems;
