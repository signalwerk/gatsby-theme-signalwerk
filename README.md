# gatsby theme


## Thanks
* Based on [Christopher Biscardis Theme](https://github.com/ChristopherBiscardi/gatsby-theme-examples)
* [Introducing gatsby themes](https://github.com/gatsbyjs/gatsby/pull/9517)

# Used
* [Typesetting Blog](https://signalwerk.github.io/typesetting/) [→ Repo](https://github.com/signalwerk/typesetting/)
* [Walz Blog](https://signalwerk.github.io/walz.alexanderboenninger/) [→ Repo](https://github.com/signalwerk/walz.alexanderboenninger/)
* [Thesis – Interaction Design Zurich](https://thesis.logrinto.ch/) [→ Repo](https://github.com/logrinto/IAD2017.thesis)

## Install in a new repo
```sh
mkdir -p themes
git submodule add https://github.com/signalwerk/gatsby-theme-signalwerk.git themes/gatsby-theme-signalwerk

wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/package.json



mkdir -p sites/example/src/pages
mkdir -p sites/example/src/assets
mkdir -p sites/example/src/components


cd ./sites/example

# setup config
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/package.json
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/gatsby-config.js
cd ../..

# setup assets
cd ./sites/example/src/assets
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/assets/gatsby-icon.png
cd ../../../..

# setup pages
cd ./sites/example/src/pages
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/404.js
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/index.js
cd ../../../..


# example
mkdir -p sites/example/src/pages/-example/
cd ./sites/example/src/pages/-example/

wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/-example/index.md
cd ../../../../..

# add travis
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/.travis.yml

```


## Installation

```sh
yarn
yarn develop
# or
yarn build
```
### Todo
* [Check themeing of water.css](https://github.com/kognise/water.css)

### Travis CI
Follow [this](https://github.com/signalwerk/travis-ci) instructions. And adjust `DEPLOY_DIR` in `.travis.yml`.

```
- DEPLOY_DIR: "./sites/blog/public"
```sh


## clean
```
rm -rf sites/main/.cache/
```

## ToDo
Add something like
> Spotted an error or found a typo? This post is written in markdown and you can open a pull request on Github.



### ToDo

* Adjust Code-Highlighting
  * [GHColors by aviaryan](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-ghcolors.css)
  * [prismjs-material-theme](https://dutchenkooleg.github.io/prismjs-material-theme/)
  * [Theme by LukeAskew](https://github.com/LukeAskew/prism-github)
