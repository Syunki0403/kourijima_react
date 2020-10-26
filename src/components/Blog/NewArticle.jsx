import React from 'react';

const NewArticle = (props) => {
    return (
        <article className={"newArticle"}>
            <time className={"newArticle_day"}>{props.day}</time>
            <div className={"newArticle_title"}>
                <a className={"addLink"} href={"#"}>{props.title}</a>
            </div>
        </article>
    )
}

export default NewArticle;