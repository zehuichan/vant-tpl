#!/usr/bin/env sh

# 终止一个错误
set -e

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f https://gitee.com/jasonchenzehui/vant-tpl.git master

cd -
