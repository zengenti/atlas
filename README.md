# Atlas
A modern front-end framework to start a new project; minimal and easy customisation.

## Prerequisites
In order to use the toolkit there are a couple of items to install first.

  - [Node.js][nodejs]
  - [Gulp][gulp-start]

To install the Gulp CLI simply run the following command within the command prompt:

    npm install --global gulp-cli

## Installation
Install the Node modules:

    npm install

## Running Gulp
To run Gulp enter the single command which will trigger the `default` task:

    gulp

The tasks can be triggered individually:

    gulp <task-name>

    gulp sass
    gulp js
    gulp svg
    gulp serve

## Tools
  - Livereload of the browser window when `.scss`, `.js`, `.jsx` and template files are edited
  - Error logging through the command prompt and notifications through your platform
  - JavaScript error checking and code quality control using [ESLint][eslint] with `.eslintrc` configuration file
  - Concatenate and minify JavaScript
  - Provides sourcemaps for both CSS and JavaScript files
  - Minifies SVG files and removes any inline `fill` attributes to allow full CSS control
  - [Browsersync][browser-sync] provides easy access to view your project on different devices by providing you with a dynamic URL

## JavaScript
  - [jQuery][jquery]
  - [Modernizr][modernizr]
  - [ESLint][eslint] configuration file for setting up error checking `.eslintrc`
  - [Polyfill for REM unit][polyfill-rem]
  - [Polyfill for min/max-width media queries][polyfill-mq]

## Sass
  - [Normalize.css](https://necolas.github.io/normalize.css)
  - 12 column grid
  - [MQ breakpoint mixin](https://github.com/sass-mq/sass-mq)

## SVGs
Add your SVGs into the `src/images/icons` directory and then use the SVG `<use>` element within your template that will reference the sprite at the top of the page.

    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-{file-name}">
      <use xlink:href="#icon-{file-name}"></use>
    </svg>

## Templates
  - [Home](public/index.html)
  - [Grid demo](public/examples/grid.html)
  - [Visibility demo](public/examples/visibility.html)
  - [Utility demo](public/examples/utility.html)

[gulp-start]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[nodejs]: https://nodejs.org/en/download
[jquery]: https://jquery.com/
[modernizr]: http://modernizr.com
[polyfill-rem]: https://github.com/chuckcarpenter/REM-unit-polyfill
[polyfill-mq]: https://github.com/scottjehl/Respond
[eslint]: http://eslint.org
[browser-sync]: https://www.npmjs.com/package/browser-sync
