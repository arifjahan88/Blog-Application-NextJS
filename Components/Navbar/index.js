import React, { useState } from "react";
import style from "./index.module.css";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { RoutingVariables } from "@/utilites/RoutingVariables/RoutingVariables";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session, loading } = useSession();

  const closeNavbar = () => {
    setShowMenu(false);
  };
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header_container}>
          <Link href={RoutingVariables.home}>
            <div className={style.brand_text}>
              <h2>Brand Logo</h2>
            </div>
          </Link>
          <div className={style.main_nav}>
            <nav className={style.primary_navigation}>
              <ul>
                <li>
                  <Link href={RoutingVariables.home} className={style.nav_link}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href={RoutingVariables.post} className={style.nav_link}>
                    Post
                  </Link>
                </li>

                <li>
                  <Link href={RoutingVariables.create_post} className={style.nav_link}>
                    Create Post
                  </Link>
                </li>
                <li className={style.authbutton}>
                  {!session && !loading && (
                    <>
                      <Link href={RoutingVariables.login}>
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            signIn();
                          }}
                          className={style.nav_btn_started}
                        >
                          <span>Sign In</span>
                        </div>
                      </Link>
                    </>
                  )}
                  {session && (
                    <>
                      <Link href={RoutingVariables.logout}>
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                          className={style.nav_btn_started}
                        >
                          <span>Sign Out</span>
                        </div>
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={style.menu_icon}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <BsList style={{ fontSize: "2rem" }} />
          </div>
          {/* Mobile Navbar */}
          <div className={showMenu ? `${style.show_mobile_menu}` : `${style.mobile_nav}`}>
            <nav className={style.mobile_navigation}>
              <ul>
                <li>
                  <Link
                    href={RoutingVariables.home}
                    className={style.nav_link}
                    onClick={closeNavbar}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={RoutingVariables.post} className={style.nav_link}>
                    Post
                  </Link>
                </li>
                <li>
                  <Link
                    href={RoutingVariables.create_post}
                    className={style.nav_link}
                    onClick={closeNavbar}
                  >
                    Create Post
                  </Link>
                </li>
                <li className={style.authbutton}>
                  {!session && !loading && (
                    <>
                      <Link href={RoutingVariables.login}>
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            signIn();
                          }}
                          className={style.nav_btn_started}
                        >
                          <span>Sign In</span>
                        </div>
                      </Link>
                    </>
                  )}
                  {session && (
                    <>
                      <Link href={RoutingVariables.logout}>
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                          className={style.nav_btn_started}
                        >
                          <span>Sign Out</span>
                        </div>
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
