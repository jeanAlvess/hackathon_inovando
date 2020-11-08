import React from 'react';
import {
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from '@material-ui/core/';

import { Form } from 'react-final-form';
import { TextField, makeValidate } from 'mui-rff';
import { Visibility } from '@material-ui/icons';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

function App() {
  function onSubmit(values) {
    console.log(values);
  }
  const validate = makeValidate(schema);

  return (
    <Grid container justify="center">
      <Grid item md={4}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Typography variant="h4" align="center">
                Login
              </Typography>
              <Form
                validate={validate}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidade>
                    <TextField
                      name="email"
                      label="E-mail"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <Visibility />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box display="flex" justifyContent="center" marginTop={4}>
                      <Button variant="contained" color="primary" type="submit">
                        Send
                      </Button>
                    </Box>
                  </form>
                )}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
