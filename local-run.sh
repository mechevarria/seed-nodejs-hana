#!/usr/bin/env bash

credentials=$(cf service-key seed-db seed-db-key | sed -n 3,14p)
if [[ -z "$credentials" ]]; then
  echo "service-key 'seed-db' not found"
  exit 1
fi

echo "{\"hana\": $credentials }" > ./default-services.json

npm run dev