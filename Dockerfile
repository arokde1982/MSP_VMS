FROM manishsangani/msp_vms:latest

# Bundle app source

RUN mkdir -p /src/msp_vms
#ADD . /src/msp_vms

ADD msp_vms /src/msp_vms
#CMD ["/src/msp_vms"]

# Install app dependencies
RUN cd /src/msp_vms; npm install

ENTRYPOINT ["/src/msp_vms/boot.sh"]
EXPOSE 3000