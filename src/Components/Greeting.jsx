import React, { useState } from "react";
import {
  Button,
  Grid,
  InputLabel,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  validateName,
  validateNumber,
  validateEmail,
  validateDate,
  validateCity,
} from "./validation";

const Greeting = () => {
  const [data, setData] = useState({
    firstName: "",
    phone: "",
    email: "",
    date: "",
    city: "",
  });

  const [error, setError] = useState(false);

  const { firstName, phone, email, date, city } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    switch (name) {
      case "firstName":
        setError({ firstName: validateName(value) });
        break;
      case "phone":
        setError({ phone: validateNumber(value) });
        break;
      case "email":
        setError({ email: validateEmail(value) });
        break;
      case "date":
        setError({ date: validateDate(value) });
        break;
      case "city":
        setError({ city: validateCity(value) });
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Paper sx={{ mx: 50, mt: 3, p: 3 }} elevation={5}>
      <Typography variant="h5" sx={{ textDecoration: "underline" }}>
        Test Case Demo
      </Typography>
      <form autoComplete="on" method="POST" noValidate data-testid="form">
        <Grid sx={{ mx: 3 }}>
          <TextField
            sx={{ width: "100%", mt: 3 }}
            type="text"
            name="firstName"
            inputProps={{
              "data-testid": "nameInput",
            }}
            label="FirstName"
            value={firstName}
            onChange={handleChange}
            error={!!error.firstName}
            helperText={error.firstName}
            // required
          />
        </Grid>

        <Grid sx={{ mx: 3 }}>
          <TextField
            sx={{ width: "100%", mt: 3 }}
            type="text"
            name="phone"
            value={phone}
            label="Phone Number"
            onChange={handleChange}
            error={!!error.phone}
            helperText={error.phone}
            inputProps={{
              "data-testid": "phoneInput",
            }}
          />
        </Grid>
        <Grid sx={{ mx: 3 }}>
          <TextField
            sx={{ width: "100%", mt: 3 }}
            type="email"
            name="email"
            value={email}
            data-testid="email-input"
            label="Email Id"
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
            inputProps={{
              "data-testid": "emailInput",
            }}
          />
        </Grid>

        <Grid sx={{ mx: 3 }}>
          <TextField
            sx={{ width: "100%", mt: 3 }}
            type="date"
            name="date"
            label="Date Of Birth"
            value={date}
            onChange={handleChange}
            error={!!error.date}
            helperText={error.date}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              "data-testid": "dateInput",
            }}
          />
        </Grid>

        <Grid sx={{ mx: 3, mt: 3 }}>
          <FormControl sx={{ width: "100%", mr: 2 }}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="city"
              label="City"
              onChange={handleChange}
              error={!!error.city}
              helperText={error.city}
              value={city}
              sx={{ textAlign: "left" }}
              fullWidth
              inputProps={{
                id: "cityInput",
                "data-testid": "cityInput",
              }}
            >
              <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              <MenuItem value="Surat">Surat</MenuItem>
              <MenuItem value="Bharuch">Bharuch</MenuItem>
              <MenuItem value="Vadodara">Vadodara</MenuItem>
              <MenuItem value="Rajkot">Rajkot</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "row",
            pt: 3,
            mx: "1rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              mr: 1,
              borderColor: "error.main",
              borderRadius: 2,
              color: "#e30909",
              "&.MuiButtonBase-root:hover": {
                borderColor: "error.main",
                bgcolor: "#e30909",
                color: "#fff",
              },
            }}
          >
            Exit
          </Button>
          <Button
            sx={{ borderRadius: 2 }}
            color="primary"
            name= 'Submit'
            onClick={submitHandler}
            disabled={!(firstName && phone && email && date && city)}
            type="submit"
            data-testid="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default Greeting;
