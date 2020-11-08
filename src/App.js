import React from 'react';
import {
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from '@material-ui/core/';
import { Visibility } from '@material-ui/icons';

function App() {
  return (
    <Grid container justify="center">
      <Grid item md={4}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Typography variant="h4" align="center">
                Login
              </Typography>

              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
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
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
