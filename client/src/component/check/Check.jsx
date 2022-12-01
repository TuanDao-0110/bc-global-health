import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";

export default function Check({ time, userConfirm }) {
  let newTime = time.length === 4 ? String(time) : 0 + String(time);
  return (
    <ButtonGroup variant="outlined" color="inherit" size="" aria-label="large button group" disabled={userConfirm}>
      <Button sx={{ fontWeight: "", fontSize: "1.2rem" }}>
        {/* {`${newTime.substring()} : ${newTime.substring(2, 4)}`} */}
        {newTime}
      </Button>
    </ButtonGroup>
  );
}
