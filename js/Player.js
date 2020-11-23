class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }
    updataCount(count){
        database.ref('/').updata({
            playerCount: count
        });
    }
    updata(name){
        var playerIndex = "player"+ playerCount;
        database.ref(playerIndex).set({
            name: name
        });
    }
}