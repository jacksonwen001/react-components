import React from 'react';
import { Button, ToolTips } from '../packages';

function App() {
  return (
    <div className="App">
      <div className='mt-20  border-dashed border border-green w-56 m-auto'>
          <ToolTips tips="Hello sfkjsdhfks i" className="h-10  border-dashed border-2">
            <div className='w-20'>hello world</div>
          </ToolTips>
      </div>
    </div>
  );
}

export default App;
