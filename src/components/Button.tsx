import React from "react";
import '../css/button.css';

export interface ButtonProps{
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label:string,
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    size= 'medium',
    label,
 
    onClick,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return(
        <button
        type="button"
        className={['button',`button--${size}`,mode].join(' ')}
        onClick={onClick}
        {...props}>
            {label}
        </button>
    )
}