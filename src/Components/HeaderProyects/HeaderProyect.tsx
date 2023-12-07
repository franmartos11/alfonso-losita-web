const squareData = [
  {
    id: 1,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/vertical-arroyo.jpg",
  },
  {
    id: 2,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/slider-img-e1690579354218.jpg",
  },
  {
    id: 3,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/actividades-e1690579332589.png",
  },
  {
    id: 4,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/laguna.jpg",
  },
  {
    id: 5,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/atardeceres.png",
  },
  {
    id: 6,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/pinares-e1690579305107.jpg",
  },
  {
    id: 7,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/arroyos.jpg",
  },
  {
    id: 8,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/arroyos2.jpg",
  },
  {
    id: 9,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/vertical-arroyo.jpg",
  },
  {
    id: 10,
    src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/wide.jpg",
  },
  {
    id: 11,
    src: "https://definicion.de/wp-content/uploads/2010/04/urbanizacion-1.jpg",
  },
  {
    id: 12,
    src: "https://www.accesor.com/wp-content/uploads/Urbanizaciones-640x321.jpg",
  },
  {
    id: 13,
    src: "https://activitasinversioninmobiliaria.com/wp-content/uploads/2021/07/zonas-verdes-urbanizacion-privada-activitas.jpg",
  },
  {
    id: 14,
    src: "https://www.aelca.es/material/img/es/1928_1579694762_portada-1200-x-800.jpg",
  },
  {
    id: 15,
    src: "https://us.123rf.com/450wm/jevanto/jevanto2203/jevanto220300017/182939428-casas-de-arquitectura-moderna-de-nueva-construcci%C3%B3n-en-inglaterra.jpg?ver=6",
  },
  {
    id: 16,
    src: "https://26329602f.blogs.upv.es/files/2023/01/infraestructura-wide.jpg",
  },
];
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";

const HeaderProyect = () => {
  return (
    <section className="w-full px-8 pt-[10rem] pb-[18rem] grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto animate-fade-up animate-once animate-duration-[1700ms]">
      <div>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Conoce Sobre Mis Proyectos
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-gray-800 text-white font-medium py-2 px-4 rounded transition-all hover:bg-gray-950 active:scale-95">
          Contactame
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

interface Square {
  id: number;
  src: string;
}

const shuffle = ({ array }: { array: Square[] }): Square[] => {
  if (!array || !Array.isArray(array) || array.length === 0) {
    console.error("Invalid array provided for shuffling");
    return [];
  }

  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    if (
      typeof array[currentIndex] !== "undefined" &&
      typeof array[randomIndex] !== "undefined"
    ) {
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return array;
};



const generateSquares = () => {
  return shuffle({ array: squareData }).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<React.ReactNode[]>(generateSquares());

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());

      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares(); 

    return () => {
      
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 ">
      {squares.map((sq, index) => (
        <React.Fragment key={index}>{sq}</React.Fragment>
      ))}
    </div>
  );
};

export default HeaderProyect;