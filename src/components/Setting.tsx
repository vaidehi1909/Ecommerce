"use client"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useServerAction from '@/hooks/useServerAction';
import { logoutAction } from '@/actions';
import { User } from '@/types/user';
import { useAppDispatch } from '@/hooks/redux';
import { setProfile } from '@/reducers/userSlice';

const Setting = ({ user }: { user: User }) => {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [runAction] = useServerAction(logoutAction);
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const dispatchActions = async () => {
      await dispatch(setProfile(user))
    }
    dispatchActions()
  })

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onMenuItemClick = async (item: string) => {
    if (item === "Logout") {
      await runAction(item)
    }
    handleCloseUserMenu()
  }

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar >
            {user ? user?.name?.firstname?.charAt(0)?.toUpperCase() + user?.name?.lastname?.charAt(0).toUpperCase() : <AccountCircleIcon />}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={() => onMenuItemClick('Logout')}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>

      </Menu>
    </>
  )
}

export default Setting
