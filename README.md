# Funnel MVP
An attempt to use QuillForms to replace current onboarding process.

## Requirements
- pnpm
- node 20 LTS
- docker
- docker-compose (optional)

## Setup
1. Clone the repository
2. Run `pnpm install` at the root of the project
3. Run `pnpm funnel-onboard:dev` to start the development server
4. Run `pnpm funnel-onboard:build` to build the project localy without docker
5. Run `docker build -f ./apps/funnel-onboard/Dockerfile -t funnel-onboard-mvp:latest ./` at the root to build the project with docker.
Alternatively, you can run the script `build-funnel-onboard-docker.sh` in the script folder to build the project with docker.

## Encountered Issues
- [ ] Quillforms types are not available in the package.<br/>Maybe the types are not included in the package or the package is not installed correctly.
- [ ] When building the project with docker, the build fails with the error `Module not found: Can't resolve 'tinyColor2'`<br/>Refer to the `build-error.log` file for more information.<br/>This may be due the fact that the package is not included in the lockfile when using the `turbo prune` command.
