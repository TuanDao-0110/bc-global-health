import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import style from "./booking.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { getHospitaBookingListById } from "../../service/hospitalData";
export default function BookingForm() {
  const [value, setValue] = useState();
  const param = useParams();
  const { id } = param;
  const dispatch = useDispatch();
  const bookingList = useSelector((state) => state.hospitalReducer.hospitalById);
  
  return (
    <div className={style["bg"]}>
      {console.log(bookingList)}
      <div className={[`${style["main"]}`].join(" ")}>
        <h3 className="font-extrabold text-4xl text-green-800 text-center mb-10">Järvi-Pohjanmaan hospital</h3>
        <form action="" className="flex justify-center gap-5 ">
          <label className="flex flex-col justify-center">please select your date</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              closeOnSelect={true}
              label="Select date"
              value={value}
              onChange={(newValue) => {
                console.log(format(newValue, "dd/MM/yyyy"));
                setValue(newValue);
                getHospitaBookingListById(dispatch, id);
              }}
              renderInput={(params) => <TextField {...params} />}
              toolbarFormat="dd MM YY"
            />
          </LocalizationProvider>
        </form>
      </div>
    </div>
  );
}
