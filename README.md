# Library App

![GitHub repo size](https://img.shields.io/github/repo-size/HiRahmat-Dev/library-web-vuejs)
![GitHub contributors](https://img.shields.io/github/contributors/HiRahmat-Dev/library-web-vuejs)
![GitHub stars](https://img.shields.io/github/stars/HiRahmat-Dev/library-web-vuejs?style=social)
![GitHub forks](https://img.shields.io/github/forks/HiRahmat-Dev/library-web-vuejs?style=social)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FHiRahmat-Dev%2Flibrary-web-vuejs
)

<p align="center">
  <img height="100" src="./screenshots/library-logo.png">
  <img height="100" src="https://vuejs.org/images/logo.png">
</p>
<p align="center">
  Built with Vue Js.
</p>

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Create Environment Variable](#create-environment-variable)
- [Screenshots](#screenshots)
- [Related Project](#related-project-backend)
- [Contributors](#contributors)

## Features

- Users who are not logged in can only view the book
- Users must sign up and sign in to make a transaction and see their profiles
- And others

## Requirements

- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- Vue.js - Download and Install [Vue.js](https://vuejs.org/v2/guide/)

## Usage for development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/HiRahmat-Dev/library-web-vuejs.git`
3. Open the folder and type `npm install` for install dependencies
4. Create Environment Variable [here](#create-environment-variable)
5. Before run this, you must run [backend first](#related-project-backend)
6. Type `npm run serve` for run this app.

## Create Environment Variable

```
$ touch .env.local
$ nano .env.local
```

```
VUE_APP_ROOT_URL=YOUR_HOST_URL
VUE_APP_SECRET_KEY=YOUR_API_KEY
```

## Screenshots


<div align="center">
    <p align="center">Landing Page</p>
    <img width="860" src="./screenshots/library-landing.gif">
</div>
<br>
<div align="center">
    <p align="center">Login & Register Page</p>
    <img width="430" src="./screenshots/library-login.gif">
    <img width="430" src="./screenshots/library-register.png">
</div>
<div align="center">
    <h5 align="center">Dashboard & Borrow Page</h5>
    <img width="430" src="./screenshots/library-dashboard.gif">   
    <img width="430" src="./screenshots/library-borrow-return.gif">
</div>
<br>

## Related Project (Backend)

* [`Backend-Library`](https://github.com/HiRahmat-Dev/library-api)

## Contributors

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/HiRahmat-Dev/">
          <img width="150" src="https://avatars2.githubusercontent.com/u/55150659?s=460&u=c7171bb4128787c303efdce0d62bc86289f1211b&v=4" alt="Rahmat Hidayatullah"><br/>
          <b>Rahmat Hidayatullah</b>
        </a>
      </td>
    </tr>
  </table>
</center>
