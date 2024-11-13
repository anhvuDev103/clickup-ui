import { Box, Flex } from '../Box';
import Popover from '../Popover';
import { useSelectContext } from './context';
import { SelectContentProps } from './types';

const SelectContent: React.FC<SelectContentProps> = ({ children, trigger, paperProps }) => {
  const { ref } = useSelectContext();

  if (typeof children === 'function') {
    const close = () => {
      if (ref?.current?._tippy) {
        ref.current._tippy.hide();
        return;
      }

      console.error('_tippy not found');
    };

    return (
      <Popover
        ref={ref}
        handler={<Box>{trigger}</Box>}
        placement='bottom-start'
        paperProps={{
          py: 2,
          minWidth: 184,
          ...paperProps,
        }}
      >
        <Flex flexDirection='column' width='100%'>
          {children({ close })}
        </Flex>
      </Popover>
    );
  }

  return (
    <Popover
      ref={ref}
      handler={<Box>{trigger}</Box>}
      placement='bottom-start'
      paperProps={{
        py: 2,
        minWidth: 184,
        ...paperProps,
      }}
    >
      <Flex flexDirection='column' width='100%'>
        {children as React.ReactNode}
      </Flex>
    </Popover>
  );
};

export default SelectContent;
