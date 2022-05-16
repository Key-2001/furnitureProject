import React,{useState,useEffect} from 'react'
import './LoginAdmin.scss'
import {AiOutlineEye,AiOutlineEyeInvisible,AiOutlineClose} from 'react-icons/ai'

const LoginAdmin = ({adminUser,setAdminUser,handleLoginAdminPage,errPassword,errUserName}) => {
    const [isEye,setIsEye] = useState(false);
    
  return (
    <div className='wrap-login-admin'>
        <div className='wrap-login-admin-container'>
            <div className='wrap-login-admin-container-content'>
                <form className='wrap-login-admin-container-content-form'>
                    <h3 className='wrap-login-admin-container-content-form-title'>
                        ADMIN
                    </h3>
                    <div className='wrap-login-admin-container-content-form-item'>
                        <input type='text' name='userName' id='userName' placeholder='admin...' value={adminUser.userName} onChange={(e) => setAdminUser((prev) => {
                            return{
                                ...prev,
                                userName: e.target.value,
                            }
                        })}/>
                        {errUserName.isErr && <span className='err-validate'>{errUserName.msg}</span>}
                        
                    </div>
                    <div className='wrap-login-admin-container-content-form-item'>
                        <div className='relative wrap-login-admin-container-content-form-item margin-bottom-0'>
                            <input type={`${isEye ? 'text' : 'password'}`} name='password' id='password' placeholder='Mật khẩu...?' value={adminUser.password} onChange={(e) => setAdminUser((prev) => {
                                return{
                                    ...prev,
                                    password: e.target.value,
                                }
                            })}/>
                            <span className='wrap-login-admin-container-content-form-item-icon' onClick={() => setIsEye(!isEye)}>
                                {!isEye ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                            </span>
                        </div>
                        {errPassword.isErr && <span className='err-validate'>{errPassword.msg}</span>}
                    </div>
                    <button type='submit' className='wrap-login-admin-container-content-form-btn' onClick={(e) => handleLoginAdminPage(e)}>
                        Đăng nhập
                    </button>
                </form>
            </div>
            <div className='bg-opacity'/>
        </div>
    </div>
  )
}

export default LoginAdmin