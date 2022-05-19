import { Card, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
function App() {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47dc84b65613b5274bcc80f82ab8a4dd`
    )
      .then((res) => res.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setValue(Math.round(celsius));
        setEdit(true);
      });
  };
  return (
    <div className="bg">
      <center className="center">
        <Card className="card">
          <form onSubmit={submitHandler}>
            <div className="form">
              <TextField
                variant="outlined"
                placeholder="enter city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <Button variant="contained" type="submit" size="small" color='secondary'>
                check
              </Button>
            </div>
            <div>
              <Typography
                style={{ fontFamily:'serif', marginRight: "40px", fontSize: "13px" }}
              >
                *please enter only American cities
              </Typography>
            </div>{" "}
          </form>
        </Card>
        <div>
          {edit ? (
            <h3 style={{ fontFamily: "cursive", fontSize: "35px" }}>
              Temperature at {city} is {value} °C
            </h3>
          ) : null}
        </div>
      </center>
    </div>
  );
}

export default App;
