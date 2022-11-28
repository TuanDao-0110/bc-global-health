import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import BookingForm from './page/booking/BookingForm';
import HospitalList from './page/hospital_list/HospitalList';
import Intro from './page/Intro';
import Login from './page/login/Login';
import Post from './page/post/Post';
import Register from './page/register/Register';
import Shopping from './page/shopping/Shopping';
import Template from './template/Template';
import Portfolio from './page/portfolio/Portfolio';
import Loading from './page/loading/Loading';

function App() {
  return (
    <>
      {/* <Loading></Loading> */}
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/' element={<Template />}>
          <Route index element={<Intro />}></Route>
          <Route path='post' element={<Post></Post>}></Route>
          <Route path='hospital' >
            <Route index element={<HospitalList></HospitalList>}></Route>
            <Route path=':id' element={<BookingForm></BookingForm>} ></Route>
          </Route>
          <Route path='shop' element={<Shopping></Shopping>}></Route>
          <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>

  );
}

export default App;
