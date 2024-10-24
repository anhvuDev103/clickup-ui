import _ from 'lodash';

export const getSpacingValue = (value: number, spacing = 4) => value * spacing;

export const getSpacingValueObj = (keys: number[], spacing = 4) =>
  _.keyBy(
    keys.map((key) => key * spacing),
    (o) => o / spacing,
  );
