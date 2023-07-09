import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopCardPassword() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="password_list_attack"
                height="140"
                image="passwordlist.png"
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
                        src="/facebooklogo.png"
                        alt="facebooklogo"
                        width="40"
                        height="40"
                    />

                    <Link href="/https://instagram.com/sea10____?igshid=NTc4MTIwNjQ2YQ==">
                        <Image
                            src="/Instagram_Glyph_Gradient copy.png"
                            alt={"InstagramLogo"}
                            width="40"
                            height="40"
                        />
                    </Link>

                    <Link href="https://twitter.com/10derSea">
                        <Image
                            src="/Twitterlogoblue.png"
                            alt="TwitterLogo"
                            width="50"
                            height="40"
                        />
                    </Link>
                    <Link href="/password_list1">
                        <Button size="small">やってみる！</Button>
                    </Link>
                </Paper>
            </CardActions>
        </Card>
    );
}
