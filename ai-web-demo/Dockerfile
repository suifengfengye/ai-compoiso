# 使用 busybox 作为基础镜像
FROM busybox
# 创建 app/frontend 目录
WORKDIR /app/frontend
# 将构建好的 dist 目录复制到镜像中的 /app/frontend
COPY ai-web-demo/dist /app/frontend
