import './App.css';
import React, { useState } from 'react'
import MinionTable from './components/MinionTable'
import ProductTable from './components/ProductTable'
import NameField from './components/NameField'
import SkinView from './components/SkinView'
import Github from './images/github.png'

function App() {
  const [playerId, setPlayerId] = useState('')
  const [minions, setMinions] = useState([])
  const [products, setProducts] = useState([])

  return (
    <div className="App">
      <div className="App-header"><h1>Bazaar app for Hypixel Skyblock</h1></div>
      <div className="columns" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: '500px auto',
        gridTemplateAreas: `
        'MinionTable Skinview3d ProductTable'
        'MinionTable NameField ProductTable'
        `,
        gridGap: 20,
        margin: 20
      }}>
        <div className="MinionTable" style={{ gridArea: 'MinionTable' }}>
          <MinionTable minions={minions} />
        </div>
        <div className='Skinview3d' style={{ gridArea: 'Skinview3d', justifySelf: 'center', alignSelf: 'top', maxHeight: '500px' }}>
          <SkinView playerUuid={playerId} />
        </div>
        <div className='NameField' style={{ gridArea: 'NameField', alignSelf: 'top' }}>
          <NameField setMinionMap={setMinions} setProductMap={setProducts} setPlayerUuid={setPlayerId} />
          {playerId}
        </div>
        <div className="ProductTable" style={{ gridArea: 'ProductTable' }}>
          <ProductTable products={products} />
        </div>
      </div>
      <footer>
        <h4>by Mateusz Dionizy</h4>
        <a href="https://github.com/deronek/skyblockbazaar-frontend">
          <img
            alt="Github"
            src={Github}
            width='32px' />
        </a>
      </footer>
    </div >
  );
}

export default App;
