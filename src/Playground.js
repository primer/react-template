import { Box, FormControl, TextInput, ActionMenu, ActionList, IconButton } from '@primer/react'

import { KebabHorizontalIcon, UndoIcon, SyncIcon } from '@primer/octicons-react';

function Playground() {
    /*
    WELCOME TO MONA's 😽🐙 PLAYGROUND
    Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    Documentation: https://primer.style/react
    Documentation colors: https://primer.style/primitives/colors
  */

    return (
        <Box sx={{display: 'block', width: '100vw', height: '100vh', padding: 6, backgroundColor: 'canvas.default'}}>
            <Box sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'border.default',
                borderRadius: 2,
                flex: 1,
                backgroundColor: 'canvas.default',
                display: 'flex',
                flexDirection: 'column',
                paddingX: 3
            }}>
                <Box sx={{
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'border.default',
                    paddingY: 3,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start'
                }}>
                    <FormControl sx={{ display: 'flex', flexDirection: ['column', 'column', 'row', 'row', 'row'], flex: '1'}}>
                        <Box sx={{flex: '1', paddingRight: 3 }}>
                            <FormControl.Label>data_sensitivity</FormControl.Label>
                            <FormControl.Caption>
                            Level of sensitivity of data processed by this repository once deployed. Refer to our data classification policy for details on determining classification levels.
                            </FormControl.Caption>
                        </Box>
                        <Box sx={{width: ['100%', '275px'], marginTop: [2, 2, 1]}}>
                            <ActionMenu>
                                <ActionMenu.Button block alignContent='start'>low (default)</ActionMenu.Button>
                                <ActionMenu.Overlay width="medium">
                                <ActionList>
                                    <ActionList.Item onSelect={() => alert('Copy link clicked')}>
                                    Copy link
                                    <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
                                    </ActionList.Item>
                                    <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
                                    Quote reply
                                    <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
                                    </ActionList.Item>
                                    <ActionList.Item onSelect={() => alert('Edit comment clicked')}>
                                    Edit comment
                                    <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
                                    </ActionList.Item>
                                    <ActionList.Divider />
                                    <ActionList.Item
                                    variant="danger"
                                    onSelect={() => alert('Delete file clicked')}
                                    >
                                    Delete file
                                    <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
                                    </ActionList.Item>
                                </ActionList>
                                </ActionMenu.Overlay>
                            </ActionMenu>
                        </Box>
                    </FormControl>
                    <ActionMenu>
                        <ActionMenu.Anchor sx={{marginLeft: 2, marginTop: 1}}>
                            <IconButton icon={KebabHorizontalIcon} aria-label="Open menu" size="small" variant="invisible"/>
                        </ActionMenu.Anchor>
                        <ActionMenu.Overlay width="medium">
                        <ActionList>
                            <ActionList.Item onSelect={() => alert('Copy link clicked')}>
                                <ActionList.LeadingVisual>
                                    <UndoIcon />
                                </ActionList.LeadingVisual>
                                Undo
                                <ActionList.TrailingVisual>⌘Z</ActionList.TrailingVisual>
                            </ActionList.Item>
                            <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
                                <ActionList.LeadingVisual>
                                    <SyncIcon />
                                </ActionList.LeadingVisual>
                                Reset to default value
                            </ActionList.Item>
                        </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Box>
                <Box sx={{
                    paddingY: 3,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start'
                }}>
                    <FormControl sx={{ display: 'flex', flexDirection: ['column', 'column', 'row', 'row', 'row'], flex: '1'}}>
                        <Box sx={{flex: '1', paddingRight: 3 }}>
                            <FormControl.Label>cost_center_id</FormControl.Label>
                            <FormControl.Caption>
                                The department to which costs may be charged for accounting purposes.
                            </FormControl.Caption>
                        </Box>
                        <Box sx={{width: ['100%', '275px'], marginTop: [2, 2, 1]}}>
                            <TextInput block validationStatus="error" size="small"/>
                            <FormControl.Validation variant="error" sx={{marginTop: 1}}>Property values cannot have any spaces</FormControl.Validation>
                        </Box>
                    </FormControl>
                    <ActionMenu>
                        <ActionMenu.Anchor sx={{marginLeft: 2, marginTop: 1}}>
                            <IconButton icon={KebabHorizontalIcon} aria-label="Open menu" size="small" variant="invisible"/>
                        </ActionMenu.Anchor>
                        <ActionMenu.Overlay width="medium">
                        <ActionList>
                            <ActionList.Item onSelect={() => alert('Copy link clicked')}>
                                <ActionList.LeadingVisual>
                                    <UndoIcon />
                                </ActionList.LeadingVisual>
                                Undo
                                <ActionList.TrailingVisual>⌘Z</ActionList.TrailingVisual>
                            </ActionList.Item>
                            <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
                                <ActionList.LeadingVisual>
                                    <SyncIcon />
                                </ActionList.LeadingVisual>
                                Reset to default value
                            </ActionList.Item>
                        </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Box>
            </Box> 
        </Box>
    )
}

export default Playground
