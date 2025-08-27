import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Movies() {
  return (
    <>
      <main className="book-list">
        <div className="Movies-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/44/Chotushkone_poster.jpg" alt=""></img>
          <h3>Chotushkone</h3>
          <p>Srijit Mukherji</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9734;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chaya-manush--bengali--et00020096-24-03-2017-18-25-19.jpg" alt=""></img>
          <h3>Chaya Manush</h3>
          <p>Arindam Mamdo Dey</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9734;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://movieassetsdigital.sgp1.cdn.digitaloceanspaces.com/original/fcc30c6e9c3c89740893e23248c68660a0a36edd" alt=""></img>
          <h3>Shubho Sharodiya</h3>
          <p>
          Rajdeep Ghosh</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
        </div>
        <div className="Movies-card">
        <Link to="/GoutamAntarjali" className="card-link">
          <img src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/000ce4674c1f8c1f0ae2d3533508d1ee513e5b508e140ad686bac0a406559f9d._RI_TTW_.jpg" alt=""></img>
          <h3>Antarjali Jatra(The Ultimate Journey: 1978)</h3>
          <p>Goutam Ghosh</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
          </Link>
        </div>
        <div className="Movies-card">
          <img src="https://static.toiimg.com/photo/msid-61264667/61264667.jpg?106682" alt=""></img>
          <h3>Abar Aranya(In the Forest... Again: 2006)</h3>
          <p>Goutam Ghose</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://m.media-amazon.com/images/I/71VRGOE2hsL._RI_.jpg" alt=""></img>
          <h3>Paromitar Ek Din(House of Memories:2000)</h3>
          <p>Aparna Sen</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://satyajitray.org/wp-content/uploads/2019/12/devi-poster-653x1024.png"></img>
          <h3>Devi(The Goddess: 1960)</h3>
          <p>Satyajit Ray</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://flxt.tmsimg.com/assets/p15163832_p_v10_aa.jpg"></img>
          <h3>Antareen (The Confined: 1993)</h3>
          <p>Mrinal Sen</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://www.scrolldroll.com/wp-content/uploads/2022/03/Mahanagar-best-movies-by-Satyajit-Ray-649x1024.jpg"></img>
          <h3>Mahanagar(The Mighty City:1993)</h3>
          <p>Satyajit Ray</p>
          <div class="stars">
            <span class="star" data-value='1'>&#9733;</span>
            <span class="star" data-value='2'>&#9733;</span>
            <span class="star" data-value='3'>&#9733;</span>
            <span class="star" data-value='4'>&#9733;</span>
            <span class="star" data-value='5'>&#9733;</span>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/c/cf/Bariwali.gif" className="poster-image" alt="Poster Image" />
          <div className="content">
            <h3>Bariwali(Landlady)</h3>
            <h4>
              Rituparno Ghosh</h4>
            <div class="stars">
              <span class="star" data-value='1'>&#9733;</span>
              <span class="star" data-value='2'>&#9733;</span>
              <span class="star" data-value='3'>&#9733;</span>
              <span class="star" data-value='4'>&#9733;</span>
              <span class="star" data-value='5'>&#9733;</span>
            </div>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://tse1.mm.bing.net/th?id=OIP.vkVaHZ90PbjrXL986yyqmQHaLH&pid=Api&P=0&h=220" className="poster-image" alt="Poster Image" />
          <div className="content">
            <h3>Dead Poet Society</h3>
            <h4>Peter Weir</h4>
            <div class="stars">
              <span class="star" data-value='1'>&#9733;</span>
              <span class="star" data-value='2'>&#9733;</span>
              <span class="star" data-value='3'>&#9733;</span>
              <span class="star" data-value='4'>&#9733;</span>
              <span class="star" data-value='5'>&#9733;</span>
            </div>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://s.yimg.com/zb/imgv1/20f433bc-416e-30ee-a3d2-fc7dd41a9ffe/t_500x300" className="poster-image" alt="Poster Image" />
          <div className="content">
            <h3>Before Sunset</h3>
            <h4>
              Richard Linklater</h4>
            <div class="stars">
              <span class="star" data-value='1'>&#9733;</span>
              <span class="star" data-value='2'>&#9733;</span>
              <span class="star" data-value='3'>&#9733;</span>
              <span class="star" data-value='4'>&#9733;</span>
              <span class="star" data-value='5'>&#9733;</span>
            </div>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg" className="poster-image" alt="Poster Image" />
          <div className="content">
            <h3>Before Sunrise</h3>
            <h4>
              Richard Linklater</h4>
            <div class="stars">
              <span class="star" data-value='1'>&#9733;</span>
              <span class="star" data-value='2'>&#9733;</span>
              <span class="star" data-value='3'>&#9733;</span>
              <span class="star" data-value='4'>&#9733;</span>
              <span class="star" data-value='5'>&#9733;</span>
            </div>
          </div>
        </div>
        <div className="Movies-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/c/c2/Raincoat_Movie_Poster.jpg" className="poster-image" alt="Poster Image" />
          <div className="content">
            <h3>Raincoat(2004)</h3>
            <h4>
              Rituparno Ghosh</h4>
            <div class="stars">
              <span class="star" data-value='1'>&#9733;</span>
              <span class="star" data-value='2'>&#9733;</span>
              <span class="star" data-value='3'>&#9733;</span>
              <span class="star" data-value='4'>&#9733;</span>
              <span class="star" data-value='5'>&#9733;</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}