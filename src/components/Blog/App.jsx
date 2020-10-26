import React, { useState, useEffect } from 'react'
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import MainArticleList from './MainArticleList';
import NewArticleList from './NewArticleList';
import articleDataset from './articleDataset';

const Blog = () => {
    const [dataset, setDataset] = useState(articleDataset);
    const [mainArticle, setMainArticle] = useState([]);
    const [newArticle, setNewArticle] = useState([]);

    useEffect(() => {
        const mainArticleObj = dataset["main_article"];
        setMainArticle(mainArticleObj.contents);

        const newArticleObj = dataset["new_article"];
        setNewArticle(newArticleObj.contents);
    }, []);


    return (
        <div className={"bodyBox"}>
            <Header />
            <Main
                contents={
                    <>
                        <div className={"mainSideBlankBox"}>
                            <h1>島の日々</h1>
                            <div className={"articleBox"}>
                                <MainArticleList mainArticle={mainArticle} />
                                <NewArticleList newArticle={newArticle} />
                            </div>
                        </div>
                    </>
                }
            />
            <Footer />
        </div>
    )
}

export default Blog;