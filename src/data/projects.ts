import type { StaticImageData } from "next/image";
import homiesWearImage from "@/src/data/homies-wear.png";
import resomeshImage from "@/src/data/resomesh.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl?: string;
  details?: string;
  features?: readonly string[];
  methodology?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "resomesh",
    title: "RESOMESH",
    category: "RESOMESH",
    subtitle: "Entity Resolution Console",
    description: "An entity-resolution platform designed to identify likely matching business records across three datasets. It uses text normalisation, multi-pass candidate generation, and weighted similarity scoring to help users review potential matches, unmatched records, and structured results.",
    image: resomeshImage,
    imageAlt: "RESOMESH entity resolution console preview",
    technologies: [],
    liveUrl: "https://resomesh.vercel.app/",
    githubUrl: "https://github.com/tobitoa/ResoMesh.git",
    details: "RESOMESH transforms scattered business records into reviewable matching results. It validates three uploaded CSV or TSV datasets, normalises business data, generates candidate pairs through multi-pass blocking, and presents matches and unmatched records for inspection.",
    features: [
      "Three-source CSV or TSV ingestion and schema validation",
      "Business data normalisation and multi-pass candidate generation",
      "Weighted match review with structured TSV export workflow",
    ],
    methodology: "Business name: 62%; business address: 28%; country: 10%. Score = 0.62 × S_name + 0.28 × S_address + 0.10 × S_country. Candidate cutoff: at least 0.30. Likely-match threshold: at least 0.72.",
  },
  {
    slug: "homies-wear",
    title: "Homies Wear",
    category: "HOMIES WEAR",
    subtitle: "Community-Driven Clothing Exchange Platform",
    description: "Homies Wear is a community-driven clothing swap platform that helps people give wearable clothes a second life. Users can list clothing they no longer use, discover available pieces nearby, and connect with others to coordinate potential swaps.",
    image: homiesWearImage,
    imageAlt: "Homies Wear clothing exchange platform preview",
    technologies: [],
    liveUrl: "https://homies-wear-rouge.vercel.app",
    githubUrl: "https://github.com/tobitoa/homies-wear.git",
    details: "The experience centres on reuse, local discovery, and community-led clothing exchange as an alternative to always buying new.",
    features: [
      "Reuse: keep wearable garments in circulation",
      "Discover: explore clothing listings from people nearby",
      "Connect: propose and coordinate potential swaps",
      "Journey: list an item, discover clothing, then coordinate an exchange",
    ],
  },
];
