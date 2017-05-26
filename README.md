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
    gulp html
    gulp svg
    gulp serve

## Tools
  - Livereload of the browser window when `.scss`, `.js`, `.jsx` and `.html` files are edited
  - Error logging through the command prompt and notifications through your platform
  - JavaScript error checking and code quality control using [ESLint][eslint] with `.eslintrc` configuration file
  - Concatenate and minify JavaScript
  - Provides sourcemaps for both CSS and JavaScript files
  - Minifies SVG files and removes any inline `fill` attributes to allow full CSS control
  - [Browsersync][browser-sync] provides easy access to view your project on different devices by providing you with a dynamic URL

## JavaScript
Add your JavaScript third party libraries into the `src/js/libs` directory to prevent the files from being linted by [ESLint][eslint].

  - [jQuery][jquery]
  - [Modernizr][modernizr]
  - [ESLint][eslint] configuration file for setting up error checking `.eslintrc`
  - [Polyfill for REM unit][polyfill-rem]
  - [Polyfill for min/max-width media queries][polyfill-mq]

## Sass
  - [Normalize.css](https://necolas.github.io/normalize.css)
  - 12 column grid
  - [MQ breakpoint mixin](https://github.com/sass-mq/sass-mq)

## HTML
Add HTML pages to the `src/html/pages` folder, the HTML Gulp task (nunjucks) will render every page added to that folder. Add any HTML partials/layouts to the `src/html/templates` folder. The default base layout page `_layout.html` already exists which also includes a `_header.html` and `_footer.html` partial which demonstrates the syntax used.

  - Including a HTML partial `{% include "partials/_partial.html" %}`
  - Creating a new page requires the base layout to be rendered first with `{% extends "_layout.html" %}` then ensure the page content is wrapped with `{% block content %}{% endblock %}` (see the index.html page as an example).
  - Note: partials can have any naming convention as long as it's saved as a `.html` file. The default prepends partials with an underscore to clearly highlight partials but this is not a requirement.

For more info about the syntax or how to include HTML variables and macros see the [nunjucks](https://mozilla.github.io/nunjucks/templating.html) site.  

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
