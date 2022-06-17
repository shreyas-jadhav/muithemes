import React, { PropsWithChildren } from "react";
import { Paper, Theme, useTheme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import PreviewSizeControls from "./PreviewSizeControls";
import { usePreview } from "@/client/context/PreviewContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    previewWrapper: {
      height: "100%",
      position: "relative",
    },
    letterBox: {
      padding: theme.spacing(2),
      height: "100%",
    },
  })
);

/**
 * Wraps children in ThemeWrapper and creates a letterbox around the component
 */
const PreviewWrapper = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.previewWrapper}>
        <PreviewSizeControls />
        <>
          <div className={classes.letterBox}>
            <PreviewBackground>{children}</PreviewBackground>
          </div>
        </>
      </div>
    </>
  );
};

export default PreviewWrapper;

const useBackgroundStyles = makeStyles((theme: Theme) =>
  createStyles({
    previewArea: {
      backgroundColor: theme.palette.background.default,
      maxWidth: 1000,
      height: "100%",
      overflowY: "scroll",
      margin: "auto",
      position: "relative", // for FAB positioning
      "&.xs": {
        maxWidth: 375,
      },
      "&.sm": {
        maxWidth: 650,
      },
      "&.md": {
        maxWidth: 1000,
      },
    },
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  })
);

/**
 * Creates a Paper component with a backgroundColor of `palette.background.default`
 * adds 'rtl' as a className if required by the theme to enable RTL styles.
 */
const PreviewBackground = ({ children }: PropsWithChildren<{}>) => {
  const classes = useBackgroundStyles();

  // if the theme has `direction` set to 'rtl', then add 'rtl' as a classname
  // to the Paper component, so that RTL styles will be enabled
  const theme = useTheme();
  const directionIsRTL = theme.direction == "rtl";
  const { previewSize } = usePreview();
  return (
    <Paper
      elevation={8}
      square
      className={`${classes.previewArea} ${previewSize || ""}`}
      dir={directionIsRTL ? "rtl" : ""}
    >
      {children}
    </Paper>
  );
};
