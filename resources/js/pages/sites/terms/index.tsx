import React, {FC, Fragment, useState} from "react";
import {useTitle} from "@/hooks/pageHook";

/**
 * Home
 */
const Home: FC = () => {
    useTitle("Home")

    return (
        <div className="container">
            <div className="row my-lg-5 mt-5 mb-3">
                <div className="col-lg-8 m-auto text-center">
                    <h2 className="hcampa">Términos y condiciones</h2>
                </div>
            </div>
            <div className="box-home w-90 mx-auto ">
                <div className="px-lg-5 mx-lg-3">
                    <p className="tInt ">Al correo que registraste hemos enviado un cupón que deberás descargar
                        y presentar en cualquier tienda de <span>Nacional</span> para descrubir tu descuento
                        sorpresa</p>
                </div>
            </div>
        </div>
    )
}

export default Home
