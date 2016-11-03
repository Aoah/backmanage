
module.exports={
     render:function(str){
         var body=document.querySelector('body');
         body.innerHTML=str+body.innerHTML;
     }
}
