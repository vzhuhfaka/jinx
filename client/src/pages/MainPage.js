import '../styles/MainPageStyle.css'
import { Menu } from '../components/Menu'

export const MainPage = () => {
    return <div className="main-page">
        <div className="left-menu"><Menu/></div>

        <div className='content'>
            <input placeholder='Поиск по категориям' className='search-bar' />
            <div className='categories'>
                <div className='card'>item1</div>
                <div className='card'>item2</div>
                <div className='card'>item3</div>
            </div>
        </div>
    </div>
}