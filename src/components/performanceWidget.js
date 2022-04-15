import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import IframeResizer from 'iframe-resizer-react';

const widgetURL = process.env.REACT_APP_WIDGET_API_URL;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#131313',
    padding: theme.spacing(5),
    textAlign: 'center',
    color: '000',
    overflow: 'hidden',
    maxHeight: '350px',
    borderColor: '#131313',
}));

export default function PerformanceWidget(props) {
    const { id } = props;
    return (
        <Grid item xs={4} sm={8} md={4} lg={2} xl={2} key={id}>
            <Link to={`/${id}`}>
                <Item>
                    <IframeResizer
                        name="Cutwise Widget"
                        width="600"
                        height="430"
                        frameBorder="0"
                        src={`${widgetURL}/performance/v1/${id}`}
                        style={{
                            width: '1px', minWidth: '103%', position: 'relative', top: '-80px',
                        }}
                        loading="lazy"
                    />
                    <Button
                        variant="text"
                        style={{
                            backgroundColor: '#131313',
                            color: '#000',
                            position: 'relative',
                            bottom: '80px',
                            '&hover': {
                                borderColor: 'orange',
                            },
                        }}
                    >
                        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>View Details</Link>
                    </Button>
                </Item>
            </Link>
        </Grid>
    );
}
