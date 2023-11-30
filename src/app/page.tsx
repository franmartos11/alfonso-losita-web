import Contact from "@/Components/Contact/Contact";
import DobleImg from "@/Components/DobleImagenTexto/DobleImg";
import Nav from "@/Components/HeaderNav/Nav";
import HomePresentationV2 from "@/Components/HomePresentationV2/HomePresentationV2";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import Card from "@/Components/card/Card";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import DatosInteres from "@/Components/datosInteres/DatosInteres";
import Footer from "@/Components/footer/Footer";
import HomePresentation from "@/Components/home-presentation/HomePresentation";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Nav></Nav>
            <AboutUsHEADERv3></AboutUsHEADERv3>
            <HorizontalScrollCarousel></HorizontalScrollCarousel>
            <DobleImg></DobleImg>
            <ImageWithContent></ImageWithContent>
            <ServicesDisplay></ServicesDisplay>
            <Card></Card>
            <Contact></Contact>
            
            <Footer></Footer>
        </div>
    );
}
