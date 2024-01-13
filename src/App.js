import './App.css';
import Header from './components/header'
import Button from './components/Button';
import TextLeft from './components/TextLeft';
import TextRight from './components/TextRight';

function App() {
  return (
    <div className="flex flex-col h-screen">
    <Header/>
    <div class="flex flex-row bg-gray-200">
    <TextLeft/>
    <Button/>
    <TextRight/>
    </div>
    </div>
    );
}

export default App;
