#!/bin/bash

rm -rf build_production

./vendor/bin/jigsaw build production

cd build_production

git init
git add .
git commit -m "deploy"
git remote add origin git@github.com:tonysm/tonysm.github.io.git
git push --force origin master

cd ../
