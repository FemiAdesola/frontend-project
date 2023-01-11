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
const HomeCarousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
     const categories = useAppSelector(state => state.categoryReducer)
    const maxSteps = categories.length;
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
        <Box sx={{ maxWidth: 700, flexGrow: 1, mt:5}}>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            >
            {Array.isArray(categories)
                ?
            categories.map((step, index) => (
            <Typography key={step?.name}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                    height: 400,
                    display: 'block',
                    maxWidth: 700,
                    overflow: 'hidden',
                    width: '800px',
                    }}
                    src={step.image}
                    alt={step.name}
                />
                ) : null}
            </Typography>
            )):null}
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
            <Typography>{categories[activeStep]?.name}</Typography>
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