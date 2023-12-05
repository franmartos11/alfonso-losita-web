'use client'
import CardProyect from "@/Components/CardProyect/CardProyect";
import CardProyectImgGrid from "@/Components/CardProyect/CardProyectImgGrid";
import Contact from "@/Components/Contact/Contact";
import DobleImgV2 from "@/Components/DobleImagenTexto/DobleImgV2";
import HeaderProyect from "@/Components/HeaderProyects/HeaderProyect";


export default function Proyects() {
    return (
        <div>
            <HeaderProyect></HeaderProyect>
            <CardProyect></CardProyect>
            <CardProyectImgGrid></CardProyectImgGrid>
            <DobleImgV2></DobleImgV2>
            <Contact></Contact>
        </div>
    )
}
