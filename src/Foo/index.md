# Foo

```jsx
import { jsonToReact } from 'json-to-react';

export default () => {
  const reactElement = jsonToReact({
    type: 'div',
    props: {
      className: 'foo',
      children: [
        {
          type: 'h1',
          props: {
            children: 'Hello dumi!',
          },
        },
      ],
    },
  });

  return reactElement;
};
```

## With style

```jsx
import { jsonToReact } from 'json-to-react';

export default () => {
  const reactElement = jsonToReact({
    type: 'div',
    props: {
      className: 'foo',
      children: [
        {
          type: 'h1',
          props: {
            style: {
              color: 'red',
            },
            children: 'Hello dumi!',
          },
        },
        {
          type: 'h1',
          props: {
            children: [
              {
                type: 'h2',
                props: {
                  children: 'Hello dumi h2!',
                },
              },
            ],
          },
        },
      ],
    },
  });

  return reactElement;
};
```

## With Component mapping

```jsx
import { jsonToReact } from 'json-to-react';
import * as componentMapping from '@arco-design/web-react';

export default () => {
  const reactElement = jsonToReact(
    {
      type: 'Space',
      props: {
        size: 'large',
        children: [
          {
            type: 'Button',
            props: {
              type: 'primary',
              children: 'Primary',
            },
          },
          {
            type: 'Button',
            props: {
              type: 'text',
              children: 'Text',
            },
          },
        ],
      },
    },
    componentMapping,
  );
  console.log('reactElement', reactElement);
  return reactElement;
};
```
