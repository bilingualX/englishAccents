import React from 'react';
import './App.css'
import emojipedia from './emojipedia';
import Entry from './Entry';

function createEntry(entry){
  return <Entry 
  key={entry.id}
  emoji={entry.emoji}
  name={entry.name}
  meaning={entry.meaning}
  />
}

function App() {

  return (
    <div className='box'>
      <h1>
        <span>Different Accents and Sayings among English Speaking Countries</span>
      </h1>
      <div className='container'>
      {emojipedia.map(createEntry)}
      </div>
    </div>
    
  );
}

export default App;
