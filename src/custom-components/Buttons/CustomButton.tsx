import {Button} from "@mui/material";
import React from "react";
import {ButtonVariantType} from "./CustomButton.types";

export interface ICustomButtonProps{
    title: string
    onClick?: () => void
    variant?: ButtonVariantType;
    classes?: string
    disabled?: boolean
}

export const CustomButton: React.FC<ICustomButtonProps> = ({onClick, title, variant = ButtonVariantType.TEXT, classes, disabled}) => {
    return (
        <div >
            <Button className={classes} onClick={onClick} variant={variant} disabled={disabled}>{title}</Button>
        </div>
    );
}


// import React from 'react';
//
// type ButtonProps = {
//     title: string;
//     onClick: () => void;
//     className?: string;
// };
//
// export const CustomButton: React.FC<ButtonProps> = ({ title, onClick, className = '' }) => {
//     return (
//         <button
//             onClick={onClick}
//             className={`px-4 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 ${className}`}
//         >
//             {title}
//         </button>
//     );
// };

