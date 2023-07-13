import Header from "@/components/Header";
import useWindowSize from "@/hooks/Windowsize";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Passwordlist = () => {
    const [width, height] = useWindowSize();
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            const response = await fetch("");
            const data = await response.json();
            setVisitorCount(data.count);
        };

        fetchVisitorCount();
    }, []);
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
            <div style={{ position: "relative", display: "inline-block" }}>
                <Image
                    src="/whiteback.png\"
                    alt=""
                    width={width}
                    height={height}
                ></Image>
                <Typography
                    sx={{
                        position: "absolute",
                        top: 4,
                        left: 5,
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#0000000",
                        zIndex: 1,
                    }}
                >
                    パスワードリスト攻撃
                </Typography>
                <div
                    style={{
                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                    }}
                >
                    <Image
                        src="/attention.png"
                        alt="attention"
                        width={835.2}
                        height={606}
                    ></Image>
                </div>
                <Link href="/password_list4\">
                    <Typography
                        sx={{
                            position: "fixed",
                            bottom: "20% ",
                            left: "65%",
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "#FF0000",
                            zIndex: 1,
                            borderRadius: "10px",
                            border: "4px solid #FF0000",
                            padding: "10px",
                        }}
                    >
                        Next ▶︎
                    </Typography>
                </Link>
                <Typography
                    sx={{
                        position: "fixed",
                        bottom: "10% ",
                        left: "40%",
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#000000",
                        zIndex: 1,
                    }}
                >
                    この攻撃を理解した人数: {visitorCount}
                </Typography>
            </div>
        </>
    );
};
export default Passwordlist;
