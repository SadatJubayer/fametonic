import Image from 'next/image';
import { FeatureItem } from '@/components/feature-item';
import { Button } from './ui/button';
import ChevronRightIcon from './icons/chevron-right-icons';

export function HeroSection() {
  return (
    <section className="relative w-full pb-8 -mt-8 md:mt-0">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Image Column - Order changes based on screen size */}
          <div className="relative flex justify-center lg:justify-end order-first md:order-last mb-8 lg:mb-0 animate-fade-in delay-200">
            <div className="relative w-full">
              {/* Mobile View */}
              <div className="relative animate-float block md:hidden h-[500px] sm:h-[640px] w-full mt-[-80px] mb-[-100px]">
                <Image
                  src="/images/hero_image_mobile.png"
                  alt="Fametonic App Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Desktop View */}
              <div className="relative hidden md:block">
                <Image
                  src="/images/hero_image.png"
                  alt="Fametonic App Interface"
                  width={500}
                  height={600}
                  className="-mt-10 w-full h-auto object-cover md:scale-115 lg:scale-125 rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col space-y-5 sm:space-y-6 max-w-xl mx-auto md:mx-0 text-center sm:text-center md:text-left order-last md:order-first text-white z-10">
            {/* Headline Section */}
            <div className="animate-fade-in">
              <h1 className="text-[25px] md:text-[35px] font-bold leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h2 className="text-[25px] md:text-[35px] font-extrabold text-secondary [text-shadow:0px_4px_4px_var(--color-primary)]">
                Discover your way to success with Fametonic:
              </h2>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <FeatureItem
                text="Start growing your influence right away—no waiting required!"
                centered="md:text-left"
                delay="delay-100"
              />
              <FeatureItem
                text="Create viral TikToks and Reels step by step with easy-to-follow lessons"
                centered="md:text-left"
                delay="delay-200"
              />
              <FeatureItem
                text="Use a Personal AI Worker to boost your content"
                centered="md:text-left"
                delay="delay-300"
              />
              <FeatureItem
                text="Learn from expert-led courses designed for aspiring influencers"
                centered="md:text-left"
                delay="delay-400"
              />
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center animate-fade-in delay-500 gap-2.5 md:max-w-[284px]">
              <Button>
                GET STARTED
                <ChevronRightIcon />
              </Button>
              <p className="text-xs text-white">
                1-minute quiz for personalized insights
              </p>
            </div>

            {/* Legal Text */}
            <div className="text-xs text-[#ababab] mt-4 animate-fade-in delay-500">
              <p>
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className="mt-2">Fametonic 2024 ©All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
