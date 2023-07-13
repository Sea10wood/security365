import Button from "@mui/material/Button";

export default function ButtonRightTop() {
    return (
        <Button
            style={{
                width: "10vw", // ボタンの幅を設定
                height: "40vh", // ボタンの高さを親要素に合わせる
                fontSize: "200%",
            }}
        >
            Topへ
        </Button>
    );
}
