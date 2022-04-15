import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PerformanceWidget from './performanceWidget';

export default function ResponsiveGrid(props) {
    const { ids } = props;
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#131313' }}>
            <Grid
                container
                spacing={{ xs: 2, sm: 2, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {ids.map((id) => (
                    <PerformanceWidget id={id} />
                ))}
            </Grid>
        </Box>
    );
}
