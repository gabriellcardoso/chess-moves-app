import * as React from 'react';

interface LegendTileProps {
    children: React.ReactNode;
}

const LegendTile = (props: LegendTileProps) => (
    <div className="legend-tile">
        <span className="legend">
            {props.children}
        </span>
    </div>
);

export { LegendTile }