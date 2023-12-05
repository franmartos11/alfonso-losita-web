export default function AboutUsHEADERv3() {
    return (
        <section className="mb-[16rem] ">
            <span className=" [&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 lg:block"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-light"
                            x1="0"
                            x2="0"
                            y1="1"
                            y2="0"
                        >
                            <stop
                                stop-color="hsl(209, 92.2%, 92.1%)"
                                offset="0%"
                            ></stop>
                            <stop
                                stop-color="hsl(209, 92.2%, 99.1%)"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-dark)"
                        d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
                    ></path>
                </svg>
                <svg
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-dark"
                            x1="0"
                            x2="0"
                            y1="9"
                            y2="0"
                        >
                            <stop
                                stop-color="hsl(232, 65%, 20%)"
                                offset="0%"
                            ></stop>
                            <stop
                                stop-color="hsl(220, 38%, 11%)"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-dark)"
                        d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
                    ></path>
                </svg>
            </span>

            <div className="px-6 py-12 pt-[7rem] text-center md:px-12 lg:my-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 className="mb-10 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                Alfonso Losita <br />
                                <span className="text-primary text-blue-950">
                                    Urbanizaciones
                                </span>
                            </h1>
                            <p className="mb-0 text-gray-900">
                                Soy un desarrollador inmobiliario especializado en
                                urbanización que ofrece calidad, excelencia y
                                tranquilidad.
                            </p>
                            <div className="flex items-center space-x-4 m-4 mx-0 ">
                                <a
                                    href="/"
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5"
                                    >
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        className="h-6"
                                    >
                                        <circle cx="15" cy="15" r="4" />
                                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5"
                                    >
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6"
                                    >
                                        <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <img
                                src="https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=NqMHLF8T4RzPaBE_WMnflSGB_1-kZZTQgAkekUxumZg="
                                className="w-full rounded-lg shadow-lg shadow-black/20"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
