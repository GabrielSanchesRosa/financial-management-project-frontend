function Dashboard() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-500">Painel Financeiro</h1>
        
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-black text-x1 font-semibold">Saldo Atual</h2>
                <p className="text-green-500 text-2x1">R$ 5.000,00</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-black text-x1 font-semibold">Receitas</h2>
                <p className="text-blue-500 text-2x1">R$ 8.000,00</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-black text-x1 font-semibold">Despesas</h2>
                <p className="text-red-500 text-2x1">R$ 3.000,00</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  