import ButtonLeft from "@/components/ButtonLeft";
import ButtonRight from "@/components/ButtonRight";
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
                        zIndex: 2,
                    }}
                >
                    <Link href="/password_list3">
                        <ButtonLeft />
                    </Link>
                    <Image
                        src="/PasswordListAttack1.png"
                        alt="detail"
                        width={835.2}
                        height={606}
                    />
                    <Link href="/password_listex2">
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
                        zIndex: 1,
                    }}
                >
                    理解した人数: {visitorCount}
                </Typography>
            </div>
        </>
    );
};
export default Passwordlist;
