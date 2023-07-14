import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ComingSoon: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: "monospace",
                    fontSize: "50px",
                    letterSpacing: "2px",
                    marginBottom: "20px", // Add margin-bottom for spacing
                }}
            >
                Comming Soon!!
            </Typography>
            <Link href="/">
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "monospace",
                        fontSize: "30px",
                        letterSpacing: "2px",
                        marginBottom: "20px", // Add margin-bottom for spacing
                    }}
                >
                    戻る
                </Typography>
            </Link>
        </Box>
    );
};

export default ComingSoon;
