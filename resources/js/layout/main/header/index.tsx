import React, {FC} from "react";
import {baseUrl} from "@/utils/request";
import {Link} from "react-router-dom";
/**
 * 布局
 */
const Header: FC = () => {
    return (
        <nav>
            <div className="container-fluid">
                <ul className="row d-flex align-items-center ">
                    <div className="col-lg-6 text-center">
                        <Link to="/site">
                            <img src={baseUrl+"assets/img/bghome.png"} className="img-fluid w-90 mt-4 mb-2"  alt={"background home"}/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-7 text-center borderMenu">
                        <div className="text-start d-inline-block" >
                            <Link to="/" className="pcampa d-block">REGISTRO</Link>
                            <Link to="/site/mechanics" className="pcampa d-block">¿CÓMO PARTICIPAR?</Link>
                            <Link to="/site/terms" className="pcampa d-block">TÉRMINOS Y CONDICIONES</Link>
                            <Link to="/site/contacts" className="pcampa d-block">CONTACTO</Link>
                        </div>
                    </div>
                    <div className="col-lg-2  col-sm-5 text-center">
                        <img src={baseUrl+"assets/img/logoNacional.png"} className="img-fluid d-none d-sm-block"  alt={"logo"}/>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Header
