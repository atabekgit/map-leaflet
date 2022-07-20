//Michael Harris,Stephanie Burns,Pam Parsons,Dr. Elizabeth Bryan MD,Michael Gibson MD,Tammy James,Donna Lopez,Brian Gomez,Tracy Martin,Karen Campbell,Bryan Sanchez,Sheila Ramirez,Adrian Whitney,Brett Olson,James Lawrence,Brittany Charles,Daniel Brown,Brenda Hill,Jamie Robinson,Steven Henderson,Kara Parker,Phillip Galloway,Maria Zimmerman,Samantha Rice,Brittany Nguyen,Kenneth Carter,Pamela Horn,David Lawrence,Tyler Lopez,Joe Richardson,Samantha Herrera,Christopher Davis,Tracey James,Timothy Taylor,Caroline Clements,Hannah Carter,Zachary Green,Justin Murphy,Amanda Spencer,Lucas Gutierrez,Robert Phelps,James Saunders,Joseph Wright,Miguel Young,Brittany Martin,Kevin Smith Jr.,Francisco Simpson,Douglas Lindsey,Justin Austin,Stephanie Greene,Mrs. Nicole Tucker,Rodney Richardson,Kenneth James,Tim Morrison,Angela Perry,Omar Marshall,Melissa Hamilton,Stephanie Kane,Katherine Li,Todd Webb,Mandy Sutton,Renee Black,Mark Phillips,Michelle Jones,Luis West,Pamela Mendoza,Richard Spence,Michael Campbell,Jessica Harrington,Barbara Chavez,Susan Wu,Carolyn Ferguson,Jason Rosales,Travis Ramirez,Kelly Miller,Jose Rivera,Charles Saunders DDS,Jonathan Williams,Daniel Smith IV,Stephanie Cross DDS,Patricia Norris,Kimberly Brown,Robert Burns,Danielle Reynolds,Michele Cox,Stephanie Gonzalez,Olivia Walker,Stephanie Gomez,Pamela Smith,Marco Costa,Steven Schmidt MD,Timothy Davenport,Lee Ward,Toni Smith,Mary Fox,Angela Reyes,Alexis Bell,Amber Cannon,Cynthia Morris,Kelly Burke MD
//Drake
// Mistress
// Fun Dip
// Pintsize
// First Mate
// Scout
// Bossy
// Skinny Minny
// Dilly Dally
// Knucklebutt
// Dingo
// Pop Tart
// Doobie
// Princess
// Ash
// Janitor
// Red
// Button
// Pearl
// Foxy Lady
// Big Mac
// Fatty
// Cold Brew
// Dreamey
// Smirk
// Ace
// Bruiser
// Buckeye
// Twig
// Dunce
// Dragonfly
// Hulk
// Bebe
// Maestro
// Peppermint
// Rubber
// Giggles
// LaLa
// T-Dawg
// Juicy
// Silly Sally
// Chump
// Ms. Congeniality
// Hulk
// Rosie
// Pixie Stick
// Dot
// Lulu
// Chico
// Honey Locks
// Snow White
// Filly Fally
// Huggie
// Midge
// Amour
// 4-Wheel
// Dinosaur
// Focker
// Ami
// Peppa Pig
// Schnookums
// Mustache
// Cotton
// Chef
// Smarty
// Brown Sugar
// Halfling
// Creep
// Rockette
// Butter
// Bug
// Taco
// Buttercup
// Thumper
// Goblin
// Braveheart
// Hubby
// Hammer
// Cumulus
// Frodo
// Snickers
// Betty Boop
// Cruella
// Donut
// Shnookie
// Freak
// Doofus
// Goldilocks
// Turtle
// Mini Mini
// Belle
// Punk
// Conductor
// Tank
// Ringo
// French Fry
// Blondie
// Cannoli
// Dolly
// Master
// RERUN
// OPTIONS
export const subscriber = [
  {
    id: 1,
    name: 'Atabek',
    sureName: 'Adilbek uulu',
    email: 'atabek0777774930@gmail.com',
    location: {
      lat: 42.85522522,
      long: 35.2552585
    }
  },
  {
    id: 1,
    name: 'Drake',
    sureName: 'Michael Drake',
    email: 'atabek0777774930@gmail.com',
    location: {
      lat: 42.85522522,
      long: 35.2552585
    }
  }
]

const keys = ['id',"firstName","lat","long"]
const values:any[] = []
const obj:any = {}
for(let i = 0 ; i < keys.length && i < values.length ; i++){
  obj[keys[i]] = values[i];
}

export const ser = (from: any, to: number, fixed: number) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

export const pushrandomloc = () => {
  let index: number = 0
  while (index < 1000) {
    values.push(ser(40, 80, 5))
    index += 1
  }
}






