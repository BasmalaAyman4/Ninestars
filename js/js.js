
window.onscroll = function(){
    if(window.scrollY >=200){

        document.styleSheets[6].rules[0].style.setProperty("display","block");
    }else{
        document.styleSheets[6].rules[0].style.setProperty("display","none"); 
    }
};
document.getElementsByClassName("up").onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    });
};

let item = document.querySelectorAll(".portfolio__list li");
let imgs = Array.from(document.querySelectorAll(".portfolio__img .port"));


function removeItem(event){
    item.forEach(li=>{     
            li.classList.remove("active");       
    });

   document.getElementById(event).classList.add("active")
   imgs.forEach((img) =>{
    if(event === img.getAttribute('data-port')){
        document.styleSheets[6].rules[1].style.setProperty("display","block");
        
    }else{
        document.styleSheets[6].rules[1].style.setProperty("display","none");
    }
    
   })
        }
        





 let faq = document.querySelectorAll(".faq__link")
        function myFunction(event,e) {
            event.preventDefault()
            let current;
            faq.forEach(li=>{     
                if(!li.classList.contains("hidden")){
                    current = li.id
                }
                li.classList.remove("hidden");       
        });
       if(e===current){
        document.getElementById(e).classList.remove("hidden");
        return ;
       }
            
       document.getElementById(e).classList.add("hidden");
       console.log(current)
       console.log(e)
        }
       
        


  