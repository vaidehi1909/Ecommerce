"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCategoryList } from '@/hooks/useCategoryList';
import { captalize } from '@/helpers';
import { useAppDispatch } from '@/hooks/redux';
import { setSelectedCategory } from '@/reducers/productSlice';

const ProductCategory = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch()
  const { categories } = useCategoryList()
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = async (item: string) => {
    dispatch(setSelectedCategory(item))
    handleClose()
  }

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        sx={{ mr: 2 }}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Category
      </Button>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      > {categories?.map((category: string) => (
        <MenuItem key={category} onClick={() => onMenuItemClick(category)}>
          <Typography textAlign="center">{captalize(category)}</Typography>
        </MenuItem>
      ))}
      </Menu>
    </>
  )
}

export default ProductCategory
