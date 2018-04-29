import * as React from 'react';

interface LegendTileProps {
    children: React.ReactNode;
}

const LegendTile = (props: LegendTileProps) => (
    <div className="legend tile">
        {props.children}
    </div>
);

export { LegendTile }