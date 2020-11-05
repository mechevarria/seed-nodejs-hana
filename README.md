# seed-nodejs-hana

Deploys an [expressjs](https://expressjs.com/) based REST API to [SAP Cloud Platform](https://www.sap.com/products/cloud-platform.html). A seed project to start SAP HANA API development locally or in [SAP Business Application Studio](https://help.sap.com/viewer/product/SAP%20Business%20Application%20Studio/Cloud/en-US)

## Requirements

* An account on SAP Cloud Platform _Free Trial available for up to 90 days_
* An enterprise instance of the SAP HANA Database service
* The [seed-hdi](https://github.com/mechevarria/seed-hdi) project deployed and running

* The [Cloud Foundry cli](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) for local development

* [Setup SAP Business Application Studio](https://developers.sap.com/tutorials/appstudio-onboarding.html) for online development

## Deploy

* Make sure you are logged into your SAP Cloud Platform space by running

```bash
./cf-login.sh
```

* The script assumes your platform credentials are available as environment variables. Place in **${HOME}/.profile** or ****${HOME}/.bashrc**

```bash
export CP_USER=i111222
export CP_PASSWORD=SapCloudPlatformPassword
```

* Adjust the **org** and **space** values for your account

* Create and deploy the express api with
```bash
./cf-seed-nodejs-hana.sh
```

## Develop locally

```bash
npm install
./local-run.sh
```
* This script will query SAP Cloud Platform for the credentials to HDI HANA database and save them in **default-services.json**. The 

> Do no check **default-services.json** into source control. This file has access credentials and is used for local development only

## Additional Tutorial

* Though for HANA Express, this is an additional [tutorial](https://developers.sap.com/tutorials/hxe-node-express.html)