import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '@hooks/useAuth';

export default function UserMenu() {
    const { user, logout } = useAuth();
    const iconClasses = 'text-xl pointer-events-none flex-shrink-0';
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant='solid'
                    color='secondary'
                    className='capitalize'
                >
                    {user}
                    <Icon
                        icon='iconamoon:arrow-down-2-duotone'
                        width='24'
                        height='24'
                    />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Static Actions'>
                <DropdownItem
                    color='primary'
                    key='dashboard'
                    endContent={
                        <Icon
                            icon='material-symbols:dashboard-rounded'
                            className={iconClasses}
                        />
                    }
                >
                    My Dashboard
                </DropdownItem>
                <DropdownItem
                    color='primary'
                    key='chats'
                    endContent={
                        <Icon
                            icon='material-symbols:chat-rounded'
                            className={iconClasses}
                        />
                    }
                >
                    Chats
                </DropdownItem>
                <DropdownItem
                    color='primary'
                    key='settings'
                    endContent={
                        <Icon
                            icon='iconamoon:settings-fill'
                            className={iconClasses}
                        />
                    }
                >
                    Settings
                </DropdownItem>
                <DropdownItem
                    key='logout'
                    className='text-danger'
                    color='danger'
                    onPress={logout}
                    endContent={
                        <Icon icon='mynaui:logout' className={iconClasses} />
                    }
                >
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
