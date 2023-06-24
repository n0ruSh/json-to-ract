import React from 'react';

type Item = {
  type: string;
  props: Record<string, any> & {
    children?: Array<Item | string | number> | string | number;
  };
};

type ComponentMapping = {
  [key: string]: React.ComponentType<any>;
};

export default function toReact(
  item: Item,
  componentMapping?: ComponentMapping,
): ReturnType<typeof React.createElement> {
  // Turn the item into a React element
  const { children, ...restProps } = item.props || {};
  let _childrenElement: any = [];
  const CompType = componentMapping?.[item.type] || item.type;
  if (children) {
    if (Array.isArray(children)) {
      _childrenElement = children.map((it) =>
        toReact(it as any, componentMapping),
      );
    } else {
      _childrenElement = children;
    }
  }
  return React.createElement(CompType, restProps || {}, _childrenElement);
}
