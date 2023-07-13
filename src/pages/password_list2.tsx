import Header from "@/components/Header";
import PullDownID from "@/components/pulldownID";

import useWindowSize from "@/hooks/Windowsize";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";

const Passwordlist = () => {
    const [width, height] = useWindowSize();
    const [visitorCount, setVisitorCount] = useState(0);
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchVisitorCount = async () => {
            const response = await fetch(
                "https://api.example.com/visitorCount"
            );
            const data = await response.json();
            setVisitorCount(data.count);
        };

        fetchVisitorCount();
    }, []);

    const handlePullDownIDChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setID(event.target.value);
    };

    const isSuccessB = id === "iiiiiii@mail.com" && password === "aaaa12345";

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
                />
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
                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                    }}
                >
                    <Image src="/do.png" alt="do" width={835.2} height={606} />
                    <div
                        style={{ position: "absolute", top: "57%", left: "3%" }}
                    >
                        <PullDownID onChange={handlePullDownIDChange} />

                        {isSuccessB && (
                            <Typography
                                sx={{
                                    position: "absolute",
                                    top: "100%",
                                    left: "5%",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "green",
                                    zIndex: 1,
                                }}
                            >
                                成功
                            </Typography>
                        )}
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: "57%",
                            left: "29.5%",
                        }}
                    >
                        <PullDownID onChange={handlePullDownIDChange} />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "57%",
                            left: "56%",
                        }}
                    >
                        <PullDownID onChange={handlePullDownIDChange} />
                    </div>
                </div>

                <Link href="/password_list3">
                    <Typography
                        sx={{
                            position: "fixed",
                            bottom: "20%",
                            left: "65%",
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "#FF0000",
                            zIndex: 1,
                        }}
                    >
                        Next ▶︎
                    </Typography>
                </Link>
                <Typography
                    sx={{
                        position: "fixed",
                        bottom: "10%",
                        left: "40%",
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#000000",
                        zIndex: 1,
                    }}
                >
                    サイト訪問者数: {visitorCount}
                </Typography>
            </div>
        </>
    );
};

export default Passwordlist;
