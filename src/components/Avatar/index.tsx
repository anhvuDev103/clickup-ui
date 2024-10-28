import { Box, Text } from '@uikit';
import { UserStatusIcon } from '@uikit/icons';
import { BoxProps } from '@uikit/types';
import { Color } from '@vite-env';
import styled from 'styled-components';

interface Props extends BoxProps {
  label: string;
  online?: boolean;
  size?: number;
  statusColor?: Color;
  statusSize?: number;
}

const Avatar: React.FC<Props> = ({
  label,
  online,
  size = 24,
  statusColor = 'backgroundMain',
  statusSize = 12,
  ...props
}) => {
  const firstLetter = label[0];

  return (
    <AvatarFrame backgroundColor='backgroundAvatarSpace' width={size} height={size} borderRadius='5px' {...props}>
      <Text variant='bold12'>{firstLetter}</Text>
      {online && (
        <UserStatusIcon width={statusSize} height={statusSize} color={statusColor} className='Avatar_status' />
      )}
    </AvatarFrame>
  );
};

const AvatarFrame = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  .Avatar_status {
    position: absolute;
    bottom: -2px;
    right: -2px;
  }
`;

export default Avatar;
