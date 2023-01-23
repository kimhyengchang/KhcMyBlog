import React from "react";
import './sidebar.css'

export default function sidebar(){

  return(
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">프로그래밍</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              React
            </li>
            <li className="sidebarListItem">
              Java
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">이모저모</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              대전 이야기
            </li>
            <li className="sidebarListItem">
              전주 이야기
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">메일</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              메일 보내기
            </li>
            <li className="sidebarListItem">
              방명록
            </li>
          </ul>
        </div>
      </div>
    </div>
    ) 
}