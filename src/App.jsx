import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <button onClick={() => {
        setCount(prevCount => prevCount + 1)
      }}>Click</button>
    </div>
  );
}

export default App;