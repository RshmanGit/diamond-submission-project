import { useEffect, useState } from 'react';
import ResponsiveGrid from '../components/ResponsiveGrid';

import fetchGrid from '../utils/updateProductGrid';
import fetchKey from '../utils/updateKey';

export default function Homepage() {
    const [ids, setIds] = useState([]);

    useEffect(async () => {
        const { accessToken } = await fetchKey();
        if (ids.length <= 0) {
            setIds(await fetchGrid(accessToken));
        }
    }, []);

    return (
        <div className="App" style={{ backgroundColor: '#131313' }}>
            <div style={{
                color: 'white', border: '2px', display: 'flex', marginBottom: '2%', justifyContent: 'center', justifyItems: 'center',
            }}
            >
                <h1 style={{ flexBasis: '10%', textAlign: 'center' }}>
                    Cutw
                    <span style={{ color: 'orange' }}>i</span>
                    se
                </h1>
                <h1 style={{ flexBasis: '90%', textAlign: 'center' }}>DiBox 2.0 Performance Collection</h1>
                <h1 style={{ flexBasis: '10%' }}> </h1>
            </div>
            <ResponsiveGrid ids={ids} />
        </div>
    );
}
