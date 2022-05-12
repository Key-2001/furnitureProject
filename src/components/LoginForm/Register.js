import React,{useState,useEffect} from 'react'
import './LoginForm.scss'
import {AiOutlineEye,AiOutlineEyeInvisible,AiOutlineClose} from 'react-icons/ai'
import { useGlobalContext } from '../../context'

const Register = () => {
  const {setIsFormLogin} = useGlobalContext();
  const [checkEye,setCheckEye] = useState({
    isEye: false,
    isEyeSecond: false
  });
  const [userRegister,setUserRegister] = useState({
    name: '',
    phoneNumber:  '',
    password: '',
    email:  '',
  })
  const [checkPassword,setCheckPassword] = useState('')


  return (
    <div className='wrap-login'>
        <div className='wrap-login-container'>
            <div className='wrap-login-container-content'>
                <AiOutlineClose className='close-icon' onClick={() => setIsFormLogin((prev) => {
                    return{
                        ...prev,
                        isRegister:false
                    }
                })}/>
                <form className='wrap-login-container-content-form'>
                    <h3 className='wrap-login-container-content-form-title'>
                        Đăng ký tài khoản
                    </h3>
                    <div className='wrap-login-container-content-form-item'>
                        <input type='text' name='name' id='name' placeholder='Tên của bạn' value={userRegister.name} onChange={(e) => setUserRegister((prev) => {
                            return{
                                ...prev,
                                name: e.target.value,
                            }
                        })}/>
                    </div>
                    <div className='wrap-login-container-content-form-item'>
                        <input type='text' name='phoneNumber' id='phoneNumber' placeholder='SĐT của bạn' value={userRegister.phoneNumber} onChange={(e) => setUserRegister((prev) => {
                            return{
                                ...prev,
                                phoneNumber: e.target.value,
                            }
                        })}/>
                    </div>
                    <div className='wrap-login-container-content-form-item'>
                        <input type='text' name='email' id='email' placeholder='Email của bạn' value={userRegister.email} onChange={(e) => setUserRegister((prev) => {
                            return{
                                ...prev,
                                email: e.target.value,
                            }
                        })}/>
                    </div>
                    <div className='wrap-login-container-content-form-item relative'>
                        <input type={`${checkEye.isEye ? 'text' : 'password'}`} name='password' id='password' placeholder='Mật khẩu...?' value={userRegister.password} onChange={(e) => setUserRegister((prev) => {
                            return{
                                ...prev,
                                password: e.target.value,
                            }
                        })}/>
                        <span className='wrap-login-container-content-form-item-icon' onClick={() => setCheckEye((prev) => {
                          return{
                            ...prev,
                            isEye: !checkEye.isEye
                          }
                        })}>
                            {!checkEye.isEye ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                        </span>
                    </div>
                    <div className='wrap-login-container-content-form-item relative'>
                        <input type={`${checkEye.isEyeSecond ? 'text' : 'password'}`} name='checkPassword' id='checkPassword' placeholder='Nhập lại mật khẩu...?' value={checkPassword} onChange={(e) => setCheckPassword(() => {
                            return e.target.value
                        })}/>
                        <span className='wrap-login-container-content-form-item-icon' onClick={() => setCheckEye((prev) => {
                          return{
                            ...prev,
                            isEyeSecond: !checkEye.isEyeSecond
                          }
                        })}>
                            {!checkEye.isEyeSecond ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                        </span>
                    </div>
                    <button type='submit' className='wrap-login-container-content-form-btn'>
                        Đăng ký
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
                <div className='wrap-login-container-content-other-option center'>
                    <span onClick={() => setIsFormLogin((prev) => {
                        return{
                            ...prev,
                            isLogin: true,
                            isRegister: false,
                        }
                    })}>Đăng nhập</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register