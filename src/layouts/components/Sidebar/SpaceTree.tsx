import useSharedServices from '@hooks/useSharedServices';
import { GetHierarchyResult } from '@schemas/responses/hierarchy';
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { Tree } from 'react-arborist';

import SpaceNode from './SpaceNode';
import { SpaceTreeFrame } from './styles';
import { FormattedHierarchy, FormattedSimpleCategory } from './types';

const SpaceTree = () => {
  const { hierarchyService } = useSharedServices();

  const [spaces, setSpaces] = useState<GetHierarchyResult[]>([]);

  useEffect(() => {
    if (!hierarchyService) return;

    (async () => {
      const { result } = await hierarchyService.getHierarchy();
      setSpaces(result);
    })();
  }, [hierarchyService]);

  const treeData = useMemo(() => {
    return spaces?.reduce<FormattedHierarchy[]>((acc, cur) => {
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
  }, [spaces]);

  return (
    <SpaceTreeFrame>
      <Tree data={treeData} openByDefault={false} width='100%' height={300} indent={24} rowHeight={32}>
        {SpaceNode}
      </Tree>
    </SpaceTreeFrame>
  );
};

export default SpaceTree;
