# 使用 busybox 作为基础镜像
FROM busybox
# 创建 app/frontend 目录
WORKDIR /app/frontend
# 将构建好的 dist 目录复制到镜像中的 /app/frontend
COPY dist /app/frontend
# 添加启动脚本
COPY start.sh /start.sh
# 让脚本可执行
RUN chmod +x /start.sh
# 设置脚本为启动命令
CMD ["/start.sh"]
