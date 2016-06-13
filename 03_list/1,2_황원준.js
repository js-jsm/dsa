Enter file contents here
function Compare(){

            var numArr = [];
            var charArr = [];
            var firstCharMovie =[];
            var movies = [
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
            var elementEA = movies.length+1;
            this.elementSmall =elementSmall;
            this.elementBig = elementBig;
            this.toString = toString;

        movies.forEach(function(v,i){ // v:value  , i : index

            var firstChar = v[i+1].split("");
            //숫자인지 문자열인지 식별 한다.
            if( !isNaN(firstChar[0]) ){ //숫자
                if(numArr.indexOf(firstChar[0]) ==-1){ //중복값이없을경우.
                     numArr.push(firstChar[0]);
                }
            }else{//문자
                if(charArr.indexOf(firstChar[0])==-1){
                    charArr.push(firstChar[0]);
                }
            }
        });
        function toString(){
            return movies;
        }
        //요소가 큰지여부.
        function elementBig(movie){
             firstCharMovie = movie.trim().split("");
                //입력받은 값에 첫글자가 숫자인지 판별.
                if( !isNaN(firstCharMovie[0]) ){

                      var arrChk =  numArr.every(function(v,i){ return v < firstCharMovie[0]; });

                      if(!arrChk){
                            console.log("입력한 요소가 기존 요소와 같거나 작습니다.");
                      }else{
                            movies.push( { elementEA : movie } );
                            console.log('영화 추가완료');
                      }

                }else{

                    var arrChk =  charArr.every(function(v,i){ return v < firstCharMovie[0]; });

                     if(!arrChk){
                            console.log("입력한 요소가 기존 요소와 같거나 작습니다.");
                      }else{
                            movies.push({elementEA:movie});
                            console.log('영화 추가완료');
                      }


                }
        }
        function elementSmall(movie){
               //입력받은 값에 첫글자가 숫자인지 판별.
               firstCharMovie = movie.trim().split("");
                if( !isNaN(firstCharMovie[0]) ){

                      var arrChk =  numArr.every(function(v,i){ return v > firstCharMovie[0]; });

                      if(!arrChk){
                            console.log("입력한 요소가 기존 요소와 같거나 큽니다.");
                      }else{
                            movies.push({elementEA:movie});
                            console.log('추가완료');
                      }

                }else{

                    var arrChk =  charArr.every(function(v,i){ return v > firstCharMovie[0]; });

                     if(!arrChk){
                            console.log("입력한 요소가 기존 요소와 같거나 큽니다.");
                      }else{
                            movies.push({elementEA:movie});
                            console.log('추가완료');
                      }
                }
        }
}

var compare = new Compare();

compare.elementBig("100");

console.log(compare.toString());
