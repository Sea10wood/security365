import useWindowSize from "@/hooks/Windowsize";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [width, height] = useWindowSize();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                height: 60,
            }}
        >
            <MenuIcon
                sx={{
                    cursor: "pointer",
                    fontSize: "50px",
                    marginLeft: "15px",
                }}
                onClick={handleMenuToggle}
            />
            {isMenuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: 48,
                        left: 10,
                        backgroundColor: "#fff",
                        padding: 10,
                        borderRadius: 4,
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link href="/about">
                                <Typography variant="body1">About</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href="password_list4">
                                <Typography variant="body1">
                                    セキュリティ問題の現状
                                </Typography>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <Typography
                sx={{
                    marginLeft: "15px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#004AAD",
                }}
            >
                青のセキュリティ! 　敵を知り、己を知る
            </Typography>
        </Box>
    );
};

export default Header;
