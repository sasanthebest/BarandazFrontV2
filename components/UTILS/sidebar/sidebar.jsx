"use client";
import { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { useRouter } from "next/navigation";
import styles from "./sidebar.module.css";
// import { useBscContext } from "../../context/context";
const Sidebar = ({ children, title }) => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  // const { activeSidebar, openingOrClosingSidebar } = useBscContext();
  // // console.log(activeSidebar);
  // const active = activeSidebar[sidebarName];
  // console.log(sidebarName, active);
  const router = useRouter();
  useEffect(() => {
    setActiveSidebar(activeSidebar);
  }, [router.asPath]);

  return (
    <div>
      <div className={styles["sidebar_header"]}>
        {activeSidebar && (
          <div>
            <h3>{title}</h3>
          </div>
        )}

        <div>
          {activeSidebar ? (
            <div
              onClick={() => setActiveSidebar(!activeSidebar)}
              className={styles["graph_sidebar_buttom_close"]}
            >
              <AiOutlineCaretRight size="1.5rem" color="#170080" />
            </div>
          ) : (
            <div
              className={styles["graph_sidebar_buttom"]}
              onClick={() => setActiveSidebar(!activeSidebar)}
            >
              <AiOutlineCaretLeft size="1.5rem" color="#170080" />
            </div>
          )}
        </div>
      </div>
      {activeSidebar && (
        <div className={styles["graph_sidebar"]}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
