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
                            Me enorgullece ofrecer servicios de desarrollo de
                            urbanizaciones que van desde la planificación
                            inicial hasta la ejecución impecable. Nos destacamos
                            por fusionar diseño moderno y funcionalidad, creando
                            entornos que no solo son estéticamente atractivos,
                            sino también armoniosos con su entorno.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-block rounded border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                        >
                            Contactame
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
