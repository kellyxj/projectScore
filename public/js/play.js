$(document).ready(() => {
    const game = {
        name: "",
        minPlayers: 1,
        maxPlayers: 6,
        players: [],
        round: 1,
        endCond: [],
        pointGoal: null,
        maxRounds: null,
        addPlayer: function() {
            if (this.players.length < this.maxPlayers) {
                const player = new Player(
                    "Player/Team " + (this.players.length + 1)
                );
                this.players.push(player);
                this.syncDom();
            }
        },
        removePlayer: function(index) {
            if (this.players.length > this.minPlayers) {
                this.players.splice(index, 1);
                this.syncDom();
            }
        },
        handleRoundEnd: function() {
            this.round++;
            for (i = 0; i < this.players.length; i++) {
                const player = this.players[i];
                player.roundScore = parseInt($("#player" + (i + 1)).val());
                player.totalScore += player.roundScore;
                player.roundScore = 0;
            }
            for (const player of this.players) {
                if (
                    (this.endCond.includes("score") &&
                        player.totalScore >= this.pointGoal) ||
                    (this.endCond.includes("round") &&
                        this.round > this.maxRounds)
                ) {
                    this.endGame();
                }
            }
            this.syncDom();
        },
        syncDom: function() {
            $("#cardHolder").empty();
            $("#currentRound").text(this.round);
            for (i = 0; i < this.players.length; i++) {
                const card = $(`<div class="col s12 l6">
                <div class="playerCard">
                  <!-- card front -->
                  <div class="card green lighten-4">
                      <div class="card-image waves-effect waves-block waves-light"></div>
                        <div class="card-content">
                          <span class="card-title activator green-text text-darken-4"
                            ><br /><b>${
                                this.players[i].name
                            }</b><i class="material-icons right">+</i></span
                          >
                          <p class="green-text text-darken-4">Current Score: <span class="playerCurrentScore">${
                              this.players[i].totalScore
                          }</span></p>
                        </div>
                        <!-- inner card bg color -->
                        <div class="card-reveal green lighten-2">
                          <span class="card-title green-text text-darken-4"
                          >${
                              this.players[i].name
                          }<i class="material-icons right">-</i></span
                          >
                          <br>
                          <p>
                            <form>
                              <div class="row center">
                                <a class="col scoreAdjust btn-floating btn-large waves-effect waves-light green darken-2"><i class="small material-icons" font-size="40px">-</i></a>
                                <input class="col s1 btn-floating btn-large green-text text-darken-4" type="number" name="player${i +
                                    1}" id="player${i + 1}" value="0">  
                                <a class="col scoreAdjust btn-floating btn-large waves-effect waves-light green darken-4"><i class="small material-icons" font-size="40px">+</i></a>
                              </div>    
                            </form>        
                          </p>
                        </div>
                      </div>
                      <!-- closes card class  -->
                      </div>        
                    <!-- closes column settings for card  -->
                    </div>`);
                $("#cardHolder").append(card);
            }
        },
        endGame: function() {
            let highestScore = this.players[0].totalScore;
            const winners = [];
            if (this.endCond.includes("round") && this.round > this.maxRounds) {
                //first loop through all players and find the highest score among them
                for (const player of this.players) {
                    if (player.totalScore > highestScore) {
                        highestScore = player.totalScore;
                    }
                }
                //then loop through all players again to find which of them has or is tied for highest score
                for (const player of this.players) {
                    if (player.totalScore === highestScore) {
                        winners.push(player);
                    }
                }
            } else if (this.endCond.includes("score")) {
                for (const player of this.players) {
                    if (player.totalScore >= this.pointGoal) {
                        winners.push(player);
                    }
                }
            } else {
            }
            console.log(winners);
            location.href = "/";
        }
    };
    $.get(
        "/api/games/" +
            window.location.href.substring(
                window.location.href.lastIndexOf("/") + 1
            )
    ).then(gameRules => {
        game.name = gameRules.name;
        game.minPlayers = gameRules.minPlayers;
        game.endCond = gameRules.endCondition.split(",");
        game.pointGoal = gameRules.pointGoal;
        game.maxRounds = gameRules.maxRounds;
        $("#gameName").text(game.name);
    });
    game.addPlayer();
    game.syncDom();

    //Event listeners
    $("#addPlayer").click(() => {
        game.addPlayer();
    });
    $("#nextRound").click(() => {
        game.handleRoundEnd();
    });
    $("#endGame").click(() => {
        game.endGame();
    });
});

function Player(name) {
    this.name = name;
    this.totalScore = 0;
    this.roundScore = 0;
}
