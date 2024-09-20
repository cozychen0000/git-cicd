import './App.css';
import { useState } from 'react';
import Button from './components/button/button';

function App() {
  const [count, setCount] = useState(0);
  console.log('測試測試');
  return (
    <div className="min-h-dvh f-vw bg-gray-500 flex items-center justify-center">
      <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>
    </div>
  );
}

export default App;
