import Text, { Box } from '@uikit';
import { UserStatusIcon } from '@uikit/components/Svg';
import styled from 'styled-components';

interface Props {
  username: string;
}

const Avatar: React.FC<Props> = ({ username }) => {
  const firstLetter = username[0];

  return (
    <AvatarFrame>
      <UserStatusIcon width={9} height={9} color='backgroundAvatarCutOut' className='Avatar_status' />
      <Text variant='bold14'>{firstLetter}</Text>
    </AvatarFrame>
  );
};

const AvatarFrame = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.radii.full + 'px'};
  background-color: #fff;

  position: relative;

  .Avatar_status {
    position: absolute;
    bottom: -2px;
    right: -2px;
  }
`;

export default Avatar;
