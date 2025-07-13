import '../styles/RegisterPageStyle.css'

export const RegisterPage = () => {
    return <div className='main-page'>  
        <div className='register-form'>
            <div className='reg-header'>Регистрация</div>
            <div className='reg-form-text'>Введите логин</div>
            <input className='reg-form-item'/>

            <div className='reg-form-text'>Введите email</div>
            <input className='reg-form-item' type='email'/>

            <div className='reg-form-text'>Введите пароль</div>
            <input className='reg-form-item'/>

            <div className='reg-form-text'>Повторите пароль</div>
            <input className='reg-form-item'/>

            <div className='reg-form-item reg-button'>Регистрация</div>
            <div className='reg-form-text'>
                Есть аккаунт? <a className='href-to-login' href='/login'>Войти</a>
            </div>
        </div>
    </div>
}