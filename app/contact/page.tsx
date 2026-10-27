import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = { title: "Contact", description: "Contact Pankaj Borah for opportunities, collaborations, and software development work." };

export default function ContactPage() { return <PageContainer><PageHeading eyebrow="07 / Contact" title={<>Let&apos;s talk about <span>what&apos;s possible.</span></>} description="Open to conversations around internships, collaborations, and practical software development work." /><div className="mt-12 grid min-w-0 gap-9 lg:mt-14 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] lg:gap-12"><ContactDetails /><div className="contact-form-wrap"><ContactForm /></div></div></PageContainer>; }
