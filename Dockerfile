FROM manishsangani/nodejs-base:latest

# Bundle app source

RUN mkdir -p /src/msp_vms
#ADD . /src/msp_vms

ADD . /src/msp_vms
#CMD ["/src/msp_vms"]

# Install app dependencies
RUN cd /src/msp_vms; npm install

RUN chmod 754 /src/msp_vms/boot.sh

EXPOSE 8080
ENTRYPOINT ["/src/msp_vms/boot.sh"]
