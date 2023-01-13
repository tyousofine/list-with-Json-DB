import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips');
    const { data, isPedning, error } = useFetch(url);

    // const fetchTrips = useCallback(async () => {
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     setTrips(json)
    // }, [url])

    // useEffect(() => {
    //     fetchTrips()
    // }, [fetchTrips]);

    // console.log(trips);

    return (
        <div className='trip-list'>
            <h2>Trip List</h2>
            {isPedning &&
                <div>Loading trips...</div>
            }
            {error && <div>{error}</div>}
            <ul>
                {data && data.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>European Trips</button>
                <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            </div>
        </div>
    )
}
