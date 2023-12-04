"use client";
import Contact from "@/Components/Contact/Contact";
import DobleImg from "@/Components/DobleImagenTexto/DobleImg";
import Nav from "@/Components/HeaderNav/Nav";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import Testimonials from "@/Components/Testimonials/Testimonials";
import TestimonialsArt from "@/Components/Testimonials/TestimonialsArt";
import TestimonialsCustom from "@/Components/Testimonials/TestimonialsCustom";
import TestimonialsTres from "@/Components/Testimonials/TestimonialsTres";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import Card from "@/Components/card/Card";
import CarrouselMamado from "@/Components/carrouselScroll/CarrouselMamado";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import Footer from "@/Components/footer/Footer";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";

export default function Home() {
    return (
        <>
            <AboutUsHEADERv3></AboutUsHEADERv3>

            <Card></Card>
            <ServicesDisplay></ServicesDisplay>
            <ImageWithContent></ImageWithContent>
            <HorizontalScrollCarousel></HorizontalScrollCarousel>

            
            <CarrouselMamado></CarrouselMamado>

            <TestimonialsCustom></TestimonialsCustom>

            <Contact></Contact>
        </>
    );
}
