import React from "react";
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WarningIcon from '@mui/icons-material/Warning';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import myProfile from "../../assets/myBlog.jpeg"
export default function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Khc</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer ">
                        <NotificationsNoneIcon/>
                        <span className="topIconBedge">9</span>
                    </div>
                    <div className="topbarIconContainer">
                        <WarningIcon/>
                        <span className="topIconBedge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                       <img src= {myProfile} className="topAvatar"/>
                    </div>
                </div>
            </div>
        </div>
    )

}