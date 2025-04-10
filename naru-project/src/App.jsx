import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <> {/* <React.Fragment> */}
      <AppRoutes /> 
      {/* 각 페이지는 AppRoutes 안에서 DefaultLayout으로 감싸짐 */}
    </>
  );
}

export default App;