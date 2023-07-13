import ButtonLeft from "@/components/ButtonLeft";
import ButtonRight from "@/components/ButtonRight";
import ButtonRightTop from "@/components/ButtonRightTop";
import Header from "@/components/Header";
import useWindowSize from "@/hooks/Windowsize";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PasswordlistEx3 = () => {
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
                    src="/whiteback.png"
                    alt="whiteback"
                    width={width}
                    height={height}
                ></Image>
                <Typography
                    sx={{
                        position: "absolute",
                        top: 40,
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                    }}
                >
                    <Link href="/password_list2">
                        <ButtonLeft />
                    </Link>

                    <Image
                        src="/PasswordListAttack3.png"
                        alt="detail"
                        width={835.2}
                        height={606}
                    ></Image>
                    <Link href="/Understand">
                        <ButtonRight />
                    </Link>
                </div>

                <Typography
                    sx={{
                        position: "fixed",
                        bottom: "10% ",
                        left: "40%",
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#000000",
                        zIndex: 2,
                    }}
                >
                    この攻撃を理解した人数: {visitorCount}
                </Typography>
            </div>
        </>
    );
};
export default PasswordlistEx3;
