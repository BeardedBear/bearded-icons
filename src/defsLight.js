import fileExtensions from "./commons/fileExtensions.js";
import fileNames from "./commons/fileNames.js";
import languageIds from "./commons/languageIds.js";

export default {
	light: {
		file: "_file_light",
		folder: "_folder_light",
		folderExpanded: "_folder_light_open",
		rootFolder: "_root_folder_light",
		rootFolderExpanded: "_root_folder_light_open",
		fileExtensions,
		fileNames: {
			...fileNames,
			...{".editorconfig": "_f_light_editorconfig"},
		},
		languageIds,
	},
};
