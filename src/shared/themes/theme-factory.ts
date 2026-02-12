// theme-factory.ts
import fileExtensions from "../config/file-extensions";
import fileNames from "../config/file-names";
import languageIds from "../config/language-ids";

type IconPrefix = "" | "_light";

const createTheme = (prefix: IconPrefix) => ({
  file: `_file${prefix}`,
  folder: `_folder${prefix}`,
  folderExpanded: `_folder${prefix ? "_light_open" : "_open"}`,
  rootFolder: `_root_folder${prefix}`,
  rootFolderExpanded: `_root_folder${prefix ? "_light_open" : "_open"}`,
  fileExtensions,
  fileNames: { ...fileNames },
  languageIds,
});

export default createTheme;