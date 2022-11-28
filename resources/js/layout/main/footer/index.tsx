import React, {FC} from "react";
import {baseUrl} from "@/utils/request";

/**
 * 布局
 */
const Footer:  FC = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="container-fluid tCentrar">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 text-end text-center">
                        <div className="footLogin">Desde el miercoles 30 de noviembre hasta el 18 de diciembre, 2022.</div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <a href="https://supermercadosnacional.com/" target="_blank">
                            <img src={baseUrl + "assets/img/web.png"} className="img-fluid" alt={'Supermercados Nacional'} />
                        </a>
                        <a href="https://www.instagram.com/supernacional/" target="_blank">
                            <img src={baseUrl + "assets/img/insta.png"} className="img-fluid" alt={'Instagram Supermercados Nacional'} />
                        </a>
                        <a href="https://www.youtube.com/@supermercadosnacional5977" target="_blank">
                            <img src={baseUrl + "assets/img/you.png"} className="img-fluid" alt={'Youtube Supermercados Nacional'} />
                        </a>
                        <a href="https://www.facebook.com/supermercadosnacional" target="_blank">
                            <img src={baseUrl + "assets/img/face.png"} className="img-fluid"  alt={'Facebook Supermercados Nacional'} />
                        </a>
                    </div>
                </div>
            </div>
            <img src={baseUrl + "assets/img/imgFoot.png"} className="fixedImg d-lg-block d-none"  alt={"footer background"}/>
        </div>
    )
}

export default Footer
