import React from "react";
import style from "./booking.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
export default function BookingForm() {
  const [value, setValue] = React.useState(null);

  return (
    <div className={style["bg"]}>
      <div className={style["main"]}>
        <h3 className="font-extrabold text-4xl text-green-800 text-center mb-10">Järvi-Pohjanmaan hospital</h3>
        <form action="">
          <label>please select your date</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              closeOnSelect={true}
              label="Select date"
              value={value}
              onChange={(newValue) => {
                console.log(newValue);
                setValue(newValue);
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
