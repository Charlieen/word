(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=(a(37),a(3)),l=a(4),c=a(5),u=a(6),h=(a(38),a(39),a(40),a(41),a(19)),d=a(76),m=a(77),p=a(18),f=a.n(p),b=a(29),g=a(30),y=a.n(g).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 1Kis-OoGEa20UGsmKF_vD2KXNvcxNEulRMab-3fMtoU"}}),w=(n.a.Component,n.a.Component,function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setSpans=function(){var e=r.imageRef.current.clientHeight,t=Math.ceil(e/10);r.setState({spans:t})},r.imageRef=n.a.createRef(),r.state={spans:0},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log(this.imageRef),this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return n.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},n.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(n.a.Component)),k=(a(60),function(e){console.log(e.imgs);var t=e.imgs.map((function(e){return n.a.createElement(w,{key:e.id,image:e})}));return n.a.createElement("div",{className:"image-list"},t)}),v=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imgs:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.onSearchSubmit2(this.props.term)}},{key:"onSearchSubmit2",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/search/photos",{params:{query:t}});case 2:a=e.sent,this.setState({imgs:a.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"ui container",style:{marginTop:"20px"}},n.a.createElement(k,{imgs:this.state.imgs}),"Found:",this.state.imgs.length," images.")}}]),a}(n.a.Component);function E(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var j=Object(d.a)((function(e){return{paper:{position:"absolute",width:800,height:1200,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),x=function(e){var t=j(),a=n.a.useState(E),r=Object(h.a)(a,1)[0],o=n.a.useState(!0),i=Object(h.a)(o,2),s=i[0],l=i[1];return n.a.createElement("div",null,n.a.createElement(m.a,{open:s,onClose:function(){l(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},n.a.createElement("div",{style:r,className:t.paper},n.a.createElement("h2",{id:"simple-modal-title"},e.term),n.a.createElement(v,{term:e.term}))))},O=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={dialog:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"card-container",onClick:function(){return e.setState({dialog:!0})}},this.state.dialog&&n.a.createElement(x,{term:this.props.monster.name}),n.a.createElement("h1",{className:"card-item"},this.props.monster.name))}}]),a}(n.a.Component),C=function(e){return n.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return n.a.createElement(O,{key:e.id,monster:e})})))},S=(a(63),function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Daniel 1000 Basic English Word WorkShop"),n.a.createElement("span",{className:"label"},"Search your word:  "),n.a.createElement("input",{className:"search",placeholder:"enter the word",onChange:function(t){return e.search(t.target.value)}}))}),N=a(14),R=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleClick3=function(){console.log("button 3 clicked")},e.handleClick2=e.handleClick1.bind(Object(N.a)(e)),e}return Object(l.a)(a,[{key:"handleClick1",value:function(){console.log("button 1 clicked")}},{key:"render",value:function(){return console.log("---1---"),n.a.createElement("div",null,n.a.createElement("button",{onClick:this.handleClick1},"click 1"),n.a.createElement("button",{onClick:this.handleClick1},"click 2"),n.a.createElement("button",{onClick:this.handleClick2},"click 3"),n.a.createElement("button",{onClick:this.handleClick3},"click 4"))}}]),a}(r.Component),q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);var r="\na,about,above,across,act,actor,active,activity,add,afraid,after,again,age,ago,agree,air,all,alone,along,already,always,am,amount,an,and,angry,another,answer,any,anyone,anything,anytime,appear,apple,are,area,arm,army,around,arrive,art,as,ask,at,attack,aunt,autumn,away,baby,base,back,bad,bag,ball,bank,basket,bath,be,bean,bear,beautiful,beer,bed,bedroom,behave,before,begin,behind,bell,below,besides,best,better,between,big,bird,birth,birthday,bit,bite,black,bleed,block,blood,blow,blue,board,boat,body,boil,bone,book,border,born,borrow,both,bottle,bottom,bowl,box,boy,branch,brave,bread,break,breakfast,breathe,bridge,bright,bring,brother,brown,brush,build,burn,business,bus,busy,but,buy,by,cake,call,can,candle,cap,car,card,care,careful,careless,carry,case,cat,catch,central,century,certain,chair,chance,change,chase,cheap,cheese,chicken,child,children,chocolate,choice,choose,circle,city,class,clever,clean,clear,climb,clock,cloth,clothes,cloud,cloudy,close,coffee,coat,coin,cold,collect,colour,comb,come,comfortable,common,compare,complete,computer,condition,continue,control,cook,cool,copper,corn,corner,correct,cost,contain,count,country,course,cover,crash,cross,cry,cup,cupboard,cut,dance,danger,dangerous,dark,daughter,day,dead,decide,decrease,deep,deer,depend,desk,destroy,develop,die,different,difficult,dinner,direction,dirty,discover,dish,do,dog,door,double,down,draw,dream,dress,drink,drive,drop,dry,duck,dust,duty,each,ear,early,earn,earth,east,easy,eat,education,effect,egg,eight,either,electric,elephant,else,empty,end,enemy,enjoy,enough,enter,equal,entrance,escape,even,evening,event,ever,every,everyone,exact,everybody,examination,example,except,excited,exercise,expect,expensive,explain,extremely,eye,face,fact,fail,fall,false,family,famous,far,farm,father,fast,fat,fault,fear,feed,feel,female,fever,few,fight,fill,film,find,fine,finger,finish,fire,first,fit,five,fix,flag,flat,float,floor,flour,flower,fly,fold,food,fool,foot,football,for,force,foreign,forest,forget,forgive,fork,form,fox,four,free,freedom,freeze,fresh,friend,friendly,from,front,fruit,full,fun,funny,furniture,further,future,game,garden,gate,general,gentleman,get,gift,give,glad,glass,go,goat,god,gold,good,goodbye,grandfather,grandmother,grass,grave,great,green,grey,ground,group,grow,gun,hair,half,hall,hammer,hand,happen,happy,hard,hat,hate,have,he,head,healthy,hear,heavy,hello,help,heart,heaven,height,hen,her,here,hers,hide,high,hill,him,his,hit,hobby,hold,hole,holiday,home,hope,horse,hospital,hot,hotel,house,how,hundred,hungry,hour,hurry,husband,hurt,I,ice,idea,if,important,in,increase,inside,into,introduce,invent,iron,invite,is,island,it,its,jelly,job,join,juice,jump,just,keep,key,kid,kill,kind,king,kitchen,knee,knife,knock,know,ladder,lady,lamp,land,large,last,late,lately,laugh,lazy,lead,leaf,learn,leave,leg,left,lend,length,less,lesson,let,letter,library,lie,life,light,like,lion,lip,list,listen,little,live,lock,lonely,long,look,lose,lot,love,low,lower,luck,machine,main,make,male,man,many,map,mark,market,marry,matter,may,me,meal,mean,measure,meat,medicine,meet,member,mention,method,middle,milk,mill,million,mind,mine,minute,miss,mistake,mix,model,modern,moment,money,monkey,month,moon,more,morning,most,mother,mountain,mouse,mouth,move,much,music,must,my,name,narrow,nation,nature,near,nearly,neck,need,needle,neighbour,neither,net,never,new,news,newspaper,next,nice,night,nine,no,noble,noise,none,nor,north,nose,not,nothing,notice,now,number,obey,object,ocean,of,off,offer,office,often,oil,old,on,one,only,open,opposite,or,orange,order,other,our,out,outside,over,own,page,pain,paint,pair,pan,paper,parent,park,part,partner,party,pass,past,path,pay,peace,pen,pencil,people,pepper,per,perfect,period,person,petrol,photograph,piano,pick,picture,piece,pig,pill,pin,pink,place,plane,plant,plastic,plate,play,please,pleased,plenty,pocket,point,poison,police,polite,pool,poor,popular,position,possible,potato,pour,power,present,press,pretty,prevent,price,prince,prison,private,prize,probably,problem,produce,promise,proper,protect,provide,public,pull,punish,pupil,push,put,queen,question,quick,quiet,quite,radio,rain,rainy,raise,reach,read,ready,real,really,receive,record,red,remember,remind,remove,rent,repair,repeat,reply,report,rest,restaurant,result,return,rice,rich,ride,right,ring,rise,road,rob,rock,room,round,rubber,rude,rule,ruler,run,rush,sad,safe,sail,salt,same,sand,save,say,school,science,scissors,search,seat,second,see,seem,sell,send,sentence,serve,seven,several,sex,shade,shadow,shake,shape,share,sharp,she,sheep,sheet,shelf,shine,ship,shirt,shoe,shoot,shop,short,should,shoulder,shout,show,sick,side,signal,silence,silly,silver,similar,simple,single,since,sing,sink,sister,sit,six,size,skill,skin,skirt,sky,sleep,slip,slow,small,smell,smile,smoke,snow,so,soap,sock,soft,some,someone,something,sometimes,son,soon,sorry,sound,soup,south,space,speak,special,speed,spell,spend,spoon,sport,spread,spring,square,stamp,stand,star,start,station,stay,steal,steam,step,still,stomach,stone,stop,store,storm,story,strange,street,strong,structure,student,study,stupid,subject,substance,successful,such,sudden,sugar,suitable,summer,sun,sunny,support,sure,surprise,sweet,swim,sword,table,take,talk,tall,taste,taxi,tea,teach,team,tear,telephone,television,tell,ten,tennis,terrible,test,than,that,the,their,theirs,then,there,therefore,these,thick,thin,thing,think,third,this,those,though,threat,three,tidy,tie,title,to,today,toe,together,tomorrow,tonight,too,tool,tooth,top,total,touch,town,train,tram,travel,tree,trouble,true,trust,twice,try,turn,type,uncle,under,understand,unit,until,up,use,useful,usual,usually,vegetable,very,village,voice,visit,wait,wake,walk,want,warm,wash,waste,watch,water,way,we,weak,wear,weather,wedding,week,weight,welcome,well,west,wet,what,wheel,when,where,which,while,white,who,why,wide,wife,wild,will,win,wind,window,wine,winter,wire,wise,wish,with,without,woman,wonder,word,work,world,worry,worst,write,wrong,year,yellow,yes,yesterday,yet,you,young,your,yours,zero,zoo,zoom\n".split(",").map((function(e,t){return{id:t,name:e}}));return(e=t.call(this)).search=function(t){if(console.log("term:",t),t){var a=e.state.words.filter((function(e){return e.name.includes(t)}));e.setState({monsters:a})}else e.setState({monsters:e.state.words})},e.state={monsters:r,back:[],words:r},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({monsters:this.state.words})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(R,null),n.a.createElement(S,{search:this.search}),n.a.createElement(C,{monsters:this.state.monsters}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0f7b27c8.chunk.js.map