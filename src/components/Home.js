import Sample from './Sample'
import Header from './Header'
import Footer from './Footer'
export default function Home(){
     return(
         <div>
             <header>
                  <Header />
             </header>
             <main className="d-flex justify-content-center">
                 <Sample />
             </main>
             <footer>
                 <Footer />
             </footer>
         </div>
     )
}