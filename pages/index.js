import { Grid, Page, Text } from '@geist-ui/react';
import React from 'react';
import WorkCard from "../components/WorkCard";
import everdonorImage from "../public/images/everdonor.png"
import * as Icons from "react-feather";


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

        <Text h4 className="mb-2">Featured work</Text>
        <WorkCard image={everdonorImage} text="Everdonor" secondaryText="
        A donations web app designed to connect donors with donation centers and community canteens. The app main feature is the map, showing registered centers closest to you based on donation types and range.
        Built with Kotlin + SpringBoot for the Backend and Next.js React with Material UI and MapBox / ReactMapGl for the Frontend.
        "
          link="https://everdonor-app.vercel.app"
          linkLabel="App"
          icon={<Icons.Globe size={16} aria-label="Website" />}
          secondLink="https://github.com/Everdonor/everdonor-documentation"
          secondLinkLabel="GitHub"
          secondIcon={<Icons.GitHub size={16} aria-label="Github" />}
        />
        {/* <Grid.Container gap={2} justify="center">
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
