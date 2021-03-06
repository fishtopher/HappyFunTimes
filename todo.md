*   make relayserver optionally run on 2 ports, 80 and 8080. The reason being
    there's no easy way for Unity to connect on port 80? Wait: why?

*   fix jamjam controller on iOS7.0

*   **Issue:** Anyone can go to the gameview.html for a game.

    Curretly the relayserver assumes a new game for the same gameId is legit. It kills
    the old game and makes a new one. This is useful during dev as you don't have to hunt
    down any old tab that might be running the game.

    At a party that's fine since you're with friends but at a bar/museum that
    would suck because griefers can easily grief, no hacking required.

    Could make it so relayserver only lets first game per gameId in. Problems. Assumes
    games are stable. (could probably fix with timeout which might already be in there)

    It doesn't solve the issue that a griefer can start other games so if you, as the party host, go to
    start up another game you can't if the griefer has already started one. Maybe that's okay.
    It's just at starting time so can scream at griefer.

    Another idea. Maybe you can start server with optional password. Games require password in URL
    as in http://ipaddress/example/jumpjump/gameview.html?settings={password:"foobar"}. Since
    the griefer doesn't know the password they can't start games.

    Of course sadly griefers can easily break games. Maybe I should fix this? They can break games
    by sending bogus messages. Example. `sendCmd('move', {dir: "foo"})` will end up in the code as

        position += msg.foo;  // exception? ... or actually position becomes NaN :(

    I could put a try/catch when I call events. Unfortunately you'd like to be able to catch
    the exceptions in the debugger when debugger. Maybe again this should be an option in
    starting a game as in `...?settings={trycatchevents:true}`

    That wouldn't prevent griefing. See NaN above.

    I'm just wondering out loud if by some luck HFT was used
    at a museum some griefer that knew the library could easily crash the game :(  I suppose,
    at least at the beginning, the odds that some griefer is going to come to some event with
    his laptop or tablet and hack some custom code just to be an ahole is not so likely?

*   Have better splash if no games running
*   Fix collisions for jumpjujmp
*   Make more world sizes
*   make gameviews template based so we can make disconnect behavior common
*   stop sliding fingers from selecting stuff.
*   make bird quack if you click him (consider random speed)
*   fix flex css (remove need for fixHeightHack)
*   add some CSS animation foo for menu appearing, disappearing
*   figure out why deviceorientation message is low
*   put player name above character in unity.
*   test older ios
    *   consider making it warn if version not good enough
*   test older android
    *   consider making it warn if version not good enough
*   should I restructure samples to wait for sounds to load?

*   send no caching header? or at least optionally

*   remove android single touch from powpow

    When this was first written single touch android phones were common.

*   fix tdl vs require load issues.

*   Get nice designs for games. Particularly controllers

*   remove window everywhere?

    might be a good idea to wrap js with (function(window, undefined) { to make sure
    all references to globals are missing

*   consolidate assets

*   make sample games

    *   bomberman
    *   platformer
    *   8way shooter
    *   unity character controller
    *   johann sabastian bach
    *   rougelike
    *   Make a round based game. (bomberman fits this. Each round lasts 2 mins. Players entering later have to wait)
    *   quiz

        send question Q + 4 answers, display on phone and on game. On game show counts
        In 10 seconds show correct answer and winner on game and on phone?
        Make sure answers after game has moved on do not affect results
        Add score for players

     *  Device orientation game, each player is assigned a piece of a shape, they have
        to rotate their device to get the shape to line up (ie, jigsaw puzzle). Anytime
        a new player is added the current shape is subdivided.

        Not sure this is a fun idea.

     *  Use device motion to play tennis like Wii (shake controller to return ball)

*   abstract out Unity3D parts of C#

    Currently the C# version of the library is Unity3d specific. Should be easy to abstract that out
    so it can be used in C# in general

*   use express (the node server?)

    Is that overkill

*   put $ in misc

*   make tick for clocksync ogg/mp3

*   handle ssl as well for captive portal? I don't think I can :(

Done
----

*   size dpads

*   make powpow/unitycharacter/shootshoot controller show a simple to rotate if in portrate mode

*   store rhythm in cookie?

*   redesign powpow controls

    Rowen suggested that because ship is on center of screen people
    expect to touch there to control it. Should I move the ship?
    Change it so it controls from the center? Show <- -> buttons
    and a [Fire] button with the ship somewhere else?

*   make disconnect have "main menu" if game is not running?

    Maybe only option should be "Main Menu"? If I'm changing games I want them
    to go to the main menu and pick a new game. If game crashes it can be picked
    from the main menu.?

    For most situations it seems like it should go back to the main menu immediately.
    What I don't like about that is it's abrupt. I suppose the player will be looking
    at the game (TV), not the controller (smartphone). So if they see the game crash
    or change they won't be startled to look down and see a list of games rather than
    the controller they were viewing.

    On the other hand, during development, it's nice to be able to click refresh on the
    game and then refresh on the controllers. If the controllers automatically go to the
    main menu that would suck. I suppose the contollers could check if the game is
    still running and only go to the main menu if not. That would mean the workflow of
    refresh the game, controllers auto-disconnect, re-fresh controllers would work. But,
    anytime the game crashed a few moments later the controllers would go back to the
    main menu. Is that okay or is that annoying for dev?

    Should I even have a "disconnected" scren or should it just reload automatically if
    the game is still running or go back to the main menu if not? That would probably
    also make dev harder because the moment you refreshed the game all controllers
    would auto connect. Often I have 2-5 controllers open and I just want one to connect?

    Hmmm, the more I think about it the more auto-connecting seems good. I often want
    all controllers to connect. I can close controllers I don't want to connect.

    So, I'm thinking controllers gets disconnect message, it asks if game is still running,
    if yes reload, if no then main menu.

*   Remove sound from clock sync or fix it.

*   Remove local log stuff

*   Make games.html to make it easier to show off games. Generate it
*   Remove connect msg from powwow
*   fix powpow que/score display
*   add touchmove preventdefault lib to all samples

*   decide best dead-space etc for dpad

*   figure out why everyone is player2
*   make powpow use handjs
*   fix simple so div doesnt' mess up
*   show the bird
*   make simple and supersimple use template
*   make clock sync show a clock
*   make public/index.html template generated?
*   Make disconnect centered/sized and clickable.
*   Make controllers have button to go back to games
*   abstract name stuff

    Powpow lets you name your player. Should this be in every game? Turned into a library?

*   make public/index.html that lists games/examples

*   separate css.

    prefix all common CSS with HFT and/or surround common stuff with a id="hft" and
    use selectors #hft #foo, etc. What I don't like about this is if the individual
    game devines #foo it fails. So, should prefix all ids with #hft

*   fix simple controls and game so they use full area?

*   Make reload work on all controllers.

    * consider making reload to go /index.html for game selection?

*   make dpad controller renderer

*   make all games use 'name'. save in cookie. Have gameclient send it automatically?

*   make all samples handle the sound starting
    *   without overlay
    *   and without sometimes not working
*   make all samples disconnect correctly
*   make all samples have a name at the top and a drop down gear menu
*   add set name to menu
*   make all samples share a header and CSS layout
*   make orientation example
    *   use colors
    *   random starting point
    *   camera
    *   shoot

*   Add timeout to server.

    If no input from player for more than N seconds disconnect player.
    Let game choose timeout

    *   Issue is conncetion is not lost if network is disconnected.

    *   Maybe this. timeout 5 seconds. If timeout send 'ping'. 1 more second
        and kill connection

*   move elaspedTime to global

    I got tired of passing it around everywhere. Unity3D doesn't.
    There are minuses for not passing it I suppose.
    I might consider passing around a process context but for now
    just made it a global (as in globals.elaspedTime)

*   rename entitysystem.deleteEntity to removeEntity
*   make entitysystem shared.
*   make examples
    *   rythym
*   Figure out what to do when game disconnects.
*   relayserver should tell clients when game connects/disconnects?
*   give each game an id so one relayserver can run multiple games
    * hard coded id means one instance of each game
    * generated id means can handle multiple instances BUT, need way to pick instance?
    * relayserver needs to create a new player when switching games. Probably handled
      automatically as leaving the other game's controller panel will kill the connection.
    * controller could have a menu button to go back to game selection screen?
*   fix server to re-direct foo to foo/
*   fix server to load index.html from foo/
*   make hitshield in mp3
*   centralize getRelative
*   remove cross dependencies
*   separate sample game code from lib
*   change JS so NetPlayer has disconnect event
*   see if I can use closure instead of class
*   make it sendCmd on both client and server
*   seperate cmd from data.
*   add clock
*   change audio to g_audioSys
*   Pass in audio system?
*   Pass in entity system?
*   make a dependency injector
*   make client side net code.
*   use strict everywhere
*   make haveserver settable from url
*   make sounds work iOS.
*   figure out why iOS is not syncing clock. Try other computers


