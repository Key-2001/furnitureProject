import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../../context'
import LoginAdmin from './LoginAdmin/LoginAdmin';
import SidebarAdmin from './SideBar/SidebarAdmin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import User from './User/User';
import { loginAdmin } from '../../services/adminService';

const AdminPage = () => {
    const {setIsAdminPage} = useGlobalContext();
    const [isLoginAdmin,setIsLoginAdmin] = useState(true);
    const [adminUser,setAdminUser] = useState({
        userName:'',
        password:'',
    })
    const [errUserName,setErrUserName] = useState({isErr:false,msg:''});
    const [errPassword,setErrPassword] = useState({isErr:false,msg:''});

    useEffect(() => {
        setIsAdminPage(true);
    },[])

    const validateAdminLogin = (data,errCodeMsg) => {
        const userNameInput = document.getElementById('userName');
        const passwordInput = document.getElementById('password');
        // check userName
        if(data.userName === ''){
            setErrUserName((prev) => {
                return{
                    ...prev,
                    isErr: true,
                    msg:    'Vui lòng nhập userName!!!'
                }
            });
            userNameInput.classList.add('is-err');
        }
        
        // check password
        if(data.password === ''){
            setErrPassword((prev) => {
                return{
                    ...prev,
                    isErr: true,
                    msg: 'Vui lòng nhập password!!!'
                }
            })
            passwordInput.classList.add('is-err')
        }
        
        
    }

    const validateAdminLastCheck = (errCodeMsg) => {
        const userNameInput = document.getElementById('userName');
        const passwordInput = document.getElementById('password');

        if(errCodeMsg.errCode === 1){
            setErrUserName((prev) => {
                return{
                    ...prev,
                    isErr: true,
                    msg:    errCodeMsg.msg,
                }
            });
            userNameInput.classList.add('is-err');
        }

        if(errCodeMsg.errCode === 2){
            setErrPassword((prev) => {
                return{
                    ...prev,
                    isErr: true,
                    msg: errCodeMsg.msg,
                }
            })
            passwordInput.classList.add('is-err')
        }
    }

    const handleLoginAdminPage = async (e) => {
        e.preventDefault();
        validateAdminLogin(adminUser)
        if(!errPassword.isErr && !errUserName.isErr && adminUser.userName!=='' && adminUser.password !== ''){
            const admin = await loginAdmin(adminUser);
            validateAdminLastCheck(admin);
            if(!admin.errCode){
                setIsLoginAdmin(false);
            }
        }
    }

    useEffect(() => {
        const userNameInput = document.getElementById('userName')
        setErrUserName((prev) => {
            return{
                ...prev,
                isErr: false,
                msg:    ''
            }
        });
        userNameInput.classList.remove('is-err');
    },[adminUser.userName])

    useEffect(() => {
        const passwordInput = document.getElementById('password');
        setErrPassword((prev) => {
            return{
                ...prev,
                isErr: false,
                msg: ''
            }
        })
        passwordInput.classList.remove('is-err')
    },[adminUser.password])

    if(isLoginAdmin){
        return(
            <LoginAdmin adminUser={adminUser} setAdminUser={setAdminUser} handleLoginAdminPage={handleLoginAdminPage} errPassword={errPassword} errUserName={errUserName}/>
        )
    }

  return (
    <div className='wrap-admin-page'>
        <Router>
            <SidebarAdmin/>
            <Switch>
                <Route path='/admin/users'>
                    <User/>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default AdminPage