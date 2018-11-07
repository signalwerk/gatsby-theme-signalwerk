# gatsby theme


## Thanks
* Based on [Christopher Biscardis Theme](https://github.com/ChristopherBiscardi/gatsby-theme-examples)
* [Introducing gatsby themes](https://github.com/gatsbyjs/gatsby/pull/9517)


## Install in a new repo
```
mkdir -p themes
git submodule add git@github.com:signalwerk/gatsby-theme-signalwerk.git themes/gatsby-theme-signalwerk

wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/package.json



mkdir -p sites/example/src/pages
mkdir -p sites/example/src/assets
mkdir -p sites/example/src/components


cd ./sites/example

wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/gatsby-browser.js
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/package.json
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/gatsby-config.js
cd ../..

cd ./sites/example/src/assets
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/assets/gatsby-icon.png
cd ../../..

cd ./sites/example/src/pages
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/404.js
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/index.js
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/hi-from-a-themed-site
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/pages/hi-from-a-themed-site/index.md




```
