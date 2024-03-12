function x(){
  const a=10;
}
var xyz=30;

x(); //functional execution context is created

var x=function (){
  console.log("anonymous");
}

const fn=()=>{

}

const obj = {
  fn:function(){
    console.log(this);
  },
  fn2:()=>{
    console.log(this);
  }
}
obj.fn();
obj.fn2();