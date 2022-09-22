<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/amcones/TaskTimer">
    <img src="title.png" alt="Logo">
  </a>

<h3 align="center">TaskTimer</h3>

  <p align="center">
    A timer to record your time cost on each tasks.
    <br />
    <br />
    <br />
    <a href="https://github.com/amcones/TaskTimer">View Demo</a>
    ·
    <a href="https://github.com/amcones/TaskTimer/issues">Report Bug</a>
    ·
    <a href="https://github.com/amcones/TaskTimer/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](title.png)

Have you heard about "The first 20 hours" rule?

There are a lot of task manager applications but lack a timer that records the time cost of a single task. So I built this project to help this.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [electron](https://www.electronjs.org/)
* [Vue.js](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Sqlite](https://www.sqlite.org/index.html)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You can download the dmg for arm64 MacOS machines directly at the releases page, or clone this repository for developing.

**THIS RELEASE VERSION USES ABSOLUTE PATH FOR DATABASE, WHICH WILL NOT WORK ON YOUR MACHINE!**


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
  or yarn
  ```shell
  npm install yarn -g
  ```

### Installation

Below is the step to build the project.

1. Clone the repo
   ```sh
   git clone https://github.com/amcones/TaskTimer
   cd TaskTimer
   ```
2. Install NPM packages
   ```sh
   yarn
   ```
3. add your own code
4. modify the package.json file to build the project on your own platform

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Just enter the task name at the OnGoing page, then make the switch of the active task on. After finishing it, press the button to put it into history. Or delete a completed task at the History page by the button.

<!-- ROADMAP -->
## Roadmap

- [x] Develop the base function
- [ ] Fix the bugs
- [ ] Add multi theme
- [ ] Build platform-cross releases
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Japanese

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

James Amcones - [@James Amcones](https://twitter.com/AmconesJ) - a587212@126.com

My blog: [uli's blog](https://amcones.cn)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/amcones/TaskTimer.svg?style=for-the-badge
[contributors-url]: https://github.com/amcones/TaskTimer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/amcones/TaskTimer.svg?style=for-the-badge
[forks-url]: https://github.com/amcones/TaskTimer/network/members
[stars-shield]: https://img.shields.io/github/stars/amcones/TaskTimer.svg?style=for-the-badge
[stars-url]: https://github.com/amcones/TaskTimer/stargazers
[issues-shield]: https://img.shields.io/github/issues/amcones/TaskTimer.svg?style=for-the-badge
[issues-url]: https://github.com/amcones/TaskTimer/issues
[license-shield]: https://img.shields.io/github/license/amcones/TaskTimer.svg?style=for-the-badge
[license-url]: https://github.com/amcones/TaskTimer/blob/master/LICENSE.txt
[product-screenshot]: title.png