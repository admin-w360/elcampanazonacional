import React, {FC} from "react";
import {baseUrl} from "@/utils/request";
import Footer from "@/layout/landing/footer";
import {Outlet} from "react-router-dom";

/**
 * 布局
 */
const LandingLayout: FC = () => {

    return (
      <div className="bgLogin">
        <div className="bgHojas position-relative">
            <hr className="new1 t60" />
                <hr className="new1 t90" />
                    <div className="container-fluid m-0 p-0">
                        <div className="row m-0">
                            <div className="col-lg-7 m-0 p-4 p-lg-0 text-center">
                                <img src={baseUrl+"assets/img/bgLogin_1.png"} className="img-fluid my-lg-5 py-lg-5"  alt={"el campanazo nacional"}/>
                                <img src={baseUrl+"assets/img/bgLogin_2.png"} className="img-fluid"  alt={"busca tu descuento"}/>
                            </div>
                            <div className="col-lg-5">
                                <div className="row d-flex align-items-center justify-content-center">
                                    <div className="col-lg-9 my-5 d-flex align-items-center justify-content-center">
                                        <Outlet/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        </div>
          )
    }

    export default LandingLayout
