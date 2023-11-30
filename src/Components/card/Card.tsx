export default function Card() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="House"
                                src="https://blog.structuralia.com/hubfs/architectectos%202.0-1.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                A QUE ME DEDICO ?
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Me enorgullece ofrecer servicios de desarrollo
                                de urbanizaciones que van desde la planificación
                                inicial hasta la ejecución impecable. Nos
                                destacamos por fusionar diseño moderno y
                                funcionalidad, creando entornos que no solo son
                                estéticamente atractivos, sino también
                                armoniosos con su entorno.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                            >
                                Contactame
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
