import { useState } from 'react';
import UserContext from '../userContext';
import Header from './header/Header';

function App() {

  const [user] = useState('');
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

export default App;
