
let btn = document.querySelector('#new-quote');
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");


const quotes = [
    {
        quote: "The only constant in the technology industry is change.",
        person: "Marc Benioff"
    },
    {
        quote: "The 4 Ps for Change and Release: Planning Prevents Poor Performance.",
        person: "Unknown"
    },
    {
        quote: "Any sufficiently advanced bug is indistinguishable from a feature.",
        person: "Rick Kulaweic"
    },
    {
        quote: "IT is ever-changing and there is the need to evolve in order to stay relevant.",
        person: "Ryan Ogilvie"
    },
    {
        quote: "A Release is like a boat. 80% of the holes plugged is not good enough.",
        person: "Unknown"
    },
    {
        quote: "Try harder next time... is not a problem management method mentioned in ITIL.",
        person: "Denis Matte"
    },
    {
        quote: "If you want a 2-3% efficiency improvement in IT service management, work harder. If you want a 30-50% efficiency improvement, adopt Lean.",
        person: "Stuart Rance"
    },
    {
        quote: "Any improvements made anywhere except the bottleneck are an illusion.",
        person: "The Phoenix Project"
    },
    {
        quote: "ITSM is full of verschlimmbesserung – supposed improvements that make things worse. Correct this by adopting better change management principles and aligning all initiatives to a shared goal – exceptional customer experience.",
        person: "Stuart Rance"
    },
    {
        quote: "In our company, we all have 2 jobs: 1) to do our job and 2) to improve it.",
        person: "Toyota"
    },
    {
        quote: "It is better to have a frustrated person who complains than someone who no longer cares about the system in place.",
        person: "Ryan Ogilvie"
    }
];

// generate new quote upon a click
btn.addEventListener("click", function(){
    //generate a random index within the quotes array
    let random = Math.floor(Math.random()  * quotes.length);

    // return the quote as a string
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})