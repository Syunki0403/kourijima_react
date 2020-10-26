import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Reservation from '../Reservation';

const App = () => {
    return (
        <div className={"bodyBox"}>
            <Header />
            <Main
                contents={
                    <>
                        <div className={"mainSideBlankBox"}>
                            <h1>島へのアクセス</h1>
                            <p className={"mainText"}>那覇からは、沖縄自動車道、国道58号線を通り、屋我地島を経由し古宇利大橋を渡ります。</p>
                            <div className={"mainAccessMap"}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d914454.1642816195!2d127.840813!3d26.452938!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x34e569c48e8b2c8d%3A0x504cceaa3756fe90!2z6YKj6KaH56m65riv44CB44CSOTAxLTAxNDIg5rKW57iE55yM6YKj6KaH5biC5a2X6Y-h5rC077yR77yV77yQ!3m2!1d26.206403299999998!2d127.6465422!4m5!1s0x34e45834628fc6c1%3A0xfe464c1009cf4372!2z5Y-k5a6H5Yip5bO244CB44CSOTA1LTA0MDYg5rKW57iE55yM5Zu96aCt6YOh5LuK5biw5LuB5p2R5a2X5Y-k5a6H5Yip!3m2!1d26.7072982!2d128.0181686!5e0!3m2!1sja!2sjp!4v1602140091980!5m2!1sja!2sjp" width="100%" height="450" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" />
                            </div>
                            <div className={"mainTextBox"}>
                                <h3>所要時間の目安</h3>
                                <p className={"mainText"}>
                                    那覇空港から（約90km） : 1時間30分ほど<br />
                                    那覇市街地から（約82km） : 1時間20分ほど<br />
                                    名護市街地から（約17km） : 30分ほど<br />
                                    美ら海水族館から（約20km） : 30分ほど
                                </p>
                                <h3>有料道路の料金</h3>
                                <p className={"mainText"}>沖縄自動車道 那覇IC〜許田IC : 1,020円</p>
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
