import fileExtensions from "../shared/config/file-extensions";
import fileNames from "../shared/config/file-names";
import languageIds from "../shared/config/language-ids";

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
