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

    const [isOpenPopUp, setOpenPopUp] = useState(false);

    return (
            <div className="container">
                <PopUpForm isShow={isOpenPopUp}  />
                <div className="row my-5">
                    <div className="col-lg-7 text-center d-flex align-items-center ">
                        <div className="box-home p-3 p-sm-0">
                            <img src={baseUrl+"assets/img/yaganaste.png"} className="d-block mx-auto img-fluid" alt={"yaganaste"}/>
                            <p className="tInt">Al correo que registraste hemos enviado un cupón que deberás descargar y
                                presentar en cualquier tienda de <span>Nacional</span> para descrubir tu descuento
                                sorpresa
                            </p>
                            <p className="footLogin">Nota: Solo podrás redimir un bono de decuento semanal (Lun a Dom)</p>
                        </div>
                    </div>
                    <div className="my-5 mb-5 col-lg-5 d-flex align-items-center mt-sm-5 mt-lg-0 ">
                        <div className="w-100 text-center">
                            <p className="tInt text-white">Si no te llegó el <br/>
                                bono al correo haz</p>
                            <div className="text-center my-2 my-lg-5">
                                <Button onClick={() => setOpenPopUp(true)} className="btn btn-primary px-5 pb-3 pcampa rounded-pill"
                                   data-bs-toggle="modal" data-bs-target="#bonoModal">Clic aquí</Button>
                            </div>
                            <Link to="terms" className="footLogin">Aplican términos y condiciones</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Home
