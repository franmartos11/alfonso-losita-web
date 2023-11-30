export default function CardProyectImgGrid() {
    return (
        <div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-0 lg:pb-[8rem]">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/slider-img-e1690579354218.jpg"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/arroyos2.jpg"
                        />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/laguna.jpg"
                        />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/atardeceres.png"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/pinares-e1690579305107.jpg"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/arroyos.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
