# NanoDI

Simple dependency injection container for typescript without decorators.

## Installation

With npm:
```bash
npm i -s nanodi-ts
```

Or yarn
```bash
yarn add nanodi-ts
```

## Usage

```typescript
import { Container } from 'nanodi-ts';

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
