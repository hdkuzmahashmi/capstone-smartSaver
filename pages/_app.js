import { SWRConfig } from "swr";
import Layout from "./_layout";
import Head from "next/head";

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// configuration for Toast messages
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function GrowTransition(props) {
  return <Grow {...props} />;
}

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
// end code for Toast Messages

export default function App({ Component, pageProps }) {
  // configuration for Toast messages
  const [open, setOpen] = React.useState(false);
  const [message, setmessage] = React.useState("");
  const [alert, setAlert] = React.useState("");

  const handleToastMessage = (msgText, type) => {
    setmessage(msgText);
    setAlert(type);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // end code for Toast Messages
  return (
    <Layout>
      <Head>
        <title>SmartSaver</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          setToast={handleClick}
          setToastMessage={handleToastMessage}
        />
      </SWRConfig>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={TransitionLeft}
      >
        <Alert onClose={handleClose} severity={alert} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert> */}
      {/* </Stack> */}
    </Layout>
  );
}
