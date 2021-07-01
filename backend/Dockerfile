FROM alpine:3.14
RUN apk add --no-cache 

COPY gen /won-yang/gen
COPY yarn.lock /won-yang
COPY package.json /won-yang

COPY install.sh /won-yang

WORKDIR /won-yang

RUN chmod 755 ./install.sh
RUN ./install.sh

ENTRYPOINT ["yarn", "start"]