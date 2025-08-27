import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Library from './Pages/Library';
import Movies from "./Pages/Movies";
import Music from "./Pages/Music";
import GoutamAntarjali from "./Pages/GoutamGhose";

function App(){
  return (
    <BrowserRouter>
    <div className="OmmayReadsBooks">
      {/*header*/}
      <header className="header">
        <h1>Trivial musings and random thoughts</h1>
        <nav>
          <Link to ="./Home">Home</Link>
          <Link to ="./Library">Books</Link>
          <Link to ="./Movies">Films</Link>
          <Link to ="./Music">Music</Link>
          <Link to="./Admin">My Journal</Link>
        </nav>
      </header>

<Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path = "/GoutamAntarjali" element={< GoutamAntarjali/>}></Route>
        </Routes>
      {/*book list */}
      {/* <main className="book-list">
        <div className="book-card">
          <img src="https://knygynas.biz/cdn/shop/products/1984_1200x1200.jpg?v=1524580368" alt=""></img>
          <h2>Nineteen Eighty-Four</h2>
          <p>George Orwell</p>
        </div>
        <div className="book-card">
          <img src="https://fs.pbs.com.bd/DIR/Com/PBS/Product/Image/2403219.jpg" alt=""></img>
          <h2>নিশিপদ্ম</h2>
          <p>বিভূতিভূষণ বন্দ্যোপাধ্যায়</p>
        </div>
        <div className="book-card">
          <img src="https://rebind.ai/images/books/thus_spoke_zarathustra_book_details.png" alt=""></img>
          <h2>Thus Spoke Zarathustra</h2>
          <p>Friedrich Nietzsche</p>
        </div>
        <div className="book-card">
          <img src="https://static-01.daraz.com.bd/p/da1cd57a5d78949896e7a3caa103ed3d.jpg"></img>
          <h2>Animal Farm</h2>
          <p>George Orwell</p>
        </div>
        <div className="book-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/0/02/A_Nice_Cup_of_Tea_%28novel%29.jpg"></img>
          <h2>A Nice Cup of Tea</h2>
          <p>Anthony Gilbert</p>
        </div>
        <div className="book-card">
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1365589874i/17788978.jpg"></img>
          <h2>দৃষ্টি-প্রদীপ</h2>
          <p>বিভূতিভূষণ বন্দ্যোপাধ্যায়</p>
        </div>
        <div className="book-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmlWv1PD0AflETtLsvVizkuaemmElc7X27A&s"></img>
          <h2>অপরাজিত</h2>
          <p>বিভূতিভূষণ বন্দ্যোপাধ্যায়</p>
        </div>
        <div className="book-card">
          <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/7110/61KRs7BDNyL.jpg"></img>
          <h2>Rabindranath Tagore - Short Stories</h2>
          <p>Rabindranath Tagore </p>
        </div>
      </main>
      {/*footer*/}
     
    </div>
    </BrowserRouter>
  )
}

export default App;