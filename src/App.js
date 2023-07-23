import './App.css';
import BasicTable from './components/BasicTable';
import SortTable from './components/SortTable';
import GlobalFiltering from './components/GlobalFiltering';
import ColumnFiltering from './components/ColumnFiltering';
import PaginationTable from './components/PaginationTable';

function App() {
  return (
    <div className="App">
      <PaginationTable />
    </div>
  );
}

export default App;
