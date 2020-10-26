import React from 'react';

const MainArticle = (props) => {
    return (
        <article className={"mainArticle"}>
            <div className={"mainArticle_thumbnail"}>
                <a href={"#"}>
                    <img src={props.thumbnail} />
                </a>
            </div>
            <div className={"mainArticle_contents"}>
                <div className={"mainArticle_contents_title"}>
                    <a className={"addLink"} href={"#"}>{props.title}</a>
                </div>
                <time className={"mainArticle_contents_day"}>{props.day}</time>
                <p className={"mainArticle_contents_text"}>{props.text}</p>
                <div className={"mainArticle_contents_readArticle"}>
                    <a className={"addLink"} href={"#"}>この記事を読む＞</a>
                </div>
            </div>
        </article>
    )
}

export default MainArticle;