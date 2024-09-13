import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navi = useNavigate();

  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}
                            onClick={() => navi('/')}
                            style={{cursor: 'pointer'}}>
                    Home
                </Typography>
                <Button color='inherit'>게시판</Button>
                <Button color='inherit'>로그인</Button>
                <Button color='inherit' onClick={() => navi('/Join')}>회원가입</Button>
            </Toolbar>
        </AppBar>
    </Box>
  );
};

export default Header;