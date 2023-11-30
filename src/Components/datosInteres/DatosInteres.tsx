export default function DatosInteres() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:py-1 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Bienvenido a mi Web
                    </h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                    ¡Bienvenido a mi rincón digital donde la planificación urbana cobra vida! Soy Alfonso Losita, un desarrollador apasionado especializado en urbanizaciones, loteos y consultoría. Mi enfoque va más allá de simples estructuras; se trata de crear entornos vibrantes y sostenibles que enriquezcan nuestras comunidades. Con un sólido trasfondo en planificación urbana, mi misión es transformar ideas en realidades tangibles. Ya sea diseñando innovadoras urbanizaciones, optimizando loteos para un desarrollo eficiente o brindando asesoría estratégica, cada proyecto es una oportunidad para marcar la diferencia. Me respalda un compromiso inquebrantable con la excelencia y la innovación, asegurando que cada solución que diseño esté arraigada en principios sostenibles y tecnológicos de vanguardia, garantizando un impacto positivo a largo plazo en la calidad de vida. ¡Hagamos realidad tu visión juntos!
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Total Sales
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                $4.8m
                            </dd>
                        </div>

                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Official Addons
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                24
                            </dd>
                        </div>

                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Total Addons
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                86
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
