import React,{useState,useEffect} from 'react'
import './LoginForm.scss'
import {AiOutlineEye,AiOutlineEyeInvisible,AiOutlineClose} from 'react-icons/ai'
import { useGlobalContext } from '../../context'

const ForgotPassword = () => {
  const {setIsFormLogin} = useGlobalContext();

  const [isCheckPhoneNumber,setIsCheckNumber] = useState(false);
  const [checkEye,setCheckEye] = useState({
    isEye: false,
    isEyeSecond: false
  });
  const [checkPassword,setCheckPassword] = useState('');
  const [userUpdate,setUserUpdate] = useState({
    phoneNumber:'',
    password:''
  })

  const handleCheckPhoneNumber = (e) => {
    e.preventDefault();
    setIsCheckNumber(true);
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    setIsCheckNumber(false);
  }

  if(isCheckPhoneNumber){
    return(

      <div className='wrap-login'>
          <div className='wrap-login-container'>
              <div className='wrap-login-container-content'>
                  <AiOutlineClose className='close-icon' onClick={() => setIsFormLogin((prev) => {
                      return{
                          ...prev,
                          isForgotPassword:false
                      }
                  })}/>
                  <form className='wrap-login-container-content-form'>
                      <h3 className='wrap-login-container-content-form-title'>
                          Lấy lại mật khẩu
                      </h3>
                      <div className='wrap-login-container-content-form-item relative'>
                          <input type={`${checkEye.isEye ? 'text' : 'password'}`} name='password' id='password' placeholder='Mật khẩu...?' value={userUpdate.password} onChange={(e) => setUserUpdate((prev) => {
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
                      <button type='submit' className='wrap-login-container-content-form-btn' onClick={(e) => handleUpdatePassword(e)}>
                          Lấy lại mật khẩu
                      </button>
                  </form>
              </div>
          </div>
      </div>
    )
  }

  return (
    <div className='wrap-login'>
        <div className='wrap-login-container'>
            <div className='wrap-login-container-content'>
                <AiOutlineClose className='close-icon' onClick={() => setIsFormLogin((prev) => {
                    return{
                        ...prev,
                        isForgotPassword:false
                    }
                })}/>
                <form className='wrap-login-container-content-form'>
                    <h3 className='wrap-login-container-content-form-title'>
                        Lấy lại mật khẩu
                    </h3>
                    <div className='wrap-login-container-content-form-item'>
                        <input type='text' name='phoneNumber' id='phoneNumber' placeholder='SĐT của bạn' value={userUpdate.phoneNumber} onChange={(e) => setUserUpdate((prev) => {
                            return{
                                ...prev,
                                phoneNumber: e.target.value,
                            }
                        })}/>
                    </div>
                    
                    <button type='submit' className='wrap-login-container-content-form-btn' onClick={(e) => handleCheckPhoneNumber(e)}>
                        Kiểm tra 
                    </button>
                    
                </form>
                <div className='wrap-login-container-content-other-option center'>
                    <span onClick={() => setIsFormLogin((prev) => {
                        return{
                            ...prev,
                            isLogin: true,
                            isForgotPassword: false,
                        }
                    })}>Đăng nhập</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword