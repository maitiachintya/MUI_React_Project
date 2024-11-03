import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ImageCarousel = () => {
  const items = [
    {
      img: 'https://img.freepik.com/free-photo/instructor-helping-students-computer-class_74855-2020.jpg?semt=ais_hybrid',
      label: 'Environment Place',
    },
    {
      img: 'https://st4.depositphotos.com/3203307/26329/i/450/depositphotos_263293556-stock-photo-a-computer-system-hacked-warning.jpg',
      label: 'Work Deauties',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/05/06/38/11/360_F_506381165_6pLpnF4PUcGTCVfjT0sM5PfKGZJ8ml7u.jpg',
      label: 'Form Crations',
    },
    {
      img: 'https://lrdavjagraon.com/wp-content/uploads/2016/05/cell.png',
      label: 'Placement Strategy',
    },
  ];

  return (
    <Box sx={{ width: '90%', height: 'auto', margin: 'auto' }}>
      <Carousel>
        {items.map((item, index) => (
          <Box key={index} sx={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 500, // Allows responsive height
                objectFit: 'cover', // Ensures the image covers the box
                borderRadius: '8px'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px', // Ensures the label box stretches across the width
                color: 'white',
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex', // Use flexbox to center the text
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                height: '40px' // Fixed height for all labels
              }}
            >
              {item.label}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
