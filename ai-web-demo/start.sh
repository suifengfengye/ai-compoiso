#!/bin/sh
cp -r /app/frontend/* /app/frontend-share/
exec "$@"
# 如下的死循环是让容器进行后不直接退出
while true; do sleep 1000; done

