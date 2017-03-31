# Infusion Angular2 .NETCore Starter project using VS Code

This repository contains a VS Code starter project for Angular2 and .NET Core. It is intended to lower the barrier for people to get started with Angular2 development on top of .NET Core. Using this starter, you will be able to rapidly develop Angular2 apps and seemlessly deploy them to Azure or run them standalone using Kestrel.  

# Get going

Follow these five easy steps to get going:

1. Install .NET Core 1.1. You can find it at https://www.microsoft.com/net/download/core
2. Install Visual Studio Code. You can find it at https://code.visualstudio.com/Download (this will also give you node)
   1. Install git from https://git-scm.com/download/win. You will need it clone this repository.
   2. Install the  C# extension from https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp, you will need it to compile the .NET Core backend. 
3. Update Node.js and npm to reasonable versions. Easiest is to simple re-install the latest LTS from https://nodejs.org/en/. 
4. Clone this repo locally.
    1. Open VS Code in a folder in which you want to create the project clone.
    2. Open the integrated terminal (Ctrl+`).
    3. Execute git clone https://github.com/infusion-code/ng2-spa-netcore-starter.git. This will create a local git repository. 
5. Open the folder containing the repo created in step 4 with VS Code. 
    1. Open the integrated terminal (Ctrl+`).
    2. Restore nuget packaged by executing 'donet restore'
    3. Restore npm packages by executing 'npm install'
    4. Install webpack globally by executing 'npm install -g webpack'
    5. Create the vendor package (since this package does not change often, it is not part of the build process) by executing 'webpack --config webpack.config.vendor.js'
    6. Press Ctrl-Shift-D to get into the debugger. Click on the green launch arrow to build, start the Kestrel server (localhost:5000) and launch Chrome in private mode connecting to server. 

You should see something like this:

![Startup](/wwwroot/static/media/startup.png?raw=true "Startup")

Start playing around...

# Learning More

The [Wiki](https://github.com/infusion-code/ng2-spa-netcore-starter/wiki) contains some topics with next steps to get into the development. 

