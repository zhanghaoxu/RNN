#!/bin/bash



env="dev"
platform="android"



echo "编译平台"
if [ "$2" == "ios" ];then
  echo "ios"
  platform="ios"
else 
  echo "android"
fi

echo "编译环境"
if [ "$1" == "build" ];then
  echo "build"
  react-native run-$2 --port 8088

elif [ "$1" == "test" ];then
  echo "test"
  ENVFILE=.env.test react-native run-$platform --port 8088
else 
  echo "dev"
  ENVFILE=.env.development react-native run-$platform --port 8088
fi



