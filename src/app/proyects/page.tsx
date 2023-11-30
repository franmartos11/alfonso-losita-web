'use client'
import CardProyect from "@/Components/CardProyect/CardProyect";
import CardProyectImgGrid from "@/Components/CardProyect/CardProyectImgGrid";
import Contact from "@/Components/Contact/Contact";
import DobleImg from "@/Components/DobleImagenTexto/DobleImg";
import HeaderProyect from "@/Components/HeaderProyects/HeaderProyect";
import Card from "@/Components/card/Card";
import DatosInteres from "@/Components/datosInteres/DatosInteres";
import HomePresentation from "@/Components/home-presentation/HomePresentation";

export default function Proyects() {
    return (
        <div>
            <HeaderProyect></HeaderProyect>
            <CardProyect></CardProyect>
            <CardProyectImgGrid></CardProyectImgGrid>
            <DobleImg></DobleImg>
            <Contact></Contact>
        </div>
    )
}
