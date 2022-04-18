import * as React from 'react';

import '../styles/ResponsiveGrid.scss';

import PerformanceWidget from './performanceWidget';

export default function ResponsiveGrid(props) {
    const { ids } = props;
    return (
        <div className="grid">
            <div>
                {ids.map((id) => (
                    <PerformanceWidget id={id} />
                ))}
            </div>
        </div>
    );
}
