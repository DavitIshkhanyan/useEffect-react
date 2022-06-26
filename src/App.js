import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [fetchNum, setFetchNum] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            if (fetchNum) {
                fetch(
                    `https://jsonplaceholder.typicode.com/posts/${fetchNum}/comments`
                )
                    .then((response) => response.json())
                    .then((json) => setData(json));
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [fetchNum]);
    return (
        <div className="App">
            <input
                value={fetchNum}
                onChange={(e) => setFetchNum(e.target.value)}
            />
            {data.map((el) => {
                return (
                    <div key={el.id}>
                        <span style={{ color: 'red' }}>{el.email}</span> :
                        <span style={{ color: 'green' }}>{el.body}</span>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
