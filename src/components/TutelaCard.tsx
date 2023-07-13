import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function TopCardMain() {
    return (
        <div>
            <CardMedia
                component="img"
                alt="icon"
                image="blue_security.png"
                sx={{
                    width: 300,
                    height: 300,
                    margin: "auto",
                    marginTop: "35%",
                    borderRadius: "50%",
                }}
            />
            <Card sx={{ width: "60vw", marginBottom: 5, marginTop: -5 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        青のセキュリティ! 敵を知り、己を知る
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        このサービスはインターネットを安全に使わせたい親/使いたい小中学生向けのセキュリティ教育サービスです。身近なセキュリティ脅威を攻撃視点で手を動かして学ぶことができます。対策と実例を演習後に学ぶことができます。
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        体験できるセキュリティ脅威
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ・パスワード解読 ・SNSにおける危険 ・フェイクサイト
                        ・ウイルス感染 ...
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        「青のセキュリティ!
                        敵を知り、己を知る」では、実際にセキュリティ攻撃を体験することで、より効率的にセキュリティへの意識を高めることができます。また、謎解き的な要素も取り入れているので、クリアしたときの達成感でモチベーションを高めることができます。セキュリティ脅威の理解度が高くなるので、攻撃による被害を避けるための対策を理解することができます。
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        「青のセキュリティ！
                        敵を知り、己を知る」により身近なセキュリティ脅威を理解し、インターネットを安全に使いましょう!
                    </Typography>
                    　
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
