import React, {FC, Fragment, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {baseUrl} from "@/utils/request";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import PopUpForm from "@/pages/sites/home/form";

/**
 * Home
 */
const Home: FC = () => {
    useTitle("Home")

    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/home",
            title: "Home"
        }
    });

    const [isOpenPopUp, setOpenPopUp] = useState(false);

    return (
            <div className="container">
                <PopUpForm isShow={isOpenPopUp}  />
                <div className="row my-5">
                    <div className="col-lg-7 text-center d-flex align-items-center ">
                        <div className="box-home p-3 p-sm-0">
                            <img src={baseUrl+"assets/img/yaganaste.png"} className="d-block mx-auto img-fluid" alt={"yaganaste"}/>
                            <p className="tInt">Hemos enviado tu cupón de descuento sorpresa al correo que registraste,
                                imprímelo y utilízalo en cualquiera de nuestras sucursales o en compras online.</p>
                            <div className="text-center my-2 my-lg-4 ">
                                <a href={"https://supermercadosnacional.com/" } target="_blank" className="btn btn-primary px-5 pb-3 mt-1 pcampa rounded-pill">COMPRA
                                    AQUÍ</a>
                            </div>
                            <p className="footLogin">Nota: sólo podrás redimir un cupón de descuento por semana.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center mt-sm-5 mt-lg-0 ">
                        <div className="w-100 text-center">
                            <p className="tInt text-white text-center">¿Recibiste tú cupón de <br /> descuento sorpresa?</p>
                            <div className="text-center my-2 my-lg-5">
                                <Button onClick={() => setOpenPopUp(true)} className="btn btn-primary px-5 pb-3 pcampa rounded-pill"
                                   data-bs-toggle="modal" data-bs-target="#bonoModal">CLICK AQUÍ</Button>
                            </div>
                            <Link to="terms" className="footLogin">Aplican términos y condiciones</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Home
