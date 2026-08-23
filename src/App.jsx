import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicNavbar from './features/public/layouts/PublicNavbar';
import Footer from './features/public/layouts/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Bungkus seluruh aplikasi dengan flex container minimum setinggi layar */}
      <div className="flex flex-col min-h-screen">
        <PublicNavbar />
        
        {/* Tambahkan flex-grow agar <main> mendorong footer ke bawah jika kontennya sedikit */}
        <main className="flex-grow pt-20">
          <Routes>
            {/* Halaman Beranda */}
            <Route 
              path="/" 
              element={
                <div className="flex items-center justify-center h-[50vh] text-2xl font-bold">
                  Ini Halaman Beranda
                </div>
              } 
            />
            
            {/* Halaman Tentang Kami */}
            <Route 
              path="/tentang" 
              element={
                <div className="flex items-center justify-center h-[50vh] text-2xl font-bold">
                  Ini Halaman Tentang Kami
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;