// @flow 
import * as React from 'react';
interface FormButtonProps {
    label: string;
};
export const FormButton: React.FC<FormButtonProps> = props => {
    const {label} = props;
    return (
        <button type="submit">{label}</button>
    );
};