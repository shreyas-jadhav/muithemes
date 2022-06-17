import PreviewUI from "@/client/components/preview/PreviewUI";
import ThemeInfo from "@/client/components/preview/ThemeInfo";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { ThemeModel } from "models/themeModel";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  theme: ThemeModel;
};

const ThemePreviewPage = ({ theme }: Props) => {
  return (
    <Container sx={{ py: 3 }}>
      <ThemeInfo title={theme.title} />
      <ThemeProvider theme={createTheme(theme.themeOptions)}>
        <PreviewUI />
      </ThemeProvider>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {
      theme: {
        title: `Basic`,
        themeOptions: {
          palette: {
            type: "dark",
            primary: {
              main: "#f3f3f3",
            },
            secondary: {
              main: "#f50057",
            },
          },
          shape: {
            borderRadius: 0,
          },
        },
      },
    },
  };
};
export default ThemePreviewPage;
