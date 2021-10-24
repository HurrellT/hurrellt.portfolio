import { Grid, Page } from '@geist-ui/react';
import React from 'react';
import WorkCard from "../components/WorkCard";

export default function Home() {
  return (
    <Page>
      <Page.Content>
        <h2>Hi! I'm Tomás Hurrell</h2>
        <h4 className="mb-50vh">and I'm a Front-End Developer.</h4>
        {/* <p>This is a simulated page, you can click anywhere to close it.</p> */}
        {/* <WorkCard />
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={12}>
            <WorkCard width="45%" />
          </Grid>
          <Grid xs={24} md={12}>
            <WorkCard width="45%" />
          </Grid>
        </Grid.Container> */}
      </Page.Content>
    </Page>
  );
}
