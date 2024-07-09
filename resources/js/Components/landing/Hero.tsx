"use client";
import Autoplay from "embla-carousel-autoplay";
import { FaFileAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import getImagePath from "@/lib/getImagePath";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";

interface CarouselItem {
    src: string;
    alt: string;
}

const carouselItems: CarouselItem[] = [
    {
        src: "hero-image.jpg",
        alt: "Google",
    },
];

const HeroCarousel: React.FC = () => {
    return (
        <Carousel
            className="w-full h-full"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} className="relative w-full aspect-video">
                        <img
                            // src={item.src}
                            src={getImagePath(item.src)}
                            alt={item.alt}
                            className="w-full aspect-video object-cover rounded-md"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="w-full py-24 relative bg-[#F0E9E5] text-[#8b5e3c]">
            <img
                src={getImagePath("hero-image.jpg")}
                style={{
                    objectFit: "fill",
                }}
                alt="Manila, Philippines"
                className="absolute inset-0 w-full h-full object-cover object-center -z-10 blur-sm brightness-50"
            />
            <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 z-50">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-justify">
                        Discover the Flavors of the Philippines!
                    </h1>
                    <p className="max-w-[600px] md:text-xl text-justify">
                        The Smash-Hit Application <span className="font-bold">
                            PinoyPalate
                        </span>
                        {" "}brings the authentic taste of Filipino cusine right to your doorstep. Order now and experience the vibrant flavors of the Philippines.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a
                            className="inline-flex gap-1 h-10 items-center justify-center rounded-md px-8 text-sm font-medium bg-[#8b5e3c] text-white shadow transition-colors"
                            // TODO
                            href="https://flowcv.com/resume/p5r0itrtfm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFileAlt className="h-4 w-4" />
                            Order Now
                        </a>
                        <a
                            className="inline-flex h-10 gap-1 items-center justify-center rounded-md border border-[#8b5e3c] px-8 text-sm font-medium shadow-sm transition-colors"
                            // TODO
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdMessage className="h-5 w-5" />
                            Discover Menu
                        </a>
                    </div>
                </div>
                <div className="relative w-full">
                    <HeroCarousel />
                </div>
            </div>
        </section>
    );
};

export default Hero;
