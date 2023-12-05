import Link from "next/link";

export default function ServicesDisplay() {
    return (
        <section className="dark:bg-gray-900 dark:text-white bg-gray-100 ">
            <div className="mx-auto max-w-screen-xl  px-4 py-10 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-6xl text-gray-00  ">
                        Mis Servicios
                    </h2>
                    <p className="mt-3 mb-10 dark:text-gray-300 text-gray-800">
                        Descubre cómo podemos llevar tu visión más
                        allá de las expectativas.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950"
                        href="/services/digital-campaigns"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Desarrollo Residencial
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Desde la conceptualización hasta la entrega, creamos
                            comunidades residenciales que se destacan por su
                            diseño innovador, comodidades modernas y un enfoque
                            en la calidad de vida. Tu hogar de ensueño está a
                            solo un paso de distancia.
                        </p>
                    </a>

                    <a
                        className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950"
                        href="/services/digital-campaigns"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Urbanizaciones Sostenibles
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Abrazamos la sostenibilidad en cada paso.
                            Desarrollamos urbanizaciones que integran prácticas
                            ecoamigables, maximizando la armonía entre la
                            naturaleza y la vida moderna.
                        </p>
                    </a>

                    <a
                        className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950"
                        href="/services/digital-campaigns"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Infraestructura Urbana
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Construimos más que hogares; creamos
                            infraestructuras que conectan y mejoran la vida de
                            las personas. Desde carreteras hasta parques, cada
                            detalle está diseñado para la funcionalidad y la
                            estética.
                        </p>
                    </a>

                    <a
                        className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950"
                        href="/services/digital-campaigns"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Consultoría Inmobiliaria
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Nuestra experiencia no se limita a la construcción.
                            Ofrecemos servicios de consultoría inmobiliaria,
                            brindando asesoramiento experto para tomar
                            decisiones informadas en inversiones y desarrollo de
                            propiedades.
                        </p>
                    </a>

                    <a
                        className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition  hover:border-blue-950 hover:shadow-blue-950"
                        href="/services/digital-campaigns"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Espacios Verdes y Recreación
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Diseñamos y desarrollamos espacios verdes que no
                            solo embellecen las urbanizaciones, sino que también
                            promueven un estilo de vida activo y saludable.
                            Desde parques y senderos hasta áreas de recreación,
                            creamos entornos que fomentan la conexión con la
                            naturaleza y la comunidad.
                        </p>
                    </a>

                    <a
                        className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950"
                        href="/services/digital-campaigns"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold  text-white">
                            Innovación Integrada
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Diseñamos urbanizaciones que van más allá de lo
                            convencional, incorporando innovación en cada
                            aspecto. Desde sistemas de gestión de residuos
                            inteligentes hasta la integración de energías
                            renovables, creamos comunidades que no solo siguen
                            las tendencias actuales, sino que las establecen
                        </p>
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/contact"
                        className="inline-block rounded bg-blue-950 px-[4rem] py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Contactame
                    </Link>
                </div>
            </div>
        </section>
    );
}
