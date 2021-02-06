// @flow 
import * as React from 'react';
import { FormItem } from '../App';
import { FormButton } from './FormButton';
import { TextField } from './TextField';
type ItemFormProps = {
    onSubmit: (event: React.FormEvent) => void;
    items: FormItem[];
    buttonLabel: string;
};
export const ItemForm: React.FC<ItemFormProps> = props => {
    const {items, onSubmit, buttonLabel} = props; 
    return (
        <form onSubmit={onSubmit}>
            {items.map(item => (
                <TextField
                id={item.id}
                label={item.label}
                onChange={item.onChange}
            />
            ))}
        <FormButton 
            label={buttonLabel}
        />
      </form>
    );
};