# Personal site
This is a work in progress, but will eventually showcase my projects by pulling data using the GitHub API, bio, and if available, the type of role I am seeking.

Created using [Vue.js](https://vuejs.org/), [Bulma](https://bulma.io/) CSS framework, and minimal use of [Buefy](https://buefy.org/) for it's navbar JS.

## Project setup

### Clone
```
gh repo clone tolerl1/logan-dev
```

### AWS and GitHub configurations

This project makes use of GitHub Actions, Workflow, Secrets to enable a CI/CD pipeline to AWS. A CloudFormation template is provided to publish your web app. If using the template, **be aware that you could incur charges** for the provisioned AWS resources.

#### AWS CloudFormation
- Make any changes to the descriptions in CloudFormation template, if desired.
- Deploy the CloudFormation template using the AWS console or cli.
- Note the newly created S3 bucket's name and CloudFront distribution ID for the next step.
- The inv-batch.json file must be copied to the root of the S3 bucket created by the template. The workflow will **display an error** when deploying the package if the file is not found. This will be addressed in a future update.

#### AWS IAM Permissions
The AWS account being used must have full CloudFront access and S3 Put, List, and Delete permissions. I recommend creating a dedicated IAM account with only mentioned permissions attached to it. **Never store your credentials in your project directory, S3, or commit to GitHub.** 

#### Secrets
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
><p><em>Parameters can be modified under build in the package.json</em></p>

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
- The [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur/) VSCode extension by Pine Wu is available for tool support. Additional [reference](https://github.com/vuejs/vetur/).
- The .gitignore is configured for macOS, VSCode, and JS. Make the necessary changes if using Windows and/or different editor. This [tool](https://www.toptal.com/developers/gitignore) can generate one for you.
- See [Configuration Reference](https://cli.vuejs.org/config/).

### Future changes
- Migrate to Vuejs v3
- Migrate to new CSS framework
- Attempt to reduce build package size. However, if using as a guide or template YMMV based on additional any dependencies you install
- Bootstrap invalidation file to template
