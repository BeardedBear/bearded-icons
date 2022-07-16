import defsDark from "./defsDark";
import defsLight from "./defsLight";
import icons from "./icons";
import { writeFile } from "fs";

writeFile(
  "icons.json",
  JSON.stringify({
    hidesExplorerArrows: true,
    iconDefinitions: icons,
    ...defsDark,
    ...defsLight,
  }),
  (err) => {
    if (err) {
      console.log("error", err);
    }
  },
);
