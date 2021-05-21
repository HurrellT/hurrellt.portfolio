import Head from "next/head";
import React from 'react';
import NextLink from 'next/link';
import { Avatar, Button, Tag, Text, Link, useTheme, Page } from '@geist-ui/react';
import * as Icons from 'react-feather';

export default function Home() {
  return (
    <Page>
      <Page.Content>
        <h2>Hi! I'm Tomás Hurrell</h2>
        <h4>and I'm a Front-End Developer.</h4>
        {/* <p>This is a simulated page, you can click anywhere to close it.</p> */}
      </Page.Content>
    </Page>
  );
}
