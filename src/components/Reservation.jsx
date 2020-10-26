import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    'button': {
        backgroundColor: "#fff",
        color: "#0095d9",
        borderColor: "#0095d9",
        textTransform: 'none',
        fontFamily: "YuMincho, 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho ProN', serif",
        "&:hover": {
            backgroundColor: "#0095d9",
            color: "#fff"
        }
    }
}));

const Reservation = () => {
    const classes = useStyles();

    return (
        <div className={"reservation"}>
            <div className={"reservationBox"}>
                <p>沖縄への航空券予約おすすめ</p>
                <div className={classes.root}>
                    <Button className={classes.button} variant={"outlined"} href={"https://www.jalan.net/dp/?vc_lpp=MSY1MGMyZTcxMTkwJjVmN2QyMGVmJjJmOTg4YSY1ZmE0YWRlZiZYMzBnN3dBSkRvZkswMWYtd0tocENjQ29hUTdpcGcmNAlYMzBnN3dBSkRvZkswMWYtd0tocENjQ29hUTdpcGcJMDg4NDY4NTMxMDAyNjU2MDY0MjAxMDA3MDE1OTExCQlodHRwOi8va291cmlqaW1hLmluZm8vCQ&vos=afjadpvczzzzx00000001"}>
                        じゃらんパック
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"http://www.valuecommerce.ne.jp/default_banner.html?utm_source=AdiAffiliates&utm_campaign=generic&utm_medium=pps_valuecommerce_golf&utm_term=NA&utm_content=NA&vc_lpp=MSZmNjk2OGQ0NDhiJjVmN2QyMTAyJjQmNWZjYzNiMDImWDMwaEFnQUtGRmJLMDFmLXdLaHBETUNvYVEwOHF3JjQJWDMwaEFnQUtGRmJLMDFmLXdLaHBETUNvYVEwOHF3CTA4ODQ2ODY0MzcwMjEwMTA1MzIwMTAwNzAxNTkzMAkJaHR0cDovL2tvdXJpamltYS5pbmZvLwk"}>
                        DeNAトラベル
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"https://skyticket.jp/?ad=VC_sky_dom"}>
                        skyticket.jp
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"https://www.airticket-center.com/?source=ad.vc"}>
                        格安航空券センター
                    </Button>
                </div>
            </div>
            <div className={"reservationBox"}>
                <p>沖縄の宿予約おすすめ</p>
                <div className={classes.root}>
                    <Button className={classes.button} variant={"outlined"} href={"https://www.jalan.net/?vos=afjlnpvczzzzx00002010&caadsess=12180_b8603cqht7qgcKD&caadterm=3600"}>
                        じゃらん
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"https://travel.yahoo.co.jp/?sc_e=afvc_ml"}>
                        Yahoo!トラベル
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"https://rlx.jp/?vc0001=&utm_source=coop&utm_medium=paid&utm_campaign=vc0001&vc_lpp=MSYxMGU4YmFmMTkwJjVmN2QyNTgzJjMxZjU2MyY1ZmE0YjI4MiZYMzBsZ2dBT1prWEswMWYtd0tocHZNQ29hU2N3dGcmNAlYMzBsZ2dBT1prWEswMWYtd0tocHZNQ29hU2N3dGcJMDg4NDY4NTI3NTAyNzU4NTQ5MjAxMDA3MDIxODQyCQlodHRwOi8va291cmlqaW1hLmluZm8vCQ"}>
                        Relux
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"http://www.valuecommerce.ne.jp/default_banner.html?utm_source=AdiAffiliates&utm_campaign=generic&utm_medium=pps_valuecommerce_golf&utm_term=NA&utm_content=NA&vc_lpp=MSZjMzI5NDU1YThiJjVmN2QyNTk5JjQmNWZjYzNmOTkmWDMwbG1RQU1pYUxLMDFmLXdLaHBDY0NvYVEwUzJRJjQJWDMwbG1RQU1pYUxLMDFmLXdLaHBDY0NvYVEwUzJRCTA4ODQ2ODUyODgwMjEwMTA1MzIwMTAwNzAyMTkwNQkJaHR0cDovL2tvdXJpamltYS5pbmZvLwk"}>
                        yayoQ.com
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"https://www.tocoo.jp/?vc_lpp=MSZkNmFjY2RlOThjJjVmN2QyNWFiJjY1JjVmY2MzZmFiJlgzMGxxd0FLTmYzSzAxZi13S2hwQ2NDb2FRNHdxQSY0CVgzMGxxd0FLTmYzSzAxZi13S2hwQ2NDb2FRNHdxQQkwODg0Njg1Mjc0MDI3MDk2ODIyMDEwMDcwMjE5MjMJCWh0dHA6Ly9rb3VyaWppbWEuaW5mby8J"}>
                        トクー！
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"http://www.nta.co.jp/"}>
                        日本旅行
                    </Button>
                </div>
            </div>
            <div className={"reservationBox"}>
                <p>沖縄のレンタカー予約おすすめ</p>
                <div className={classes.root}>
                    <Button className={classes.button} variant={"outlined"} href={"https://www.nipponrentacar.co.jp/"}>
                        ニッポンレンタカー
                    </Button>
                    <Button className={classes.button} variant={"outlined"} href={"https://www.jalan.net/rentacar/?vc_lpp=MSY2NjdkMTRhMDkwJjVmN2QyNWUwJjJmYmRlNiY1ZmE0YjJlMCZYMzBsNEFBTHQyYkswMWYtd0tocHZNQ29hUTRVdGcmNAlYMzBsNEFBTHQyYkswMWYtd0tocHZNQ29hUTRVdGcJMDg4NDY4NTMwMTAyNjY0MDA4MjAxMDA3MDIyMDE2CQlodHRwOi8va291cmlqaW1hLmluZm8vCQ&vos=afjlrpvczzzzx00000001"}>
                        じゃらんレンタカ－
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Reservation;