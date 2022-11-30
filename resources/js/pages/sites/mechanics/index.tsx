import React, {FC, Fragment, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {baseUrl} from "@/utils/request";
import {Link} from "react-router-dom";

/**
 * Home
 */
const Merchanics: FC = () => {
    useTitle("¿Cómo participar?")

    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/mechanics",
            title: "¿Cómo participar?"
        }
    });

    return (
       <div className="container-fluid">
            <div className="row my-5 justify-content-md-center">
                <div className=" text-center">
                    <h2 className="hcampa">¿Cómo participar?</h2>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/meca-1.png"} className="img-fluid" alt={"mecanica paso 1"} />
                    </div>
                    <div className="col-sm-8">
                        <p className="tmeca p-0 ms-2">Ingresa a: <img src={baseUrl+"assets/img/pasos-camapanzo-nacional.png"} className="img-fluid" alt={"pasos-camapanzo-nacional"} /> <br />
                            regístrate y descarga tu cupón de descuento sorpresa.</p>
                    </div>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto ">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/meca-2.png"} className="img-fluid" alt={"mecanica paso 2"} />
                    </div>
                    <div className="col-sm-8">
                        <p className="tmeca p-0">Utilízalo en cualquiera de nuestras sucursales o en compras online,
                            y al momento de pagar, presenta tu cupón y descubre tu descuento sorpresa.</p>
                    </div>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/puntoR.png"} className="img-fluid me-3" alt={"mecanica paso 3"} />
                    </div>
                    <div className="col-sm-8">
                        <p className="tmeca p-0"><span>Para activar tu cupón:</span> tu compra debe ser de RD$3,000 o
                            más,
                            incluyendo 3 marcas patrocinadoras.</p>
                    </div>
                </div>
            </div>
            <div className="borderLine p-4 my-3 w-80 mx-auto">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-3 text-center">
                        <img src={baseUrl+"assets/img/meca-3.png"} className="img-fluid" alt={"mecanica paso 4"} />
                    </div>
                    <div className="col-sm-8">
                        <p className="tmeca p-0">Si realizas tu compra online: debes colocar el código del cupón
                            en la casilla cupón de descuento.</p>
                    </div>
                </div>
            </div>
            <div className="text-center my-2 my-lg-5">
                <Link to="/site/brands" className="btn btn-primary px-5 pb-3 pcampa rounded-pill">Marcas participantes</Link>
            </div>
            <div className="text-center mt-5">
                <Link to="/site/terms" className="footLogin">Aplican términos y condiciones</Link>
            </div>
            <br />
        </div>
    )
}

export default Merchanics
