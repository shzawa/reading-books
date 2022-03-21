const path = require('path')

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    })
    // Fixes npm packages that depend on some modules
    config.resolve = {
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
      fallback: {
        fs: false,
        path: false,
      },
    };
    // Important: return the modified config
    return config
  },
  core: {
    builder: 'webpack5',
  },
}
