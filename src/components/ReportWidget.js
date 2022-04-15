import IframeResizer from 'iframe-resizer-react';
import { Link } from 'react-router-dom';

import * as React from 'react';
import GoToTop from './GoToTop';

const widgetURL = process.env.REACT_APP_WIDGET_API_URL;

export default function ReportWidget(props) {
    const { id } = props;

    return (
        <div className="widget" style={{ backgroundColor: '#000', margin: '0', padding: '0' }}>
            <Link to="/">
                <h3 style={{ color: '#fff', backgroundColor: '#333', padding: '20px' }}>{'< Back to Listing'}</h3>
            </Link>
            <IframeResizer
                name="Cutwise Widget"
                width="1366"
                height="768"
                frameBorder="0"
                style={{
                    width: '1px', minWidth: '100%',
                }}
                src={`${widgetURL}/report/v1/${id}`}
                loading="lazy"
            />
            <GoToTop />
        </div>
    );
}
