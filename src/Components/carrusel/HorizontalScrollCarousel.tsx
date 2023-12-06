
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
    return (
        <div className="">
            <div className="flex h-0 items-center justify-center">
                
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-gray-900">
            <div className="flex  items-center justify-center text-gray-50 pt-20 text-6xl font-black">
                <h2>Mis Valores</h2>
            </div>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: any }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Example;

const cards = [
    {
        url: "https://media.istockphoto.com/id/1407285659/es/foto/j%C3%B3venes-empresarios-multi%C3%A9tnicos-y-de-mediana-edad-participan-en-reuniones-de-grupo.jpg?s=612x612&w=0&k=20&c=nKmkSbul5uvneHVqp6WsGiI7GzarYccXviV_sxkUo-E=",
        title: "Compromiso",
        id: 1,
    },
    {
        url: "https://marketdata.com.py/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-20-at-11.34.23.jpeg",
        title: "Responsabilidad",
        id: 2,
    },
    {
        url: "https://globalindustries.mx/wp-content/uploads/2020/06/9.jpg",
        title: "Transparencia",
        id: 3,
    },
    {
        url: "https://1.bp.blogspot.com/-_zNusGuIFtQ/Wm9hfLOp1iI/AAAAAAAAA20/_nZ0vN24h0IVpV2Njr5HsMGu24pg7FgrQCLcBGAs/s1600/honestidad%2By%2B%25C3%25A9tica.png",
        title: "Honestidad",
        id: 4,
    },
    {
        url: "https://qaleon.com/wp-content/uploads/2023/07/Tendencias-de-la-Sostenibilidad-Empresarial-Un-Enfoque-para-el-Exito-a-Largo-Plazo-Blog-Qaleon-scaled.jpg",
        title: "Sostenibilidad",
        id: 5,
    },
    {
        url: "https://d500.epimg.net/cincodias/imagenes/2019/10/09/legal/1570624605_325230_1570624679_noticia_normal.jpg",
        title: "Innovacion",
        id: 6,
    },
    
];
