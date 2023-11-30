export default function DobleImg() {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div>
                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
                        Nombre Proyecto 2
                    </h2>
                    <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                        Me enorgullece ofrecer servicios de desarrollo de
                        urbanizaciones que van desde la planificación inicial
                        hasta la ejecución impecable. Nos destacamos por
                        fusionar diseño moderno y funcionalidad, creando
                        entornos que no solo son estéticamente atractivos, sino
                        también armoniosos con su entorno.
                    </p>
                    <a
                        href="#"
                        className="mt-2 inline-block rounded border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                    >
                        Visita Web
                    </a>
                </div>
                <div className="w-full h-full py-48 bg-gray-200"></div>
            </div>
            <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div className="order-none md:order-2">
                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
                        Nombre Proyecto 3
                    </h2>
                    <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                        Love to code? Next to our ready-made and free plugins
                        you can use our expansive yet simple API; decide how you
                        integrate Payments and build advanced and reliable
                        products yourself from scratch.
                    </p>
                    <a
                        href="#"
                        className="mt-2 inline-block rounded border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                    >
                        Visita Web
                    </a>
                </div>
                <div className="w-full h-full py-48 bg-gray-200"></div>
            </div>
        </section>
    );
}
