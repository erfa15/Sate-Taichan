import styles from "./navigation.module.scss";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useMobile } from "@/src/hooks";
import { Button } from "..";
import { useSession, signOut } from "next-auth/react";
import {
  navigationAdmin,
  navigationData as navLink,
} from "@/src/utils/navigationData";

export default function Navigation() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [navToggle, setNavToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const { isMobile } = useMobile();

  const toggleDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  const handledNavToggle = () => {
    setNavToggle((prevToggle) => !prevToggle);
  };

  const handleSignOut = () => {
    router.push("/admin/signin");
    signOut();
  };

  const isActive = (item) => {
    const route = router.pathname !== item.url;
    if (route) {
      return styles.navbar_contents__link;
    } else {
      return `${styles.navbar_contents__link} ${styles.active}`;
    }
  };

  const showLink = navLink.map((item, i) => (
    <Link className={isActive(item)} href={item.url} key={i}>
      {item.name}
    </Link>
  ));

  const IconToggle = () => {
    if (navToggle) {
      return (
        <FaTimes
          className={styles.icon__toggle_closed}
          onClick={handledNavToggle}
        />
      );
    } else {
      return (
        <FaBars
          className={styles.icon__toggle_bar}
          onClick={handledNavToggle}
        />
      );
    }
  };
  // console.log(isMobile);
  // render
  // if (isMobile) {
  return (
    <>
      <nav className={styles.navbar}>
        <h2 className={styles.title_navbar}>Sate Taichan Bu Cin</h2>
        <IconToggle />
        {/* desktop */}
        <div className={styles.navbar_desktop}>
          {showLink}
          {status !== "authenticated" ? (
            <Button
              className={styles.navbar_contents__button}
              onClick={() => router.push("/admin/signin")}
            >
              Sign In Admin
            </Button>
          ) : (
            <>
              <div
                className={styles.desktop_has_signin}
                onClick={toggleDropdown}
              >
                <label className={styles.navbar_contents__link}>
                  Hello, {session.user.name}
                </label>
                <FaChevronDown className={styles.dropdown__arrow} />
              </div>
              {dropdown && (
                <div className={styles.desktop_dropdown}>
                  <Link
                    className={isActive(navigationAdmin)}
                    href={navigationAdmin.url}
                  >
                    Dashboard Admin
                  </Link>
                  <Button
                    className={styles.navbar_contents__button}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
      {/* mobile */}
      {navToggle && (
        <div className={styles.navbar_contents}>
          {showLink}
          <div className={styles.dropdown}>
            {status !== "authenticated" ? (
              <Button
                className={styles.navbar_contents__button}
                onClick={() => router.push("/admin/signin")}
              >
                Sign In Admin
              </Button>
            ) : (
              <div className={styles.dropdown_content}>
                <Link
                  className={isActive(navigationAdmin)}
                  href={navigationAdmin.url}
                >
                  Dashboard Admin
                </Link>
                <Button
                  className={styles.navbar_contents__button}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* desktop */}
      {/* <div className={styles.navbar_desktop}>{showLink}</div> */}
      {/* <div className={styles.navbar_contents}> */}
      {/* {showLink}
        <div className={styles.dropdown}>
          {status !== "authenticated" ? (
            <Button
              className={styles.navbar_contents__button}
              onClick={() => router.push("/admin/signin")}
            >
              Sign In Admin
            </Button>
          ) : (
            <div className={styles.dropdown_content}>
              <Link
                className={isActive(navigationAdmin)}
                href={navigationAdmin.url}
              >
                Dashboard Admin
              </Link>
              <Button
                className={styles.navbar_contents__button}
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div> */}
      {/* </div> */}
    </>
  );
  // } else {
  // return (
  //   <>
  //     <nav className={styles.navbar}>
  //       <h2 className={styles.title_navbar}>Sate Taichan Bu Cin</h2>
  //       <div className={styles.navbar_contents}>
  //         {showLink}
  //         <div className={styles.dropdown}>
  //           {status !== "authenticated" ? (
  //             <Button
  //               className={styles.navbar_contents__button}
  //               onClick={() => router.push("/admin/signin")}
  //             >
  //               Sign In Admin
  //             </Button>
  //           ) : (
  //             <div
  //               className={styles.dropdown_content__desktop}
  //               onClick={toggleDropdown}
  //             >
  //               <label>Hello {session.user.name}</label>
  //               <FaChevronDown className={styles.dropdown__arrow} />
  //             </div>
  //           )}
  //           {status === "authenticated" && dropdown && (
  //             <div className={styles.dropdown__signout}>
  //               <Link href="/admin/dashboard">Dashboard Admin</Link>
  //               <button onClick={handleSignOut}>Sign Out</button>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );
  // }
}
