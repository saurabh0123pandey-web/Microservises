import { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:3000/api/message';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const getServerMessage = async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage('Server is not responding right now.');
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Saurabh's Project</h1>

        <p className="subtitle">
          React + Express Connection
        </p>

        <button onClick={getServerMessage}>
          {loading ? 'Connecting...' : 'Connect to Server'}
        </button>

        {message && (
          <div className="message-box">
            <span>Server says:</span>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
