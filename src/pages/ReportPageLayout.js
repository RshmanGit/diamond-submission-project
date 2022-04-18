import { useParams } from 'react-router-dom';
import ReportWidget from '../components/ReportWidget';
import '../styles/ReportPageLayout.scss';

export default function ReportPage() {
    const params = useParams();
    const { id } = params;
    return (
        <div className="report">
            <ReportWidget id={id} />
        </div>
    );
}
