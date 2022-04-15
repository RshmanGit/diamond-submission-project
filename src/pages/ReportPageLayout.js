import { useParams } from 'react-router-dom';
import ReportWidget from '../components/ReportWidget';

export default function ReportPage() {
    const params = useParams();
    const { id } = params;
    return (
        <div>
            <ReportWidget id={id} />
        </div>
    );
}
