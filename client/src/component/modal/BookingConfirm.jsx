import React from "react";
import BtnBook from "../button/BtnBook";

export default function BookingConfirm({ hospitalName, confirmTime }) {
  let newTime;
  if (String(confirmTime).length === 4) {
    newTime = String(confirmTime);
  } else {
    newTime = 0 + String(confirmTime);
  }
  return (
    <div className="flex flex-col items-center ">
      <h2 className="font-extrabold text-3xl text-green-800 text-center my-10 "> your booking time</h2>
      <div className="rounded-2xl border border-blue-100 p-8 shadow-lg" role="alert">
        <div className="items-center">
          <p className="mt-3 text-lg font-medium sm:mt-0 sm:ml-3">{hospitalName}</p>
        </div>
        <p className="mt-4 text-gray-800 text-center">
          Booking time :<span className="text-rose-100 text-3xl">{`${newTime.substring(0, 2)}:${newTime.substring(2, 4)}`}</span>
        </p>
        <div className="mt-6 sm:flex justify-center">
          <button
            className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto animate-bounce"
            onClick={() => {
                
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
