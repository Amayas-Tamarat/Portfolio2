import { FaReact } from "react-icons/fa";
import {
    SiTailwindcss,
    SiGreensock,
    SiSymfony,
    SiMysql,
    SiNextdotjs,
    SiDocker,
    SiJetbrains,
} from "react-icons/si";

export const frontendTech = [
    { label: "React", icon: <FaReact size="1.5em" />, color: "cyan" },
    { label: "Next.js", icon: <SiNextdotjs size="1.5em" />, color: "lime" },
    { label: "TailwindCSS", icon: <SiTailwindcss size="1.5em" />, color: "indigo" },
    { label: "GSAP", icon: <SiGreensock size="1.5em" />, color: "green" },
];

export const backendTech = [
    { label: "Symfony", icon: <SiSymfony size="1.5em" />, color: "gray" },
    { label: "SQL", icon: <SiMysql size="1.5em" />, color: "orange" },
];

export const devOpsTech = [
    { label: "Docker", icon: <SiDocker size="1.5em" />, color: "blue" },
    { label: "JetBrains", icon: <SiJetbrains size="1.5em" />, color: "purple" },
];
