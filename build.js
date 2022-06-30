const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const isDev = process.argv.some((a) => a === '--dev');

build({
  entryPoints: ['src/index.ts'],
  platform: 'node',
  sourcemap: isDev,
  target: 'node15',
  minify: true,
  bundle: true,
  watch: isDev,
  plugins: [nodeExternalsPlugin()],
  outfile: 'dist/index.js',
}).catch(() => {
  process.exit(1);
});
