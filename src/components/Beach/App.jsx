import React from 'react'
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Reservation from '../Reservation';

import mapImage_beach from '../../assets/images/beach/kouriOutlineShopBeachTablet.png';

const App = () => {
    return (
        <div className={"bodyBox"}>
            <Header />
            <Main
                contents={
                    <>
                        <div className={"mainSideBlankBox"}>
                            <h1>島のビーチ</h1>
                            <p className={"mainText"}>古宇利島のビーチの地図です。</p>
                            <div className={"mainMap_contents"}>
                                <div className={"mainMap_map"}>
                                    <img src={mapImage_beach} alt={"ビーチの地図"} />
                                </div>
                                <ol className={"mainMap_name"}>
                                    <li>トケイ浜（ポットホール）</li>
                                    <li>ティーヌ浜（ハートロック）</li>
                                    <li>古宇利ビーチ</li>
                                    <li>チグヌ浜</li>
                                    <li>ソウヌ浜</li>
                                </ol>
                            </div>
                            <h3>各ビーチについて</h3>
                            <dl className={"mainDescription"}>
                                <dt>トケイ浜（ポットホール）</dt>
                                <dd>自然の浜が複数広がっており、サンゴが残っているきれいなビーチです。干潮時以外は泳ぐことができ、鮮やかな熱帯魚を見ることができます。遠浅になってはいますが、リーフを越えると突然深くなるので要注意です。映画やドラマ、ミュージックビデオの撮影にもよく利用されています。</dd>
                                <dt>ティーヌ浜（ハートロック）</dt>
                                <dd>ハート型の岩があることからハートロックビーチと言われることもあります。とても美しい自然のビーチですが、ビーチに下りるまでの道が少し険しいので注意が必要です。</dd>
                                <dt>古宇利ビーチ</dt>
                                <dd>古宇利島の入り口すぐにある遠浅のビーチで、海水浴を楽しむ人で賑わっています。マリングッズのレンタルやシャワー、トイレ、駐車場と施設が充実。ビーチと古宇利大橋を背景にした記念撮影が人気です。</dd>
                                <dt>チグヌ浜</dt>
                                <dd>沖縄版「アダムとイブ」の言い伝えにある、彼らが暮らしていたとされる洞穴があるビーチです。砂浜が小さく、地元の住民が泳いでいることが多いのが特徴。海は深くなっているので、要注意です。</dd>
                                <dt>ソウヌ浜</dt>
                                <dd>潮が引いた時にだけ出てくるビーチで、観光客が来ることはほとんどありません。シュノーケリング向きのスポットで、釣り人がいることもあります。</dd>
                            </dl>
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