#!/usr/bin/env bash

service=seed-db
status=$(cf service $service | sed -n 3p)
if [[ $status = "FAILED" ]]; then
  exit 1
fi

app=seed-nodejs-hana

cf push $app \
    -b nodejs_buildpack \
    --no-start \
    -m 128M \
    -k 2048M

cf se $app NPM_CONFIG_PRODUCTION false

# bind hana service
cf bind-service $app $service

cf start $app

cd ..