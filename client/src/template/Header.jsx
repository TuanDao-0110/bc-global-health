import React, { useState } from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import style from "./css/header.module.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate, useParams } from "react-router-dom";
import UserAvatar from "../component/avatar/UserAvatar";
import BtnLogin from "../component/button/BtnLogin";
import BtnRegister from "../component/button/BtnRegister";
const navItems = ["/", "post", "hospital", "shop"];

export default function Header(props) {
  const [value, setValue] = useState(0);
  //   return <h1 className={[style.header, style.danger].join(" ")}>header</h1>;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full ">
      {/* header top  */}
      <div className="flex bg-teal-600 justify-around w-full text-3xl  py-5">
        {/* header top left  */}
        <div className=" flex text-teal-50">
          <div className="space-x-2">
            <MarkEmailReadIcon></MarkEmailReadIcon>
            <span>Email.com</span>
          </div>
          <div>
            <LocationOnIcon></LocationOnIcon>
            <span>location</span>
          </div>
        </div>
        {/* header top right */}
        <div className=" flex text-4xl text-teal-50 space-x-2">
          <FacebookOutlinedIcon fontSize="large"></FacebookOutlinedIcon>
          <YouTubeIcon fontSize="large"></YouTubeIcon>
          <GoogleIcon fontSize="large"></GoogleIcon>
          <LinkedInIcon fontSize="large"></LinkedInIcon>
          <UserAvatar></UserAvatar>
          <BtnLogin></BtnLogin>
          <BtnRegister></BtnRegister>
        </div>
      </div>
      {/* header bottom */}
      <nav className={[style.header_bottom].join(" ")}>
        {/* logo rigth */}
        <div>LOGO</div>
        {/* left */}
        <div className="text-red-400">
          <Box sx={{ width: "100%", bgcolor: "", color: "Background" }}>
            <Tabs value={value} onChange={handleChange} centered textColor="secondary" indicatorColor="secondary">
              {navItems.map((item, index) => {
                return (
                  <Tab
                    classes={"text-green-900"}
                    key={index}
                    label={`${item === "/" ? "intro" : item}`}
                    onClick={() => {
                      navigate(`${item}`);
                    }}
                  />
                );
              })}
            </Tabs>
          </Box>
        </div>
      </nav>
    </div>
  );
}
