import Bag from './components/Bag';
import ShoppingList from './components/ShoppingList';
import './styles.css';


function App() {
  return (
    <>
      <Bag />
      <div className='list-app'>
        <ShoppingList />
      </div>
    </>
  );
}

export default App;
