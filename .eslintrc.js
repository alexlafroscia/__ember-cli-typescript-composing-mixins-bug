module.exports = {
  root: true,
  parser: "typescript-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["ember"],
  extends: ["eslint:recommended", "plugin:ember/recommended"],
  env: {
    browser: true
  },
  rules: {},
  overrides: [
    // TypeScript files
    {
      files: ["*.ts"],
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off"
      }
    },
    // node files
    {
      files: [
        "ember-cli-build.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
