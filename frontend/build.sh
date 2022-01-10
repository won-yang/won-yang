#!/bin/bash

sudo npm run build

sudo cp -rf build/* /var/www/html
