"use client";
import Contact from "@/Components/Contact/Contact";
import DobleImg from "@/Components/DobleImagenTexto/DobleImg";
import Nav from "@/Components/HeaderNav/Nav";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import AboutUsHeader from "@/Components/about-us-header/AboutUsHeader";
import AboutUsHeaderV2 from "@/Components/about-us-header/AboutUsHeaderV2";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import Card from "@/Components/card/Card";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import DatosInteres from "@/Components/datosInteres/DatosInteres";
import Footer from "@/Components/footer/Footer";
import Heroe from "@/Components/heroSections/Hero";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";

export default function AboutUs() {
    return (
        <>
            <Nav></Nav>
            <AboutUsHEADERv3></AboutUsHEADERv3>
            <HorizontalScrollCarousel></HorizontalScrollCarousel>
            <DobleImg></DobleImg>
            <ImageWithContent></ImageWithContent>
            <ServicesDisplay></ServicesDisplay>
            <Card></Card>
            <Contact></Contact>
            
            <Footer></Footer>
        </>
    );
}
