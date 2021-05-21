import React from "react";
import { Avatar, Button, useTheme, Popover } from "@geist-ui/react";
import * as Icons from "react-feather";
// import Submenu from '../components/navigation/submenu';
// import UserSettings from '../components/navigation/user-settings';
import { usePrefers } from "../lib/use-prefers";
import Link from "next/link";

const NavBar = () => {
  const theme = useTheme();
  const prefers = usePrefers();

  return (
    <>
      <nav className="menu-nav">
        <h1 className="menu-nav__title"></h1>
        <div>
          <a
            target="_blank"
            href="https://github.com/hurrellt"
            rel="noopener noreferrer"
          >
            <Button
              aria-label="Github"
              className="theme-button"
              auto
              type="abort"
            >
              <Icons.GitHub size={16} aria-label="Github" />
            </Button>
          </a>
          <a target="" href="#">
          <Button
            aria-label="Toggle Dark mode"
            className="theme-button"
            auto
            type="abort"
            onClick={() =>
              prefers.switchTheme(theme.type === "dark" ? "light" : "dark")
            }
          >
            {theme.type === "dark" ? (
              <Icons.Sun size={16} />
            ) : (
              <Icons.Moon size={16} />
            )}
          </Button>
          </a>
          {/* <Popover content={<UserSettings />} placement="bottomEnd" portalClassName="user-settings__popover"> */}
          {/* <button className="user-settings__button"> */}
          {/* <Avatar text="TLH" /> */}
          {/* </button> */}
          {/* </Popover> */}
        </div>
      </nav>
      {/* <Submenu /> */}
      <style jsx>{`
        .menu-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          background-color: ${theme.palette.background};
          font-size: 16px;
          height: 54px;
          box-sizing: border-box;
        }
        .menu-nav__title {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0;
        }
        .menu-nav > div {
          display: flex;
          align-items: center;
        }
        .menu-nav :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          margin: 0 ${theme.layout.gapHalf};
        }
      `}</style>
    </>
  );
};

export default NavBar;
