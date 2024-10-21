import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component//Page/Header';
import Mainpage from './Component/Page/Mainpage';
import Contactpage from './Component/Page/Contactpage';
import Skillpage from './Component/Page/Skillpage';
import Aboutpage from './Component/Page/Aboutpage';
import Projectpage from './Component/Page/Projectpage';

function App() {
  return (
    <>
      <Mainpage />
      <Aboutpage />
      <Skillpage />
      <Projectpage />
      <Contactpage />
    </>
  );
}

export default App;
