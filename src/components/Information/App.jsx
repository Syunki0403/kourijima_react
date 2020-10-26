import React from 'react'
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Reservation from '../Reservation';

import infoImage from '../../assets/images/information/IMG_5787-860x573.jpg';

const App = () => {
    return (
        <div className={"bodyBox"}>
            <Header />
            <Main
                contents={
                    <>
                        <div className={"mainSideBlankBox"}>
                            <h1>島の情報</h1>
                            <div className={"mainImage"}>
                                <img src={infoImage} alt={''} />
                            </div>
                            <div className={"mainTextBox"}>
                                <p className={"mainText"}>古宇利島（こうりじま）は、沖縄本島北部にある屋我地島の北に位置し、今帰仁村に帰属する有人島。離島ならではの美しい海や「沖縄版アダムとイヴ」と呼ばれる伝承があることで有名。</p>
                                <h3>地理</h3>
                                <p className={"mainText"}>面積3.13km²、周囲7.9kmでほぼ円形の形をした隆起サンゴ礁の小島である。3～4段の海岸段丘で囲まれている。</p>
                                <h3>歴史</h3>
                                <dl className={"mainDescription"}>
                                    <dt>神話伝説</dt>
                                    <dd>昔、古宇利島に空から男女二人の子供が降ってきた。彼らは全くの裸であり毎日天から落ちる餅を食べて幸福に暮らしていた。最初はそれに疑問を抱かなかったがある日餅が降らなくなったらどうしようという疑念を起こし、毎日少しずつ食べ残すようになった。ところが二人が貯えを始めたときから餅は降らなくなった。二人は天の月に向かい声を嗄らして歌ったが餅が二度と降ってくることはなかった。そこで二人は浜で生活するようになり、魚や貝を捕って生活と労働の苦しみを知り、ジュゴンの交尾を見て男女の違いを意識し恥部をクバの葉で隠すようになった。この二人の子孫が増え琉球人の祖となった、と云う神話である。</dd>
                                </dl>
                                <h3>産業</h3>
                                <p className={"mainText"}>島民の7割は農業に従事しており、約2割は漁業、約1割はサービス業である。農業では、サトウキビや紅芋などが中心であり、漁業では、ウニが有名である。</p>
                                <h3>教育</h3>
                                <p className={"mainText"}>
                                    今帰仁村立古宇利小学校 – 2013年3月末日で閉校。<br />
                                    2003年度までは小中併置校であったが、村内中学校の統合により2004年度から2012年度まで小学校のみ存在した。閉校に伴いこの島の小中学生は沖縄本島にある今帰仁村立天底小学校、今帰仁村立今帰仁中学校まで通学することになった。
                                </p>
                                <h3>交通</h3>
                                <p className={"mainText"}>かつては古宇利港と運天港との間に船便が通じていたが橋の開通と共に廃止された。2005年2月に古宇利大橋（1.96km）が完成し、名護市の屋我地島と橋で結ばれた。行政上は今帰仁村に帰属しているが、屋我地島と今帰仁村本島側との間の架橋（ワルミ大橋）が開通するまでは、古宇利島から村役場のある仲宗根に向かう際、またこの島の中学生らが通学する際にも屋我地大橋を経由して迂回しなければならなかった。</p>
                                <h3>名所・旧跡</h3>
                                <ul className={"mainDotsList"}>
                                    <li>古宇利大橋</li>
                                    <li>遠見屋遺跡</li>
                                    <li>古宇利原遺跡</li>
                                    <li>ちぐぬ浜</li>
                                    <li>エモンズ</li>
                                </ul>
                                <p className={"mainText"}>
                                    このコンテンツはクリエイティブ・コモンズ・ライセンス<a className={"addLink"} href={"https://creativecommons.org/licenses/by-sa/3.0/"}>CC BY-SA 3.0</a>に基づき<a className={"addLink"} href={"https://ja.wikipedia.org/wiki/%E5%8F%A4%E5%AE%87%E5%88%A9%E5%B3%B6"}>古宇利島 – Wikipedia</a>より転載したものです。
                                </p>
                            </div>
                        </div>
                        <Reservation />
                    </>
                }
            />
            <Footer />
        </div>
    )
}

export default App;