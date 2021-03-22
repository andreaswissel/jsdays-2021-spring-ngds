# Robuste Design Systems mit Storybook und Angular: vom Konzept zur lebendigen Anwendung

[Angular Days Workshop](https://javascript-days.de/angular/robuste-design-systems-mit-storybook-und-angular-vom-konzept-zur-lebendigen-anwendung/), Tuesday March 23 2020

Your trainer: [Andreas Wissel](https://twitter.com/andreas_wissel), Freelance Consultant

## Setup

### Step 1: Devices and Software

Please bring your developer devices and install the following software. [Already done? Click here for step 2.](#step-2-demo-repository)

**NOTE:** As web technologies move fast and quickly, there might be new releases in the meantime. To ensure everything works as intended, we strictly recommend you to stick to the versions noted below. Thanks!

#### Devices

- Laptop with recent Windows/macOS/Linux version
  - Make sure you can access the Internet without any proxies and install software without group policies etc.
  - When in doubt, use your private notebook.

#### Browsers (Desktop)

- [Microsoft Edge](https://www.microsoft.com/en-us/edge), or any Chromium equivalent @ version 89 or later

#### Developer Tools

- [Git](https://git-scm.com/)
  - Optional: Git UI tool such as TortoiseGit, Tower, SourceTree, GitKraken, …
- [Node.js](https://nodejs.org/en/), version 15.12.0
- Editor of your choice
  - [WebStorm](https://www.jetbrains.com/webstorm/) recent version
  - [Visual Studio Code](https://code.visualstudio.com/), recent version

#### Designer Tools

- Create a free account at [Figma](https://figma.com)
- Create a free account at [Percy](https://percy.io)

### Step 2: Demo Repository

On your favorite terminal, please run:

```
npm uninstall -g @angular/cli @storybook/cli
npm cache verify
npm install -g @angular/cli@11.2.5
```

Next, navigate to a folder of your choice and execute:

```
git clone https://github.com/andreaswissel/jsdays-2021-spring-ngds.git
cd jsdays-2021-spring-ngds
```

If you prefer SSH, you can use this checkout URL: `git@github.com:andreaswissel/jsdays-2021-spring-ngds.git`
