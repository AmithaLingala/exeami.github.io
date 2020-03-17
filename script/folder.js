import {Commands} from '/script/commands.js'
const commands = Commands.getInstance();
const addressBar = document.getElementById('address-bar');
const content = document.getElementById('content');

const urlParams = new URLSearchParams(window.location.search);
let path = urlParams.get('path');
console.log(path);
async function renderFolders() {
  addressBar.value = (await commands.cd([path])).path;
  const folders = await commands.getFiles();
  console.log(folders);
  folders.forEach(folder => {

      const iconLabel = document.createElement('span');
      const folderDiv = document.createElement('div');
      const icon = document.createElement('span');

      //Assign classes
      iconLabel.classList.add('icon-label');
      folderDiv.classList.add('folder');
      icon.classList.add(folder.type);

      // Set Label name
      iconLabel.innerHTML = folder.name;
      // push icon and labels to folder
      folderDiv.append(icon, iconLabel);
      content.append(folderDiv);

      folderDiv.onclick = () => {
          if(folder.type == 'directory') {
            location.href ='/folder?path='+folder.path
          } else {
            console.log(`${path}?path=${folder.name}&prev=_${location.href}_`);
            location.href = `${path}?path=${folder.name}&prev=_${location.href}_`;
          }
      }
  });
}
renderFolders();
