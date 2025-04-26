import { navLinks } from '../lib/data';
import TopNavLink from '../components/nav/TopNavLink';

export default function TopNavbar() {
    console.log('TopNavbar Rendered')

    return (
        <nav className='bg-gray-900 text-amber-400 p-4'>
            <ul className="flex gap-2">

                {navLinks.map(TopNavLink)}

            </ul>
        </nav>
    )
}

 