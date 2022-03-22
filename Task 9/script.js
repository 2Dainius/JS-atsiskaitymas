/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive(){
        return this.budget > 300000000
    }
}

const movie1 = new Movie('Pirates of the Caribbean: On Stranger Tides', 'Rob Marshall', '379000000')
console.log(movie1)
console.log(movie1.wasExpensive())

const movie2 = new Movie('The Blair Witch Project', 'Daniel Myrick', '35000')
console.log(movie2)
console.log(movie2.wasExpensive())