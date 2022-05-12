import React,{useState,useEffect} from 'react'
import './LoginForm.scss'
import {AiOutlineEye,AiOutlineEyeInvisible,AiOutlineClose} from 'react-icons/ai'
import { useGlobalContext } from '../../context'

const Login = () => {
    const {setIsFormLogin} = useGlobalContext();

    const [isEye,setIsEye] = useState(false);
    const [userLogin,setUserLogin] = useState({
        phoneNumber: '',
        password:''
    })

  return (
    <div className='wrap-login'>
        <div className='wrap-login-container'>
            <div className='wrap-login-container-content'>
                <AiOutlineClose className='close-icon' onClick={() => setIsFormLogin((prev) => {
                    return{
                        ...prev,
                        isLogin:false
                    }
                })}/>
                <form className='wrap-login-container-content-form'>
                    <h3 className='wrap-login-container-content-form-title'>
                        Đăng nhập
                    </h3>
                    <div className='wrap-login-container-content-form-item'>
                        <input type='text' name='phoneNumber' id='phoneNumber' placeholder='SĐT của bạn' value={userLogin.phoneNumber} onChange={(e) => setUserLogin((prev) => {
                            return{
                                ...prev,
                                phoneNumber: e.target.value,
                            }
                        })}/>
                    </div>
                    <div className='wrap-login-container-content-form-item relative'>
                        <input type={`${isEye ? 'text' : 'password'}`} name='password' id='password' placeholder='Mật khẩu...?' value={userLogin.password} onChange={(e) => setUserLogin((prev) => {
                            return{
                                ...prev,
                                password: e.target.value,
                            }
                        })}/>
                        <span className='wrap-login-container-content-form-item-icon' onClick={() => setIsEye(!isEye)}>
                            {!isEye ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                        </span>
                    </div>
                    <button type='submit' className='wrap-login-container-content-form-btn'>
                        Đăng nhập
                    </button>
                    <div className='login-or-divider'>
                        hoặc
                    </div>
                    <div className='wrap-login-container-content-form-facebook'>
                        <div className='wrap-login-container-content-form-facebook-inner'>
                            Đăng nhập với Facebook
                        </div>
                        <div className='wrap-login-container-content-form-facebook-img'>
                            <img src='https://www.coolmate.me/images/facebook.svg' alt='facebookLogo'/>
                        </div>
                    </div>
                    <div className='wrap-login-container-content-form-google'>
                        <div className='wrap-login-container-content-form-google-inner'>
                            Đăng nhập với Google
                        </div>
                        <div className='wrap-login-container-content-form-google-img'>
                            <img src='https://www.coolmate.me/images/google.svg' alt='googleLogo'/>
                        </div>
                    </div>
                </form>
                <div className='wrap-login-container-content-other-option'>
                    <span onClick={() => setIsFormLogin((prev) => {
                        return{
                            ...prev,
                            isLogin: false,
                            isRegister: true,
                        }
                    })}>Đăng ký tài khoản mới</span>
                    <span onClick={() => setIsFormLogin((prev) => {
                        return{
                            ...prev,
                            isLogin:false,
                            isForgotPassword: true
                        }
                    })}>Quên mật khẩu</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login