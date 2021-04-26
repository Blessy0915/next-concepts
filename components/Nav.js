import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const navLinks = [
    {id : 1, title : 'Home', url : '/', },
    {id : 2, title : 'about-us', url: '/about-us', tempcode : 'template1'},
    {id : 3, title : 'about-company', url : '/about-company', tempcode : 'template1'},
    {id : 4, title : 'policy', url : '/policy', tempcode : 'template2'}
]
const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
            {
                navLinks.map(navItem => {
                    return (
                        <li key={navItem.id}>
                            <Link href={navItem.url}>{navItem.title}</Link>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default Nav
