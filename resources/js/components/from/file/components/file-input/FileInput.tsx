import React, {ChangeEvent, Fragment, memo, useCallback, useEffect, useRef, useState} from "react";
import {Avatar, Button, CardContent, Fab, Grid, Modal} from "@mui/material";
import {IconCameraPlus, IconCloudUpload, IconPhoto, IconSearch, IconX} from "@tabler/icons";
import {ControllerRenderProps, FieldValues} from "react-hook-form";
import {FieldPath, UseFormStateReturn} from "react-hook-form/dist/types";
import {ControllerFieldState} from "react-hook-form/dist/types/controller";
import {WebCamCapture} from "@/components/from/images/WebCamCapture";
import { v4 as uuidv4 } from 'uuid';



export interface IFileAdapterProp<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<TFieldValues>
    field: ControllerRenderProps<TFieldValues, TName>
    onReset: boolean
}

export const FileInput = memo<IFileAdapterProp>(({ field,onReset,fieldState, formState }) => {

    const [loadImage, setLoadImage] = useState('');
    const [openCaptureImage, setOpenCaptureImage] = useState(false);
    const webCamRef = useRef(null);

    const cleanup = () => {
        if (loadImage) {
            URL.revokeObjectURL(loadImage);
            field.onChange('');
            setLoadImage('');
        }
    };

    const setImage = (newImage: string) => {
        cleanup();
        setLoadImage(newImage);
    };

    const urlToFile = async (url: string, mimeType: string, ext: string) => {
        const res = await fetch(url);
        const buf = await res.arrayBuffer();
        const fileName = uuidv4()+'.'+ext;
        return new File([buf], fileName, { type: mimeType });
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        if(event?.target.files && event?.target.files[0]){
            const fileLoaded = URL.createObjectURL(event.target.files[0]);
            if (fileLoaded !== undefined && fileLoaded !== null) {
                field.onChange(event?.target.files);
                setImage(fileLoaded);
            }
        }
    };

    const capturePhoto = useCallback(() => {
        // @ts-ignore
        const imageSrc = webCamRef?.current?.getScreenshot() ?? null;
        if(imageSrc) {
            setLoadImage(imageSrc);
            setOpenCaptureImage(false);
            urlToFile(imageSrc, 'image/jpeg', 'jpeg').then((file: File) => {
                 const fileLoaded = URL.createObjectURL(file);
                 field.onChange(file);
                setImage(fileLoaded);
            });
        }
    }, [webCamRef, setLoadImage]);


    useEffect(() => {
        cleanup();
    }, [onReset])

    return (
        <Fragment>
            <Modal sx={{textAlign:"center"}} open={openCaptureImage} onClose={() => setOpenCaptureImage(false)}  aria-describedby="modal-body">
                <CardContent  id={"modal-body"} sx={{maxWidth:"380px", margin:"0 auto", backgroundColor:"#cccccc", mt:2}}>
                     <WebCamCapture
                         CaptureImg={capturePhoto}
                         RemoverImg={() => {setImage(''); setOpenCaptureImage(false)}}
                         ImgSrc={loadImage}
                         WebCamRef={webCamRef}
                     />
                </CardContent>
            </Modal>
            <Avatar sx={{width: 250, height: 250, margin: "0 auto", mt: 1}} srcSet={loadImage}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Fab onClick={() => { setOpenCaptureImage(true) }} size={"small"} sx={{mr: 1}}>
                        <IconCameraPlus/>
                    </Fab>
                    <Fab component="label" size={"small"} sx={{mr: 1}}>
                            <input
                                accept="image/*"
                                type="file"
                                hidden={true}
                                onChange={handleChange}
                            />
                            <IconCloudUpload/>
                    </Fab>
                    {/* <Fab onClick={() => {
                    }} size={"small"} sx={{mr: 1}}>
                        <IconPhoto/>
                    </Fab>
                    <Fab onClick={() => {
                    }} size={"small"}>
                        <IconSearch/>
                    </Fab> */}
                </Grid>
            </Avatar>
            {loadImage && <Button
                onClick={() => cleanup()}
                sx={{
                    mt:-4,
                    alignItems:"center",
                    zIndex: 1000000
                }}
                color={"warning"}
                variant="contained" ><IconX /> Cancelar</Button>}
        </Fragment>
    );

});
