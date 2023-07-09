import TopCardPassword from "@/components/TopCardPassword";
import TopCardMain from "@/components/TutelaCard";
import useWindowSize from "@/hooks/Windowsize";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const TopPage = () => {
    const [width, height] = useWindowSize();

    return (
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
                    top: 4,
                    left: 5,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#5CE1E6",
                    zIndex: 1,
                }}
            >
                TUTELA
            </Typography>

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                }}
            >
                <TopCardMain />
                <TopCardPassword />
            </div>
        </div>
    );
};

export default TopPage;
