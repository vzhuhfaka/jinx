import '../styles/LoginPageStyle.css'

export const LoginPage = () => {
    return <div className='main-page'>
        <div className='login-form'>

            <div className='log-header'>Вход в аккаунт</div>
            <div className='log-form-text'>Введите логин</div>
            <input className='log-form-item'/>
            
            <div className='log-form-text'>Введите пароль</div>
            <input className='log-form-item'/>
            
            <div className='log-form-item log-button'>Войти</div>
            
            <div className='log-form-text'>
                Нет аккаунта? <a className='href-to-register' href='/register'>Создать аккаунт</a>
            </div>
            <div className='log-form-text'>
                <a className='href-to-register' href='/register'>Забыли пароль?</a>
            </div>
        </div>
    </div>
}