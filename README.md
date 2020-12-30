# MiniDI

Simple dependency injection container for typescript without decorators.

## Installation

With npm:
```bash
npm i -s minidi
```

Or yarn
```bash
yarn add minidi
```

## Usage

```typescript
import { Container } from 'minidi';

// declare dependencies 
const readFile = () => {
  //....

  return '';
}

const getRandomNumber = () => {
  //....

  return '';
}

/// create di container
const di = new Container({
  readFile,
  getRandomNumber,
});


// Get dependencies
const readFileDependecy = di.get('readFile');

readFileDependecy() // return ''

// CHange dependency

di.rebing('readFile', () => 'new file');

di.get('readFile')() // return 'new file'

```
