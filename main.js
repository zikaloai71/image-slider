const imagesSrc=["./images/0.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg"];
const previousButton=document.getElementById('previous');
const nextButton=document.getElementById('forward');
let image=document.getElementById('image');
let li =[...document.getElementsByTagName('li')];
let  i=0;

function checkOpacity(i){
    li[i].classList.remove('opacity');
        for(let j=0;j<li.length;j++){
            if(i!==j){
                if(li[j].classList.contains('opacity')){
                    continue;
                }
                else{
                li[j].classList.add('opacity');}
                
            }

        }
}
previousButton.addEventListener('click',()=>{
    debugger
    if(i==0){
        image.src=imagesSrc[imagesSrc.length-1];
        i=imagesSrc.length-1;
        checkOpacity(i);
    }
    else{
       
        image.src=imagesSrc[i-=1];
        checkOpacity(i);
     
    } 
})
nextButton.addEventListener('click',()=>{
    debugger
    if(i==imagesSrc.length-1){
        image.src=imagesSrc[0];
        i=0;
        checkOpacity(i);
    }
    else{
        image.src=imagesSrc[i+=1];
        li[i].classList.remove('opacity');
        checkOpacity(i);
       
    }  
})
setInterval(function(){
    if(i==imagesSrc.length-1){
        image.src=imagesSrc[imagesSrc.length-1];
        checkOpacity(i);
        i=0;
    }
    else if(i==0) {
        image.src=imagesSrc[0];
        checkOpacity(i);
        i+=1;
    }
    else {
        image.src=imagesSrc[i];
        checkOpacity(i);
        i+=1;
    }

},5000);