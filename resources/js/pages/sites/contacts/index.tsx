import React, {FC, useEffect, useState} from "react";
import {useTitle} from "@/hooks/pageHook";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Accordion, Alert, Button} from "react-bootstrap";
import {useQuery} from "@/hooks/queryHook";
import {Contact, ContactDefaultData} from "@/pages/sites/contacts/type";
import {contactValidationSchema} from "@/pages/sites/contacts/validation";
import {postContact} from "@/pages/sites/contacts/services";
import {ReCaptcha} from "@/components/from/recaptcha";
import {InputText} from "@/components/from/input/InputText";
import {TextArea} from "@/components/from/input/TextArea";


interface Question {
    name:string
    description:string
}


/**
 * 布局
 */
const Contacts: FC = () => {


    useTitle("Contactenos / PQR")


    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/contacts",
            title: "Contactenos / PQR"
        }
    });

    const questions: Question[] = useQuery("questions", false).data ?? []
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);


    const {
        control,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<Contact>({
        resolver: yupResolver(contactValidationSchema)
    });

    useEffect(() => {
        if(showSuccessMessage || showErrorMessage) {
            setTimeout(
                () => {
                    setShowSuccessMessage(false);
                    setShowErrorMessage(false);
                },
                8050,
            )
        }
    }, [showSuccessMessage, showErrorMessage])


    const onSubmit = async (data: Contact) => {
        await postContact(data).then(function (response) {
            if (response?.status === 'success') {
                setShowSuccessMessage(true);
                reset(ContactDefaultData)
            }else{
                setShowErrorMessage(true);
            }
        }).catch(function (error) {
            setShowErrorMessage(true);
        });
    }



    return (
        <div className="container">
            <div className="row my-lg-5 mt-5 mb-3">
                <div className="text-center">
                    <h1 className="hcampa">Contáctenos / PQR</h1>
                </div>
            </div>
            <div className="box-home mx-auto">
                <div className="row mt-4">
                    <div className="col-lg-6 px-4">
                        <h2 className="sub-titulote my-3">Preguntas Frecuentes</h2>
                        <div className="" id="accordionpqr">
                            {questions.map((quest, index)  => (
                                <Accordion className={"mb-2"} key={"indexss"+index}>
                                    <Accordion.Item className={"rounded-pill"} eventKey={"index"+index}>
                                        <Accordion.Header className={"rounded-pill"}>{quest.name}</Accordion.Header>
                                        <Accordion.Body>
                                            {quest.description}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 px-4">
                        <h2 className="sub-titulote my-3">Formulario de Contacto</h2>
                        <form className="fHome" onSubmit={handleSubmit(onSubmit)}>

                            <Alert show={showSuccessMessage} variant="success">
                                <Alert.Heading>Mensaje Envido</Alert.Heading>
                                <p>
                                    Su mensaje ha sido envido correctamente, en breve nuestro equipo de trabajo se pondrá en contacto con usted.
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShowSuccessMessage(false)} variant="outline-success">
                                        Continuar
                                    </Button>
                                </div>
                            </Alert>

                            <Alert show={showErrorMessage} variant="warning">
                                <Alert.Heading>Error Enviado Mensaje</Alert.Heading>
                                <p>
                                    Su mensaje de contacto no ha podido llegar a su destino, por favor intente enviarlo más tarde.
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShowErrorMessage(false)} variant="outline-danger">
                                        Continuar
                                    </Button>
                                </div>
                            </Alert>

                            <ReCaptcha
                                control={control}
                                name={"recaptcha_response"}/>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        name={"reason"}
                                        label={"Motivo para contactarnos"}
                                        errorMessage={errors?.reason?.message}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        name="document"
                                        errorMessage={errors?.document?.message}
                                        label="* Numero de Documento"
                                        placeholder={"___._______._"}
                                        mask={"999-9999999-9"}
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        name={"first_name"}
                                        label={"Nombres"}
                                        errorMessage={errors?.first_name?.message}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        name={"last_name"}
                                        label={"Apellidos"}
                                        errorMessage={errors?.last_name?.message}
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        name={"cell_phone"}
                                        label={"Télefono"}
                                        errorMessage={errors?.cell_phone?.message}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        type={"email"}
                                        name={"email"}
                                        label={"Correo"}
                                        errorMessage={errors?.email?.message}
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-sm">
                                    <InputText
                                        control={control}
                                        type={"text"}
                                        name={"city"}
                                        label={"Ciudad"}
                                        errorMessage={errors?.city?.message}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <TextArea
                                        control={control}
                                        name={"message"}
                                        label={"Mensaje"}
                                        errorMessage={errors?.message?.message}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="my-3">Los campos marcados <span>*</span> son obligatorios</p>
                                <button className="btn btn-primary px-5 pb-3 pcampa rounded-pill"  type="submit">Enviar Formulario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to="/site/terms" className="footLogin">Aplican términos y condiciones</Link>
            </div>
            <br />
        </div>
    )
}

export default Contacts


