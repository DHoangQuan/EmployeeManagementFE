import { FC } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const HomePage: FC = () => {

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item spacing={3}>
        <TextField id="email" label="email" variant="outlined" />
      </Grid>
      <Grid item spacing={3}>
        <TextField id="password" label="passwords" variant="outlined" />
      </Grid>
    </Grid>
  );
};

export default HomePage;
