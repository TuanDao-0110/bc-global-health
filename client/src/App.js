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
import { useSelector } from 'react-redux';
import UserBookingList from './page/user_booking_list/UserBookingList';
import HospitalCampus from './page/campus/HospitalCampus';

function App() {
  const loading = useSelector(state => state.loadingReducer)
  return (
    <>
      {loading ? <Loading /> : ''}
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='/' element={<Template />}>
          <Route index element={<Intro />}></Route>
          <Route path='post' element={<Post />}></Route>
          <Route path='hospital' >
            <Route index element={<HospitalList></HospitalList>}></Route>
            <Route path=':id' element={<BookingForm></BookingForm>} ></Route>
          </Route>
          <Route path='shop' element={<Shopping />}></Route>
          <Route path='user'>
            <Route path='portfolio' element={<Portfolio />}></Route>
            <Route path='userbooking' element={<UserBookingList />}></Route>
          </Route>
          <Route path='/campus' element={<HospitalCampus />}>

          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>

  );
}

export default App;
