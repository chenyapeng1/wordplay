window.onload=function(){
    //声音的样式的变化
    let music=document.querySelector("#music");//声音
    let nei=document.querySelector(".nei");//按键
    let goon=document.querySelector("#goon");//暂停
    let screen=document.querySelector(".screen");
    let left=document.querySelector(".left");
    music.ontouchend=function(){
        if (music.className=="musicss"){
            music.className="musics";
        }
        else{
            music.className="musicss";
        }
    }
    //键盘每个键的大小的变化
    
    nei.ontouchstart=function(e){
        if(e.target.className=="son"){
            e.target.style.transform="scale(0.8)";
        }
    }
    nei.ontouchend=function(e){
        if(e.target.className=="son"){
            e.target.style.transform="scale(1)";
        }
    }
    //暂停和继续
    
    goon.ontouchend=function(){
        if (goon.className=="goon1"){
            goon.className="goon2";
        }
        else{
            goon.className="goon1";
        }
    }




    let gameobj=new Game;
    gameobj.screen=document.querySelector(".screen");
    // gameobj.flag=flag;
    gameobj.music=music;
    gameobj.lift=length;
    // gameobj.fraction=fraction;
    gameobj.createLetter(5);
}