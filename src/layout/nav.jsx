
export default function Nav() {
    const navLinks = [
        {
            sectionName: 'company',
            href: '#company'
        },
        {
            sectionName: 'marketplace',
            href: '#marketplace'
        },
        {
            sectionName: 'features',
            href: '#features'
        },
        {
            sectionName: 'team',
            href: '#team'
        },
        {
            sectionName: 'contact',
            href: '#contact'
        },
    
    ];
    return (
        <nav className=" lg:px-[80px] md:px-[30px] px-[10px] py-[24px] flex gap-2 items-center justify-between">
            <div className="flex lg:w-2/12 gap-2">  
                <img src="../../public/logo.png" alt="logo image" className="w-[29.76px] h-[32.62px]"/>
                <h1 className="text-gray-900 font-semibold text-2xl">LandWind</h1>
            </div>
            <ul className="lg:w-8/12 flex gap-3 lg:gap-5 justify-start">
                {navLinks.map(({href , sectionName}) => {
                    return(
                        <li key={sectionName} className="text-gray-900 font-medium text-base">
                            <a href={href}>{sectionName}</a>
                        </li>
                    )
                }
            )}
            </ul>
            <div className="lg:w-2/12 md:flex hidden gap-3">
                <button className="text-gray-900">Log In</button>
                <button className="font-medium text-sm bg-purple-600 text-white p-2 rounded-lg">Get Started</button>
            </div>
        </nav>
    )
}
