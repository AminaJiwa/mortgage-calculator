import './App.css';
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./Components/NavBar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";

// The useState hook is a way to make your components remember some data that can change over time.
// For example, you can use it to keep track of how many times a button is clicked. 
// The useState hook gives you back two things: the data itself (called the state) and a way to change it (called the setter).
// You can use the setter to update the state whenever you want, and React will automatically re-render
// your component with the new state. 

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  })
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
