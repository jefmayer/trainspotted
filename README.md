# trainspotted
Quantatative experiment run on a bootstrapped [Create React App](https://github.com/facebook/create-react-app) using Express/MongoDB. Goal was to determine the time interval between repeated observations of engine numbers outside my office window.

##Development Notes
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- `nvm use 18.17.1`
- `npm run start`
- Created .env with rule to get around babel version bs
- Manually converted css to scss files
- Created scss, js, and img directories in src
- Removed index.css and references to index.css in project
- Ejected project and then followed steps in https://alligator.io/react/linting-react/ to add in linting
- Copied over linting rules from Springs project
- Edited serviceWorker.js to follow linting rules
- Added `"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],` to linting rules
- Added `parser` and `parser` options to `.eslintrc

##Build Notes
- `npm run build`