import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickSidebar(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onClick={handleClickSidebar} selectedGenreId={selectedGenreId}/>
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}