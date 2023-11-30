export default function Heroe() {
    return (
        <section>
            <div className="dark:bg-blue-950">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-50">
                        Alfonso Losita Urbanizaciones
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                        Soy un desarrollador inmobiliario especializado en
                        urbanización que ofrece calidad, excelencia y
                        tranquilidad.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button
                            type="button"
                            className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                        >
                            Get started
                        </button>
                        <button
                            type="button"
                            className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-50"
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
            <img
                src="https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=NqMHLF8T4RzPaBE_WMnflSGB_1-kZZTQgAkekUxumZg="
                alt=""
                className="w-1/3 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
            />
        </section>
    );
}
