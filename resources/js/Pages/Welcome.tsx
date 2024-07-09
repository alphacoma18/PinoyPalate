// import NavBar from "@/Components/NavBar";
// import { PinoyPalate } from "@/Components/pinoy-palate";
import NavBar from "@/Components/landing/NavBar";
import { PinoyPalate } from "@/Components/landing/pinoy-palate";
import { Head } from "@inertiajs/react";
import Hero from "@/Components/landing/Hero";
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
