import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value, 
    steps
}) => {
    return (
        //my is marginY
        <Stack my="1.4">
            {/* Display label, unit and amount  */}
            <Stack gap={1}>
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">
                 {unit} {amount}
                </Typography>
            </Stack>

            {/* Display slider */}

            <Slider 
                min={min}
                max={max}
                defaultValue={defaultValue}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={value}
                marks
                step={steps}
            />

            {/* Display min and max values of slider */}

            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {unit} {min}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {unit} {max}
                </Typography>
            </Stack>
        </Stack>
    )
}





export default SliderComponent
