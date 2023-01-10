import React, { useState} from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useAppSelector } from '../../hooks/reduxHook';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Shoes',
    imgPath:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    label: 'Electronics',
    imgPath:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  },
  {
    label: 'Clothes',
    imgPath:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    label: 'Change title: Furniture',
    imgPath:
      'https://plus.unsplash.com/premium_photo-1663013668671-d453f319544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
  {
    label: 'Others',
    imgPath:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
];

const HomeCarousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <Box sx={{ maxWidth: 600, flexGrow: 1, mt:5}}>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {images.map((step, index) => (
            <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                    height: 400,
                    display: 'block',
                    maxWidth: 600,
                    overflow: 'hidden',
                    width: '700px',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                />
                ) : null}
            </div>
            ))}
            </AutoPlaySwipeableViews>
            <Paper
            square
            elevation={0}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            }}
        >
            <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
            </Button>
            }
        />
        </Box>
    );
}

export default HomeCarousel