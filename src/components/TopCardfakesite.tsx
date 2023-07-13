import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function TopCardFakesite() {
    return (
        <Link href="/comming_soon">
            <div style={{ width: "30vw" }}>
                <CardMedia
                    component="img"
                    alt="click_password"
                    height="150"
                    image="Click_password.png"
                    sx={{
                        width: 210,
                        height: 210,
                        margin: "auto",
                        borderRadius: "50%",
                    }}
                />
                <Card sx={{ width: "30vw", marginTop: "-10vh" }}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            marginTop="10vh"
                        >
                            フェイクサイト
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            marginTop="10%"
                        >
                            フェイクサイトとは:
                            正規のサイトと見分けがつかないほど精巧に作られた偽のウェブサイトです。例えば、攻撃者が偽のECサイトを作成し、ユーザーを騙して個人情報(パスワード、クレジットカード情報など)を入力させ、情報を盗み取る攻撃をフィッシング攻撃と呼びます。
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            marginTop="10%"
                        >
                            ・フェイクサイトを見分ける方法。
                            ・誤って情報を入力した場合の対応。
                            ・セキュリティソフトを導入し、アクセスをブロックする。
                        </Typography>
                        　
                    </CardContent>
                    <CardActions>
                        <Paper
                            sx={{
                                width: 450,
                                height: 100,
                                opacity: 1,
                                backgroundColor: "#ffffffff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}
                        >
                            <Button size="small">Share!!</Button>

                            <Image
                                src="/LINE_Brand_icon.png"
                                alt="linelogo"
                                width="40"
                                height="40"
                            ></Image>

                            <Link href="https://twitter.com/10derSea">
                                <Image
                                    src="/Twitterlogoblue.png"
                                    alt="TwitterLogo"
                                    width="50"
                                    height="40"
                                />
                            </Link>
                            <Link href="/https://instagram.com/sea10____?igshid=NTc4MTIwNjQ2YQ==">
                                <Image
                                    src="/Instagram_Glyph_Gradient copy.png"
                                    alt={"InstagramLogo"}
                                    width="40"
                                    height="40"
                                />
                            </Link>
                        </Paper>
                    </CardActions>
                </Card>
            </div>
        </Link>
    );
}
