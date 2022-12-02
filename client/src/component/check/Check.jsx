import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { el } from "date-fns/locale";
import React from "react";

export default function Check({ time, userConfirm }) {
  let newTime;
  if (String(time).length === 4) {
    newTime = String(time);
  } else {
    newTime = 0 + String(time);
  }
  return (
    <ButtonGroup variant="outlined" color="inherit" size="" aria-label="large button group" disabled={userConfirm}>
      <Button sx={{ fontWeight: "900", fontSize: "1.1rem" }}>
        {`${newTime.substring(0,2)} : ${newTime.substring(2, 4)}`}
      </Button>
    </ButtonGroup>
  );
}
