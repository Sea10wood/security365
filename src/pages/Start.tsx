import Header from "@/components/Header";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Start = () => {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                }}
            >
                <Header />
            </div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "50px",
                        color: "#004AAD",
                    }}
                >
                    パスワードリスト攻撃に関して理解する
                </Typography>
                <Link href="/password_list1">
                    <Button
                        variant="contained"
                        sx={{ fontSize: 40, marginTop: 10 }}
                    >
                        やってみる！▶︎
                    </Button>
                </Link>
            </Box>
        </>
    );
};
export default Start;
