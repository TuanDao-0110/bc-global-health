import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  hospitals: [
    {
      _id: "63775326dfd6ff0292a4e67b",
      id: "01201",
      orderNum: "7",
      hospitalName: "Vanhan Vaasan sairaala",
      address: "PL 13",
      postinumero: "65381",
      location: "Vaasa",
      resisdentCode: "905",
      city: "Vaasa",
      language: "fi",
      organizationId: "01201",
      organizationName: "Vanhan Vaasan sairaala",
      serviceId: "130",
      service: "Valtion mielisairaala",
      password: "password",
      role: "hospital",
      __v: 0,
    },
    {
      _id: "63775326dfd6ff0292a4e67e",
      id: "30005",
      orderNum: "21",
      hospitalName: "Järvi-Pohjanmaan yhteistoiminta-alue sosiaalitoimi/Intervalliosasto",
      address: "Opintie 1",
      postinumero: "62800",
      location: "Vimpeli",
      resisdentCode: "934",
      city: "Vimpeli",
      language: "fi",
      organizationId: "005",
      organizationName: "Alajärven kaupunki",
      serviceId: "320",
      service: "Vanhusten ympärivuorokautinen palveluasuminen",
      password: "password",
      role: "hospital",
      __v: 0,
    },
    {
      _id: "63775326dfd6ff0292a4e67f",
      id: "30005",
      orderNum: "20",
      hospitalName: "Järvi-Pohjanmaan yhteistoiminta-alue sosiaalitoimi/Kultakämmen",
      address: "Lääkärintie 3",
      postinumero: "62900",
      location: "Alajärvi",
      resisdentCode: "005",
      city: "Alajärvi",
      language: "fi",
      organizationId: "005",
      organizationName: "Alajärven kaupunki",
      serviceId: "320",
      service: "Vanhusten ympärivuorokautinen palveluasuminen",
      password: "password",
      role: "hospital",
      __v: 0,
    },
  ],
  hospitalById: {
    _id: "6389df51392e058a475144e1",
    booking_hospital_id: "63775326dfd6ff0292a4e67b",
    hospitalName: "Vanhan Vaasan sairaala",
    booking_time: {
      "27/11/2022": [
        {
          customerId: null,
          customerNote: "",
          hospitalConfirm: false,
          hospitalNote: "",
          time: 730,
          userConfirm: false,
          userVisitConfirm: false,
        },
        {
          customerId: null,
          customerNote: "",
          hospitalConfirm: false,
          hospitalNote: "",
          time: 730,
          userConfirm: false,
          userVisitConfirm: false,
        },
      ],
    },
  },
};

const hospitalReducer = createSlice({
  name: "hospital",
  initialState: initalState,
  reducers: {
    getHospital: (state, action) => {
      const { data } = action.payload;
      return { ...state, hospitals: data };
    },
    getHospitalById: (state, action) => {
      const { data } = action.payload;
      return { ...state, hospitalById: data };
    },
  },
});

export const { getHospital, getHospitalById } = hospitalReducer.actions;

export default hospitalReducer.reducer;
