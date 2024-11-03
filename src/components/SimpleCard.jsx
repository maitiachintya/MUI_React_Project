import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const SimpleCard = ({ title, description, image }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)', // Scale up on hover
                    boxShadow: 6, // Increase shadow on hover
                },
            }}
        >
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Random"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </Card>
    );
};

const CardContainer = () => {
    const cardData = [
        {
            title: "Card 1",
            description: "This is a description of card 1.",
            image: "https://lrdavjagraon.com/wp-content/uploads/2016/05/cell.png"
        },
        {
            title: "Card 2",
            description: "This is a description of card 2.",
            image: "https://img.freepik.com/free-photo/instructor-helping-students-computer-class_74855-2020.jpg?semt=ais_hybrid"
        },
        {
            title: "Card 3",
            description: "This is a description of card 3.",
            image: "https://t4.ftcdn.net/jpg/05/06/38/11/360_F_506381165_6pLpnF4PUcGTCVfjT0sM5PfKGZJ8ml7u.jpg"
        }
    ];

    return (
        <Grid container spacing={2} justifyContent="center">
            {cardData.map((card, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{ ml: index === 0 ? 2 : 0 }} // Add left margin to the first card
                >
                    <SimpleCard
                        title={card.title}
                        description={card.description}
                        image={card.image}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardContainer;
