let cardsArray = [
  {
      'name': 'pink',
      'img': 'https://media.istockphoto.com/id/1463692724/photo/abstract-art-orange-watercolor-stains-background-on-watercolor-paper-textured-for-design.jpg?s=612x612&w=is&k=20&c=WxTSxCMiTQZ5Serpp86XmxFQ2tajwjPEVxWSkxVIbTY=',
  },
  {
      'name': 'blue',
      'img': 'https://media.istockphoto.com/id/1328689113/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-calm.jpg?s=612x612&w=is&k=20&c=3SBN5WSJ6p_CsAn-j26AegXjzHQZIfXDAWai7iIrNLI=',
  },
  {
      'name': 'fire',
      'img': 'https://images.freeimages.com/images/large-previews/5a3/abstract-in-color-1171978.jpg?fmt=webp&h=350',
  },
  {
      'name': 'deep',
      'img': 'https://media.istockphoto.com/id/1155516052/photo/marble-colorful-neon-wave-pattern-prism-glitch-effect-abstract-background-dark-purple-blue.jpg?s=612x612&w=is&k=20&c=XBnbE0kWXR_pF2h-PWKHIVrrr0ytSMHVDUzODIHbWhE=',
  },
  {
      'name': 'mix',
      'img': 'https://images.freeimages.com/images/large-previews/848/drops-of-color-1-1541746.jpg?fmt=webp&h=350',
  },
  {
      'name': 'strip',
      'img': 'https://images.freeimages.com/images/large-previews/931/color-stripes-1169611.jpg?fmt=webp&h=350',
}
];

const gamecard = cardsArray.concat(cardsArray);
const parentdiv = document.querySelector("#card-section");

let shuffledChild = Array.from(gamecard).sort(()=>0.5 - Math.random());

let clickcount=0;
let firstcard="";
let secondcard="";

const card_matches = () => {
  let card_selected = document.querySelectorAll('.card_selected');

  card_selected.forEach((curElem) => {
      curElem.classList.add('card_match')
  })
}

const resetGame = () => {
  firstcard = "";
  secondcard = "";
  clickcount = 0;

  let card_selected = document.querySelectorAll('.card_selected');

  card_selected.forEach((curElem) => {
      curElem.classList.remove('card_selected')
  })

}


parentdiv.addEventListener('click',(event)=>{
    let curCard = event.target;
     
    clickcount++;
      
    if(curCard.id === "card-section"){return false }

    if(clickcount< 3)
    {
       if(clickcount===1) {
        firstcard=curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected')
       }
       else{
        secondcard= curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected')
       }
       if(firstcard !== "" && secondcard !== "")
       {
        if(firstcard === secondcard)
        {
          setTimeout(() => {
              card_matches()
              resetGame()
          }, 1000)
        }
        else
        {
          setTimeout(() => 
          {
              resetGame()
          }, 1000)
        }
     } 
    }  
});



for(let i=0; i<shuffledChild.length ; i++)
{
   const childDiv = document.createElement('div');
   childDiv.classList.add('card');
   childDiv.dataset.name = shuffledChild[i].name;

  //  childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

  const front_div = document.createElement('div');
  front_div.classList.add('front-card')

  const back_div = document.createElement('div');
  back_div.classList.add('back-card')

  back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

   parentdiv.appendChild(childDiv)

   childDiv.appendChild(front_div);
   childDiv.appendChild(back_div);

}
