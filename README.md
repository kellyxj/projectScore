# projectScore

(Project 2 due Wednesday 11/13/19)

## What is projectScore?

Rebranded as ScoreKEEPER, projectScore is an application that keeps digital track of a player's score that can be used for a multitude of external games by:

- providing the user an interface to create rulesets
- providing the user to maintain game states
- allowing the user to input points over rounds

## How to use

It's so easy:

1. Visit https://still-citadel-25592.herokuapp.com/
2. Click the "add game" icon or select an existing game from our database
3. If you chose to add a game ruleset, fill out the form accordingly and either

- save, which will add the ruleset to the existing games in our database OR
- save and start which will bring you directly to the scoring page.

4. Add players if you will need to score more than one player/team by clicking on the "add player" icon
5. Score each player by clicking on the card for that player to reveal an interface for users to add in points for that particular round.
6. Once you've added the points for each player in that round, click on the "Next Round" button to begin scoring another round. The cumulative scores from the previous round(s) will appear as "Current Score" on the card for that character
7. You can exit the game scoring interface at any time by clicking the "End Game/Home" button.

## NPM Dependencies:

- express (server)
- path
- sequelize
- mysql2

## Developers (alphabetically):

- cecileanne
- kellxj
- stevuk
- trvcytg
