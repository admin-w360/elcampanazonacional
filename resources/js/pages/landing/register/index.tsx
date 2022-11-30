import React, {FC, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {InputText} from "@/components/from/input/InputText";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {User} from "@/pages/landing/register/type";
import {userValidationSchema} from "@/pages/landing/register/validation";
import {Alert, Button, Spinner} from "react-bootstrap";
import {setCouponCode, setCouponExpire, setUser} from "@/store/reducer/userSlice";
import {saveRegister} from "@/pages/landing/register/services";


/**
 * 布局
 */
const Register: FC = () => {

    useTitle("Registro de Usuario")


    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/contacts",
            title: "Registro de Usuario"
        }
    });

    const appUserSelector = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');

    if(appUserSelector?.user?.email !== '' && appUserSelector?.user?.email !== undefined){
        navigate('/site', {replace: true});
    }

    if(appUserSelector?.user?.document === '' && appUserSelector?.user?.document === undefined){
        navigate('/', {replace: true});
    }

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<User>({
        resolver: yupResolver(userValidationSchema),
    });


    const onSubmit = async (data: User) => {
        const user = { ...appUserSelector.user, ...data };
        setLoading(true)
        saveRegister(user).then(function (response) {
            if (response?.error === false && response?.results !== undefined) {
                 setLoading(false)
                 dispatch(setUser(user));
                 dispatch(setCouponCode(response?.results?.coupon_code));
                 dispatch(setCouponExpire(response?.results?.coupon_expire_at));
                 navigate('/site', {replace: true});
            } else {
                setServerError("Error enviando formulario, por favor verifique la información e intente de nuevo");
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
                    <button className="ms-lg-5 btnLogin" id="nav-registro-tab"
                            data-bs-toggle="tab" data-bs-target="#nav-registro"
                            type="button" role="tab" aria-controls="nav-registro"
                            aria-selected="true">
                        Registrarme
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active pt-4 p-4  p-lg-5"
                     id="nav-registro" role="tabpanel"
                     aria-labelledby="nav-registro-tab">
                    <h2 className="pcampa my-2 my-sm-5 my-lg-4">INGRESA TUS DATOS<br />
                        ACTIVA TU CUPÓN<br />
                        DE DESCUENTO.</h2>
                    <form  onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-group mb-4 mt-4 mt-lg-5">
                            <Alert show={serverError !== ""} variant="warning" onClose={() => setServerError("")} dismissible>
                                <Alert.Heading>Error: </Alert.Heading>
                                <p>
                                    {serverError}
                                </p>
                            </Alert>

                            <InputText
                                control={control}
                                name="name"
                                errorMessage={errors?.name?.message}
                                label="* Nombres y apellidos"
                                placeholder={"Aquí nombres y apellidos"}
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group mb-4">
                            <InputText
                                control={control}
                                name="address"
                                errorMessage={errors?.address?.message}
                                label="* Dirección"
                                placeholder={"Aquí tu dirección"}
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group mb-4">
                            <InputText
                                control={control}
                                name="phone"
                                errorMessage={errors?.phone?.message}
                                label="* Número celular"
                                placeholder={"Aquí tu número  celular"}
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group mb-4">
                            <InputText
                                control={control}
                                name="email"
                                errorMessage={errors?.email?.message}
                                label="* Correo"
                                placeholder={"Aquí tu correo electronico"}
                                defaultValue=""
                            />
                        </div>
                        <small className="text-white py-2 text-center">
                            Los campos marcados con una <span>*</span> son
                            obligatorios
                        </small>
                        <div className="my-3">
                            <Button className="btn btn-primary px-5 pb-3 pcampa rounded-pill" type={"submit"}  disabled={isLoading}>
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
                                INGRESAR
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register


