/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/QDA0HvWogWG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Eczar } from 'next/font/google'
import { Yeseva_One } from 'next/font/google'

eczar({
  subsets: ['latin'],
  display: 'swap',
})

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/Components/ui/button";
import getImagePath from "@/lib/getImagePath";
export function PinoyPalate() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0E9E5]">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#8b5e3c]">
                Taste the Best of the Philippines Anytime, Anywhere!
              </h2>
              <p className="max-w-[900px] text-[#8b5e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                PinoyPalate offers a diverse menu of authentic Filipino dishes, each crafted with the finest
                ingredients and traditional cooking techniques.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-4">
            <div className="grid gap-1">
              <img
                src={getImagePath("adobo.jpg")}
                width="400"
                height="300"
                alt="Adobo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-bold text-[#8b5e3c]">Adobo</h3>
              <p className="text-sm text-[#7E7E7E]">
                Tender chicken or pork simmered in a savory soy sauce and vinegar marinade.
              </p>
              <div className="flex items-center justify-between">
                <Button className="bg-[#8b5e3c] text-[#F0E9E5] hover:bg-[#8B7667]">Order Now</Button>
                <span className="text-lg font-bold text-[#8b5e3c]">$12.99</span>
              </div>
            </div>
            <div className="grid gap-1">
              <img
                src={getImagePath("lumpia.jpg")}
                width="400"
                height="300"
                alt="Lumpia"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-bold text-[#8b5e3c]">Lumpia</h3>
              <p className="text-sm text-[#7E7E7E]">
                Crispy spring rolls filled with a variety of savory ingredients.
              </p>
              <div className="flex items-center justify-between">
                <Button className="bg-[#8b5e3c] text-[#F0E9E5] hover:bg-[#8B7667]">Order Now</Button>
                <span className="text-lg font-bold text-[#8b5e3c]">$8.99</span>
              </div>
            </div>
            <div className="grid gap-1">
              <img
                src={getImagePath("sinigang.jpg")}
                width="400"
                height="300"
                alt="Sinigang"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-bold text-[#8b5e3c]">Sinigang</h3>
              <p className="text-sm text-[#7E7E7E]">
                A tangy and savory soup made with tamarind, meat, and vegetables.
              </p>
              <div className="flex items-center justify-between">
                <Button className="bg-[#8b5e3c] text-[#F0E9E5] hover:bg-[#8B7667]">Order Now</Button>
                <span className="text-lg font-bold text-[#8b5e3c]">$10.99</span>
              </div>
            </div>
            <div className="grid gap-1">
              <img
                src={getImagePath("halo-halo.jpg")}
                width="400"
                height="300"
                alt="Halo-Halo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-bold text-[#8b5e3c]">Halo-Halo</h3>
              <p className="text-sm text-[#7E7E7E]">
                A refreshing dessert made with shaved ice, sweetened beans, and tropical fruits.
              </p>
              <div className="flex items-center justify-between">
                <Button className="bg-[#8b5e3c] text-[#F0E9E5] hover:bg-[#8B7667]">Order Now</Button>
                <span className="text-lg font-bold text-[#8b5e3c]">$6.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0E9E5]">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#8b5e3c]">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-[#7E7E7E] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers and see how PinoyPalate has transformed their restaurant experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full w-12 h-12 bg-[#D9D1CB] flex items-center justify-center text-[#8b5e3c] font-bold">
                  JD
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#8b5e3c]">John Doe</h4>
                  <p className="text-sm text-[#7E7E7E]">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-sm text-[#7E7E7E]">
                "PinoyPalate has been a game-changer for my restaurant.\n The intuitive interface and powerful
                features have\n streamlined our operations and helped us deliver an\n exceptional dining experience to
                our customers."
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full w-12 h-12 bg-[#D9D1CB] flex items-center justify-center text-[#8b5e3c] font-bold">
                  SM
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#8b5e3c]">Sarah Martinez</h4>
                  <p className="text-sm text-[#7E7E7E]">Restaurant Manager</p>
                </div>
              </div>
              <p className="text-sm text-[#7E7E7E]">
                "I was hesitant to try a new restaurant management app,\n but PinoyPalate has exceeded all my
                expectations. The\n reporting and analytics features have helped us make\n data-driven decisions that
                have boosted our profitability."
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full w-12 h-12 bg-[#D9D1CB] flex items-center justify-center text-[#8b5e3c] font-bold">
                  KT
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#8b5e3c]">Kim Tan</h4>
                  <p className="text-sm text-[#7E7E7E]">Head Chef</p>
                </div>
              </div>
              <p className="text-sm text-[#7E7E7E]">
                "As a chef, I appreciate the way PinoyPalate helps us\n manage our inventory and streamline our
                kitchen operations.\n It's made our team more efficient and allowed us to focus\n on creating
                delicious Filipino dishes for our customers."
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#F0E9E5]">
        <p className="text-xs text-[#7E7E7E]">&copy; 2024 PinoyPalate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-[#8b5e3c]">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-[#8b5e3c]">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}
