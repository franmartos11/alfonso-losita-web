export default function Contact() {
    return (
        <section className="bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                    Contactame
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
                    Tienes alguna duda o quieres agendar una reunion, no dudes en rellenar mi formulario de contacto
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm  border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                            placeholder="nombre@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Telefono
                        </label>
                        <input
                            type="text"
                            id="telefono"
                            className="block p-3 w-full text-sm rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                            placeholder="Numero de telefono..."
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            className="block p-6 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Deja tu mensaje..."
                        ></textarea>
                    </div>
                    <div className=" text-center ">
                      <button
                        type="submit"
                        className="py-3 px-9 text-sm font-medium text-center bg-gray-700 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                    >
                        Enviar Mensaje
                    </button>  
                    </div>
                    
                </form>
            </div>
        </section>
    );
}
