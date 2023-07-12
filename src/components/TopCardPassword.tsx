import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function TopCardPassword() {
    return (
        <Link href="/password_list1">
            <Card sx={{ width: "30vw" }}>
                <CardMedia
                    component="img"
                    alt="click_password"
                    height="150"
                    image="Click_password.png"
                    sx={{ width: 210, height: 210, margin: "auto" }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        攻撃者があらかじめ何らかの方法で入手した、
                        サービスやシステムのIDとパスワードをリスト化
                        したデータを利用し、不正に企業や組織の
                        Webサイトへの不正アクセスを試みるという攻撃方法
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
        </Link>
    );
}
