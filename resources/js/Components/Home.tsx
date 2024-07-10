/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/u4xcoojHzjP
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

const foodMenu = [
  {
    name: "Adobo",
    price: "150",
    rating: "4.8",
    location: "Luzon, Manila",
  },
  {
    name: "Sinigang",
    price: "180",
    rating: "4.6",
    location: "Visayas, Cebu",
  },
  {
    name: "Lumpia",
    price: "100",
    rating: "4.7",
    location: "Visayas, Cebu",
  },
  {
    name: "Halo-Halo",
    price: "120",
    rating: "4.9",
    location: "Mindanao, Davao",
  },
];

const Menu = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
      {foodMenu.map((food) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt={food.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
              ₱{food.price}
            </div>
            <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
              {food.rating}
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">{food.name}</h3>
            <p className="text-sm text-[#8b5e3c]">{food.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export function HomeComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0E9E5]">
      <header className="w-full bg-[#f5f5f5] shadow-md">
        <div className="container w-full hidden sm:flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-2">
            <MountainIcon className="w-6 h-6 text-[#8b5e3c]" />
            <span className="text-xl font-bold text-[#8b5e3c]">
              PinoyPalate
            </span>
          </a>
        </div>
        <nav className="flex items-center space-x-6">
          <a
            href="#"
            className="text-[#8b5e3c] hover:text-[#a37d4f] flex items-center justify-center"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#8b5e3c] hover:text-[#a37d4f] flex items-center justify-center"
          >
            Discover
          </a>
          <a
            href="#"
            className="text-[#8b5e3c] hover:text-[#a37d4f] flex items-center justify-center"
          >
            Cart
          </a>
          <a
            href="#"
            className="text-[#8b5e3c] hover:text-[#a37d4f] flex items-center justify-center"
          >
            Notifications
          </a>
          <a
            href="#"
            className="text-[#8b5e3c] hover:text-[#a37d4f] flex items-center justify-center"
          >
            Account
          </a>
          </nav>
        </div>
      </header>
      <nav className="shadow-md z-10 bg-[#F0E9E5] fixed bottom-0 left-0 right-0 sm:hidden flex justify-around items-center py-2">
        <a
          href="#"
          className="flex flex-col items-center text-[#8b5e3c] hover:text-[#a37d4f]"
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-[#8b5e3c] hover:text-[#a37d4f]"
        >
          <CompassIcon className="w-6 h-6" />
          <span className="text-xs">Discover</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-[#8b5e3c] hover:text-[#a37d4f]"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="text-xs">Cart</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-[#8b5e3c] hover:text-[#a37d4f]"
        >
          <BellIcon className="w-6 h-6" />
          <span className="text-xs">Notifications</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-[#8b5e3c] hover:text-[#a37d4f]"
        >
          <UserIcon className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </a>
      </nav>
      <main className="flex-1 sm:pt-0 lg:container">
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Adobo"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                ₱150
              </div>
              <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                4.8
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">
                Adobo
              </h3>
              <p className="text-sm text-[#8b5e3c]">
                Luzon, Manila
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Sinigang"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                ₱180
              </div>
              <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                4.6
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">
                Sinigang
              </h3>
              <p className="text-sm text-[#8b5e3c]">
                Visayas, Cebu
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Lumpia"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                ₱100
              </div>
              <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                4.7
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">
                Lumpia
              </h3>
              <p className="text-sm text-[#8b5e3c]">
                Visayas, Cebu
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Halo-Halo"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                ₱120
              </div>
              <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                4.9
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">
                Halo-Halo
              </h3>
              <p className="text-sm text-[#8b5e3c]">
                Mindanao, Davao
              </p>
            </div>
          </div>          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Halo-Halo"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                ₱120
              </div>
              <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                4.9
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">
                Halo-Halo
              </h3>
              <p className="text-sm text-[#8b5e3c]">
                Mindanao, Davao
              </p>
            </div>
          </div>          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Halo-Halo"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                ₱120
              </div>
              <div className="absolute top-2 right-2 bg-[#8b5e3c] text-white px-2 py-1 rounded-md text-xs">
                4.9
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2 text-[#8b5e3c]">
                Halo-Halo
              </h3>
              <p className="text-sm text-[#8b5e3c]">
                Mindanao, Davao
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
