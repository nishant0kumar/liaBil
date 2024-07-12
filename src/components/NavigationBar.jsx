import '../assets/css/navigation.css';
import logo from '../../public/liabil.svg'

import DarkMode from './DarkMode';

function NavigationBar() {
    return (
        <>
            <nav className='nav-bar'>
                <div className='logo'>
                    <img src={logo} alt="logo" className='logo-liabil'/>
                </div>
                <ul className='nav-bar'>
                    <li>
                        <i className='fa-solid fa-house'></i>
                        <p>Home</p>
                    </li>
                    <li>
                        <i className='fa-solid fa-money-bill-wave'></i>
                        <p>Account</p>
                    </li>
                    <li>
                        <i className='fa-solid fa-history'></i>
                        <p>History</p>
                    </li>
                    <li>
                        <i className='fa-solid fa-chart-area'></i>
                        <p>Graph</p>
                    </li>
                </ul>

                <DarkMode/>
            </nav>
        </>
    )
}

export default NavigationBar;