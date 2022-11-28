import React, {FC, Fragment, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {baseUrl} from "@/utils/request";
import {Link} from "react-router-dom";

/**
 * Home
 */
const Home: FC = () => {
    useTitle("Home")

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-8 text-center">
                    <h2 className="hcampa">¿Cómo participar?</h2>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/meca-1.png"} className="img-fluid" alt={"mecanica paso 1"} />
                    </div>
                    <div className="col-sm-8">
                        <p className="tmeca p-0 ">Regístrate en <span>elcampanazonacional.com</span><br />
                            ingrensando tus datos de contactos.</p>
                    </div>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto ">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/meca-2.png"} className="img-fluid" alt={"mecanica paso 2"} />
                    </div>
                    <div className="col-sm-6">
                        <p className="tmeca p-0 ">En tu correo electrónico <span>descarga<br /> el bono</span> con el descuento sorpresa.</p>
                    </div>
                    <div className="col-sm-3 d-flex align-items-center">
                        <img src={baseUrl+"assets/img/puntoR.png"} className="img-fluid me-3" alt={"mecanica paso 3"} />
                            <p className="tmeca p-0 ">Revisa tu bandeja
                                de correo no deseados.</p>
                    </div>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/meca-3.png"} className="img-fluid" alt={"mecanica paso 4"} />
                    </div>
                    <div className="col-sm-8">
                        <p className="tmeca p-0 ">Dirígite a <span>cualquier tienda Nacional</span> y<br />
                            redímelo con tu descuento sorpresa.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to="terms" className="footLogin">Aplican términos y condiciones</Link>
            </div>
            <br />
        </div>
    )
}

export default Home
