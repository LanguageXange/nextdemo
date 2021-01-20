/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Practice = () => {
  return (
    <div sx={{ variant: "containers.age" }}>
      <h1 sx={{ fontSize: 8, my: 0 }}>using theme ui</h1>
      <h1 sx={{ variant: "styles.h1" }}>using theme ui</h1>
      <div sx={{ variant: "containers.page" }}>
        <h1>My Notes</h1>

        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          Practicing
        </div>
      </div>
    </div>
  );
};
export default Practice;
