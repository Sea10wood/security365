import Header from "@/components/Header";
import PullDownID from "@/components/pulldownID";
import useWindowSize from "@/hooks/Windowsize";
import { Box, Button, Modal, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Passwordlist = () => {
    const [width, height] = useWindowSize();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        zIndex: 2,
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
                        <PullDownID />
                        <Button
                            onClick={handleOpen}
                            variant="text"
                            sx={{ left: "70%" }}
                        >
                            Login
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    height: 50,
                                    bgcolor: "white",
                                    border: "1px solid black",
                                    p: 2,
                                    left: "50%",
                                    top: "50%",
                                    margin: "20% auto",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    color="red"
                                    margin="auto"
                                >
                                    1件のログインに成功
                                </Typography>
                            </Box>
                        </Modal>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: "57%",
                            left: "35%",
                        }}
                    >
                        <PullDownID />
                        <Button
                            variant="text"
                            sx={{ left: "70%" }}
                            onClick={handleOpen}
                        >
                            Login
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    height: 50,
                                    bgcolor: "white",
                                    border: "1px solid black",
                                    p: 2,
                                    left: "50%",
                                    top: "50%",
                                    margin: "20% auto",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    color="red"
                                    margin="auto"
                                >
                                    1件のログインに成功
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "57%",
                            left: "68%",
                        }}
                    >
                        <PullDownID />
                        <Button variant="text" sx={{ left: "70%" }}>
                            Login
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    height: 50,
                                    bgcolor: "white",
                                    border: "1px solid black",
                                    p: 2,
                                    left: "50%",
                                    top: "50%",
                                    margin: "20% auto",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    color="red"
                                    margin="auto"
                                >
                                    1件のログインに成功
                                </Typography>
                            </Box>
                        </Modal>
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
                        bottom: "10%",
                        left: "40%",
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#000000",
                        zIndex: 1,
                    }}
                >
                    この攻撃を理解した人数:1
                </Typography>
            </div>
        </>
    );
};

export default Passwordlist;
