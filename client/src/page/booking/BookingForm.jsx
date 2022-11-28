import React from "react";
import style from "./booking.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {  TimePicker } from "@mui/x-date-pickers";


export default function BookingForm() {

  return (
    <div className={style["bg"]}>
      <div className={style["main"]}>
        <h3 className="font-extrabold text-4xl text-green-800 text-center mb-10">Järvi-Pohjanmaan hospital</h3>
        <form action="">
          <label>please select your date</label>
          
        </form>
      </div>
    </div>
  );
}
