import Header from "@/components/Header";
import TopCardFakesite from "@/components/TopCardfakesite";
import TopCardPassword from "@/components/TopCardPassword";
import TopCardPasswordRead from "@/components/TopCardPasswordread";
import TopCardSNS from "@/components/TopCardSNS";
import TopCardVirus from "@/components/TopCardVirus";
import TopCardMain from "@/components/TutelaCard";
import useWindowSize from "@/hooks/Windowsize";
import Image from "next/image";

const TopPage = () => {
    const [width, height] = useWindowSize();

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

            <div style={{ position: "relative" }}>
                <Image
                    src="/whiteback.png"
                    alt="back"
                    width={width}
                    height={height}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TopCardMain />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            marginTop: "20px",
                        }}
                    >
                        <TopCardPassword />
                        <TopCardVirus />
                        <TopCardPasswordRead />
                        <TopCardSNS />
                        <TopCardFakesite />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopPage;
