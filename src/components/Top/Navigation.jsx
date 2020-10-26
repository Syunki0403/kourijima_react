import React from 'react'
import { Link } from 'react-router-dom';
import logoPath from '../../assets/images/common/kourijimaLogo.png';

const reserveURL = "https://www.jalan.net/uw/uwp2011/uww2011init.do?vos=afjlnpvczzzzx00002010&keyword=%8C%C3%89F%97%98%93%87&distCd=06&rootCd=7701&screenId=FWPCTOP&image1_x=0&image1_y=0&caadsess=12180_3s0ipwqhrjcmuSI&caadterm=3600";

const Navigation = () => {
    return (
        <nav className={"topNavi"}>
            <p>
                <img src={logoPath} alt={"古宇利島｜KOURIZIMA"} />
            </p>
            <ul>
                <li>
                    <Link to={"/about"}>古宇利島について</Link>
                </li>
                <li>
                    <Link to={'/map'}>古宇利島の地図</Link>
                </li>
                <li>
                    <Link to={'/beach'}>島のビーチ</Link>
                </li>
                <li>
                    <Link to={'/blog'}>島の日々</Link>
                </li>
                <li>
                    <Link to={'/access'}>島へのアクセス</Link>
                </li>
                <li>
                    <Link to={'/information'}>島の情報</Link>
                </li>
                <li>
                    <a href={reserveURL}>宿の予約</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;