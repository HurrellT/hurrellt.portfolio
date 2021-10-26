import { Grid, Page } from '@geist-ui/react';
import React from 'react';
import WorkCard from "../components/WorkCard";

export default function Home() {
  return (
    <Page>
      <Page.Content>
        <h2 className="mt-10vh">Hi! I'm Tomás Hurrell</h2>
        <p className="mb-50vh">
          I'm a passionate <span style={{ fontWeight: "500" }}>Front-End Developer</span>, 
          that loves expressing through the art of building beautiful and maintainable software, 
          while keeping in mind the design and user experience, altogether.
        </p>
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
