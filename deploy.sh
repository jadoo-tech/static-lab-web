# bun install
# bun run build
# rsync build to nt:~/static-lab-web/build

bun install
bun run build
rsync -avz build/ nt:~/static-lab-web/build