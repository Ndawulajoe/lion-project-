const photes=[
    './photes/1.jpeg',
    './photes/3.jpeg',
    './photes/4.jpeg',
    './photes/5.jpeg',
    './photes/6.jpeg',
    './photes/6.jpeg',
    './photes/7.jpeg',
    './photes/8.jpeg',
    './photes/9.jpeg',
    
    

]
const myPhotes =function(){
    const idx=Math.floor(Math.random()*photes.length);
    const screen =document.querySelector('#phot')
    screen.style.backgroundImage= "url('"+photes[idx]+"')";
    this.style.backgroundImage = "url('"+photes[idx]+"')";
    
    console.log(this.style.backgroundImage)
}

 const allPhotes=document.querySelector('#photez')
 for(let i = 0; i < 4; i++){
    const openMe=document.createElement('div');
    openMe.innerText= 'phote';
    openMe.addEventListener('click',myPhotes)
    allPhotes.appendChild(openMe)
    

}