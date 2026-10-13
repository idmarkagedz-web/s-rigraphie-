const {app,BrowserWindow,Menu,shell}=require('electron');
const path=require('path');
function createWindow(){
  const w=new BrowserWindow({width:560,height:860,minWidth:360,minHeight:520,
    title:'حسابات ورشة السيريغرافي',icon:path.join(__dirname,'build','icon.png'),
    autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false}});
  Menu.setApplicationMenu(null);
  w.loadFile('index.html');
  w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return {action:'deny'}});
}
app.whenReady().then(createWindow);
app.on('window-all-closed',()=>app.quit());
