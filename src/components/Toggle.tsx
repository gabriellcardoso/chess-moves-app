import * as React from 'react';
import MuiToggle from 'material-ui/Toggle';

interface ToggleProps {
    label: string;
    value: boolean;
    onToggle: (value: boolean) => void;
}

const Toggle = (props: ToggleProps) => (
    <MuiToggle
        className="toggle"
        label={props.label}
        toggled={props.value}
        onToggle={(event, value) => props.onToggle(value)}
    />
);

export { Toggle }