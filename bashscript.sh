#!/bin/bash

#echo "what was your name could please tell me again or not?"

#read name

name=$1
item=$2

user=$(whoami)
date=$(date)
where=$(pwd)

echo "hello how are you doing today, $name"

sleep 1

echo "glad to hear that! :]"

sleep 1

echo "how was the $item"

sleep 2

echo "i have to go now so goodbye $name"

sleep 2

echo "you are currently looged in as $user and you are in $where and the time is $date"
#if [[ condition ]]; then
#	statement
#elif [[ condition ]]; then
#	statement
#else
#	statement
#fi

#case $class in
#	1)condition
#	    statement
#	    ;;
#esac
