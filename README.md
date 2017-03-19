# Javascript Unit Tests Playground

This is a playground so i can run some javascript unit tests fast with [Jest](https://facebook.github.io/jest/), [Mocha](https://mochajs.org/) or [Tape](https://github.com/substack/tape).

## Getting Started

Run following commands to get started:

```bash
git clone https://github.com/fakiolinho/javascript-unit-tests-playground.git
npm i && cd javascript-unit-tests-playground
```

## Jest Tests

Put the test file in `jest` folder and name it following `name.spec.js` pattern. Run your test:

```bash
npm run test:jest
```

## Mocha Tests

Put the test file in `mocha` folder and name it following `name.spec.js` pattern. [Chai](http://chaijs.com/) is used for assertions. Run your test:

```bash
npm run test:mocha
```

## Tape Tests

Put the test file in `tape` folder and name it following `name.spec.js` pattern. Run your test:

```bash
npm run test:tape
```

## License

This project is licensed under the MIT License