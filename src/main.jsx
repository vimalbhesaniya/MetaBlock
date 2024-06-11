import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./style/res.css";
import 'animate.css/animate.css';
import Loader from './Components/Loader.jsx';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, assets, etc.)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  return (
    <React.StrictMode>
      {loading ? <Loader /> : <App />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);
