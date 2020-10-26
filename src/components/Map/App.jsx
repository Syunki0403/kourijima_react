import React from 'react'
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Reservation from '../Reservation';

import mapImage_restaurant from '../../assets/images/map/kouriOutlineShopEatTablet.png';
import mapImage_hotel from '../../assets/images/map/kouriOutlineShopStayTablet.png';

const App = () => {
    return (
        <div className={"bodyBox"}>
            <Header />
            <Main
                contents={
                    <>
                        <div className={"mainSideBlankBox"}>
                            <h1>島の地図</h1>
                            <p className={"mainText"}>古宇利島にある飲食店と宿泊施設の地図です。</p>
                            <div className={"mainMap_contents"}>
                                <div className={"mainMap_map"}>
                                    <img src={mapImage_restaurant} alt={"飲食店の地図"} />
                                </div>
                                <ol className={"mainMap_name"}>
                                    <li>
                                        <a className={"addLink"} href={"http://www.koijima.com/"}>カフェ&レストラン 海の家YOSHIKA</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"https://ameblo.jp/kourijima-cafe/"}>古宇利島カフェ</a>
                                    </li>
                                    <li>
                                        古宇利島ふれあい広場
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://www.kourijima-muranochaya.com/index.html"}>むらの茶屋</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://shirasakouri.blog35.fc2.com/"}>しらさ</a>
                                    </li>
                                    <li>
                                        T&Cとうらく
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://shimanoeki.com/"}>島の駅</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"https://www.facebook.com/Kourijima.BlueGarden/"}>BLUE GARDEN</a>
                                    </li>
                                </ol>
                            </div>
                            <div className={"mainMap_contents"}>
                                <div className={"mainMap_map"}>
                                    <img src={mapImage_hotel} alt={"宿の地図"} />
                                </div>
                                <ol className={"mainMap_name"}>
                                    <li>
                                        <a className={"addLink"} href={"http://www9.plala.or.jp/della-sera/sp/index.html"}>ヴィラ・デラセーラ</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://ww1.hotel-cava.net/"}>hotel cava（ホテルカヴァ）</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://shirasakouri.blog35.fc2.com/"}>しらさ</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://resort.life.coocan.jp/"}>別荘KoURi</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://oyakataya.blogspot.com/"}>古宇利ゲストハウス島宿</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"http://www.koijima.com/"}>カフェ&レストラン 海の家YOSHIKA</a>
                                    </li>
                                    <li>
                                        <a className={"addLink"} href={"https://www.kaya-resort.okinawa/"}>KAYA RESORT 古宇利島</a>
                                    </li>
                                    <li>
                                        & Hana Stay
                                    </li>
                                </ol>
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