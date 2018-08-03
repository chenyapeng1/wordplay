class Game{
    constructor(){
        this.screen="";//构造函数,自动运行
        this.music="";
        this.jf="";
        this.lift="";
        this.flag="";
        this.letterBox=[];//[{"name":"A",left:1.8,top:2,"node":node},{},{},{},{}]          数据类型
        this.letterWidth=0.53;
    }
    createLetter(num=1){
        for(let i=0;i<num;i++){
            //创建字母,1,保存到数据中2,插入到页面中
            //注意,字母重复和重叠;,重叠看left
            let obj={};
            let letter="";
            do{
                //创建字母name
                let ascii = Math.floor(Math.random()*26+65);//a-z的ascii码值
                letter=String.fromCharCode(ascii);
            }while(this.isHas(letter));//do while,至少循环一次
            //this.isHas    作用,判断是否重复,是,返回true,



            obj.name=letter;

            let div=document.createElement("div");
            //添加字母样式
            div.className="letter";
            div.style.backgroundImage=`url(img/A_Z/${letter}.png)`;

            let left="";
            do{
                left=Math.random()*4+1;
            }while(this.isRepeat(left));



            div.style.left=left+"rem";
            this.screen.appendChild(div);
            //保存数据
            obj.name=name;
            obj.left=left;
            obj.top=1;
            obj.node=div;
            this.letterBox.push(obj);//push后添加的是元素
        }
    }
    
    isHas(letter){
        for(let item of this.letterBox){
            if(letter==item.name){
                return true;
            }
        }
        return false;
    }

    isRepeat(left){
        for (let item of this.letterBox){
            if (  Math.abs(left-item.left)<this.letterWidth     ){
                return true;
            }
        }
        return false;
    }
    //创建字母
    //下落
    //消失
    //游戏开始
    //重新开始
}