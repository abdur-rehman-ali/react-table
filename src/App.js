import './App.css';
import BasicTable from './components/BasicTable';
import SortTable from './components/SortTable';
import GlobalFiltering from './components/GlobalFiltering';
import ColumnFiltering from './components/ColumnFiltering';

function App() {
  return (
    <div className="App">
      <ColumnFiltering />
    </div>
  );
}

export default App;
