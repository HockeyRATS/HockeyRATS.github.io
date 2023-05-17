# HockeyRATS

![HockeyRATS Logo](/src/images/hockeyrats-logo-cropped.svg)

The home of fanatics who live to train and play hockey. Pioneer of the R.A.T.S.
training system.

This repository contains the third iteration of the
[HockeyRATS website](http://www.hockeyrats.com) hosted on GitHub Pages. It is
developed with TypeScript, a strongly typed language built on JavaScript and
Gatsby, a React-based open source static site framework. Bootstrap v5 is
integrated for responsive and mobile-friendly styling without jQuery.
Prettier and ESLint provide code formatting and static analysis respectively.
Summaries of previous site versions can be found in the
[Prior Iterations](#prior-iterations) section.

## 🚀 Quick start

### Prerequisites for Development

- Node.js (v18 or newer)
- Git
- Gatsby command line interface (CLI) (v5 or newer)

### Installation

First, clone the repo with

```bash
$ git clone https://github.com/HockeyRATS/HockeyRATS.github.io.git
```

Install the Node.js packages with

```bash
$ cd HockeyRATS.github.io
$ npm install
```

Use the Gatsby CLI to start the development server

```bash
$ gatsby develop
```

Alternatively, if you were not able to install the Gatsby CLI then use

```bash
$ npm run develop
```

Finally, open a browser to view HockeyRATS at `http://localhost:8000/`

Entering `Ctrl+C` into the same terminal will stop the development server.

When developing, the auto-formatter can be run by using

```bash
$ npm run prettier-format
```

Likewise, static analysis can be performed through

```bash
$ npm run lint
```

### Prior Iterations

#### Second Iteration

- [GitHub Repo](https://github.com/jeffrylew/hockeyrats)
- Dynamic site developed using JavaScript and Express.js, a back end web
  application framework based on Node.js
- Initially integrated Stripe API to accept payments for lessons
- Stored order details in client-side
  [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- Eventually replaced payment processing system with an email reservation system
  based on the SendGrid API (see image of sample email below)
- Latter was triggered by a JS calendar displaying available lessons in the
  current month
- Deployed on Heroku free tier dyno, which sunsetted in November 2022
- ![Sample Reservation Confirmation Email](/src/images/HockeyRATS_Reservation_Confirmation.png)

#### First Iteration

- Viewable at https://jeffrylew.github.io/joe_wagner-hockey/
- [GitHub Repo](https://github.com/jeffrylew/joe_wagner-hockey)
- Static site developed with vanilla HTML and CSS
- Additional styling with BootStrap 4.4.1 for a responsive and mobile-friendly
  site
- Deployed using GitHub Pages

### Questions

Any questions regarding HockeyRATS can be emailed to support@hockeyrats.com

Development suggestions can be requested by opening a new ticket at
https://github.com/HockeyRATS/HockeyRATS.github.io/issues
