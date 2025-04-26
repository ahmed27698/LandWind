import { Link } from 'react-router'

const TopNavLink = ({ label, url }) => {
    console.log('TopNavLink rendered')
    return (
        <li key={label} className="px-2 hover:bg-amber-50 hover:text-gray-900">
            <Link to={url}>{label}</Link>
        </li>
    )
}

export default TopNavLink