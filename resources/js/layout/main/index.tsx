import React, {FC} from "react";
import Footer from "@/layout/landing/footer";
import Header from "@/layout/main/header";
import Content from "@/layout/main/content";

/**
 * 布局
 */
const LandingLayout: FC = () => {

    return (
      <div className="bgLogin">
        <div className="bgHojas position-relative">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
          )
    }

    export default LandingLayout
