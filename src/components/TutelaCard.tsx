import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function TopCardMain() {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
            <CardMedia
                component="img"
                alt="favicon"
                height="140"
                image="favicon.ico"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    このサイトに関して
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
                　
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
