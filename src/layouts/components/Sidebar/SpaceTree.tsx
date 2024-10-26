import { Box, Flex } from '@uikit';
import _ from 'lodash';
import { Tree } from 'react-arborist';

import SpaceNode from './SpaceNode';
import { SpaceTreeFrame } from './styles';
import { FormattedHierarchy, FormattedSimpleCategory, GetHierarchyResponse, SpaceTreeData } from './types';

const spacesHierarchy: GetHierarchyResponse[] = [
  {
    _id: '66f267abd894cdfd89bbe8ef',
    name: 'Space',
    description: '',
    is_private: false,
    members: [],
    categories: [
      {
        _id: '66f28cc951bf32e793659d03',
        name: 'Folder',
        is_private: false,
        is_hidden: false,
        subcategories: [
          {
            _id: '66f28cc951bf32e793659d04',
            name: 'List',
            is_private: false,
          },
          {
            _id: '66f28e2ae9ba5fd23c64d64e',
            name: 'List inside folder',
            is_private: false,
          },
        ],
      },
      {
        name: 'hidden',
        is_hidden: true,
        subcategories: [
          {
            _id: '66f28e8de9ba5fd23c64d64f',
            name: 'Alone List',
            is_private: false,
          },
        ],
      },
    ],
  },
];

const SpaceTree = () => {
  const treeData = spacesHierarchy.reduce<FormattedHierarchy[]>((acc, cur) => {
    const space = _.omit({ ...cur }, ['categories', '_id']) as FormattedHierarchy;

    space.id = cur._id;

    const categories = cur.categories.map<FormattedSimpleCategory>((_category) => {
      const category = _.omit({ ..._category }, ['subcategories', '_id']) as FormattedSimpleCategory;

      category.id = _category._id;
      category.children = _category.subcategories?.map((_subcategory) => {
        const subcategory = _.omit({ ..._subcategory }, '_id') as FormattedSimpleCategory;

        subcategory.id = _subcategory._id;
        return subcategory;
      });

      return category;
    });

    space.children = categories.reduce<FormattedSimpleCategory[]>((acc, cur) => {
      if (cur.is_hidden && cur.children) {
        return [...acc, ...cur.children];
      }

      return [...acc, cur];
    }, []);

    return [...acc, space];
  }, []);

  return (
    <SpaceTreeFrame>
      <Tree initialData={treeData} openByDefault={false} width='100%' height={300} indent={24} rowHeight={32}>
        {SpaceNode}
      </Tree>
    </SpaceTreeFrame>
  );
};

export default SpaceTree;
