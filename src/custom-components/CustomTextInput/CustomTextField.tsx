import {TextField} from "@mui/material";
import React from "react";

export interface ICustomButtonProps{
    value: string
    onChange?: (e: any) => void
    label: string
    multiline?: boolean
}

export const CustomTextField: React.FC<ICustomButtonProps> = ({value, onChange, label, multiline= false}) => {
    return (
        <div >
            <TextField id="outlined-basic" label={label} variant="outlined" className="w-full pb-3" onChange={onChange} value={value} multiline={multiline}/>
        </div>
    );
}
