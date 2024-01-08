import React from "react";
import { Pagination } from "@arco-design/web-react";
import styles from "./Pagination.module.scss";
export default function PaginationComponent() {
  return (
    <div className={styles.pagination_container}>
      <span className={styles.first_page}>首页</span>
      <Pagination
        total={200}
        showJumper
        hideOnSinglePage={true}
        bufferSize={2}
        defaultPageSize={8}
        pageSize={8}
        size="small"
        activePageItemStyle={{
          width: "28px",
          height: "28 px",
          background: "#17A8F9",
          borderRadius: "5px",
          color: "white",
        }}
      />
      <span className={styles.last_page}>尾页</span>
    </div>
  );
}
