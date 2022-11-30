import React, {FC} from "react";
import {useTitle} from "@/hooks/pageHook";
import {baseUrl} from "@/utils/request";

/**
 * Home
 */
const Brands: FC = () => {
    useTitle("Marcas Participantes")

    window.dataLayer.push({
        event: 'pageview',
        page: {
            url: "/site/contacts",
            title: "Marcas Participantes"
        }
    });

    return (
        <div className="container">
            <img src={baseUrl+"assets/img/marcas_.jpg"} className="w-100 mt-5" alt={"Marcas Participantes"} />
        </div>
    )
}

export default Brands
