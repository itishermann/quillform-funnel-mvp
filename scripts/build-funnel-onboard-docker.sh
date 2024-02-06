#!/bin/zsh

# This script is used to build the funnel-onboard docker image
DOCKER_BUILDKIT=1 docker build -f ../apps/funnel-onboard/Dockerfile -t funnel-onboard-mvp:latest ../
