import { Grid, Page, Text, Image, Spacer, Button } from '@geist-ui/react';
import React from 'react';
import WorkCard from "../components/WorkCard";
import everdonorImage from "../public/images/everdonor.png"
import fluttercolorImage from "../public/images/fluttercolor.png"
import geopivotImage from "../public/images/geopivot.png"
import mercapLogo from "../public/images/logos/mercap-logo-2020.png"
import atixLogo from "../public/images/logos/logoAtixWhite.png"
import coderhouseLogo from "../public/images/logos/coderhouse2.png"
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
        <Grid.Container className="mt-1" gap={2} justify="center">
          <Grid xs={24} md={12}>
            <WorkCard
              image={geopivotImage}
              text="GeoPivot"
              secondaryText="A Recycling Centers and Services AI powered Mobile App.
              Developed during a 48 hour Flutter worldwide 'Hack20' hackathon."
              link="https://github.com/pulsar-projects/rcs_mobile"
              linkLabel="GitHub"
              icon={<Icons.GitHub size={16} aria-label="Github" />}
            />
          </Grid>
          <Grid xs={24} md={12}>
            <WorkCard
              image={fluttercolorImage}
              text="Flutter Color"
              secondaryText="A simple and completely responsive Flutter app to generate 
              color palettes. Built with Flutter's Stack and Implicit animation widgets 
              for the Flutter Codepen Challenge."
              link="https://codepen.io/hurrellt/pen/abdYvpG"
              linkLabel="App"
              icon={<Icons.Globe size={16} aria-label="Website" />}
              secondLink="https://github.com/HurrellT/flutter_color"
              secondLinkLabel="GitHub"
              secondIcon={<Icons.GitHub size={16} aria-label="Github" />}
            />
          </Grid>
        </Grid.Container>

        <Text h4 className="mb-2 mt-2">Collaborated with awesome companies</Text>
        <Grid.Container className="mt-2" gap={2} justify="center">
          <Grid xs={12} md={6}>
            <Image className="greyHover" src={mercapLogo} width={400} height={400} />
          </Grid>
          <Grid xs={12} md={6}>
            <Image className="greyHover" src={atixLogo} width={400} height={400} />
          </Grid>
          <Grid xs={12} md={6}>
            <Image className="greyHover" src={coderhouseLogo} width={400} height={400} />
          </Grid>
        </Grid.Container>
      </Page.Content>

      <Grid.Container className="mb-2" gap={2} justify="space-between">
        <Grid xs={12} md={6}>
          Designed and built by me ©
        </Grid>
        <Grid xs={24} md={12}>
          <Grid.Container gap={2} justify="flex-end">
            <Grid xs={6} md={6}>
              <a
                target="_blank"
                href="https://react.geist-ui.dev/en-us"
                rel="noopener noreferrer"
              >
                <Button
                  aria-label="Geist UI"
                  className="theme-button"
                  auto
                  type="abort"
                >
                  <div className="mr-05">
                    Geist UI
                  </div>
                  <Icons.Globe size={16} aria-label="Github" />
                </Button>
              </a>
            </Grid>
            <Grid xs={6} md={6}>
              <a
                target="_blank"
                href="https://github.com/HurrellT/hurrellt.portfolio"
                rel="noopener noreferrer"
              >
                <Button
                  aria-label="Source code"
                  className="theme-button"
                  auto
                  type="abort"
                >
                  <div className="mr-05">
                    Source Code
                  </div>
                  <Icons.GitHub size={16} aria-label="Github" />
                </Button>
              </a>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Page>
  );
}
