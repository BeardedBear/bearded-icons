import fileExtensions from "./shared/fileExtensions";
import fileNames from "./shared/fileNames";
import languageIds from "./shared/languageIds";

export default {
  light: {
    file: "_file_light",
    folder: "_folder_light",
    folderExpanded: "_folder_light_open",
    rootFolder: "_root_folder_light",
    rootFolderExpanded: "_root_folder_light_open",
    fileExtensions,
    fileNames: { ...fileNames },
    languageIds,
  },
};
