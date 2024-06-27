import '../assets/css/navigation.css';

function NavigationBar() {
    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <h1>LiaBil</h1>
            </div>
            <li>Home</li>
            <li>Account</li>
            <li>History</li>
            <li>Graphs</li>
        </nav>
    )
}

export default NavigationBar;