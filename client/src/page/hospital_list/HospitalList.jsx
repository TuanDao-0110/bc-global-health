/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/iframe-has-title */
import AddLocationIcon from "@mui/icons-material/AddLocation";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHospitalInfor from "../../component/modal/ModalHospitalInfor";
import { open_modal } from "../../redux/reducer/modalReducer";
import getAlldata from "../../service/hospitalData";

export default function HospitalList() {
  const hospitalList = useSelector((state) => state.hospitalReducer.hospitals);
  const [hospitals, setHospitalList] = useState(hospitalList);
  const [load, setMoreLoad] = useState(5);
  const dispatch = useDispatch();
  const setMore = (state, setState) => {
    setState(state + 2);
  };
  // call api and set up to store
  useEffect(() => {
    console.log("dispatch");
    getAlldata(dispatch);
  }, []);
  // search hospital by name
  const searchHostpital = (e) => {
    if (e.target.value) {
      const list = hospitalList.filter((hospital) => hospital.hospitalName.toLowerCase().includes(e.target.value.toLowerCase()));
      setHospitalList(() => {
        return list;
      });
    } else {
      setHospitalList(hospitals);
    }
  };
  // search by id to book time table
  const searchById = (id) => {
    if (id) {
      const list = hospitalList.filter((hospital) => hospital.id.toLowerCase().includes(id.toLowerCase()));
      return list;
    }
  };
  return (
    <div className="bg-slate-300 h-screen">
      <ModalHospitalInfor></ModalHospitalInfor>
      <div className="py-2  px-2">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative">
                <i className="absolute fa fa-search text-gray-400 top-5 left-4" />
                <input
                  type="text"
                  className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                  name
                  // onChange={searchHostpital}
                  placeholder="input hospital name"
                />
                <span className="absolute top-4 right-5 border-l pl-4">
                  <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-5">
        {hospitalList?.slice(0, load).map((item, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col justify-center">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img
                      src={`https://cdn.systematic.com/media/g0sj1tbg/hospital-building-001-global.jpg?mode=crop&width=1200&height=630&center=`}
                      alt="tailwind logo"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                      <p className="text-gray-500 font-medium hidden md:block">{item.hospitalName}</p>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                          4.96
                          <span className="text-gray-500 font-normal">(76 reviews)</span>
                        </p>
                      </div>
                      <div className>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg> */}
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">{item.location}</div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">Description</h3>
                    <p className="md:text-lg text-gray-500 text-base">
                      Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis.
                    </p>
                    <button
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block"
                      onClick={() => {
                        let list = searchById(item.id);
                        dispatch(open_modal({ infor: list }));
                      }}
                    >
                      view details{" "}
                    </button>
                    <div className="flex justify-between">
                      <p className="text-xl font-black text-gray-800">
                        $110
                        <span className="font-normal text-gray-600 text-base">/meeting</span>
                      </p>
                      <p className="text-xl font-black text-gray-800">
                        {item.address}
                        <span className="font-normal text-gray-600 text-base">
                          <AddLocationIcon></AddLocationIcon>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center my-10">
        <button
          className="bg-slate-300 p-4 text-sm capitalize rounded-md animate-bounce"
          onClick={() => {
            setMore(load, setMoreLoad);
          }}
        >
          see more
        </button>
      </div>
    </div>
  );
}