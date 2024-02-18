import { readdirSync } from "fs";

type Icon = Record<string, { iconPath: string }>;

function iconGeneric(name: string): Icon {
  return { [`_${name}`]: { iconPath: `./icons/${name}.svg` } };
}

// Generate icon list from /icons folder
const array: string[] = [];
readdirSync("icons").forEach((file) => array.push(file.split(".")[0]));

const iconList: Icon = array.reduce((acc, curr) => {
  return { ...acc, [`${curr}`]: { iconPath: `./icons/${curr}.svg` } };
}, {});

const icons = {
  ...iconGeneric("file"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...iconGeneric("root_folder"),
  ...iconGeneric("root_folder_open"),
  ...iconGeneric("root_folder_light"),
  ...iconGeneric("root_folder_light_open"),
  ...iconList,
};

export default icons;
