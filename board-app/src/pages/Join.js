import React, {useState, useCallback} from 'react';
import {Button, Container, Grid, Link, TextField, Typography} from '@mui/material';

const Join = () => {
    const [joinForm, setJoinForm] = useState({
        username: '',
        password: '',
        passwordCheck: '',
        nickname: '',
        email: '',
        tel: ''
    });
    const [usernameChk, setUsernameChk] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [passwordChk, setPasswordChk] = useState(false);
    const [nicknameChk, setNicknameChk] = useState(false);

    const changeTextField = useCallback((e) => {
        setJoinForm({
            ...joinForm,
            [e.target.name]: e.target.value
        });

        if(e.target.name === 'username') {
            setUsernameChk(false);
            document.querySelector("#username-chk-btn").removeAttribute('disabled');
            return;
        }

        if(e.target.name === 'password') {
            if(e.target.value === joinForm.passwordCheck) {
                setPasswordChk(true);
                document.querySelector("#password-check-success").style.display = 'block';
                document.querySelector("#password-check-fail").style.display = 'none';
            } else {
                setPasswordChk(false);
                document.querySelector("#password-check-success").style.display = 'none';
                document.querySelector("#password-check-fail").style.display = 'block';
            }
        }

        if(e.target.name === 'passwordCheck') {
            if(e.target.value === joinForm.password) {
                setPasswordChk(true);
                document.querySelector("#password-check-success").style.display = 'block';
                document.querySelector("#password-check-fail").style.display = 'none';
            } else {
                setPasswordChk(false);
                document.querySelector("#password-check-success").style.display = 'none';
                document.querySelector("#password-check-fail").style.display = 'block';
            }
        }
    }, [joinForm]);

  return (
    <Container component='div' maxWidth='xs' style={{marginTop: '8%'}}>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component='h1' variant='h5'>
                        회원가입
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign='right'>
                    <TextField
                        name='username'
                        variant='outlined'
                        required
                        id='username'
                        label='아이디'
                        autoFocus
                        fullWidth
                        value={joinForm.username}
                        onChange={changeTextField}
                    ></TextField>
                    <Button name='username-chk-btn' id='username-chk-btn' color='primary'>
                        중복확인
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='password'
                        variant='outlined'
                        required
                        id='password'
                        label='비밀번호'
                        fullWidth
                        type='password'
                        value={joinForm.password}
                        onChange={changeTextField}
                    ></TextField>
                    <Typography
                        name='password-validation'
                        id='password-validation'
                        component='p'
                        variant='string'
                        style={{display: 'none', color: 'red'}}>
                        비밀번호는 특수문자, 영문자, 숫자 조합의 9자리 이상으로 지정하세요.        
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='passwordCheck'
                        variant='outlined'
                        required
                        id='passwordCheck'
                        label='비밀번호 확인'
                        fullWidth
                        type='password'
                        value={joinForm.passwordCheck}
                        onChange={changeTextField}
                    ></TextField>
                    <Typography
                        name='password-check-success'
                        id='password-check-success'
                        component='p'
                        variant='string'
                        style={{display: 'none', color: 'green'}}>
                        비밀번호가 일치합니다.        
                    </Typography>
                    <Typography
                        name='password-check-fail'
                        id='password-check-fail'
                        component='p'
                        variant='string'
                        style={{display: 'none', color: 'red'}}>
                        비밀번호가 일치하지 않습니다.        
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign='right'>
                    <TextField
                        name='nickname'
                        variant='outlined'
                        required
                        id='nicname'
                        label='닉네임'
                        fullWidth
                        value={joinForm.nickname}
                        onChange={changeTextField}
                    ></TextField>
                    <Button name='nickname-chk-btn' id='nickname-chk-btn' color='primary'>
                        중복확인
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='email'
                        variant='outlined'
                        required
                        id='email'
                        label='이메일'
                        fullWidth
                        value={joinForm.email}
                        onChange={changeTextField}
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='tel'
                        variant='outlined'
                        required
                        id='tel'
                        label='전화번호'
                        fullWidth
                        value={joinForm.tel}
                        onChange={changeTextField}
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'>
                        회원가입
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
  );
};

export default Join;