# setup config
cp ../../../sites/example/package.json ./sites/example/
cp ../../../sites/example/gatsby-config.js ./sites/example/

# setup assets
wget https://raw.githubusercontent.com/signalwerk/gatsby-theme-signalwerk/master/__install/sites/example/src/assets/gatsby-icon.png

# setup pages
cp ../../../sites/example/src/pages/404.js ./sites/example/src/pages/
cp ../../../sites/example/src/pages/index.js ./sites/example/src/pages/
cp ../../../sites/example/src/pages/root.md ./sites/example/src/pages/

# example
cp ../../../sites/example/src/pages/-example/index.md ./sites/example/src/pages/-example/

