import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className={"footerContents"}>
                <div>
                    <Link className={"addLinkBlack"} to={"/"}>このサイトについて</Link>
                </div>
                <div>
                    <Link className={"addLinkBlack"} to={"/"}>お問い合わせ</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;