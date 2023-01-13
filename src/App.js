import Nav from "./app/components/nav";
import Hero from "./app/components/nav/hero";
import MovieList from "./app/components/nav/MovieList";


function App() {
  return (
<div className="bg-gray-900 ">
    <div className="max-w-5xl mx-auto">
       <Nav/>
       <Hero/>
       <MovieList 
       title="Top Rated🔥" 
       filter="sort_by=rating"
       carousel= {true}
       />

       <MovieList
        title="Action🔥" 
       filter="genre=action"
       carousel= {true}
       />
       <MovieList
       title="Drama🔥" 
       filter="genre=drama"
       carousel= {true}
       />
       <MovieList
        title="Thriller" 
       filter="genre=thriller" 
       carousel= {true}
       />
    </div>

</div>
  );
}

export default App;
