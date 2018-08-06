class Game{
    constructor(){
        this.screen="";//构造函数,自动运行
        this.music="";
        this.jf="";
        this.lift="";
        this.flag="";
        this.letterBox=[];//[{"name":"A",left:1.8,top:2,"node":node},{},{},{},{}]          生成的字母的名字,距离左边的距离,距离顶部的高度,节点
        this.letterWidth=0.53;
        this.fractionnum=0;
        this.lifenum=10;
        this.death="";
        this.textnum=0;
        this.replay="";
        this.sudu=0.01;
    }
    createLetter(num=1){//括号中是默认值
        for(let i=0;i<num;i++){
            //创建字母,1,保存到数据中2,插入到页面中
            //注意,字母重复和重叠;,重叠看left
            let obj={};//letterBox中的每一个数,数据类型是字符串
            let letter="";//letter是一个随机生成的字母
            do{
                //创建字母name
                let ascii = Math.floor(Math.random()*26+65);//a-z的ascii码值
                letter=String.fromCharCode(ascii);//fromCharCode是将ascii码值转换为对应的字符
            }while(this.isHas(letter));//do while,至少循环一次,
            //this.isHas    作用,判断是否重复,是,返回true,


            obj.name=letter;//将随机生成的字母存放到obj中的name属性中
           

            let div=document.createElement("div");//创立一个div的节点
            //添加字母样式
            div.className="letter";//将创立的节点的类名改变为字母的名字,注意:类名是一个字符串
            div.style.backgroundImage=`url(img/A_Z/${letter}.png)`;//改变背景图,让每一个生成的字母的背景图都是对应的那个字母

            let left="";
            do{
                left=Math.random()*4+1;
            }while(this.isRepeat(left));//判断字母是否重叠,重叠的话再生成.



            div.style.left=left+"rem";
            this.screen.appendChild(div);
            //保存数据
            name=obj.name;
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

    init(){
        // this.screen="";//构造函数,自动运行
        // this.music="";
        this.jf="";
        this.lift="";
        this.flag="";
        this.letterBox=[];//[{"name":"A",left:1.8,top:2,"node":node},{},{},{},{}]          生成的字母的名字,距离左边的距离,距离顶部的高度,节点
        this.letterWidth=0.53;
        // this.fractionnum=0;
        this.lifenum=10;
        // this.death="";
        this.textnum=0;
        this.replay="";
        this.life.innerText=10;
        this.sudu=0.01;
    }
    run(){
        let that=this;
        this.t=setInterval(function(){
            that.letterBox.forEach(function(item,index){
                item.top+=that.sudu;
                if(item.top>8){
                    that.screen.removeChild(item.node);
                    that.letterBox.splice(index,1);
                    that.createLetter(1);
                    that.lifenum--;
                    that.sublife();
                    if(that.lifenum<=0){
                        that.death.style.display="block";
                        clearInterval(that.t)
                        that.letterBox.forEach((item,index)=>{
                            that.screen.removeChild(item.node);
                        })
                        that.init();
                    }
                }
                item.node.style.top=item.top+"rem";
            })
        },10)
    }
    pause(){
        clearInterval(this.t);
    }

    ontouch(name){
        this.letterBox.forEach((item,index)=>{
            if (item.name==name){
                this.screen.removeChild(item.node);
                this.letterBox.splice(index,1);
                this.createLetter();
                this.fractionnum++;
                this.sudu=this.fractionnum/1000+0.01;
                this.addfraction();
            }
        })
    }
    addfraction(){
        this.fraction.innerText=this.fractionnum;//积分值与最终得分
        this.text.innerText=this.fractionnum;
    }
    sublife(){
        this.life.innerText=this.lifenum;//生命值
    }
}