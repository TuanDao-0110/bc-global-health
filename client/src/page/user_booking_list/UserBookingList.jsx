import { useSelect } from "@mui/base";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmCheck from "../../component/check/ConfirmCheck";
import { openLoading } from "../../redux/reducer/loadingReducer";
import { handleDeleteBooking, handleGetUserProfile } from "../../service/userService";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./userBooking.module.css";
export default function UserBookingList() {
  // get userPortfile :
  const { userProfile } = useSelector((state) => state.userReducer);
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    handleGetUserProfile(dispatch);
  }, []);
  //   load more
  const [load, setLoad] = useState(2);
  //   render fn

  const renderUserConfirm = (object) => {
    let render = [];
    for (let i in object) {
      i !== "day" &&
        render.push(
          object[i]?.map((item, index) => {
            return (
              <div key={index} className="rounded-lg bg-gray-100  w-full flex justify-center items-center  md:flex-row my-10 p-5 shadow-2xl">
                <img
                  src="https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922.jpeg"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 p-2 "
                  alt=""
                />
                <div className="rounded px-4 w-4/5">
                  <div className="flex gap-5">
                    <span className="text-green-700 text-sm hidden md:block ">Time - {item["time"]} </span>
                    <span className="text-green-700 text-sm hidden md:block">Date - {i} </span>
                    <span className="text-red-700   flex-1 flex justify-end ">
                      <button
                        className="hover:opacity-80 duration-100"
                        onClick={() => {
                          handleDeleteBooking(dispatch, deleteInfor(i, item));
                        }}
                      >
                        <DeleteIcon fontSize="large" className=" cursor-pointer" date={i} deleteInfo={item}></DeleteIcon>
                      </button>
                    </span>
                  </div>

                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">{item["hospitalName"]}</div>
                  <div>
                    <p className="p-2 pl-0 pt-1 text-sm text-gray-600">Your Notes : {item["customerNote"]}</p>
                  </div>
                  <div className="flex flex-col gap-5 justify-center w-4/5 m-auto my-5">
                    <ConfirmCheck details={"userConfirm"} cheked={item["userConfirm"]}></ConfirmCheck>
                    <ConfirmCheck details={"hospitalConfirm"} cheked={item["hospitalConfirm"]}></ConfirmCheck>
                    <ConfirmCheck details={"userVisitConfirm"} cheked={item["userVisitConfirm"]}></ConfirmCheck>
                  </div>
                </div>
              </div>
            );
          })
        );
    }
    return render;
  };

  //   set up delete item
  const deleteInfor = (date, info) => {
    let deleteInfor = {};
    const { hospitalId, time, hospitalName } = info;
    Object.assign(deleteInfor, {
      hospitalId,
      time,
      hospitalName,
      date: date,
    });
    return deleteInfor;
  };
  return (
    <div className="flex flex-col w-4/5 mx-auto my-10">
      <h3 className="font-extrabold text-4xl text-green-800 text-center mb-10"> Your booking list</h3>
      {renderUserConfirm(userProfile.bookingList)}
    </div>
  );
}
