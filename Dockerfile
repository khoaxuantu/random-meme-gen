FROM oven/bun as base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM install AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/*.tsx ./
COPY --from=prerelease /usr/src/app/*.json ./
COPY --from=prerelease /usr/src/app/configs ./configs
COPY --from=prerelease /usr/src/app/public ./public
COPY --from=prerelease /usr/src/app/src ./src

ENV NODE_ENV=production

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.tsx" ]
