

var movies =
[
{"1": "The Shawshank Redemption"},{"2": "The Godfather"},
{"3": "The Godfather : Part II"},{"4":"Pulp Fiction"},
{"5":"The Good, the Bad and the Ugly"},
{"6":"12 Angry Men"},{"7":"Schindler's List"},{"8":"The Dark Knight"},
{"9":"The Lord of the Rings: The Return of the King"},{"10": "Fight Club"},
{"11":"Star Wars : Episode V - The Empire Strikes Back"},
{"12": "One Flew Over the Cuckoo's Nest"},
{"13": "The Lord of the Rings: The Fellowship of the Ring"},
{"14": "Inception"},{"15": "Goodfellas"},{"16": "Star Wars"},
{"17": "Seven Samurai"},{"18": "The Matrix"},
{"19": "Forrest Gump"},{"20": "City of God"}
];

var movieList = movies.map(function(v){return v;});
var customers =[];
//대여가능한 영화리스트
function availableList(){
    for(var i =0; i<movieList.length; i++){
        console.log(movieList[i][i+1]);
    }
}
//대여목록
function rentalList(){
    console.log("대여된 영화 리스트");
    console.log(customers);
}
//대여
function checkOut(name,movie){

    movieList.forEach(function(value,index){
        if( value[index+1] ==movie ){
        var customer = { "name" : name , "movie" : value[index+1] , "barcord" : index+1 }
        console.log(movie +"대여가 완료되었습니다.");
         customers.push(customer);
         movieList.splice(index,1);
        }
    });

}
//반납
function checkIn(r_name,r_movie){


    customers.forEach(function(value,index){
        console.log(value);
        console.log(value.name);
        console.log(value.movie);

        if( value.name ==r_name && value.movie==r_movie){
                var propKey = value.barcord;
                movieList.push({ propKey : r_movie });
                customers.splice(index,1);
        }else{
            console.log("반납자 정보 또는 대여한 영화  불일치로 반납처리 되지않았습니다.")
        }
    });

}

checkIn("wonjun","City of God");//대여
rentalList(); //대여된 리스트
availableList(); //대여가능한 영화리스트
checkIn("wonjun","City of God"); //반납
