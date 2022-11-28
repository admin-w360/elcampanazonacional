import React, {FC, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import InputSelect from "@/components/from/input/InputSelect";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {loginValidationSchema} from "@/pages/landing/login/validation";
import {UserLogin} from "@/pages/landing/login/type";
import {InputText} from "@/components/from/input/InputText";
import {ReCaptcha} from "@/components/from/recaptcha";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {Link, useNavigate} from "react-router-dom";
import {startSession} from "@/pages/landing/login/services";
import {setUser} from "@/store/reducer/userSlice";
import {Alert, Button} from "react-bootstrap";
import InputCheck from "@/components/from/input/InputCheck";
import * as Console from "console";


const Login: FC = () => {
    useTitle("Inicio de Sesion")

    const appSelector = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<UserLogin>({
        resolver: yupResolver(loginValidationSchema),
    });

    const onSubmit = async (data: UserLogin) => {

        setLoading(true)
        startSession({
            document: data.document,
            document_type: data.document_type,
            recaptcha_response: data.recaptcha_response,
            accept_term: data.accept_term,
        }).then(function (response) {
            if (!response?.error) {
                setLoading(false)
                dispatch(setUser({
                    ...response?.results
                }));
                if (response?.results?.email == "" || response?.results?.email == undefined) {
                    navigate('/register');
                } else {
                    navigate('/site', {replace: true});
                }
            } else {
                setServerError(response?.error);
                setLoading(false)
            }
        }).catch(function (error) {
            setServerError(error.message());
            setLoading(false)
        });
    };


    return (
        <div className="box-login-form borderLine shadow px-3 mt-4 m-lg-0">
            <nav>
                <div className="nav nav-tabs border-0 " id="nav-tab" role="tablist">
                    <button className="btnLogin" id="nav-login-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-login" type="button" role="tab"
                            aria-controls="nav-login" aria-selected="true">
                        Iniciar sesión
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active pt-4 p-4  p-lg-5" id="nav-login"
                     role="tabpanel" aria-labelledby="nav-login-tab">
                    <h2 className="pcampa my-2 my-lg-4 my-sm-5">INGRESA TUS DATOS<br/>
                        ACTIVA TU CUPÓN<br/>
                        DE DESCUENTO.</h2>
                    <form  onSubmit={handleSubmit(onSubmit)} >
                        <div className="boxLogin mb-4">
                        </div>
                        <div className="form-group mb-5">
                            <Alert show={serverError !== ""} variant="warning" onClose={() => setServerError("")} dismissible>
                                <Alert.Heading>Error: </Alert.Heading>
                                <p>
                                    {serverError}
                                </p>
                            </Alert>

                            <ReCaptcha
                                control={control}
                                name={"recaptcha_response"}/>

                            <InputSelect
                                control={control}
                                name="document_type"
                                label="* Tipo de documento"
                                defaultValue=""
                                options={[
                                    {label: 'Seleccionar documento', value: ''},
                                    {label: 'Cedula de Ciudadania', value: 'CC'},
                                    {label: 'Pasaporte', value: 'PA'}
                                ]}
                                errorMessage={errors?.document_type?.message}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <InputText
                                control={control}
                                name="document"
                                errorMessage={errors?.document?.message}
                                label="* Numero de Documento"
                                placeholder={"___._______._"}
                                mask={"999.9999999.9"}
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group my-5">
                            <InputCheck
                                control={control}
                                name={"accept_term"}
                                type={"radio"}
                                label={"Acepto términos y condiciones"}
                                route={"/sites/terms"}
                                defaultValue={false}
                            />
                        </div>
                        <div className="my-4">
                            <Button className="btn btn-primary px-5 pb-3 pcampa rounded-pill" type={"submit"}>INGRESAR</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login


