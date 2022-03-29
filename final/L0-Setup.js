// 'use strict';
// Extention- install  Prettier and TODO
// Settings -  type 'default fromatter and select Prettier
// Settings - type 'format on save' and check Format a File on Save
// Settings - type 'auto save' and select onFocusChange
// open Prettier in browser and go to Docs/Option/ Quotes
// create a file .prettierrc
//

const x = 23;
if (x == 23) {
  console.log("yes");
}

// when i save, Prettier wrapped single parameter into parenthesis
// and I dont like this, so we can configure it as well in .prettierrc
// const calcAge = (birthYear) => 2037 - birthYear;
const calcAge = (birthYear) => 2037 - birthYear;

// instead of writing console.log all the time to see how things work
// we can configre snippets, go to File/Preferences/user Snippets

// ToDo highlights
// File/Preferences/Settings/ open Setting in json format, click icon,
// top for json settings, or you can do Ctrl-P and type settings.json
// here add lines 34 - 41 and save
/*
{
    "workbench.colorTheme": "Visual Studio Dark",
    "editor.fontSize": 18,
    "files.autoSave": "onFocusChange",
    "code-runner.runInTerminal": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  
    "todohighlight.isCaseSensitive": true,
    "todohighlight.keywords": [
      {
        "text": "Homework",
        "color": "#333",
        "backgroundColor": "#3498db"
      }
    ]
  }
  */
//
// TODO;

// Homework;

// We can install LiveServer so we dont have to refresh browser all the time, however there is firewall
// we can use node to run live-server or we can use coderunner

/*
If live-server cannot be run due to policy, you can change it
Opens power shell as Administrator and type

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine


Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\WINDOWS\system32> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): y
PS C:\WINDOWS\system32>
*/

// HTML setup
// start typing ht and select html:5
// start typing scr and select script:src so you can link JS file
