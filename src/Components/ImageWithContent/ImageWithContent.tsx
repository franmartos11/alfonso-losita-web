import Link from "next/link";

export default function ImageWithContent() {
    return (
        <section className="bg-gray-800">
            <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt="Party"
                            src="https://programandovalores.files.wordpress.com/2014/09/shanghai_sunset-wide.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl text-white font-bold sm:text-4xl">
                            A Que Me Dedico ?
                        </h2>

                        <p className="mt-4 text-gray-300">
                            Como desarrollador inmobiliario especializado en
                            urbanización, mi compromiso es crear entornos
                            residenciales que destaquen por su calidad,
                            excelencia y tranquilidad. Cada proyecto que
                            emprendo se caracteriza por cumplir con los más
                            altos estándares de construcción y diseño,
                            asegurando así un estilo de vida excepcional para
                            quienes eligen formar parte de estas comunidades.
                            <br />
                            <br />
                            Desde la cuidadosa planificación urbana hasta la
                            selección estratégica de ubicaciones, me esfuerzo
                            por ofrecer más que simples edificaciones; busco
                            proporcionar hogares que reflejen un equilibrio
                            armonioso con su entorno. La atención meticulosa a
                            los detalles y el compromiso con prácticas
                            sostenibles son elementos esenciales que contribuyen
                            a la creación de espacios habitables que no solo
                            satisfacen las necesidades de los residentes, sino
                            que también promueven un bienestar duradero en la
                            comunidad.
                        </p>
                        <div className="flex justify-center items-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="mt-8 inline-block rounded border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                            >
                                Contactame
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
