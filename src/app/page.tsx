"use client";
import Contact from "@/Components/Contact/Contact";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import TestimonialsCustom from "@/Components/Testimonials/TestimonialsCustom";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import CarrouselMamado from "@/Components/carrouselScroll/CarrouselMamado";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";


export default function Home() {
    return (
        <>
            <AboutUsHEADERv3></AboutUsHEADERv3>
            <ServicesDisplay></ServicesDisplay>
            <ImageWithContent></ImageWithContent>
            <HorizontalScrollCarousel></HorizontalScrollCarousel>
            <CarrouselMamado></CarrouselMamado>
            <TestimonialsCustom></TestimonialsCustom>
            <Contact></Contact>
        </>
    );
}
