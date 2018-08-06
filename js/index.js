window.onload=function(){
    let music=document.querySelector("#music");//声音
    let nei=document.querySelector(".nei");//按键
    let goon=document.querySelector("#goon");//暂停
    let screen=document.querySelector(".screen");//屏幕
    let life=document.querySelector(".life");
    let fraction=document.querySelector(".fraction");
    let death=document.querySelector(".death");
    let text=document.querySelector(".death .text");
    let replay=document.querySelector(".replay");
    let audio=document.querySelector("#audio");
    //声音的样式的变化
    music.ontouchend=function(){
        if (music.className=="musicss"){
            music.className="musics";
            audio.pause();
        }
        else{
            music.className="musicss";
            audio.play();
        }//创立两个class,如果点击的是第一个class就让class变为第二个.而找这个div是用id来找的,因为id是唯一的
    }
    //键盘每个键的大小的变化
    
    nei.ontouchstart=function(e){
        if(e.target.className=="son"){
            e.target.style.transform="scale(0.8)";
            gameobj.ontouch(e.target.innerText);
        }
    }//鼠标按下
    nei.ontouchend=function(e){
        if(e.target.className=="son"){
            e.target.style.transform="scale(1)";
        }
    }//鼠标抬起
    //暂停和继续
    
    goon.ontouchend=function(){
        if (goon.className=="goon1"){
            goon.className="goon2";
            gameobj.run();
        }
        else{
            goon.className="goon1";
            gameobj.pause();
        }
    }

    replay.ontouchstart=function(){
        death.style.display="none";
        gameobj.screen=screen;
        gameobj.createLetter(5);
        gameobj.run();
        // game.init();
    }


    let gameobj=new Game;//将game.js引入到此文档中,调用       创建对象
    gameobj.screen=document.querySelector(".screen");
    // gameobj.flag=flag;
    gameobj.music=music;
    gameobj.lift=length;
    gameobj.life=life;
    gameobj.fraction=fraction;
    gameobj.death=death;
    gameobj.text=text;
    gameobj.replay=replay;
    gameobj.init();
    gameobj.createLetter(5);
    gameobj.run();
    gameobj.addfraction();
}