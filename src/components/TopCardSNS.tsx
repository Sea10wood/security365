import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function TopCardSNS() {
    return (
        <Link href="/Start">
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
                            SNSにおける
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            marginTop="10%"
                        >
                            SNSにおける危険性とは:
                            SNSは便利な反面、投稿や共有した写真などから、第三者に個人情報、場所などが推測されてしまう可能性があります。他にも、悪意のあるユーザから攻撃を受ける可能性もあります。
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            marginTop="10%"
                        >
                            学習項目:
                            ・個人情報やプライバシーを過度に公開しない。
                            ・怪しいリンクをクリックしない。
                            ・不審なメッセージを開かない。
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
