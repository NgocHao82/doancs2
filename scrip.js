
    const header=document.querySelector("header")
    window.addEventListener("scroll",function(){
        x= window.pageYOffset
        if(x>0){
            header.classList.add("sticky")
        }
        else{
            header.classList.remove("sticky")
        }
    })




    const imgPosition=document.querySelectorAll(".aspect-ratio-169 img");
    const imgcontainer=document.querySelector('.aspect-ratio-169');
    const dotItems=document.querySelectorAll(".dot")
    let imgnumber=imgPosition.length
    let index=0;
    imgPosition.forEach(function(image,index){
        image.style.left=index*100+"%";
        dotItems[index].addEventListener("click",function(){
            slider(index);  
        })
    })
    function imgslide(){
        index++;
        if(index>=imgnumber){
            index=0;
        }
         slider(index);  
        
    }
    function slider(index){
        imgcontainer.style.left= "-"+index*100+"%";
        const dotActive=document.querySelector('.active')
        dotActive.classList.remove('active')
        dotItems[index].classList.add("active")
    }
    setInterval(imgslide,5000)

// -------------------MENU SLIDE CTEGORY-----------------
const itemsliderbar = document.querySelectorAll(".category-left-item")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){

        menu.classList.toggle("block")
    })
})

//------------------------PRODUCT-----------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src= imgItem.src
    })
})





const chitiet = document.querySelector(".chitiet")
const baoquan = document.querySelector(".baoquan")

if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none";
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="block";
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block";
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none";
    })
}

const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}
