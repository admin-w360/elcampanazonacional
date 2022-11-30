import React, {FC} from "react";
import {useTitle} from "@/hooks/pageHook";

/**
 * Home
 */
const Terms: FC = () => {
    useTitle("Términos y condiciones")

    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/terms",
            title: "Términos y condiciones"
        }
    });

    return (
        <div className="container">
            <div className="row my-lg-5 mt-5 mb-3">
                <div className="col-lg-8 m-auto text-center">
                    <h2 className="hcampa">Términos y condiciones</h2>
                </div>
            </div>
            <div className="box-home w-80 mx-auto">
                <div className="px-lg-5 mx-lg-3">
                    <p className="tInt2">• La promoción solo aplica si la factura es de RD$3,000 o más y si incluye
                        mínimo 3 productos de cualquiera de las marcas patrocinadoras. </p>
                    <p className="tInt2">• Sólo un cupón por cliente por semana. </p>
                    <p className="tInt2">• El cupón solo es válido para 1 uso. Al utilizar el cupón automáticamente
                        queda eliminado y no se podrá volver a utilizar. </p>
                    <p className="tInt2">• El monto máximo de descuento es RD $10,000. </p>
                    <p className="tInt2">• No aplica para pagos a crédito. </p>
                    <p className="tInt2">• No aplica para compras al por mayor. </p>
                    <p className="tInt2">• La promoción está sujeta a cancelación al finalizar cualquiera de las 3
                        semanas.</p>
                    <p className="tInt2">• Una vez el cliente realice la compra y utilice su cupón, la compra no puede
                        ser reversada y/o cancelada.</p>
                    <p className="tInt2">• Los cupones tienen una vigencia por cada semana. Si un cliente tiene un cupón
                        de la semana 1, no podrá utilizarlo en la semana 2. </p>
                    <p className="tInt2">• El cupón de descuento sorpresa aplica para un máximo de RD$50,000 en compras
                        online.</p>
                    <p className="tInt2">• Vigencia de la promoción:</p>
                    <blockquote className="tInt2 mt-4">Semana 1: del miércoles 30 de noviembre al domingo 4 de diciembre
                        del 2022.
                    </blockquote>
                    <blockquote className="tInt2">Semana 2: lunes 5 al domingo 11 de diciembre del 2022.</blockquote>
                    <blockquote className="tInt2">Semana 3: lunes 12 al domingo 18 de diciembre del 2022.</blockquote>
                    <p className="tInt2">• El cupón de descuento sorpresa aplica para un máximo de RD$50,000 en compras
                        online.</p>
                </div>
            </div>
        </div>
    )
}

export default Terms
