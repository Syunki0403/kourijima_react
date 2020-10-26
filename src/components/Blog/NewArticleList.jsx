import React from 'react';
import NewArticle from './NewArticle';

const NewArticleList = (props) => {
    return (
        <div className={"newArticleBox"}>
            <h3>最新の記事</h3>
            {props.newArticle.map((content, index) => {
                return (<NewArticle
                    title={content.title}
                    day={content.day}
                    key={index}
                />)
            })}
            <div className={"allArticle"}>
                <a className={"addLinkBlack"} href={"#"}>記事をすべて見る＞</a>
            </div>
        </div>
    )
}

export default NewArticleList;