import React from "react";

export interface IModalProps {
    open: boolean;
    handleClose?: () => void
    children: React.ReactElement
}