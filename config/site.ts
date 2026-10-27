import portraitImage from "@/src/data/image-my.png";

export const siteConfig = {
  name: "Pankaj Borah",
  brand: "tobitoa",
  title: "Full Stack Web Developer",
  description:
    "Portfolio of Pankaj Borah, an Electrical Engineering undergraduate and Full Stack Web Developer building practical digital products.",
  url: "https://tobitoa.dev",
  location: "Jorhat, Assam, India",
  email: "pkb27720@gmail.com",
  resumePath: "/resume/Pankaj-Borah-Resume.pdf",
  profileImage: portraitImage,
  links: {
    github: "https://github.com/tobitoa",
    linkedin: "https://www.linkedin.com/in/tobitoa",
    instagram: "https://www.instagram.com/tobitoa_/",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
] as const;

