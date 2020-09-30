# My Personal site
This is a work in progress, but will eventually showcase my projects by pulling data using the GitHub API, bio, and if available, the type of role I am seeking.

Created using [Vue.js](https://vuejs.org/), [Bulma](https://bulma.io/) CSS framework, and minimal use of [Buefy](https://buefy.org/) for it's navbar JS.

## Project setup

### Clone
```
add git cmd
```

This project makes use of GitHub Actions, Workflow, Secrets to enable a CI/CD pipeline to AWS.

### AWS CloudFormation
```
- Make any changes to the descriptions in CloudFormation template, if desired.
- Deploy the CloudFormation template using the AWS console or cli.
- Note the newly created S3 bucket's name and CloudFront distribution ID for the next step.
```
### Secrets
```
Add the following secrets in your GitHub repo's settings:
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_S3_BUCKET
- DISTRIBUTION_ID
```

### Install
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
>Runs: vue-cli-service serve

### Compiles and minifies for production
```
npm run build
```
><p>Runs: vue-cli-service build --mode production --target app --modern</p>
><p><em>Parameters can be modified under build-report in the package.json</em></p>

### Compiles and minifies for production with report
```
npm build-report
```
><p>Runs: vue-cli-service build --report --mode production --target app --modern</p>
><p><em>Parameters can be modified under build-report in the package.json</em></p>

### Lints and fixes files
```
npm run lint
```
>Runs: vue-cli-service lint

### Notes
- The [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur/) VSCode extension by Pine Wu could be used for tool support. Additional [reference](https://github.com/vuejs/vetur/).
- The .gitignore is configured for macOS, VSCode, and JS. Make the necessary changes if using Windows and/or different editor. This [tool](https://www.toptal.com/developers/gitignore) can generate one for you.
- See [Configuration Reference](https://cli.vuejs.org/config/).

### Future changes
- Migrate to Vuejs v3
- Migrate to new CSS framework
- Attempt to reduce build package size. However, if using as a guide or template YMMV based on additional any dependencies you install
- Convert CloudFormation Template to SAM
- Bootstrap invalidation file to template
