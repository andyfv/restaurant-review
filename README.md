# Restaurant Review Project

## Table of Contents

* [About](#about)
* [How to run it](#how-to-run-it)
* [Dependencies](#dependencies)
* [Note about ES6](#note-about-es6)

## About

The **Restaurant Reviews** project is web-based application converted from a static webpage to a mobile-ready web application.  The static design lacked accessibility and was remade to be responsive on different sized displays and accessible for screen reader use. ServiceWorker is used to create offline experience by caching the site's assets.

## How to run it

1) Download or Clone the repository
2) Unzip the file if you have downloaded a ZIP

    You will need to start a simple HTTP server to serve up the site files on your local computer. In a terminal, check the version of Python you have:

        python -V
  
    For Python 2.x, spin up the server with:
  
        python -m SimpleHTTPServer 8000

    (or some other port, if port 8000 is already in use.)

    For Python 3.x, you can use:

        python3 -m http.server 8000

    If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3) With your server running, visit the site: http://localhost:8000

    You may need to replace `mapboxToken` in `main.js` and `restaurant_info.js` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## Dependencies

* [leafletjs](https://leafletjs.com/)
* [Mapbox](https://www.mapbox.com/)
* [cache-polyfill.js](https://github.com/mathiasbynens/cache-polyfill)

## Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.
