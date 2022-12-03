import React from "react";

export default function BtnSuccess(props) {
  return <button className="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{props?.message}</button>;
}
