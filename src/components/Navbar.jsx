function Navbar() {
    return (
        <div className="min-h-screen">
            <nav className="bg-blue-600 text-white p-4 flex justify-between">
                <h1 className="text-x1 font-bold">Finance App</h1>
                <ul className="flex gap-4">
                    <li><a href="#" className="hover:text-gray-200">Dashboard</a></li>
                    <li><a href="#" className="hover:text-gray-200">Transações</a></li>
                    <li><a href="#" className="hover:text-gray-200">Rel</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;