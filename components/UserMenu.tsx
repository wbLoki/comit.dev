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
                <DropdownItem color='primary' key='dashboard'>
                    My Dashboard
                </DropdownItem>
                <DropdownItem color='primary' key='profile'>
                    My Profile
                </DropdownItem>
                <DropdownItem
                    key='logout'
                    className='text-danger'
                    color='danger'
                    onPress={logout}
                >
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
