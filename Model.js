/***function pour faire le tableau numero aléatoire et numero dans l'ordre */

function Ramdom_array(niveau) {
  for (let d = 0; d < niveau; d++) {
    unshuffled.push(d);
  }
  shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  // console.log(shuffled);
}

/***function pour gerer l'affichage des images****/

function showImage(block, niv) {
  let nbrCase;
  block.style.backgroundImage = "url(one.gif)";
  if (niv == niveau_1) {
    block.style.backgroundSize = "300%";
    nbrCase = 3;
  } else if (niv == niveau_2) {
    block.style.backgroundSize = "400%";
    nbrCase = 4;
  } else if (niv == niveau_3) {
    block.style.backgroundSize = "500%";
    nbrCase = 5;
  }
 // block.style.backgroundRepeat = "no-repeat";

  return nbrCase;
}
/**** function pour afficher les blocks et qui sauvegarde les resultats dans un array********** */

let array_block = [];
let result_block;
let nbr_Case = 3;

function showBlock(niv) {
  for (let i = 0; i < shuffled.length; i++) {
    block = document.createElement("img");

    block.setAttribute("id", shuffled[i]);
    block.setAttribute('onclick',`changeBlock(${shuffled[i]},${niv})`)    

    if (niv == niveau_1) {
      block.style.width = 100 / 3 + "%";
      block.style.height = 100 / 3 + "%";
    } else if (niv == niveau_2) {
      block.style.width = 100 / 4 + "%";
      block.style.height = 100 / 4 + "%";
    } else if (niv == niveau_3) {
      block.style.width = 100 / 5 + "%";
      block.style.height = 100 / 5 + "%";
    }

    tableau.appendChild(block);

    if (shuffled[i] == 8) {
      block.classList.add("empty_block");
    }
    // console.log(block);
    array_block.push(block);

    result_block = diviser_Array(niv);
    nbr_Case = showImage(block, niv);
  }
  console.log(result_block);
  for (let i = 0; i < result_block.length; i++) {
    for (let a = 0; a < result_block[i].length; a++) {
      let x = (100 / nbr_Case) * i + "%";
      let y = (100 / nbr_Case) * a + "%";
      console.log("ici");
      console.log(result_block);
      console.log(result_block[i][a]);
      result_block[i][a].style.backgroundPosition = x + " " + y;
      // array_block[i][a].style.backgroundPosition = `${(100 / nbrCase) * i}% , ${(100 / nbrCase) * a}%`;
    }
  }
   block.addEventListener("click", () => {

    tt()
})



/******function pour diviser array en plusieur sons tableau ***********/


function tt (){

  alert('ça marche')
}
function diviser_Array(niv) {
  let nbr_divis;

  if (niv == niveau_1) {
    nbr_divis = 3;
  } else if (niv == niveau_2) {
    nbr_divis = 4;
  } else if (niv == niveau_3) {
    nbr_divis = 5;
  }

  let result = array_block.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / nbr_divis);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
  //   console.log(result);
}

console.log(array_block);



function changeBlock (id,niv){

  let case_vide = document.querySelector(".empty_block");

  console.log(id,case_vide);

  let array = diviser_Array(niv)

console.log(array)

  for(let i = 0; i< array.length; i++){

      for(let a = 0 ; a< array[i].length ; a++){
          
        if(array[i][a].tagName  == id){

          console.log(array[i][a]);
        }

      }
  }

}