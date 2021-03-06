class Quiz{
    constructor(){}

    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
     }
    update(state){
         database.ref('/').update({
          gameState:state
            });
        }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }
     }
     play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Contestant.getContestantInfo();
    
        if(allContestant!==undefined){
          var displayPosition=130;
          for(var cont in allContestant){
            if(cont==="contestant"+contestant.index){
              fill("red");
            }else{
              fill("black");
            }
            displayPosition+=20;
            textSize(15);
            text(allContestant[cont].name+":"+allContestant[cont].distance,120,displayPosition)
    
    
          }
        }
    }
    }