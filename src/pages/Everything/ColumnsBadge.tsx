import { ColumnFieldsType } from '@constants/enums';
import { COLUMNS } from '@constants/shared';
import { ColumnField } from '@schemas/shared';
import { Box, Button, Drawer, Flex, Switch, Text } from '@uikit';
import Input from '@uikit/components/Input';
import { ArrowLeftIcon, CloseIcon, ColumnIcon, SearchIcon } from '@uikit/icons';
import _ from 'lodash';
import { useState } from 'react';

const ColumnsBadge = () => {
  const [fields, setFields] = useState(_.groupBy<ColumnField>(COLUMNS, 'default'));

  const renderSwitchsByType = (type: ColumnFieldsType) => {
    return fields[type].map((field) => {
      const Icon = field.icon;
      return (
        <Switch disabled={field.disabed} handlerProps={{ scale: 'sm' }} key={field.label}>
          <Flex gap='12px'>
            <Icon width='16px' height='16px' />
            <Text fontSize='14px' color='currentColor'>
              {field.label}
            </Text>
          </Flex>
        </Switch>
      );
    });
  };

  return (
    <Drawer.Root containerSelector='#Everything_tabContent'>
      <Drawer.Trigger>
        <Button
          variant='outlined'
          scale='xs'
          borderRadius='12px'
          borderColor='borderControlTagBorder'
          color='contentControlTag'
          startIcon={<ColumnIcon width={14} height={14} />}
        >
          Columns
        </Button>
      </Drawer.Trigger>
      <Drawer.Content px={0} py='12px'>
        {({ close }) => (
          <Flex width='100%' height='100%' flexDirection='column' alignItems='stretch' justifyContent='flex-start'>
            <Flex pr='12px' pb={2} pl='16px' gap={2}>
              <Button scale='xs' variant='text' square label='Back'>
                <ArrowLeftIcon width='16px' height='16px' color='contentButton' />
              </Button>
              <Text variant='semi16'>Fields</Text>
              <Button variant='text' square ml='auto' label='Close' labelPlacement='left' onClick={close}>
                <CloseIcon width='16px' height='16px' color='contentButton' />
              </Button>
            </Flex>
            <Flex flexDirection='column' alignItems='stretch' justifyContent='flex-start' overflowY='hidden'>
              <Input
                borderRadius='6px'
                startIcon={<SearchIcon width='16px' height='16px' color='contentIcon' />}
                inputProps={{
                  placeholder: 'Search...',
                }}
                flexShrink={0}
                mx='12px'
              />
              <Flex flexDirection='column' alignItems='stretch' justifyContent='flex-start' overflowY='auto' mb='40px'>
                <Flex flexDirection='column' alignItems='stretch' justifyContent='flex-start' mx={2}>
                  <Flex py={2}>
                    <Text color='contentTertiary' fontWeight={500} px={2}>
                      Shown
                    </Text>
                    <Button variant='text' scale='xxs' height='16px' backgroundColorHover='transparent'>
                      Hide all
                    </Button>
                  </Flex>
                  {renderSwitchsByType(ColumnFieldsType.Shown)}
                  <Flex py={2}>
                    <Text color='contentTertiary' fontWeight={500} px={2}>
                      Popular
                    </Text>
                  </Flex>
                  {renderSwitchsByType(ColumnFieldsType.Popular)}

                  <Flex py={2}>
                    <Text color='contentTertiary' fontWeight={500} px={2}>
                      Hidden
                    </Text>
                  </Flex>
                  {renderSwitchsByType(ColumnFieldsType.Hidden)}
                </Flex>
              </Flex>
              <Box p='16px' pb={1} borderTop='1px solid' borderColor='borderDefault'>
                <Button width='100%'>Create Field</Button>
              </Box>
            </Flex>
          </Flex>
        )}
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default ColumnsBadge;
