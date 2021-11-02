import { Button, useTheme } from "@geist-ui/react";
import React from "react";
import * as Icons from "react-feather";
// import Submenu from '../components/navigation/submenu';
// import UserSettings from '../components/navigation/user-settings';
import { usePrefers } from "../lib/use-prefers";

const NavBar = () => {
  const theme = useTheme();
  const prefers = usePrefers();

  return (
    <>
      <nav className="menu-nav">
        <h1 className="menu-nav__title">Tomás Hurrell</h1>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tomas-hurrell/"
            rel="noopener noreferrer"
          >
            <Button
              aria-label="LinkedIn"
              className="theme-button"
              auto
              type="abort"
            >
              <Icons.Linkedin size={16} aria-label="LinkedIn" />
            </Button>
          </a>
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
          <a
            target="_blank"
            href="https://mega.nz/file/qdZCBLya#w86x6PxTZoTsGZwsIn0wUohhaTxYEuVczmmOGNbXlHs"
            rel="noopener noreferrer"
          >
            <Button
              aria-label="Resume"
              className="theme-button"
              auto
              type="abort"
            >
              <Icons.FileText size={16} aria-label="Github" />
            </Button>
          </a>
          <a target="" href="#theme">
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
          backdrop-filter: saturate(100%) blur(16px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          background-color: ${theme.type === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'};
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
