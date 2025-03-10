"use client";
import React from 'react';

const Contacto = () => {
    return (
        <section className=" mt-20 text-center">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#869F77]">
                    ¡Conectemos!
                </h1>

                <p className="text-lg text-justify text-white mt-4 max-w-3xl ">
                    💡Me entusiasma crear soluciones con tecnología y aprender en el camino.
                    Si deseas intercambiar ideas o explorar nuevas oportunidades, estaré feliz de conversar. 🚀✨
                </p>


                <img
                    src="/cute.gif"
                    alt="Sticker adorable"
                    className="w-36 mt-6 opacity-80 hover:opacity-100 transition"
                />


            </div>
        </section>
    );
};

export default Contacto;
