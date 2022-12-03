import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeLoadingService, openLoadingService } from "../../service/loadingService";

export default function Portfolio() {
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    openLoadingService(dispatch);
    closeLoadingService(dispatch);
  }, []);


  return <div>

    
  </div>;
}
