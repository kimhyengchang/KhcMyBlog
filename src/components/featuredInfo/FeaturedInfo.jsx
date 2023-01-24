import React from "react";
import './featuredInfo.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">방문자</span>
                <div className="featuredVisitor">
                    <span className="visitorNumber">2,458명</span>
                    <span className="visitorRate">+3 <ArrowUpwardIcon className="featuredIcon"/></span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">게시물</span>
                <div className="featuredVisitor">
                    <span className="visitorNumber">2,458개</span>
                    <span className="visitorRate">+3 <ArrowUpwardIcon className="featuredIcon negative"/></span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">게시물</span>
                <div className="featuredVisitor">
                    <span className="visitorNumber">2,458개</span>
                    <span className="visitorRate">+3 <ArrowUpwardIcon className="featuredIcon negative"/></span>
                </div>
            </div>
        </div>
    )

}