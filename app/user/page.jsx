import Link from "next/link";
import React from "react";
// import { cookies } from "next/headers";
import Sidebar from "@/components/UTILS/sidebar/sidebar";
import styles from "./page.module.css";
export default function page() {
  // const headerList = cookies();
  // const jwtToken =
  //   headerList.has("Authorization") && headerList.get("Authorization").value;

  return (
    <>
      <div className={styles["graph_container"]}>
        <Sidebar title="کارتهای امتیازی">
          {/* {treedata.map((item) => (
          <p key={item.id} onClick={() => setActiveTree(item.id)}>
            {item.name}
          </p>
        ))} */}
          {/* <Tree data={data}></Tree> */}
          <p>hello</p>
        </Sidebar>
        <div className={styles["graph_body"]}>
          {/* {treedata.map(
            (item) => item.id == activeTree && <p key={item.id}>{item.name}</p>
          )} */}
          {}
          {}
          {}
          {}
          <p>body</p>
        </div>
      </div>
    </>
  );
}
