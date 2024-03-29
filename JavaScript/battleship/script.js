var $ = function( id ) { return document.getElementById( id ); };
var frame = 1;
var connectMSG = $("connectMSG");
var userID = prompt("Create an ID. Please only use letters and numbers (no spaces or special characters)");
var conn, conn2, peerID, accept, buttonpress, accepted, waitForPressResolve, oppID, connected, row, column, blockedWords, target, loadingAnim, oldX, oldY, vertical, peer, numFree;
var myTurn = false;
var waiting = false;
var piece = 0;
var horizontal = true;
var numSunk = 0;
var pieceLength = 5;
var receivedBoard = false;
var numWins = window.localStorage.getItem(userID);
var blockedChars = /[^abcdefghijklmnopqrstuvwxyz0123456789]/i;


// store the number of wins for that person on their browser
if (typeof numWins == 'object') {
  numWins = 0;
}


if (numWins == 1) {
  $('numWins').innerHTML = 'Won ' + numWins + ' time';
} else {
  $('numWins').innerHTML = 'Won ' + numWins + ' times';
}


// Various maps

// blank map to see if the opponent's map has been received yet

const blankMap = [
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Map that shows when playing against opponent, same as myMap of opponent
var oppMap = [
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Selected piece placements
var myMap = [
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Map that displays when picking pieces
var pickingMap = [
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

// Blanked out map that gets revealed with the values of oppMap
var gameDisplay = [
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

// Add the gameboard tiles with classes showing which board they belong to and what coordinates they have
for (var rowNum = 0; rowNum < 10; rowNum++) {
  for (var colNum = 0; colNum < 10; colNum++) {
    document.getElementsByTagName('gameboard')[0].innerHTML += `<div class="myMap row-${rowNum} column-${colNum}" onmouseover="showPos(${rowNum}, ${colNum}, pieceLength)"></div>`;
  }
}

for (var rowNum = 0; rowNum < 10; rowNum++) {
  for (var colNum = 0; colNum < 10; colNum++) {
    document.getElementsByTagName('gameboard')[0].innerHTML += `<div class="oppMap row-${rowNum} column-${colNum}" onclick="fireTorpedo(${rowNum}, ${colNum})"></div>`;
  }
}

// Multiplayer connection code

// Create a Peer object with a user entered ID or one auto-generated by makeid() if they don't enter one
if (typeof(userID) == "object" || userID === '' || blockedChars.test(userID)) {
  peer = new Peer(makeid(Math.floor(Math.random() * 5) + 4));  peer = new Peer(makeid(Math.floor(Math.random() * 5) + 4));
  peer.on('open', function(id) {
	  $('username').innerHTML = "Username: " + id;
    userID = id;
  });
} else {
  // creates a Peer with its username as metadata to be displayed by opponent's computer
  peer = new Peer(userID, {metadata: {userName: userID}});
  $('username').innerHTML = "Username: " + userID;
}

// runs in response to incoming connection request
peer.on('connection', function(conn) {
  // make peerID the ID of the opponent using the metadata of the incoming request
    peerID = conn.metadata.userName;
  // accept incoming connection if user accepts prompt to do so
  if (acceptConnect()) {
    console.log("Connection accepted");
    // opens the connection with the peer with the id in peerID
    conn.on('open', function() {
      conn = peer.connect(peerID);
      console.log('Peer connected');
      $('submitMSG').disabled = false;
    });
  }
  // receive data
  conn.on('data', function(data) {
    console.log('receiving data');
    // automatically return connection when receiving this string which a user is unlikely to type
    if (data == 'å¬˙˚∫∂©Ω¬˚∂ƒß∫ß©ˆß˙') {
      connected = true;
      ConnectToPeer();
    // decide what to do depending on the type of data received
    } else if (data.type == "message") {
      // add message to chat and scroll down if a message is received
      console.log(data.message);
      $("output").innerHTML += `<li><b>${peerID}:</b> ${data.message}</li>`;
      scrollDown();
    } else if (data.type == "data") {
      console.log(data.data);
    } else if (data.type == "boardData") {
      conn.send(
        {
          type: 'madeBoard',
        }
      );
      receivedBoard = true;
      var waitForPlacing = setInterval(() => {
        if (pickedBoard) {
          startGame();
          oppMap = data.data;
          clearInterval(loadingAnim);
          $('turn').innerHTML = 'Your Turn';
          clearInterval(waitForPlacing);
          return;
        }
      }, 10);
    } else if (data.type == "newTurn") {
      // let the user move once the opponent has and stop the 'waiting for opponent' animation
      myTurn = true;
      waiting = true;
      clearInterval(loadingAnim);
      $('turn').innerHTML = 'Your Turn';
    } else if (data.type = 'lose') {
      alert('You lost!');
    } else if (data.type == 'madeBoard') {
      clearInterval(loadingAnim);
    }
  });
});

function startGame() {
  // make oppMap into the map the opponent chose, and send own map if not yet done
  if (arraysEqual(oppMap, blankMap)) {
    sendBoard();
    console.log('board sent');
  }
  for (var l = 0; l < 100; l++) {
    document.getElementsByClassName('myMap')[l].style.display = 'none';
    document.getElementsByClassName('oppMap')[l].style.display = 'block';
  }
  updateState();
}

// button to make new connection
function ConnectToPeer() {
  // getting function name is copied
  // if this function is called by a button, ask the user for the id, and otherwise automatically get the id from the incoming connection request
  if (arguments.callee.caller.name == "connBTN") {
    oppID = prompt("Enter your opponent's ID");
  } else {
    oppID = peerID;
  }
  if (typeof(oppID) != 'object') {
    console.log("Trying to connect to ", oppID);
    conn = peer.connect(oppID, {metadata: {userName: userID}});
  }
  peer.on('error', function(err){
    console.log(err);
    $("errorMSG").innerHTML = err;
  });
  if (connected != true) {
    setTimeout(SendConn, 7000);
  }
}

// ask for confirmation if incoming connection is not from the opponent that received the outgoing connection
function acceptConnect() {
  if (peerID == oppID) {
    return true;
  } else {
    myTurn = false;
    return confirm(`"${peerID}" is trying to connect. Accept?`);
  }
  // connectMSG.style.display = "block";
  // connectMSG.innerHTML = `${peerID} is trying to connect.<br><button onclick="accept() id="button1">Accept</button><button onclick="refuse() id="button2">Refuse</button>`;
}
// send a specific string that is unlikely to be typed so that the opponent automatically connects to the incoming connection, allowing it to be a 2 way connection
function SendConn() {
  conn.send('å¬˙˚∫∂©Ω¬˚∂ƒß∫ß©ˆß˙');
  myTurn = true;
  console.log(myTurn);
  // show the user that they can start
  $('turn').innerHTML = 'Your Turn';
}

function SendMessage() {
  var message = $('textInput').value;

  // Was going to make a censoring system, realized that we would run into the "Scunthorpe problem" and then stopped since it's not an important feature either way

  
  // message = message.replace(/(^\s*)|(\s*$)/gi,"");
  // message = message.replace(/[ ]{2,}/gi," ");
  // message = message.replace(/\n /,"\n");
  // var wordArr = message.split(' ');
  // console.log(wordArr);
  // message = '';
  // for (var i = 0; i < wordArr.length; i++) {
  //   console.log(blockedWords.test(wordArr[i]));
  //   if (blockedWords.test(wordArr[i]) == true) {
  //     for (var sntcWord = 0; x < wordArr[i].length; sntcWord++) {
  //       wordArr[i][sntcWord] = "*";
  //     }
  //   }
  //   message += wordArr[i] + " ";
  // }

  // only send messages if they actually have text, add the message to user's chat as well, and stay at the bottom of the chat after sending the message using scrollDown()
  if (message != "") {
    conn.send({
      'message': message,
      "type": "message",
    });
    $("output").innerHTML += `<li><b>${userID}:</b> ${message}</li>`;
    $('textInput').value = '';
    scrollDown();
  }
}

// send myMap variable to opponent to use as their board
function sendBoard() {
  console.log()
  if (!receivedBoard) {
    loadingAnim = setInterval(loading, 1000);
  }
  conn.send(
    {
      'data': myMap,
      "type": "boardData",
    }
  );
  $('sendB').disabled = true;
}

// make it so pressing the button to connect can be differentiated from a system call to connect
function connBTN() {
  ConnectToPeer();
}



// reveal a tile ('fire' a torpedo) but only while it is the user's turn
function fireTorpedo(row, column) {
  var numPieces = 0;
  for (var a = 0; a < 10; a++) {
    for (var b = 0; b < 10; b++) {
      if (oppMap[a][b] == 1) {
        numPieces++;
      }
    }
  }
  if (myTurn) {
    if (gameDisplay[row][column] == 3) {
        // if they have not clicked on the tile before (meaning its value will be 3), reveal it
      gameDisplay[row][column] = oppMap[row][column];
      updateState();
      if (oppMap[row][column] == 1) {
        numSunk++;
      }
      if (numSunk >= numPieces) {
        alert('You Win!');
        numWins++;
        conn.send(
          {
            type: 'lose',
          }
        );
        $('numWins').innerHTML = `Number of wins: ${numWins}`;
        window.localStorage.setItem(userID, numWins);
      }
        conn.send({type: 'newTurn'});
        myTurn = false;
        $('turn').innerHTML = "Waiting for Opponent.";
        loadingAnim = setInterval(loading, 1000);
    } else {
      // otherwise don't waste the turn
      alert(`Don't waste your torpedos!`);
    }
  }
}


// change the number of periods next to the waiting message to indicate it is working
function loading() {
  if (frame == 1) {
    $('turn').innerHTML = $('turn').innerHTML.replace('.', "..");
    frame = 2;
  } else if (frame == 2) {
    $('turn').innerHTML = $('turn').innerHTML.replace('..', "...");
    frame = 3;
  } else {
    $('turn').innerHTML = $('turn').innerHTML.replace('...', ".");
    frame = 1;
  }
}

// generate a random ID of the pieceLength indicated when called, using the letters in the characters variable
function makeid(pieceLength) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < pieceLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

// update the map selected in its parameters, and going through each element and changing its background colour based on the corresponding value in the map variable
function updateState(map) {
  if (map == 'myMap') {
    // change the colours for items with the class "myMap" that correspond to the coordinates
    for (var y = 0; y < 10; y++) {
      for (var x = 0; x < 10; x++) {
        if (pickingMap[y][x] == 0) {
          document.getElementsByClassName(`myMap row-${y} column-${x}`)[0].style.backgroundColor = "blue";
        } else if (pickingMap[y][x] == 1) {
          document.getElementsByClassName(`myMap row-${y} column-${x}`)[0].style.backgroundColor = "red";
        } else if (pickingMap[y][x] == 2) {
          document.getElementsByClassName(`myMap row-${y} column-${x}`)[0].style.backgroundColor = "red";
        } else if (pickingMap[y][x] == 3) {
          document.getElementsByClassName(`myMap row-${y} column-${x}`)[0].style.backgroundColor = "lightgray";
        } else {
          document.getElementsByClassName(`myMap row-${y} column-${x}`)[0].style.backgroundColor = "gray";
        }
      }
    }
  } else {
    // recolour items with any other class based on a different array's values
    for (var y = 0; y < 10; y++) {
      for (var x = 0; x < 10; x++) {
        if (gameDisplay[y][x] == 0) {
          document.getElementsByClassName(`oppMap row-${y} column-${x}`)[0].style.backgroundColor = "blue";
        } else if (gameDisplay[y][x] == 1) {
          document.getElementsByClassName(`oppMap row-${y} column-${x}`)[0].style.backgroundColor = "red";
        } else if (gameDisplay[y][x] == 2) {
          document.getElementsByClassName(`oppMap row-${y} column-${x}`)[0].style.backgroundColor = "red";
        } else if (gameDisplay[y][x] == 3) {
          document.getElementsByClassName(`oppMap row-${y} column-${x}`)[0].style.backgroundColor = "lightgray";
        } else {
          document.getElementsByClassName(`oppMap row-${y} column-${x}`)[0].style.backgroundColor = "gray";
        }
      }
    }
  }
}

// scroll to the bottom of the chat by setting the end of the scroll to the height that can be scrolled to
function scrollDown() {
  $('output').scrollTop = $('output').scrollHeight;
}

// shows where the ship will be placed
function showPos(y, x, pieceLength) {
  // replace the value of the array that the items are drawn based off of to only show the positions that have been saved
  for (var row = 0; row < 10; row++) {
    for (var column = 0; column < 10; column++) {
      if (myMap[row][column] == 0) {
        pickingMap[row][column] = 3;
      } else if (myMap[row][column] == 1) {
        pickingMap[row][column] = 4;
      }
    }
  }
  // draw the pieces based off the orientation set and the piece set
  if (horizontal) {
    var newX = findClosestH(y, x, pieceLength);
    var newXDown = findClosestH(y - 1, x, pieceLength);
    var newXUp = findClosestH(y + 1, x, pieceLength);
    if (newX === false) {
      if (findClosestH(y - 1, x, pieceLength) !== false) {
        for (var i = 0; i < pieceLength; i++) {
          pickingMap[y - 1][newXDown + i] = 4;
        }
      } else {
        for (var i = 0; i < pieceLength; i++) {
          pickingMap[y + 1][newXUp + i] = 4;
        }
      }
    } else {
      for (var i = 0; i < pieceLength; i++) {
        pickingMap[y][newX + i] = 4;
      }
    }
  } else {
    var newY = findClosestV(y, x, pieceLength);
    var newYLeft = findClosestV(y, x - 1, pieceLength);
    var newYRight = findClosestV(y, x + 1, pieceLength);
    console.log("newY = " + newY, "newYLeft = " + newYLeft, "newYRight = " + newYRight);
    if (newY === false) {
      if (newYLeft !== false) {
        for (var i = 0; i < pieceLength; i++) {
          pickingMap[newYLeft + i][x - 1] = 4;
        }
      } else {
        for (var i = 0; i < pieceLength; i++) {
          pickingMap[newYRight + i][x + 1] = 4;
        }
      }
    } else {
      console.log('newY = ' + newY)
      for (var i = 0; i < pieceLength; i++) {
        pickingMap[newY + i][x] = 4;
      }
    }
  }
  // redraw the map once all the changes have been made to show them
  updateState('myMap');
}


function findDLeft(y, x, pieceLength) {
  for (var i = 0; i < x + 1; i++) {
    numFree = 0;
    for (var z = 0; z < pieceLength; z++) {
      if (typeof pickingMap[y] != 'undefined' && pickingMap[y][x-i+z] == 3) {
        if (typeof pickingMap[y][x - i + z] != 'undefined') {
          numFree++;
        }
      }
    }
    if (numFree == pieceLength) {
      return i;
    }
  }
  return false;
}

function findDRight(y, x, pieceLength) {
  for (var i = 0; i < 10 - x + 1; i++) {
    numFree = 0;
    for (var z = 0; z < pieceLength; z++) {
      if (typeof pickingMap[y] != 'undefined' && pickingMap[y][x+i+z] == 3) {
        numFree++;
      }
    }
    if (numFree == pieceLength) {
      return i;
    }
  }
  return false;
}

function findDUp(y, x, pieceLength) {
  for (var i = 0; i < y + 1; i++) {
    numFree = 0;
    for (var z = 0; z < pieceLength; z++) {
      if (typeof pickingMap[y - i + z] !== 'undefined' && pickingMap[y - i + z][x] === 3) {
        if (typeof pickingMap[y - i + z][x] !== 'undefined') {
          numFree++;
          
        }
      }
    }
    if (numFree == pieceLength && y + i <= 10 - pieceLength) {
      return i;
    } else if (numFree == pieceLength && y + i >= 10 - pieceLength) {
      return 10 - pieceLength;
    }
  }
  return false;
}

function findDDown (y, x, pieceLength) {
  for (var i = 0; i < 10 - y + 1; i++) {
    numFree = 0;
    for (var z = 0; z < pieceLength; z++) {
      if (typeof pickingMap[y + i + z] != 'undefined' && pickingMap[y + i + z][x] == 3) {
        numFree++;
      }
    }
    if (numFree == pieceLength && y - i <= 10 - pieceLength) {
      return i;
    } else if (numFree == pieceLength && y - i >= 10 - pieceLength) {
      return 10 - pieceLength;
    }
  }
  return false;
}

function findClosestH(y, x, pieceLength) {
  if (findDLeft(y, x, pieceLength) === false && findDRight(y, x, pieceLength) !== false) {
    return x + findDRight(y, x, pieceLength);
  } else if (findDRight(y, x, pieceLength) === false && findDLeft(y, x, pieceLength) !== false) {
    return x - findDLeft(y, x, pieceLength);
  } else if (findDRight(y, x, pieceLength) < findDLeft(y, x, pieceLength)) {
    return x + findDRight(y, x, pieceLength);
  } else if (findDLeft(y, x, pieceLength) < findDRight(y, x, pieceLength)) {
    return x - findDLeft(y, x, pieceLength);
  } else if ((findDLeft(y, x , pieceLength) == findDRight(y, x, pieceLength)) && findDLeft(y, x, pieceLength) !== false) {
    return x - findDLeft(y, x, pieceLength);
  } else {
    return false;
  }
}

function findClosestV (y, x, pieceLength) {
  if (findDDown(y, x, pieceLength) === false && findDUp(y, x, pieceLength) !== false) {
    console.log('moving up by ' + pieceLength);
    return y + findDUp(y, x, pieceLength);
  } else if (findDUp(y, x, pieceLength) === false && findDDown(y, x, pieceLength) !== false) {
    console.log('moving down by ' + findDDown(y, x, pieceLength));
    return y - findDDown(y, x, pieceLength);
  } else if (findDUp(y, x, pieceLength) < findDDown(y, x, pieceLength)) {
    console.log('moving up is shorter');
    return y + findDUp(y, x, pieceLength);
  } else if (findDDown(y, x, pieceLength) < findDUp(y, x, pieceLength)) {
    console.log('moving down is shorter');
    return y - findDDown(y, x, pieceLength);
  } else if ((findDDown(y, x , pieceLength) == findDUp(y, x, pieceLength)) && findDDown(y, x, pieceLength) !== false) {
    console.log('same distance');
    return y - findDDown(y, x, pieceLength);
  } else {
    return false;
  }
}

// when hovering over the "myMap" tiles, find their x and y coordinates and put them into a "target" variable
document.addEventListener('mouseover', function(e) {
  if (e.target.className.split(' ')[0] == 'myMap') {
    target = {
      name: e.target.className.split(' ')[0],
      y: Number(e.target.className.split(' ')[1].slice(4)),
      x: Number(e.target.className.split(' ')[2].slice(7)),
    };
  }
});

// listen for a keypress, and do certain actions if currently hovering over a "myMap" tile
document.addEventListener('keydown', function(event) {
  if (target.name == "myMap") {
    if (event.key == 'r') {
      // pressing r redraws the positions in the opposite orientation
      if (vertical) {
        vertical = false;
        horizontal = true;
        showPos(target.y, target.x, pieceLength);
      } else {
        vertical = true;
        horizontal = false;
        showPos(target.y, target.x, pieceLength);
      }
    } else if (event.key == 'Enter') {
      // saves the piece if there is still one to save, by inputting its position into myMap, then go to the next piece by incrementing the piece variable and changing the pieceLength accordingly
      if (piece < 5) {
        for (var y = 0; y < 10; y++) {
          for (var x = 0; x < 10; x++) {
            if (pickingMap[y][x] == 3) {
              myMap[y][x] = 0;
            } else if (pickingMap[y][x] == 4) {
              myMap[y][x] = 1;
            }
          }
        }
        piece++;
        if (piece == 1) {
          pieceLength = 4;
        } else if (piece == 2) {
          pieceLength = 3;
        } else if (piece == 3) {
          pieceLength = 3;
        } else if (piece == 4) {
          pieceLength = 2;
        } else {
          pickedBoard = true;
          pieceLength = 0;
          $('sendB').disabled = false;
        }
        showPos(target.y, target.x, pieceLength);
      }
    }
  }
});

// allows the user to send their message by clicking "Enter"
$('textInput').addEventListener('keydown', function (event) {
  if (event.key == "Enter") {
    SendMessage();
  }
});


// check if two arrays are equal, used to check if the opponent's map has been received already
function arraysEqual(a, b) {
  for (var i = 0; i < a.length; ++i) {
    for (var z = 0; z < a[i].length; z++) {
      if (a[i][z] !== b[i][z]) return false;
    }
  }
  return true;
}



// Show the game grid at the beginning
updateState('myMap');