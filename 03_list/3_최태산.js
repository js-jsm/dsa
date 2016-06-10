class Person {
    constructor(data) {
        this.name = data.name;
        this.movie = data.movie;
    }

    getName() {
        return this.name;
    }

    getMovie() {
        return this.movie;
    }
}

class List {
    constructor() {
        this.lists = {
            movies : [],
            rentals : []
        };

        this.init();
    }

    init() {
        let films =
            `The Shqwshank Redemption
            The Godfather
            The Godfather: Part II
            Pulp Fiction
            The Good, the Bad, and the Ugly
            12 Angry Men
            Schindler's List
            The Dark Knight
            The Lord of the Rings: The Return of the King
            Fight Club
            Star Wars: Episode V - The Empire Strikes Back
            One Flew Over the Cuckoo's Nest
            The Lort of the Rings: The Fellowship of the Ring
            Inception
            Goodfellas
            Star Wars
            Seven Samurai
            The Matrix
            Forrest Gump
            City of God
            test`;

        this.lists.movies = films.split('\n').map( s => s.trim() );
    }

    doRental(data) {
        let {
                name,
                movie
                } = data,
            lists = this.lists,
            index = this.contains(lists.movies, (m) => m === movie);

        if(typeof index === 'number') {
            lists.movies.splice(index, 1);
            lists.rentals.push(
                new Person(data)
            );
        }

        return this;
    }

    doReturn(data) {
        let {
                name,
                movie
            } = data,
            lists = this.lists,
            index = this.contains(lists.rentals, (o) => o.getMovie() === movie);

        if(typeof index === 'number') {
            lists.rentals.splice(index, 1);
            lists.movies.push(
                movie
            );
        }

        return this;
    }

    contains(arr, cbf) {
        for(let i = 0, o; o = arr[i]; i++) if(cbf(o))
                return i;

        return false;
    }

    toString() {
        console.log(this.lists);
        return this;
    }
}

new List()
    .doRental({
        name : 'ts.choi',
        movie : 'test'
    })
    .toString()
    .doReturn({
        name : 'ts.choi',
        movie : 'test'
    })
    .toString();