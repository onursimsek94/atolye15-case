interface File {
  id: string;
  name: string;
}

interface Folder {
  id: string;
  name: string;
  files: File[];
}

type List = Folder[];

function getFile(list: List, id: string): File | undefined {
  return list
    .map((item) => item.files)
    .flat()
    .find((item) => item.id === id);
}

function validateDestination(list: List, destination: string): void {
  if (getFile(list, destination)) {
    throw new Error('You cannot specify a file as the destination');
  }
}

function getDestination(list: List, destination: string): Folder {
  const destinationFolder = list.find((folder) => folder.id === destination);

  if (!destinationFolder) throw new Error('Destination not found');

  return destinationFolder;
}

function validateSource(list: List, source: string): void {
  const exists = list.find((folder) => folder.id === source);
  if (exists) throw new Error('You cannot move a folder');
}

function deleteFileFromFolder(list: List, file: File): void {
  for (let i = 0; i < list.length; i += 1) {
    const index = list[i].files.findIndex((item) => item.id === file.id);

    if (index !== -1) {
      list[i].files.splice(index, 1);
      break;
    }
  }
}

function getSource(list: List, source: string): File {
  const sourceFile = getFile(list, source);

  if (!sourceFile) {
    throw new Error('Source not found');
  }

  return sourceFile;
}

export default function move(list: List, source: string, destination: string): List {
  const cloneList: List = JSON.parse(JSON.stringify(list)) as List;

  validateDestination(list, destination);
  validateSource(list, source);

  const destinationFolder = getDestination(cloneList, destination);
  const sourceFile = getSource(cloneList, source);

  deleteFileFromFolder(cloneList, sourceFile);

  destinationFolder.files.push(sourceFile);

  return cloneList;
}
