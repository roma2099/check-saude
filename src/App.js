import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'eAIS Package for Capo Verde';
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
