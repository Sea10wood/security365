import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function TopCardMain() {
    return (
        <>
            <CardMedia
                component="img"
                alt="icon"
                image="blue_security.png"
                sx={{
                    width: 300,
                    height: 300,
                    margin: "auto",
                    marginTop: "35%",
                    borderRadius: "50%",
                }}
            />
            <Card sx={{ width: "65vw", marginBottom: 5, marginTop: -5 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        このサイトに関して
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    ></Typography>
                    　
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
}
