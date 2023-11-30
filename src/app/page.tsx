"use client";
import Contact from "@/Components/Contact/Contact";
import DobleImg from "@/Components/DobleImagenTexto/DobleImg";
import Nav from "@/Components/HeaderNav/Nav";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import Testimonials from "@/Components/Testimonials/Testimonials";
import TestimonialsArt from "@/Components/Testimonials/TestimonialsArt";
import TestimonialsTres from "@/Components/Testimonials/TestimonialsTres";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import Card from "@/Components/card/Card";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import Footer from "@/Components/footer/Footer";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";

export default function Home() {
    return (
        <>
            <AboutUsHEADERv3></AboutUsHEADERv3>
            <HorizontalScrollCarousel></HorizontalScrollCarousel>

            <ServicesDisplay></ServicesDisplay>
            <Card></Card>
            <ImageWithContent></ImageWithContent>
            <TestimonialsTres></TestimonialsTres>
            <Testimonials></Testimonials>

            <Contact></Contact>
        </>
    );
}
