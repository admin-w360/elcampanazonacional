import React, {Fragment, MutableRefObject, RefObject, useRef} from "react";
import Webcam from "react-webcam";
import {Control, RegisterOptions} from "react-hook-form";
import {Button, Grid} from "@mui/material";
import {AnimateButton} from "@/components/customization/animate-button";


interface Props {
    CaptureImg: () => void,
    RemoverImg: () => void,
    ImgSrc: string,
    WebCamRef: RefObject<Webcam>
}

export const WebCamCapture: React.FC<Props> = ({CaptureImg, RemoverImg, ImgSrc, WebCamRef}) => {

    const videoConstraints = {
        width: 360,
        height: 360,
        facingMode: "user"
    };

    return (
        <Fragment>
            <Grid container spacing={2} sx={{pb: 2}}>
                <Grid item xs={3}>
                    <Webcam
                        audio={false}
                        ref={WebCamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <AnimateButton>
                        <Button variant="contained" fullWidth onClick={CaptureImg}>
                            Capturar
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={6}>
                    <AnimateButton>
                        <Button variant="outlined" fullWidth onClick={RemoverImg}>
                            Cancelar
                        </Button>
                    </AnimateButton>
                </Grid>
            </Grid>
        </Fragment>
    );
};
