import Hero from "@/Components/landing/Hero";
import NavBar from "@/Components/landing/NavBar";
import { PinoyPalate } from "@/Components/landing/pinoy-palate";
import { Head } from "@inertiajs/react";
export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <NavBar />
            <Hero />
            <PinoyPalate />
        </>
    );
}
