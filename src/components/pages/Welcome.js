import React from 'react';
import Button from '../buttons/Button';
import welcome from './welcome.module.css';

function Home() {
  return (
    <div>
      <div className={welcome.container}>
        <h1>TRAQURA</h1>
        <div className={welcome.btnContainer}>
          <Button title="LOGIN" />
          <Button title="NEW ACCOUNT?" />
        </div>
      </div> 
    </div>
  )
}

export default Home;