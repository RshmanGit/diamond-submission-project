import IframeResizer from 'iframe-resizer-react';
import '../styles/PerformanceWidget.scss';

const widgetURL = process.env.REACT_APP_WIDGET_API_URL;

export default function PerformanceWidget(props) {
    const { id } = props;
    return (
        <div className="card">
            <div className="widget">
                <IframeResizer
                    name="Cutwise Widget"
                    width="330"
                    height="450"
                    frameBorder="0"
                    src={`${widgetURL}/performance/v1/${id}`}
                    loading="lazy"
                    className="performanceWidget"
                />
            </div>
            <a href={`/${id}`} className="detailView">View Details</a>
        </div>
    );
}
