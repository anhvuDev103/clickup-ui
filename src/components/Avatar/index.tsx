import { Box, Text } from '@uikit';
import { UserStatusIcon } from '@uikit/icons';
import { BoxProps } from '@uikit/types';
import styled from 'styled-components';

interface Props extends BoxProps {
  label: string;
  online?: boolean;
  size?: number;
}

const Avatar: React.FC<Props> = ({ label, online, size = 24, ...props }) => {
  const firstLetter = label[0];

  return (
    <AvatarFrame backgroundColor='backgroundAvatarSpace' width={size} height={size} borderRadius='5px' {...props}>
      <Text variant='bold12'>{firstLetter}</Text>
      {online && <UserStatusIcon width={9} height={9} color='backgroundAvatarCutOut' className='Avatar_status' />}
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
