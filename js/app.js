// #cards div p needs to have inner HTML set to the following inside when showing cards
// <i class="fa fa-camera-retro fa-5x"></i>
// fa is the generic font-awesome styling
// fa-5x is size of font-awesome font that will display nice in the grid which is already styled
// fa-camera-retro is just an example placeholder for this example
// see css/font-awesome.css and pick 10 styles (icons) for use in the game. 

/*

ToDo:

- Initialize game board with 10 font icons (see above)
- All cards will be initially hidden with .hidden_card class applied to div
- Tie click event to showing a card
- When you show second card, check to see if they match.
	- If they do match leave them up, but grey out the font icon
	- If they do not match hide them again.

- Scoring, each click is a point.... The lower the score the better!
- Reset should completely re-initialize the game.

Looking for Game (Controller), Card (Model), and a View Object.

*/
