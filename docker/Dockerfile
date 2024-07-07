FROM node:22.4.0-bullseye-slim

RUN apt update && apt install -y gosu

ENV NODE_ENV=development

ARG UID
ARG GID
ARG USER_NAME
ARG GROUP_NAME

RUN groupadd -o -g ${GID} ${GROUP_NAME} && \
    useradd -m -u ${UID} -g ${GID} ${USER_NAME}

USER ${USER_NAME}
WORKDIR /app

CMD ["node", "hello-world.js"]