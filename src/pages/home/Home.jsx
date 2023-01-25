import React from "react";
import './home.css'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Main from "../../components/main/Main"
import MainRight from "../../components/main/MainRight";
import MainCenter from "../../components/main/MainCenter";
export default function Home(){
    return(
        <div className="home">
            <div className="homeWidgets">
            <Main />
            <FeaturedInfo />
            </div>
        </div>
    )
}