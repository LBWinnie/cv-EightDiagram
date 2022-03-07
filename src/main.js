let html = document.querySelector('#html');
let style = document.querySelector('#style')
//通过css选择器找到元素
let string = `/*Hi，我是小岁
 *在这先放一个div
 **/
#div1{
    border: 2px solid black;
    width:200px;
    height:200px;
}
/*接下来我要把这个div变成一个八卦图
 *首先，把div变成一个圆圈
 **/
 #div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图有阴阳两级
 *一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 
    50%, rgba(0,0,0,1) 
    50%, rgba(0,0,0,1) 
    100%);
}
/*加点东西让八卦图看起来更“八卦”
 **/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 
    0%, rgba(0,0,0,1) 
    15%, rgba(255,255,255,1) 
    15%, rgba(255,255,255,1) 
    100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background:#000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 
    15%, rgba(0,0,0,1) 
    15%, rgba(0,0,0,1) 
    100%);
}
`;
let string2 = "";
//string = string.replace(/\n/g,"<br>");
//正则表达式将所有回车变为<br>
//string[0].charCodeAt()可得到一个字符的Unicode编码
let n = 0

let step = () =>{
    setTimeout(()=>{
     //如果不是回车就打出原文   
     if(string[n]==='\n'){
       string2 += '<br>';
     }else if(string[n]===' '){
         string2 += "&nbsp";
     }else{
        string2 += string[n];
     }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999)
    html.scrollTo(0,99999)
    if(n < string.length-1){
    //如果n不是最后一个就继续
        n += 1;
        step();
    }
    },50);
};
step();

style.innerHTML=`
body{
    color:red;
}
`