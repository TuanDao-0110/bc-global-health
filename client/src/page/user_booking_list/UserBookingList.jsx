import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openLoading } from "../../redux/reducer/loadingReducer";
import { closeLoadingService, openLoadingService } from "../../service/loadingService";
import style from "./userBooking.module.css";
export default function UserBookingList() {
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    openLoadingService(dispatch);
    closeLoadingService(dispatch);
  }, []);
  //   load more

  const [load, setLoad] = useState(2);
  return (
    <div className="flex flex-col w-4/5 mx-auto my-10">
      <h3 className="font-extrabold text-4xl text-green-800 text-center mb-10"> Your booking list</h3>

      <div className="rounded bg-white  w-full flex justify-center items-center  md:flex-row mb-10 shadow-2xl">
        <img
          src="https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922.jpeg"
          className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 p-2 "
          alt=""
        />
        <div className="rounded px-4 w-4/5">
          <div className="flex gap-5">
            <span className="text-green-700 text-sm hidden md:block">Time - 04:00 </span>
            <span className="text-green-700 text-sm hidden md:block">Date - 27/04/2022 </span>
          </div>

          <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">Hospital name</div>
          <div>
            <p className="p-2 pl-0 pt-1 text-sm text-gray-600">user note</p>
          </div>
          <div className="flex flex-col gap-5 justify-center w-4/5 m-auto my-5">
            <div className="flex shadow-lg rounded-lg">
              <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-current" viewBox="0 0 16 16" width={20} height={20}>
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                <div> hosital confirmed</div>
              </div>
            </div>
            <div className="flex shadow-lg rounded-lg">
              <div className="bg-yellow-600 py-4 px-6 rounded-l-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="fill-current text-white" width={20} height={20}>
                  <path
                    fillRule="evenodd"
                    d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                  />
                </svg>
              </div>
              <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                <div> User confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
