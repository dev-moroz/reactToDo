import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout/Layout';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);