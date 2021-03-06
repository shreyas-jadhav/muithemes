import React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUpExample() {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Tooltip title={`<Avatar> color="secondary"`} arrow>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </Tooltip>
        <Tooltip title={`<Typography color="textPrimary" variant="h5">`} arrow>
          <Typography variant="h5">Sign up</Typography>
        </Tooltip>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Tooltip title={`<Checkbox color="primary">`} arrow>
                    <Checkbox value="allowExtraEmails" color="primary" />
                  </Tooltip>
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Tooltip title={`<Button color="primary" variant="contained">`} arrow>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </Tooltip>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Tooltip title={`<Link color="primary" variant="body2">`} arrow>
                <Link href="#" variant="body2" underline="hover">
                  Already have an account? Sign in
                </Link>
              </Tooltip>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
