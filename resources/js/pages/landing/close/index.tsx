import React, {FC, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {baseUrl} from "@/utils/request";

const Login: FC = () => {
    useTitle("Inicio de Sesion")

    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/contacts",
            title: "Inicio de Sesion"
        }
    });

    return (
            <div className="container">
                <div className="row my-5  justify-content-md-center">
                    <div className="col-lg-7 text-center">
                        <div className="box-home p-3 p-sm-0 mt-5">
                            <p className="tInt text-center">Hemos finalizado nuestro evento.</p>
                            <img src={baseUrl+"assets/img/thank.png"} className="d-block mx-auto img-fluid"  alt={"gracias"}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login


