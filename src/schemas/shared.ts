import { ColumnFieldsType } from '@constants/enums';
import { SvgProps } from '@uikit/types';

export interface ColumnField {
  label: string;
  disabed?: true;
  default: ColumnFieldsType;
  icon: React.FC<SvgProps>;
}
