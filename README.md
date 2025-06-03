# Welcome to my Portfolio Repo

- This Portfolio was built by utilizing webgl on the browser. When I learned that 3d websites could be created I quickly began coding to try it out! The primary library I used was React-Three-Fiber, but I quickly found my self knee deep in React and three.js documentation. Hope you find the info your looking for about me and if you want feel free to message me to learn more.

## Starting

- `npm run start`

## Deployment

- Deployment can be done automatically or manually
- To automatic deploy simply push to the private remote that can run private github actions
  - First add both the public and the private repo to a new alias. I like to call this new remote alias 'all'
    - `git remote add all git@github.com:code-cody-418/personal-portfolio.git`
    - `git remote set-url all --push --add git@github.com:code-cody-418/personal-portfolio-deploy-only.git`
  - Once both are setup to be pushed you can simply push then a GitHub action will be fired on the private repo
    - `git push all main`

## Attribution

- https://codecody.dev/attribution.html

## gltfjsx Notes

- https://github.com/pmndrs/gltfjsx

- cd to where the .glb or .gltf file is
- run `npx gltfjsx model.gltf --transform`

## SignalRGB Config

- This site can interface with SignalRGB with a couple steps
- Setup:
  1) Ensure SignalRGB is installed on the desktop and you are signed in as a pro user
  2) Download the effects listed below
    - "Falling Stars"
    - "Terminal"