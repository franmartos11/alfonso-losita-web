import Image from "next/image";
export default function AboutUsHeader() {
    return (
        <div className="bg-white px-6 py-11 text-center  md:px-12 lg:text-left animate-fade-up animate-once animate-duration-[1700ms]">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="mt-12 lg:mt-0">
                        <h1 className="mt-2  mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            Quien soy?
                            <br />
                            <span className="text-primary">Alfonso Losita</span>
                        </h1>
                        <a
                            className="mb-2 inline-block rounded bg-gray-900 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            href="#!"
                            role="button"
                        >
                            Mis Proyectos
                        </a>
                        <a
                            className="inline-block rounded  bg-gray-900 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            href="#!"
                            role="button"
                        >
                            Contactame
                        </a>
                    </div>
                    <div className="mb-12 lg:mb-0">
                        <Image
                            src="/PHOTO-2020-03-13-19-15-28.JPG"
                            className="w-[100%] h-[49rem]  rounded-lg shadow-lg shadow-black/20 object-cover"
                            alt=""
                            width={612}
                            height={612}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}
