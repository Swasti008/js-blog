class Blog {
  constructor(title,detail){
   this.title=title;
   this.detail=detail;
  }
  // Progression 1: Add 2 methods - addTitle(), and addDescription()

  addTitle(){
    let titleCard = document.createElement("h3");
    titleCard.setAttribute('id','postTitle');
    let card=document.getElementById('card-text');
    card.appendChild(titleCard);
    titleCard.innerHTML += this.title;
   }
  addDescription(){
     let description = document.createElement("p");
     description.setAttribute("id","detailCard");
     let card=document.getElementById('card-text');
     card.appendChild(description);
     description.innerHTML+=this.detail;
   }
  }

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
let click=0;
 function helperAddPost(){
  if (click%2==0){
    let pop=document.getElementById("popupContact");
    pop.style.display="block";
    return (click++);
  }
  else{
    let pop=document.getElementById("popupContact");
    pop.style.display="none";
    return (click++);
  }

}

function helperPost(){
  let titlePost=document.getElementById("title").value;
  let descriptionPost =document.getElementById("detail").value;
  let postBlog = new Blog(titlePost,descriptionPost);
  postBlog.addTitle();
  postBlog.addDescription();
}


