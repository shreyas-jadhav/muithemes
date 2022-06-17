import SideBySideContent from "@/client/components/containers/SideBySideContent";
import Link from "@/client/components/custom/Link";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import * as React from "react";

const Index: NextPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Stack spacing={3}>
        <SideBySideContent
          leftContent={
            <>
              <Typography variant="h5" component="h1" fontWeight="bold">
                Find Themes for Material UI Projects
              </Typography>

              <Typography variant="h6" component="h2">
                Simply Copy and Paste the ready-made theme objects!
              </Typography>
            </>
          }
          rightContent={null}
        />
        <Divider />
      </Stack>
    </Container>
  );
};

export default Index;
