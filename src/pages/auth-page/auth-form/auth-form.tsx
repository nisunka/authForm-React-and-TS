import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import './auth-form.css';
import { loginValidation, passwordValidation } from './validation';

interface ISignInForm {
    login: string;
    password: string;
}

export const AuthForm: React.FC = () => {

    const { handleSubmit, control } = useForm<ISignInForm>({
        defaultValues: {
            login: '',
            password: ''
        }
    });
    const { errors } = useFormState({
        control
    });

    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className='auth-form'>
        <Typography variant="h4" component="div">
            Войти
        </Typography>

        <Typography variant="subtitle1" component="div" gutterBottom={ true } className='auth-form__subtitle'>
            Чтобы получить доступ
        </Typography>

        <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control = { control }
                name = 'login'
                rules = {loginValidation}
                render = {({field}) => (
                    <TextField
                        value = { field.value }
                        label='Логин или телефон'
                        size = 'small'
                        margin = 'normal'
                        fullWidth = { true }
                        className='auth-form__input'
                        onChange = {(e) => field.onChange(e)}
                        error = { !!errors.login?.message } // подсвечиваем красным required надпись
                        // тут loign ищ интерфейса берем, если message будет, он будет его отображать 
                        helperText = { errors.login?.message }
                    />
                )}
            />

            <Controller
                control = { control }
                name = 'password'
                rules = {passwordValidation}
                render = {({field}) => (
                    <TextField
                        value = { field.value }
                        label='Пароль'
                        type = 'password'
                        size = 'small'
                        margin = 'normal'
                        fullWidth = { true }
                        className='auth-form__input'
                        onChange = {(e) => field.onChange(e)}
                        error = { !!errors.password?.message }
                        helperText = { errors.password?.message }
                    />
                )}
            />

            <Button 
                type = 'submit'
                variant = 'contained'
                fullWidth = { true }
                disableElevation = { true }
                sx = {{
                    marginTop: 2
                }}
            >
                Войти
            </Button>
        </form>
    </div>
  )
}
