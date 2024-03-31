export default function Card() {
    return (
        <div style={{}}>
            <h4>The word</h4>
            <Card
                style={{
                    width: 400,
                    backgroundColor: "yellow",
                }}
            >
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Meaning of the word
                    </Typography>
                    <Typography variant="h5" component="h2">
                        transcrition
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="green">Known</Button>
                    <Button size="small" color="red">Unknown</Button>
                </CardActions>
            </Card>
        </div>
    );
}