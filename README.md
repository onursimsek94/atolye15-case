# Atolye15 Question

Please update `src/move.ts` to pass tests. You can find the tests in `src/move.spec.ts`.

## Acceptance criteria

Imagine an array that contains folders. These folders can have files in it. `move` function moves a file to another folder and returns the new state of given list.

### Example list
```ts
const list = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '4', name: 'File 3' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [{ id: '7', name: 'File 5' }],
  },
]
```

If I run `move(list, '4', '6')` then I expect file with id `4` moved to the folder which has id `6`. Function should return the new state below;

```ts
const result = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [
      { id: '7', name: 'File 5' },
      { id: '4', name: 'File 3' },
    ],
  },
];
```

### Move function signature

| Key         | Type             | Description                  |
|-------------|------------------|------------------------------|
| list        | Folder[]         | Given list                   |
| source      | string           | Id of the moved file         |
| destination | string           | Id of the folder to be moved |


### Folder shape

| Key   | Type           | Description                 |
|-------|----------------|-----------------------------|
| id    | string         | Unique identifier of folder |
| name  | string         | Name of the folder          |
| files | File []        | Files in this folder        |

### File shape

| Key  | Type   | Description               |
|------|--------|---------------------------|
| id   | string | Unique identifier of file |
| name | string | Name of the file          |


> NOTE: All IDs are unique.  

## Lint the code

```bash
yarn lint
```

## Running tests

```bash
yarn test
```

> NOTE: If you believe that some scenarios are missing in the tests, don't hesitate to add them to suite.

## Format the code

```bash
yarn format
``` 
