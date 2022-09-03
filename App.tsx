import * as React from 'react';
import './style.css';

export default function App() {
  const [cTIme, setCtime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const nagi = () => {
      const time = new Date().toLocaleTimeString();
      setCtime(time);
    };
    setInterval(nagi, 1000);
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      <h1>{cTIme}</h1>
    </div>
  );
}
