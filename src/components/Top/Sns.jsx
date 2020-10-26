import React, { useEffect } from 'react'

const Sns = () => {

    useEffect(() => {
        // facebookのボタン表示処理
        if (typeof (FB) != "undefined") {
            // @see https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse/
            window.FB.XFBML.parse();
        }
        //window.FB.XFBML.parse(document.getElementById('facebookButton'));

        // twitterのボタン表示処理
        window.twttr = (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));

        window.twttr.ready(() => window.twttr.widgets.load(document.getElementById("tweetButton")));

    }, []);

    return (
        <div className={"topSns"}>
            <div className={"topSns_contents"}>
                <div>
                    <a id="tweetButton" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a>
                </div>
                <div id="facebookButton" className="fb-like" data-layout="button_count" ></div>
            </div>
        </div>
    )
}

export default Sns;