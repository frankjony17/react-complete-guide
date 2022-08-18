import React, {useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('') };
    }
    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
};

const Login = () => {
    const authContext = useContext(AuthContext);
    const [formIsValid, setFormIsValid] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        setFormIsValid(emailIsValid && passwordIsValid);

        return () => {
          console.log('EFFECT CLEANUP');
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'});
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (formIsValid) {
            authContext.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
          <form onSubmit={submitHandler}>
            <Input
                id="email"
                label="Email"
                type="email"
                isValid={emailIsValid}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                ref={emailInputRef}
            />
            <Input
                id="password"
                label="Password"
                type="password"
                isValid={passwordIsValid}
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                ref={passwordInputRef}
            />
            <div className={classes.actions}>
              <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                Login
              </Button>
            </div>
          </form>
        </Card>
    );
};

export default Login;
