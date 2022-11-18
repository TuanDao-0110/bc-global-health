const { createSlice } = require("@reduxjs/toolkit");

const initalState = {
  hospitals: [
    {
      id: "01203",
      bookingId: "01203_1",
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
      Service: "Valtion mielisairaala",
    },
    {
      id: "01203",
      bookingId: "01203_1",
      orderNum: "7",
      hospitalName: "helsinki Vaasan sairaala",
      address: "PL 13",
      postinumero: "65381",
      location: "Vaasa",
      resisdentCode: "905",
      city: "Vaasa",
      language: "fi",
      organizationId: "01201",
      organizationName: "Vanhan Vaasan sairaala",
      serviceId: "130",
      Service: "Valtion mielisairaala",
    },
    {
      id: "01205",
      bookingId: "01205_1",
      orderNum: "7",
      hospitalName: "Järvi-Pohjanmaan yhteistoiminta-alue sosiaalitoimi/Alarinteen asuntola",
      address: "Niuvankuja 65",
      postinumero: "65381",
      location: "Vaasa",
      resisdentCode: "905",
      city: "Vaasa",
      language: "fi",
      organizationId: "01201",
      organizationName: "Vanhan Vaasan sairaala",
      serviceId: "130",
      Service: "Valtion mielisairaala",
    },
  ],
};

const hospitalReducer = createSlice({
  name: "hospital",
  initialState: initalState,
  reducers: {},
});

export default hospitalReducer.reducer;
