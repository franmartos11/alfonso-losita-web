import Nav from "@/Components/HeaderNav/Nav";
import HomePresentationV2 from "@/Components/HomePresentationV2/HomePresentationV2";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import DatosInteres from "@/Components/datosInteres/DatosInteres";
import HomePresentation from "@/Components/home-presentation/HomePresentation";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Nav></Nav>
            <HomePresentationV2></HomePresentationV2>
            <HomePresentation></HomePresentation>
            <ImageWithContent></ImageWithContent>
            <ServicesDisplay></ServicesDisplay>
            <DatosInteres></DatosInteres>
        </div>
    );
}
