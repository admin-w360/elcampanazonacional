import React, {FC, Fragment, useRef, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {baseUrl} from "@/utils/request";
import {Alert, Button, Spinner} from "react-bootstrap";
import {InputText} from "@/components/from/input/InputText";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {CouponVerify} from "@/pages/sites/home/type";
import {CouponVerifyValidationSchema} from "@/pages/sites/home/validation";
import {useAppSelector} from "@/hooks/reduxHook";
import {saveAs} from 'file-saver';
import {downloadCoupon} from "@/pages/sites/home/services";
import {Link} from "react-router-dom";


interface Props {
    isShow: boolean;
    onClose?: (show: boolean) => void;
}

/**
 * Home
 */
const PopUpForm: FC<Props> = ({isShow = false, onClose}) => {
    useTitle("Reenviar Codigo")

    const appUserSelector = useAppSelector((state) => state.user);
    const [isVisible, setVisible] = useState(false);
    const [serverError, setServerError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<CouponVerify>({
        resolver: yupResolver(CouponVerifyValidationSchema),
    });


    const onSubmit = async (data: CouponVerify) => {
        if (appUserSelector.user.email == data.email && appUserSelector.user.phone == data.phone) {
            setVisible(true);
        } else {
            setServerError("Los datos ingresados no coinciden")
        }
    };


    const onClickDownload = async () => {
        setLoading(true)
        downloadCoupon().then(function (response) {
            if (!response?.data?.error) {
                console.log(response.type);
                var blob = new Blob([response], {
                    type: "application/pdf",
                });
                saveAs(blob, 'coupon.pdf');

                setLoading(false);
                if (response instanceof File) {
                    console.log('IS un BLOB');
                } else {
                    console.log(response?.data);
                }
            } else {
                setServerError(response?.data?.message);
                setLoading(false)
            }
        }).catch(function (error) {
            setServerError(error?.message);
            setLoading(false)
        });
    };

    return (
        <div className={"modal fade " + (isShow ? "show" : "")} id="bonoModal" aria-labelledby="bonoModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <Alert show={serverError !== ""} variant="warning" onClose={() => setServerError("")} dismissible>
                        <Alert.Heading>Error: </Alert.Heading>
                        <p>
                            {serverError}
                        </p>
                    </Alert>

                    {!isVisible &&
                    <div className="modal-body bgLogin">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-100 ">
                            <img src={baseUrl + "assets/img/bg-mobile.png"} className="d-block d-lg-none img-fluid mb-5"
                                 alt={"bacground mobile"}/>
                            <p className="my-4 text-center"><em>Ingresa el correo y el numero celular registrado
                                previamente.</em></p>
                            <div className="form-group p-3">
                                <InputText
                                    control={control}
                                    name="phone"
                                    errorMessage={errors?.phone?.message}
                                    label="* Numero Celular"
                                    placeholder={"Aquí tu numero celular"}
                                    defaultValue=""
                                />
                            </div>
                            <div className="form-group  mb-3 p-3">
                                <InputText
                                    control={control}
                                    type={"email"}
                                    name="email"
                                    errorMessage={errors?.email?.message}
                                    label="* Correo"
                                    placeholder={"Aquí tu Correo"}
                                    defaultValue=""
                                />
                            </div>
                            <div className="text-center">
                                <Button type={"submit"}
                                        className="btn btn-primary px-5 pb-3 pcampa rounded-pill">Validar</Button>
                            </div>

                        </form>
                    </div>}

                    {isVisible &&
                    <div className="modal-body bgLogin">
                            <div className="bgHojasModal">
                                    <img src={baseUrl + "assets/img/logo-modal.png"} className="img-fluid"  alt={"logo modal"}/>
                                    <div className="text-center my-2 my-lg-5">
                                        <Button onClick={() => onClickDownload()} className="btn btn-primary px-5 pb-3 pcampa rounded-pill" disabled={isLoading}>
                                            {isLoading &&
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                className={"me-1"}
                                            />
                                            }
                                            Descargar
                                            Cupon</Button>
                                    </div>
                            </div>
                    </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default PopUpForm
