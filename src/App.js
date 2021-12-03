import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Spinner } from 'react-bootstrap';
import List from './List';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  const handleButtonClick = () => {
    setLoading(true);
  };

  return (
    <>
      <div style={{ width: '100%', padding: '30px 10px' }}>
        <textarea style={{ width: '100%' }} rows={8} columns={4} />
        <Button onClick={handleButtonClick}>Write Log </Button>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
      <div style={{ width: '100%', padding: '30px 10px' }}>
        <List />
      </div>
    </>
  );
};

export default App;
