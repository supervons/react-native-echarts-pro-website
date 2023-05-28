# Website

This is [react-native-echarts-pro](https://github.com/supervons/react-native-echarts-pro)'s website built using [Docusaurus 2](https://docusaurus.io/).

See : [react-native-echarts-pro-website](https://supervons.github.io/react-native-echarts-pro-docs/)
### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
