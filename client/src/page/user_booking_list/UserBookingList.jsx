import React from "react";
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
  
  return <div>user booking</div>;
}
