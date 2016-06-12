const   List = require('./classes/List'),
        jx = require('./utils/jx');

class Customer {
    constructor(name, movie) {
        this.name = name;
        this.movie = movie;
    }
}
class MovieRental {
    constructor(){
        this.movieList = new List();
        this.rentalList = new List();
        this.customerList = new List();
    }
    display(list){
        let res = '';
        for(let o of list){
            if(o instanceof Customer) res +=`${o.name}, ${o.movie}\n`;
            else res += o + '\n';
        }
        console.log(res);
    }
    checkOut(name, movie){
        if(this.movieList.contains(movie)){
            this.customerList.append(new Customer(name, movie));
            this.movieList.remove(movie);
            this.rentalList.append(movie);
        } else {
            console.log(`\n** ${movie} is not available **`);
        }
    }
    checkIn(movie){
        if(this.rentalList.contains(movie)) {
            this.customerList.remove(
                this.customerList.findElem((v,k) => {
                    if(v.movie === movie) return true;
                })
            );
            this.movieList.append(movie);
            this.rentalList.remove(movie);
        }
    }
    rent(){
        const rentOrReturn = prompt('(1)Rent / (2)Return');
        if(rentOrReturn === '1') {
            const name = prompt('Enter your name');
            const movie = prompt('What movie would you like?');

            this.checkOut(name, movie);
            console.log('\nCustomer Rentals\n================');
            this.display(this.customerList);
            console.log('\nMovies Now Available\n====================');
            this.display(this.movieList);

        } else if(rentOrReturn === '2'){
            const movie = prompt('Which movie would you like to return?');
            this.checkIn(movie);
            console.log('\nCustomer Rentals\n================');
            this.display(this.customerList);
            console.log('\nMovies Now Available\n====================');
            this.display(this.movieList);
        }

        if(confirm('Would you like to finish?')) return;
        this.rent();
    }
}

jx.load('../data/films.txt', (res)=>{
    const movieRental = new MovieRental();
    const movies = res.split('\n').map(_=> _.trim());
    for(let movie of movies) { movieRental.movieList.append(movie); }
    console.log('\nAvailable Movies\n==================');
    movieRental.display(movieRental.movieList);        
    movieRental.rent();
});