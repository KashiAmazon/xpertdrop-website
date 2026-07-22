import { ArrowUpRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import GrowthLine from "@/components/ui/growth-line";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <GrowthLine className="h-72 w-full max-w-4xl" />
      </div>
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-secondary/30 blur-[120px]" />

      <div className="container-xd relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Ready to grow your eCommerce business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Book a free consultation and let&apos;s map out where your Amazon or eBay store can go
            next.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="#contact" variant="primary" icon={<ArrowUpRight size={16} />}>
              Book Consultation
            </Button>
            <Button
              href={SITE.whatsappHref}
              variant="secondary"
              external
              icon={<MessageCircle size={16} />}
              className="!bg-white/5 !text-white !border-white/15 hover:!border-accent hover:!text-accent"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
