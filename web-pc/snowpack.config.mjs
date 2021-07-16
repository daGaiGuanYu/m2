/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    app: '/dist'
  },
  plugins: [
    "snowpack-plugin-stylus"
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
