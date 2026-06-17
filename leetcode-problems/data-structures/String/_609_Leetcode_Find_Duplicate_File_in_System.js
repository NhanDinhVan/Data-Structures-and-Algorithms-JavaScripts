/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let fileMetadata = paths.map((path) => {
    const files = path.split(" ");

    return {
      root: files[0],
      files: files.slice(1, files.length),
    };
  });

  const metadataReg = "^([^\(\)]+)\((.*)\)$";
  const results = {};

  fileMetadata.map(({ root, files }) => {
    files.map((data) => {
      const match = data.match(metadataReg);
      const fileName = match[1];
      const content = match[2];

      if (!results[content]) {
        results[content] = [];
      }

      results[content].push(root + "/" + fileName);
    });
  });

  return Object.values(results).filter((item) => item.length > 1);
};
