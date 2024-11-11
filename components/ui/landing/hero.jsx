import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { PhoneCall } from "lucide-react";
import { ShinyBadge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container px-10 lg:px-16">
      <div className="flex pb-24 gap-10 min-h-screen items-center justify-center flex-col">
        <BlurFade key="hero-badge" delay={0.25 + 0 * 0.05} inView>
          <Link
            href="https://lazuardytech.medium.com/were-now-registered-on-indonesia-f2d9b9cffdc1"
            target="_blank"
          >
            <ShinyBadge className="text-sm md:text-md">
              <span>🇮🇩</span>
              <span className="ms-2">We&apos;re registered on Indonesia!</span>
            </ShinyBadge>
          </Link>
        </BlurFade>
        <div className="flex gap-5 flex-col">
          <div className="px-8 md:max-w-2xl mx-auto text-4xl md:text-6xl tracking-normal text-center font-regular">
            <BlurFade key="hero-title" delay={0.25 + 1 * 0.05} inView>
              We help businesses <span className="underline">grow bigger</span>{" "}
              through technology
            </BlurFade>
          </div>
          <div className="lg:max-w-3xl mx-auto text-sm md:text-md md:text-xl font-light leading-relaxed tracking-tight text-muted-foreground text-gray-400 text-center mt-4 mb-4">
            <BlurFade key="hero-text" delay={0.25 + 2 * 0.05} inView>
              With a team that understands your unique challenges, we’re here to
              bring the best of technology to help your business thrive, adapt,
              and reach new heights together.
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Link
            href={`${process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}`}
            target="_blank"
          >
            <BlurFade key="hero-button" delay={0.25 + 3 * 0.05} inView>
              <RainbowButton className="gap-2 text-black transition-transform duration-500 hover:scale-105 active:scale-100 active:bg-black">
                Book a Free Consultation <PhoneCall className="w-4 h-4" />
              </RainbowButton>
            </BlurFade>
          </Link>
        </div>
      </div>
    </div>
  );
}
