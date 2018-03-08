# Simon

Game based on the child's toy 'Simon.'

•	jQuery, Bootstrap 4, and HTML.

•	On/Off slider enables and disables all buttons.

•	Strict button enables strict mode. User must play without making any mistakes.

•	Start button begins the game by calling the nextSequence function and enabling the large buttons.

•	A random number, 0-3, is generated on each turn and added to the Simon array.

•	setTimeout allows the corresponding button to darken for 1.5 seconds. When a button darkens, an MP3 plays using .load and .play. This also happens when the user clicks on a button.

•	setInterval allows the buttons to darken in sequence, not all at once.

Logic highlights:

•	At the beginning of each turn, function sendColor() checks to see if the Simon array has reached 20 and if the user's input is correct. If so, the user has won the game.

•	If the array length is not 20, the function checks to see if the user's input is correct.  If so, a random number is added to the Simon array.

•	If the user is not correct, one of two things happen:

1. Strict Mode: The game resets. The array is emptied and a new random number is added to the array. The user is notified that they made a mistake and begin again.

2. Regular Mode: The last sequence is replayed, as a reminder to the user.


Areas for improvement:

•	If the user makes a mistake on Regular Mode, they should be able to try, again.



