import React from 'react'
import MainArticle from './MainArticle';

const MainArticleList = (props) => {
    return (
        <div className={"mainArticleBox"}>
            {props.mainArticle.map((content, index) => {
                return (<MainArticle
                    thumbnail={content.thumbnail}
                    title={content.title}
                    day={content.day}
                    text={content.text}
                    key={index}
                />)
            })}
            <div className={"oldArticle"}>
                <a className={"addLinkBlack"} href={"#"}>＜古い記事</a>
            </div>
        </div>
    )
}

export default MainArticleList;