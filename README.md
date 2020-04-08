# Welcome

This project has been created to explore creating a [React](https://reactjs.org) app with [Next.js v9](https://nextjs.org/docs/getting-started) to search and explore podcast data; eventually resulting in an application that will be deployed to [ZEIT Now](https://zeit.co/).

## Environment variables

Please copy `.env.sample` to `.env` - replacing any values as desired:

```sh
GOOGLE_ANALYTICS_TRACKING_ID="<YOUR_GOOGLE_ANALYTICS_TRACKING_ID>"
```

## Third party services

### Google Analytics

This project has been configured to use [Google Analytics](http://analytics.google.com)

### ZEIT Now

This project has been configured to automatically deploy to [ZEIT Now](https://zeit.co/) - available at [https://nextjs-podcast-explorer.now.sh](https://nextjs-podcast-explorer.now.sh) - using the [ZEIT Now for GitHub](https://zeit.co/github) integration.

#### Secrets

> To define an environment variable, you should use Now Secrets. By using Now Secrets, the data will be encrypted and stored securely, no longer directly accessible by anyone, and only exposed to deployments as environment variables.

Source: [Adding Secrets](https://zeit.co/docs/v2/build-step#adding-secrets)

TL:DR Use the following to add, remove, or rename secrets with ZEIT Now. Also, notice how we are prefixing each secret with `npe-` - otherwise, we risk potentially overwriting or removing an existing secret used by another of our projects. 😳

```sh
# Add a secret to your ZEIT Now project
$ now secrets add <secret-name> <secret-value>  # e.g. $ now secrets add npe-google-analytics-tracking-id ""

# Remove a secret from your ZEIT Now project
$ now secrets rm <secret-name>                  # e.g. $ now secrets rm npe-google-analytics-tracking-id
```

#### Deployment

Once a PR has been merged into `master`, the project will be automatically deployed to [https://nextjs-podcast-explorer.now.sh](https://nextjs-podcast-explorer.now.sh)
