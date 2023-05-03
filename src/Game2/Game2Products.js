import React from "react";
import Game2Product from "./Game2Product";
function Products() {
  let prouctsList = [
    {
      riddle:
        "For some I go fast for others I'm slow. To most people, I'm an obsession relying on me is a well practiced lesson.  What am I?",
      answer: "Time"
    },
    {
      riddle:
        "I'm as big as an elephant, but lighter than a feather. What am I?",
      answer: "The Wind"
    },
    {
      riddle:
        "A blue house is made of blue bricks. A yellow house is made of yellow bricks. A red house is made of red bricks. An orange house is made of orange bricks. What would a green house be made of?",
      answer: "Glass"
    },
    {
      riddle: "Where does the 13th man come from ?",
      answer:
        "If you think you know the answer please tell us in the comment section below.  Good Luck"
    },
    {
      riddle:
        "Which triangle has a bigger area:  1. A triangle with sides measuring 300, 400, and 500. 2. A triangle with sides measuring 300, 400, and 700.",
      answer:
        "1. A triangle with sides measuring 300, 400, and 500. The other triangle cannot exist!"
    },
    {
      riddle:
        "What has roots as nobody sees.  Is taller than trees.  Up, up it goes.  And yet never grows?",
      answer: "It's Majestic  A Mountain"
    },
    {
      riddle:
        "A man was going to buy a $5000 car, but he didn't pay a penny for the car, how is this possible?",
      answer: "It's not free He didn't pay a penny, he payed $5000 for the car!"
    },
    {
      riddle:
        "There are four girls, and four apples in a basket. Every girl takes an apple, Yet one apple remains in the basket. How is this possible?",
      answer:
        "One girl took the basket. She took the last apple while it was in the basket"
    },
    {
      riddle:
        "What is once in a minute, twice in a moment, and never in a thousand years?",
      answer: "The letter M"
    },
    {
      riddle:
        "Four men were in a boat on the lake. The boat turns over, and all four men sink to the bottom of the lake, yet not a single man got wet! Why?",
      answer: "Because they were all married and not single"
    },
    {
      riddle:
        "In the NBA, how many men are on the basketball court for each team?",
      answer: "Five....I'll bet you guessed 10"
    },
    {
      riddle:
        "There are 20 people in an empty, square room. Each person has full sight of the entire room and everyone in it. If you are not allowed to move in any way (other than your eyes). Where can you place an apple so that all but one person can see it?",
      answer: "Place the apple on one person's head"
    },
    {
      riddle:
        "Romeo and Juliet are found dead on the floor in a bedroom. When they were discovered, there were pieces of glass and some water on the floor. The only furniture in the room is a shelf and a bed. The house in is a remote location, away from everything except for the nearby railway track. What caused the death of Romeo and Juliet?",
      answer:
        "Romeo and Juliet are fish. The rumble of the train knocked the tank off the shelf"
    },
    {
      riddle:
        "A boy was at a carnival and went to a booth where a man said to the boy, “If I write your exact weight on this piece of paper then you have to give me $50, but if I cannot, I will pay you $50.” The boy looked around and saw no scale so he agrees, thinking no matter what the carny writes he'll just say he weighs more or less.  In the end the boy ended up paying the man $50. How did the man win the bet?",
      answer:
        "The man did exactly as he said he would and wrote “your exact weight”on the paper"
    },
    {
      riddle:
        "What is it that when you take away the whole, you still have some left over?",
      answer: "Wholesome"
    },
    {
      riddle:
        "Can you name three consecutive days without using the words Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday?",
      answer: "Yesterday, Today, and Tomorrow"
    },
    {
      riddle: "How many times can you subtract the number 5 from 25?",
      answer: "Only one time. After that, you would be subtracting from 20"
    },
    {
      riddle:
        "Read my riddle, I pray. What God never sees, what the king seldom sees, and what we see every day. What is it?",
      answer: "An equal"
    },
    {
      riddle: "What can be heard and caught but never seen?",
      answer: "A Remark"
    },
    {
      riddle:
        "Many things can create one, it can be of any shape or size, it is created for various reasons, and it can shrink or grow with time. What is it?",
      answer: "A Hole"
    },
    {
      riddle:
        "Polly Perkins was after a talking parrot, so she went to the local pet shop in the hope of securing such a find. She was in luck. The shop assistant assured her that the parrot would learn and repeat any word or phrase it heard. Polly was delighted. However, a week later, the parrot still hadn't spoken a word. Polly returned to the shop to complain, however, it appeared that the assistant was accurate in what he had said, and refused a refund. Why didn't the parrot talk?",
      answer:
        "The parrot was deaf and as such couldn't repeat a single word it had heard!"
    },
    {
      riddle: "What two things can you never eat for breakfast?",
      answer: "Lunch and dinner"
    },
    {
      riddle:
        "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
      answer: "Water A river"
    },
    {
      riddle:
        "What word can be written forward, backward or upside down, and can still be read from left to right?",
      answer: "NOON"
    },
    {
      riddle:
        "They have not flesh, nor feathers, nor scales, nor bone. Yet they have fingers and thumbs of their own. What are they?",
      answer: "Gloves"
    },
    {
      riddle:
        "I am large as a castle, yet lighter than air. 100 men and their horses cannot move me. What am I?",
      answer: "The castle's shadow"
    },
    {
      riddle:
        "If three cats catch three mice in three minutes, how many cats would be needed to catch 100 mice in 100 minutes?",
      answer:
        "The same three cats would do. Since these three cats are averaging one mouse per minute, given 100 minutes, the cats could catch 100 mice"
    },
    {
      riddle:
        "A woman was horrified to find a fly in her tea. The waiter took her cup and went into the kitchen and returned with a fresh cup of tea. She shouted, “You brought me the same tea!”How did she know?",
      answer:
        "Sugar She had already put sugar in it and when she tasted the new tea it was already sweet"
    },
    {
      riddle:
        "This is as light as a feather, Yet no man can hold it for long. What is it?",
      answer: "Your Breath"
    },
    {
      riddle: "What is put on a table, cut, but never eaten?",
      answer: "A deck of cards"
    },
    {
      riddle:
        "A train was on its way to Florida and derailed. Where would they bury the survivors?",
      answer: "They wouldn't need to, the survivors are still alive!"
    },
    {
      riddle:
        "While on my way to St. Ives, I saw a man with 7 wives. Each wife had 7 sacks. Each sack had 7 cats. Each cat had 7 kittens. Kitten, cats, sacks, wives, How many were going to St. Ives?",
      answer: "Just one, me"
    },
    {
      riddle:
        "This old one runs forever, but never moves at all. He has not lungs nor throat, but still a mighty roaring call. What is it?",
      answer: "A Waterfall"
    },
    {
      riddle:
        "Dave and Brad, two popular politicians, met at a club to discuss the overthrow of their party leader. They each ordered a vodka on the rocks. Brad downed his and ordered another. He then drank his second in a gulp and decided to wait before he ordered a third. Meanwhile, Dave, who was sipping his drink, suddenly fell forward dead. Both men were setup for an assassination. Why did Dave die and Brad live?",
      answer:
        "Both Dave and Brad were given drinks with poisoned ice cubes. Brad drank his drinks so quickly that the ice didn't have time to melt and release the poison"
    },
    {
      riddle:
        "There once was an evil wizard. He took 3 woman from their homes and turned them into rose bushes that looked exactly alike. He put them in his garden.  One of the woman had a husband and children and begged the wizard to let her see them. He agreed. At night, he brought the woman to her house. In the morning he came and took her home.  One day the husband decided to go rescue her. So he snuck into the wizard's garden. He looked and looked at the 3 identical rose bushes trying to figure out which could be his wife. Suddenly, he knew the answer and he took his wife home. How did he know which rose bush was his wife?",
      answer:
        "The wizard brought the rosebush to her home at night and returned her to the garden in the morning. Therefore, she was the only plant without dew"
    },
    {
      riddle:
        "Whoever makes it, tells it not. Whoever takes it, knows it not. And whoever knows it wants it not.",
      answer: "Counterfeit money"
    },
    {
      riddle:
        "Samuel was out for a walk when it started to rain. He did not have an umbrella and he wasn't wearing a hat. His clothes were soaked, yet not a single hair on his head got wet. How could this happen?",
      answer: "This man is bald!"
    },
    {
      riddle:
        "I come in darkness, but fill the mind with light. I bring enlightenment to some, while gripping others in the hand of fear. With me it can be a journey of inexplicable joy and sorrow. What I will show you will often be unreachable. Journey with me and what you see may haunt you. Journey with me and you may never want to return home. Journey with me and you will never know when it will end. What am I?",
      answer: "Your dreams"
    },
    {
      riddle:
        "The answer I give is yes, but what I mean is no. What was the question?",
      answer: "Do you mind?"
    },
    {
      riddle: "What can be swallowed, but can also swallow you?",
      answer: "Pride"
    },
    {
      riddle: "What can go up a chimney down, but cannot go down a chimney up?",
      answer: "An umbrella"
    },
    {
      riddle: "What never gets any wetter, no matter how much it rains?",
      answer: "The sea"
    },
    {
      riddle: "No sooner spoken than broken. What is it?",
      answer: "Silence"
    },
    {
      riddle:
        "If a wheel has 64 spokes, how many spaces are there between the spokes?",
      answer:
        "64. The space that comes after the 64th spoke, would be just before the first spoke"
    },
    {
      riddle:
        "A man and a woman were driving in their car when it broke down. The man decided to go for help at a gas station a few miles back. He made sure nobody was in the car, rolled all the windows up, and locked all of the sedan's doors. He went off, but when he came back, his wife was dead, and there was a stranger in the car. No physical damage was done to the car, so how did the stranger get in?",
      answer: "The stranger was a baby and the woman died in childbirth"
    },
    {
      riddle:
        "When can you add two to eleven and get one as the correct answer?",
      answer:
        "Look at a clock When you add two hours to eleven o'clock, you get one o'clock"
    },
    {
      riddle:
        "You can spin, wheel and twist, but this thing can turn without moving. What is it?",
      answer: "Got milk?"
    },
    {
      riddle:
        "When they are caught, they are thrown away. When they escape, you itch all day. What are they?",
      answer: "Fleas"
    },
    {
      riddle:
        "You hear it speak, for it has a hard tongue. But it cannot breathe, for it has not a lung. What is it?",
      answer: "A Bell"
    },
    {
      riddle:
        "What is it that is deaf, dumb and blind and always tells the truth?",
      answer: "A Mirror"
    },
    {
      riddle:
        "Brad stared through the dirty soot-smeared window on the 22nd floor of the office tower. Overcome with depression he slid the window open and jumped through it. It was a sheer drop outside the building to the ground. Miraculously after he landed he was completely unhurt. Since there was nothing to cushion his fall or slow his descent, how could he have survived the fall?",
      answer:
        "He's outside the window Brad was so sick and tired of window washing, he opened the window and jumped inside"
    },
    {
      riddle: "What question can you never answer?",
      answer: "“What's it like to be dead?“"
    },
    {
      riddle:
        "When John was six years old he hammered a nail into his favorite tree to mark his height. Ten years later at age sixteen, John returned to see how much higher the nail was. If the tree grew by five centimeters each year, how much higher would the nail be?",
      answer:
        "The nail would be at the same height since trees grow at their tops"
    },
    {
      riddle:
        "What is the easiest way to throw a ball, and have it stop, and completely reverse direction after traveling a short distance?",
      answer: "Toss it in the air"
    },
    {
      riddle:
        "Daniel, my son, is exactly one fifth of my age. In 21 years time, I will be exactly twice his age. My wife is exactly seven times older than my daughter, Jessica. In 8 years time, my wife will be three times older then Jessica. How old are Daniel and Jessica now?",
      answer: "Daniel is 7 years old and Jessica is 4 years old"
    },
    {
      riddle:
        "Inside a burning house, this thing is best to make. And best to make it quickly, before the fire's too much to take!",
      answer: "Haste!"
    },
    {
      riddle: "What gets whiter the dirtier that it gets?",
      answer: "A chalkboard"
    },
    {
      riddle:
        "How high would you have to count before you would use the letter A in the English language spelling of a whole number.",
      answer: "One thousand"
    },
    {
      riddle:
        "Which word in the English language becomes shorter when it is lengthened?",
      answer: "Short"
    },
    {
      riddle:
        "He has married many women, but has never been married. Who is he?",
      answer: "A preacher"
    },
    {
      riddle: "One word in this sentence is misspelled. What word is it?",
      answer:
        "It isn't spelled wrong, the one word in this sentence misspelled is “misspelled.“"
    },
    {
      riddle:
        "A man goes out drinking every night, returning to his home in the wee hours of every morning. No matter how much he drinks, he never gets a hangover. This drink is very well known, but is rarely consumed, served warm and taken straight from its source. The man is a sucker for a free drink, especially since he can't live without it. What is his favorite drink?",
      answer: "Blood, he's a vampire!"
    },
    {
      riddle:
        "A black dog stands in the middle of an intersecton in a town painted black. None of the street lights are working due to a power failure caused by a storm. A car with two broken headlights drives towards the dog but turns in time to avoid hitting him. How could the driver have seen the dog in time?",
      answer: "What time is it Who said this happened during the night?"
    },
    {
      riddle:
        "We are little creatures; all of us have different features. One of us in glass is set; one of us you'll find in jet. Another you may see in tin, and the fourth is boxed within . If the fifth you should pursue, it can never fly from you. What are we?",
      answer: "We are vowels"
    },
    {
      riddle:
        "A woman proves in court that her husband was murdered by her sister, but the judge decides that the sister cannot be punished. Why?",
      answer: "The sisters are Siamese twins"
    },
    {
      riddle:
        "You do not want to have it, But when you do have it, You do not want to lose it? What is it?",
      answer: "A lawsuit"
    },
    {
      riddle:
        "A large truck is crossing a bridge 1 mile long. The bridge can only hold 14000 lbs, which is the exact weight of the truck. The truck makes it half way across the bridge and stops. A bird lands on the truck. Does the bridge collapse?",
      answer:
        "No, it does not collapse. Because it has driven a half mile - you would subtract the gas used from the total weight of the truck"
    },
    {
      riddle:
        "When they are caught, they are thrown away. When they escape, you itch all day. What are they?",
      answer: "Fleas"
    },
    {
      riddle:
        "What relation would your father's sister's sister-in-law be to you?",
      answer: "This person would be your mother"
    },
    {
      riddle:
        "You are in a room that is completely bricked in on all four sides, including the ceiling and floor. You have nothing but a mirror and a wooden table in the room with you. How do you get out?",
      answer:
        "You look in the mirror you see what you saw, you take the saw and you cut the table in half, two halves make a whole, and you climb out the hole"
    },
    {
      riddle:
        "Whoever makes it, tells it not. Whoever takes it, knows it not. Whoever knows it, wants it not. What is it?",
      answer: "they are fake Counterfeit money"
    },
    {
      riddle:
        "I give you a group of three. One is sitting down, and will never get up. The second eats as much as is given to him, yet is always hungry. The third goes away and never returns.",
      answer: "Stove, fire, and smoke"
    },
    {
      riddle:
        "What is red and blue, and purple and green? No one can reach it, not even the queen?",
      answer: "A Rainbow"
    },
    {
      riddle:
        "A man is lying drowned in a dead forest, far from water. How did this happen?",
      answer:
        "A firefighting plane filled its tanks with water from a lake, sucking a scuba-diver in (Is this an urban legend, or did I see this on the news?). He drown while the plane was in flight and was dumped onto a burning forest with the water"
    },
    {
      riddle:
        "A black dog is sleeping in the middle of a black road that has no streetlights and there is no moon. A car coming down the road with its lights off steers around the dog. How did the driver know the dog was there?",
      answer: "It was daytime"
    },
    {
      riddle:
        "The priest in my hometown told us that on a particular day he would walk on water for 30 minutes. The lake was not dry and we all observed the priest actually walking on water. How?",
      answer: "It was winter and the lake was frozen"
    },
    {
      riddle:
        "Four men sat down to play. They played all night till break of day. They played for gold and not for fun. With separate scores for everyone. When they had come to square accounts. They all had made quite fair amounts. Can you the paradox explain. If no one lost, how all could gain?",
      answer: "The men were musicians."
    },
    {
      riddle:
        "Which is correct to say, “The yolk of the egg are white,”or “The yolk of the egg is white?“",
      answer: "Neither, because egg yolks are yellow"
    },
    {
      riddle:
        "Four cars come to a four way stop, all coming from a different direction. They can't decide who got there first, so they all go forward at the same time. They do not crash into each other, but all four cars go. How is this possible?",
      answer: "They all made right-hand turns"
    },
    {
      riddle:
        "There is an ancient invention still used in some parts of the world today that allows people to see through walls. What is it?",
      answer: "A window"
    },
    {
      riddle:
        "At night they come without being fetched, And by day they are lost without being stolen.",
      answer: "The stars"
    },
    {
      riddle:
        "A farmer in California owns a beautiful pear tree. He supplies the fruit to a nearby grocery store. The store owner has called the farmer to see how much fruit is available for him to purchase. The farmer knows that the main trunk has 24 branches. Each branch has exactly 12 boughs and each bough has exactly 6 twigs. Since each twig bears one piece of fruit, how many plums will the farmer be able to deliver?",
      answer: "None. A pear tree does not bear plums"
    },
    {
      riddle:
        "A pregnant lady named her children: Dominique, Regis, Michelle, Fawn, Sophie and Lara. What will she name her next child? Jessica, Katie, Abby or Tilly?",
      answer:
        "Sound of music  Tilly. She seems to follow the scale Do, Re, Me, Fa, So, La, and then Ti"
    },
    {
      riddle: "What is round on the ends and high in the middle?",
      answer: "oHIo"
    },
    {
      riddle:
        "I turn polar bears white and I will make you cry. I make guys have to pee and girls comb their hair. I make celebrities look stupid and normal people look like celebrities. I turn pancakes brown and make your champane bubble. If you sqeeze me, I'll pop. If you look at me, you'll pop. Can you guess the riddle?   97% of Harvard graduates can not figure this riddle out, but 84% of kindergarten students were able to figure this out in 6 minutes or less.",
      answer:
        "The answer is no. The actual question is can you guess the riddle!"
    },
    {
      riddle:
        "Different lights do make me strange, thus into different sizes I will change. What am I?",
      answer: "I am the pupil of an eye"
    },
    {
      riddle:
        "If you're 8 feet away from a door and with each move you advance half the distance to the door. How many moves will it take to reach the door.",
      answer:
        "You will never reach the door, it will always be half the distance, no matter how small!"
    },
    {
      riddle:
        "A king decided to let a prisoner try to escape the prison with his life. The king placed 2 marbles in a jar that was glued to a table. One of the marbles was supposed to be black, and one was supposed to be blue.  If the prisoner could pick the blue marble, he would escape the prison with his life. If he picked the black marble, he would be executed. However, the king was very mean, and he wickedly placed 2 black marbles in the jars and no blue marbles. The prisoner witnessed the king only putting 2 black marbles in the jars.  If the jar was not see-through and the jar was glued to the table and that the prisoner was mute so he could not say anything, how did he escape with his life?",
      answer:
        "The prisoner grabbed one of the marbles from the jar and concealed it in his hand. He then swallowed it, and picked up the other marble and showed everyone. The marble was black, and since the other marble was swallowed, it was assumed to be the blue one. So the mean king had to set him free"
    },
    {
      riddle:
        "I'm so fast you can't see me, Though everyone sees straight through me, I don't stop until the day you die. What am I?",
      answer: "A blink of an eye"
    },
    {
      riddle:
        "The 22nd and 24th presidents of the United States of America had the same parents, but were not brothers. How can this be possible?",
      answer:
        "They were the same man. Grover Cleveland served two terms as president of the United States, but the terms were not consecutive"
    },
    {
      riddle:
        "You have three stoves: a gas stove, a wood stove, and a coal stove, but only one match. Which should you light first?",
      answer: "The match!"
    },
    {
      riddle:
        "Farmer Brown came to town with some watermelons. He sold half of them plus half a melon, and found that he had one whole melon left. How many melons did he take to town?",
      answer: "Easy, three melons!"
    },
    {
      riddle:
        "The following sentence is false. The preceding sentence is true. Are these sentences true or false?",
      answer:
        "Neither, it's a paradox. If the first is true, then the second must be false, which makes the first false; it doesn't work"
    },
    {
      riddle:
        "A beggar's brother died, but the man who died had no brother.  How could this be?",
      answer: "The beggar was a woman"
    },
    {
      riddle: "What is it the more you take, the more you leave behind?",
      answer: "Your Feet  Footsteps"
    },
    {
      riddle:
        "Two fathers and two sons went fishing one day. They were there the whole day and only caught 3 fish. One father said, that is enough for all of us, we will have one each.  How can this be possible?",
      answer:
        "There was the father, his son, and his son's son. This equals 2 fathers and 2 sons!"
    },
    {
      riddle:
        "Take one out and scratch my head, I am now black but once was red.What am I ?",
      answer: "You strike it A Match"
    },
    {
      riddle:
        "Alice is walking throught the forest of forgetfulness. She wants to know what day of the week it is. She stops and asks a lion and a unicorn. Now the lion lies all of the time on Monday, Tuesday, and Wednesday. The unicorn always lies on Thursday, Friday and Saturday.  Alice asks the lion what day it is, he says, “Well, yesterday was one of my lying days.”Alice can't figure it out just from the lion's answer so she asks the unicorn and the unicorn says, “Yesterday was also one of my lying days.”What day is it?",
      answer: "Thursday"
    },
    {
      riddle:
        "A man was just doing his job when his suit was torn. Why did he die three minutes later?",
      answer: "He was an astronaut on a space walk, doing repairs"
    },
    {
      riddle:
        "I have a big mouth and I am also quite loud! I am NOT a gossip but I do get involved with everyone's dirty business. Can you name me?",
      answer: "Vacuum Cleaner"
    },
    {
      riddle: "What can burn the eyes, sting the mouth, yet be consumed?",
      answer: "Salt"
    },
    {
      riddle:
        "You have the misfortune to own an unreliable clock. This one loses exactly 24 minutes every hour. It is now showing 3:00am and you know that is was correct at midnight, when you set it. The clock stopped 1 hour ago, what is the correct time now?",
      answer:
        "6:00am: since the clock is losing 24 minutes every hour, for every real hour that has passed, the clock will only show 36 minutes. Since the clock shows 3:00am, we know that 180 clock minutes have passed. This therefore equals 300 real minutes and hence 5 hours. The clock stopped 1 hour ago and the time must now be 6.00am. QED"
    },
    {
      riddle:
        "There is a frog, dead in the middle of an island. If he swims north, the distance to the mainland is 2 meters. If he swims south, the distance to the mainland is 3 meters. If he swims east or west, the distance is 4 meters. Which way does he swim?",
      answer: "He can't swim, he is dead"
    },
    {
      riddle:
        "Mountains will crumble and temples will fall, and no man can survive its endless call. What is it?",
      answer: "Time"
    },
    {
      riddle: "David's father has three sons : Snap, Krackel, and _____ ?",
      answer: "David. (remember it's Davids father)"
    },
    {
      riddle:
        "I am served at a table, In gatherings of two or four; Served small, white and round. You'll love some, And that's part of the fun. What am I?",
      answer: "Ping Pong Balls"
    },
    {
      riddle:
        "You are standing on the top one of two solid metal pillars. They are both exactly one kilometer apart from each other and they both stand one kilometer high. There is absolutely nothing around these pillars, but you have one small twig, one small rock and an unlimited supply of rope. Usuing only the materials named, how can you get from the top of the pillar that you are on to the top of the other pillar?",
      answer:
        "The twig and the rock were simply distractions used to divert you from the real answer. Forget I ever mentioned them. All you need to do is fill the space between you with enough rope that it makes a pile so big that you can walk across it to the other pillar (remember I said you had an unlimited supply of rope)"
    },
    {
      riddle: "What always goes to bed with shoes on?",
      answer: "A Horse"
    },
    {
      riddle:
        "What year comes next in this sequence:  1973 1979 1987 1993 1997 1999",
      answer: "2003: they are prime years"
    },
    {
      riddle:
        "You live in a one story house made “entirely of redwood“. What color would the stairs be?",
      answer: "What stairs? You live in a one story house"
    },
    {
      riddle:
        "Which clock works best, the one that loses a minute a day, or the one that doesn't work at all?",
      answer:
        "The one that doesn't work is best as it will always be correct twice a day, but the one that loses a minute a day will not be correct again for 720 days (losing 720 minutes or 12 hours)"
    },
    {
      riddle: "What do you use to hoe a row, slay a foe, and wring with woe?",
      answer: "Your hands"
    },
    {
      riddle:
        "Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it.",
      answer: "A Coffin"
    },
    {
      riddle:
        "A man was found dead out in a field of snow. The only tracks that were left was a set of footprints between two parallel lines. Who should the police be looking for?",
      answer: "A man in a wheelchair"
    },
    {
      riddle:
        "What is the value of 1/2 of 2/3 of 3/4 of 4/5 of 5/6 of 6/7 of 7/8 of 8/9 of 9/10 of 1,000?",
      answer: "One hundred - work backwards and you will understand"
    },
    {
      riddle:
        "A petshop owner had a parrot with a sign on its cage that said “Parrot repeats everything it hears.”A young man bought the parrot and for two weeks he spoke to it and it didn't say a word. He returned the parrot but the shopkeeper said he never lied about the parrot. How can this be?",
      answer: "The parrot was deaf!"
    },
    {
      riddle:
        "Three robbers robbed a store. Once they came out they were totally changed, but they still continued robbing. Why?",
      answer:
        "They robbed a clothing store; they changed clothes, not their ways"
    },
    {
      riddle: "What has no beginning, end, or middle?",
      answer: "A doughnut"
    },
    {
      riddle:
        "Be you ever so quick, with vision keen, by your eyes, we are never seen. Unless perchance it should come to pass, you see our reflection in a looking glass.  What are we?",
      answer: "Your own eyes"
    },
    {
      riddle:
        "Below are six clues to six words. When arranged in the correct order, each word is an anagram of the previous word with a letter removed.  capital of France snake headache tablet single article twisted ankle coarse file equally",
      answer: "Aspirin, sprain, Paris, rasp, asp, as, a"
    },
    {
      riddle: "How many three cent stamps are in a dozen?",
      answer: "A dozen, although you probably said four"
    },
    {
      riddle:
        "Who is it that rows quickly with four oars but never comes out from under his own roof?",
      answer: "A Turtle"
    },
    {
      riddle:
        "You use it between your head and your toes, the more it works the thinner it grows. What is it?",
      answer: "A Bar of Soap"
    },
    {
      riddle:
        "Ten pears hanging high, Ten men come passing by, Each took a pear and left nine hanging there. How could that be?",
      answer:
        "EACH is the name of one of the men, and he's the only one that took a pear"
    },
    {
      riddle:
        "You are in a room where there are no metal objects except for two iron rods. Only one of them is a magnet. How can you identify this magnet?",
      answer:
        "You can hang the iron rods on a string and watch which one turns to the north (or hang just one rod)"
    },
    {
      riddle:
        "What object has keys that open no locks, space but no room, and you can enter but not go in?",
      answer: "A computer keyboard"
    },
    {
      riddle:
        "Here on earth it is true, yesterday is always before today; but there is a place where yesterday always follows today. Where?",
      answer: "In a dictionary!"
    },
    {
      riddle:
        "If you have three oranges and you take away two, how many will you have?",
      answer: "Two. The two you took"
    },
    {
      riddle:
        "Big as a biscuit, deep as a cup, even a river can't fill it up. What is it?",
      answer: "A kitchen strainer"
    },
    {
      riddle: "Does the law allow a man to marry his widow's sister?",
      answer:
        "Of course not. If he has a widow then he's dead. And dead people can't get married"
    },
    {
      riddle:
        "What can bring back the dead; make us cry, make us laugh, make us young; born in an instant yet lasts a life time?",
      answer: "Memories"
    },
    {
      riddle:
        "I am the shortest complete sentence in the English language. What am I?",
      answer: "What am I? I am"
    },
    {
      riddle:
        "It is said among my people that some things are improved by death. Tell me, what stinks while living, but in death, smells good?",
      answer: "A Pig"
    },
    {
      riddle: "What has one foot on each side and one in the middle?",
      answer: "A yardstick"
    },
    {
      riddle:
        "I can be found where anything cannot; dead men eat me all the time, but if a living man eats me, he'll die. What am I?",
      answer: "I am nothing"
    },
    {
      riddle: "What kind of rocks does Frankenstein have in his collection?",
      answer: "Tombstones"
    },
    {
      riddle: "What stays where it is when it goes off?",
      answer: "A Gun"
    },
    {
      riddle:
        "Three playing cards in a row. Can you name them with these clues? There is a two to the right of a king. A diamond will be found to the left of a spade. An ace is to the left of a heart. A heart is to the left of a spade. Now, identify all three cards.",
      answer: "Ace of Diamonds, King of Hearts, Two of Spades"
    },
    {
      riddle:
        "Two words, my answer is only two words. To keep me, you must give me.",
      answer: "“Your word“"
    },
    {
      riddle:
        "What goes through the door without pinching itself? What sits on the stove without burning itself? What sits on the table and is not ashamed?",
      answer: "The Sun"
    },
    {
      riddle:
        "The following sentence is false. The preceding sentence is true. Are these sentences true or false?",
      answer:
        "Neither, it's a paradox. If the first is true, then the second must be false, which makes the first false; it doesn't work"
    },
    {
      riddle:
        "The faster you work, the longer it is before you're done, and the slower you work, the sooner you're finished?",
      answer: "Roasting meat on a spit"
    },
    {
      riddle:
        "What is the difference between a school boy studying and a farmer watching his cattle?",
      answer: "One is stocking his mind, while the other is minding his stock"
    },
    {
      riddle:
        "What common English verb becomes its own past tense by rearranging its letters?",
      answer: "Eat and Ate"
    },
    {
      riddle: "What part of the turkey has the most feathers?",
      answer: "The outside"
    },
    {
      riddle:
        "I know a word of letters three. Add two, and fewer there will be.",
      answer: "The word “Few“"
    },
    {
      riddle:
        "Hands she has but does not hold, teeth she has but does not bite, feet she has but they are cold, eyes she has but without sight. Who is she?",
      answer: "A Doll"
    },
    {
      riddle: "What's the greatest worldwide use of cowhide?",
      answer: "To cover cows"
    },
    {
      riddle:
        "Imagine you are in a room with 3 switches. In an adjacent room there are 3 bulbs (let's say in lamps which are on a regular table), each switch belongs to one bulb. All are off at the moment. It is impossible to see from one room to another. No help from anybody else is allowed. How can you find out which switch belongs to which bulb, if you may enter the room with the bulbs only once?",
      answer:
        "You only need to turn on 1 switch as each switch belongs to one bulb. Walk into the other room and remove another bulb"
    },
    {
      riddle:
        "You give someone a dollar. You are this person's brother, but the person is not your brother. How can that be?",
      answer: "long hair It's your sister!"
    },
    {
      riddle:
        "Why can't a woman, who is now living in Canada, not be buried in the USA?",
      answer: "Because she is still alive!"
    },
    {
      riddle: "What word contains all of the twenty six letters?",
      answer: "Alphabet"
    },
    {
      riddle:
        "There was a green house. Inside the green house there was a white house Inside the white house there was a red house. Inside the red house there were lots of babies.",
      answer: "This is a watermelon"
    },
    {
      riddle: "What goes up when the rain comes down?",
      answer: "An umbrella"
    },
    {
      riddle:
        "There is a clothing store in Bartlesville. The owner has devised his own method of pricing items. A vest costs $20, socks cost $25, a tie costs $15 and a blouse costs $30. Using the method, how much would a pair of underwear cost?",
      answer:
        "$45. The pricing method consists of charging $5 for each letter required to spell the item"
    },
    {
      riddle:
        "Where will you find roads without cars, forests without trees and cities without houses?",
      answer: "On a Map"
    },
    {
      riddle: "How many times can you subtract the number 5 from 25?",
      answer: "Once, because after you subtract it's not 25 anymore"
    },
    {
      riddle:
        "A murderer is condemned to death. He has to choose between three rooms. The first is full of raging fires, the second is full of assassins with loaded guns, and the third is full of lions that haven't eaten in 3 years. Which room is safest for him?",
      answer: "The third. Lions that haven't eaten in three years are dead"
    },
    {
      riddle:
        "A sharpshooter hung up his hat and put on a blindfold. He then walked 100 yards, turned around, and shot a bullet through his hat. The blindfold was a perfectly good one, completely blocking the man's vision. How did he manage this?",
      answer: "He hung is hat on the barrel of his gun"
    },
    {
      riddle:
        "What does man love more than life Fear more than death or mortal strife What the poor have, the rich require, and what contented men desire, What the miser spends and the spendthrift saves And all men carry to their graves?",
      answer: "Nothing"
    },
    {
      riddle:
        "What does man love more than life? Fear more than death or mortal strife? What do the poor have, what the rich require, And what contented men desire? What does the miser spend, the spendthrift save, And all men carry to their graves?",
      answer: "Nothing"
    },
    {
      riddle:
        "A man was shot to death while in his car. There were no powder marks on his clothing, which indicated that the gunman was outside the car. However, all the windows were up and the doors locked. After a close inspection was made, the only bullet-holes discovered were on the man's body. How was he murdered?",
      answer:
        "The victim was in a convertible. He was shot when the top was down"
    },
    {
      riddle:
        "Two girls have the same parents and were born at the same hour of the same day of the same month, but they are not twins. How can this be possible?",
      answer: "They were not born in the same year"
    },
    {
      riddle:
        "I never was, am always to be, No one ever saw me, nor ever will And yet I am the confidence of all To live and breathe on this terrestrial ball.",
      answer: "I am tomorrow - your future"
    },
    {
      riddle:
        "There is a word in the English language in which the first two letters signify a male, the first three letters signify a female, the first four signify a great man, and the whole word, a great woman. What is the word?",
      answer: "Heroine"
    },
    {
      riddle:
        "Five hundred begins it, five hundred ends it, Five in the middle is seen; First of all figures, the first of all letters, Take up their stations between. Join all together, and then you will bring Before you the name of an eminent king.",
      answer: "David (Roman numerals)"
    },
    {
      riddle:
        "RIDDLE:When asked how old she was, Suzie replied, “In 2 years I will be twice as old as I was 5 years ago.”How old is she?",
      answer:
        "Use some math remember in 2 yrs she's twice as old  She's 12 ! 14yr / 2yr = 7yr add 5yr and get 12 years old"
    },
    {
      riddle:
        "What has roots that nobody sees, and is taller than trees. Up, up it goes, and yet it never grows. What is it?",
      answer: ".A Mountain"
    },
    {
      riddle:
        "I make you weak at the worst of all times. I keep you safe, I keep you fine. I make your hands sweat, and your heart grow cold, I visit the weak, but seldom the bold. What am I?",
      answer: "Your fears"
    },
    {
      riddle:
        "I'm a riddle in nine syllables, An elephant, a ponderous house, A melon strolling on two tendrils O red fruit, Ivory, fine timber! The loaf's big with it's yeasty rising Money's new minted in this fat purse. I'm a means, a stage, a cow in calf. I've eaten a bag of green apples Boarded the train there's no getting off.",
      answer: "Only women get this way Pregnancy (this is also a famous poem)"
    },
    {
      riddle:
        "How can you physically stand behind your friend as he physically stands behind you?",
      answer: "By standing back to back"
    },
    {
      riddle:
        "The rungs of a 10 foot ladder attached to a ship are 1 foot apart. If the water is rising at the rate of one foot an hour, how long will it take until the water covers over the ladder?",
      answer:
        "It will never cover the ladder because as the water rises, so will the floating ship"
    },
    {
      riddle:
        "Two men are in a desert. They both have packs on. One of the guys is dead. The guy who is alive has his pack open, the guy who is dead has his pack closed. What is in the pack?",
      answer: "A parachute that didn't open"
    },
    {
      riddle: "The more you take, the more you leave behind. What are they?",
      answer: "Footprints"
    },
    {
      riddle:
        "Walk on the living, they don't even mumble. Walk on the dead, they mutter and grumble. What are they?",
      answer: "Fallen leaves"
    },
    {
      riddle:
        "If a rooster laid a brown egg and a white egg, what kind of chicks would hatch?",
      answer: "Roosters don't lay eggs"
    },
    {
      riddle:
        "A clock chimes 5 times in 4 seconds. How many times will it chime in 10 seconds?",
      answer:
        "11 times. It chimes at zero and then once every second for 10 seconds"
    },
    {
      riddle:
        "A man was found murdered on Sunday morning. His wife immediately called the police. The police questioned the wife and staff and got these alibis: The Wife said she was sleeping. The Cook was cooking breakfast. The Gardener was picking vegetables. The Maid was getting the mail. The Butler was cleaning the closet.  The police instantly arrested the murdered. Who did it and how did they know?",
      answer:
        "It was the Maid. She said she was getting the mail. There is no mail on Sunday!"
    },
    {
      riddle: "What gets wetter the more it dries?",
      answer: "A towel"
    },
    {
      riddle: "You can't keep this until you have given it.",
      answer: "Your word"
    },
    {
      riddle:
        "My first is often at the front door. My second is found in the cereal family. My third is what most people want. My whole is one of the United States.",
      answer:
        "RIDDLE:MATRIMONY (mat rye money). Which is certainly a “united state“!"
    },
    {
      riddle:
        "The sun bakes them, the hand breaks them, the foot treads on them, and the mouth tastes them. What are they?",
      answer: "Grapes"
    },
    {
      riddle:
        "Two mothers and two daughters go shopping. They have $21, which they split equally between them. How can this be possible?",
      answer:
        "There are only three people. One of the mothers is a daughter also, because there is a grandmother, a mother and a daughter! They each get $7 exactly"
    },
    {
      riddle:
        "You can see nothing else When you look in my face, I will look you in the eye And I will never lie.",
      answer: "I am your reflection"
    },
    {
      riddle:
        "What question can someone ask all day long, always get completely different answers, and yet all the answers could be correct?",
      answer: "“What time is it?“"
    },
    {
      riddle:
        "At the sound of me, men may dream, Or stamp their feet. At the sound of me, women may laugh, Or sometimes weep.",
      answer: "I am Music!"
    },
    {
      riddle:
        "How could a cowboy ride into town on Friday, stay two days, and ride out on Friday?",
      answer: "His horse is named Friday"
    },
    {
      riddle:
        "I have an eye but cannot see. I am stronger and faster then any man alive but have no limbs. What am I?",
      answer: "I'm a hurricane"
    },
    {
      riddle:
        "I have four wings, but cannot fly, I never laugh and never cry; On the same spot I'm always found, toiling away with little sound. What am I?",
      answer: "Holland. A Windmill"
    },
    {
      riddle: "What goes up and never comes down?",
      answer: "Your Age"
    },
    {
      riddle: "What is more useful when it is broken?",
      answer: "It comes from chickens An egg"
    },
    {
      riddle:
        "Mary was working in a chemistry lab with a mixture of chemicals that was 90% water and weighed 20 pounds. After returning to the lab from a weekend break, she calculated the mixture was now 50% water. How much does the mixture now weigh? For purposes of this puzzle, assume the non-water part of the mixture was not affected by evaporation.",
      answer: "12 Pounds"
    },
    {
      riddle:
        "A sign on the barber's door says “I shave only those who do not shave themselves“. Does the barber shave himself?",
      answer: "There is no answer; it's a paradox. It cannot be made to work"
    },
    {
      riddle:
        "The king dies and two men, the true heir and an impostor, both claim to be his long-lost son. Both fit the description of the rightful heir: about the right age, height, coloring and general appearance. Finally, one of the elders proposes a test to identify the true heir. One man agrees to the test while the other flatly re-fuses. The one who agreed is immediately sent on his way, and the one who re-fused is correctly identified as the rightful heir. Can you figure out why?",
      answer:
        "The test was a blood test. The elder remembered that the true prince was a hemophiliac"
    },
    {
      riddle:
        "A psychologist goes to a village in Africa and decides to compare foot size to intelligence. He notes that in general, as foot size increases, so does intelligence. How can this be?",
      answer:
        "Age He is measuring everyone's feet, including the feet of the very small children. So the statistics will show that larger feet belong to the smarter people, the adults"
    },
    {
      riddle:
        "A wife and her husband were driving in their car on the highway. All of a sudden, they ran out of gas. So the husband said to the wife, “Now, you stay here. I will go down the highway to the nearest gas station, and I will be about 1 hour. Just listen to the radio and read some books, and remember to lock all the windows and doors. I will leave the keys with you.”So, off the husband went, and the wife first locked ALL the windows and doors. Next, she turned on the radio, and this is what she heard on the news report: “THERE IS A MURDERER ON THE LOOSE. HE WAS LAST SEEN ON THE HIGHWAY, WEARING ALL BLACK, ABOUT 5 FOOT 11 INCHES. PLEASE, BE AWARE AND CONTACT THE POLICE IMMEDIATELY.”The wife got very scared. She turned off the radio and double checked the locked doors. Then she saw the murderer, only a couple feet away from the car. An hour later, the husband returned to his car. Inside the car, his wife was DEAD, she had been murdered. All the windows were still locked, and the doors. No windows were broken, and the car was in PERFECT condition. No scratches or anything, it was the same way as when he left it. How did the murderer kill the wife?",
      answer: "The car was a convertable, and the roof was open"
    },
    {
      riddle:
        "I have no voice and yet I speak to you, I tell of all things in the world that people do. I have leaves, but I am not a tree, I have pages, but I am not a bride or royalty. I have a spine and hinges, but I am not a man or a door, I have told you all, I cannot tell you more. What am I?",
      answer: "A Book"
    },
    {
      riddle:
        "I am that which is hunted, and this panes me. Do you dig, Stone? What am I?",
      answer: "Quarry"
    },
    {
      riddle:
        "There are two bodies on the floor. They are surrounded by water and broken glass. How did they die?",
      answer:
        "The water came from a bowl and something was in it The fish bowl got knocked over. The bodies were goldfish"
    },
    {
      riddle:
        "My life can be measured in hours, I serve by being devoured. Thin, I am quick Fat, I am slow Wind is my foe.",
      answer: "I am a candle"
    },
    {
      riddle:
        "Weight in my belly, Trees on my back. Nails in my ribs, Feet I do lack.",
      answer: "I am a ship"
    },
    {
      riddle:
        "An archaeologist finds a coin dated 48 B.C. How did he know it was a fake?",
      answer:
        "BC is before Christ. Christ was not yet born when the coin would have been made and the date would be impossible"
    },
    {
      riddle:
        "If you toss a die and it comes up with the number one 9 times in a row, what is the probability that it will come up with one on the next throw?",
      answer: "One in six. A die has no memory of what it last showed"
    },
    {
      riddle:
        "You heard me before, Yet you hear me again. Then I die, 'Til you call me again What am I?",
      answer: "An Echo"
    },
    {
      riddle:
        "There was a man who was born before his father, killed his mother, and married his sister. Yet, there was nothing wrong with what he had done. Why?",
      answer:
        "His father was in front of him when he was born, therefore he was born before him. His mother died while giving birth to him. Finally, he grew up to be a minister and married his sister at her ceremony"
    },
    {
      riddle:
        "It goes up, but at the same time goes down. Up toward the sky, and down toward the ground. It's present tense and past tense too, come for a ride, just me and you.  What is it?",
      answer: "A See-Saw"
    },
    {
      riddle:
        "If a fire hydrant has H2O inside, what does it have on the outside?",
      answer: "K9P (you'll get it eventually)"
    },
    {
      riddle:
        "I can be found on a human or beast all people should have one at least I can be any shape or any size and my history you'll despise  What Am I?",
      answer: "A Scar"
    },
    {
      riddle: "What is harder to catch the faster you run?",
      answer: "Your breath!"
    },
    {
      riddle:
        "What is it that you ought to keep after you have given it to someone else?",
      answer: "A promise"
    },
    {
      riddle:
        "If life gets tough, what do you have that you can always count on?",
      answer: "Your fingers!"
    },
    {
      riddle: "How do you make “one”disappear?",
      answer: "Add a “g”to make it “gone”or an “n”to make it “none“!"
    },
    {
      riddle:
        "A train just leaves a station and enters a tunnel. Where is the best place for a claustrophobic person to sit?",
      answer:
        "In the back. See, the train is still accelerating as it is leaving the station so the train will be moving faster when the back of the train enters the tunnel"
    },
    {
      riddle: "What's the difference between a jeweler and a jailer?",
      answer: "A jeweler sells watches and a jailer watches cells"
    },
    {
      riddle:
        "What is the difference between a dollar and a half and thirty five-cents?",
      answer:
        "Nothing. A dollar and a half is the same as thirty five-cents (nickels). But not the same as thirty-five cents"
    },
    {
      riddle:
        "A hundred feet in the air, but it's back is on the ground. What is it?",
      answer: "A centipede flipped over"
    },
    {
      riddle:
        "Dark with white markings, And smooth like a rock. Where learning occurs, I help convey thought. What am I?",
      answer: "It's in classrooms Blackboard or chalkboard"
    },
    {
      riddle:
        "A phone rings 9 times, and no one answers it. A horse eats 9 pounds of grain. A bannana grows 9 inches evry day. and the computer gets 9 mail messages every day.  What is always in the above paragraph ^?",
      answer: "Letters and words"
    },
    {
      riddle: "What kind of coat can be put on only when wet?",
      answer: "A coat of paint"
    },
    {
      riddle: "Lighter than what I am made of. More of me is hidden than seen.",
      answer: "I'm an Iceberg"
    },
    {
      riddle:
        "In spring I am gay in handsome array; in summer more clothing I wear; when colder it grows I fling off my clothes; and in winter quite naked appear.  What am I?",
      answer: "A Tree"
    },
    {
      riddle: "What can go up and come down without moving?",
      answer: "The temperature"
    },
    {
      riddle:
        "What's the least number of chairs you would you need around a table to sit four fathers, two grandfathers, and four sons?",
      answer:
        "Four. The four fathers could be grandfathers and are definitely sons already"
    },
    {
      riddle:
        "Tom and his younger sister were fighting. Their mother was tired of the fighting, and decided to punish them by making them stand on the same piece of newspaper in such a way that they couldn't touch each other. How did she accomplish this?",
      answer:
        "Tom's mother slid a newspaper under a door, each sibling standing on each side"
    },
    {
      riddle:
        "I turn around once. What is out will not get in. I turn around again. What is in will not get out. What am I?",
      answer: "A Key"
    },
    {
      riddle:
        "What's the difference between a penniless man and a feather bed?",
      answer: "One is hard up, while the other is soft down"
    },
    {
      riddle:
        "How is it possible to shave three times a day and still grow a beard?",
      answer:
        "If you were a barber, you could shave other men three times a day and still grow your own beard"
    },
    {
      riddle:
        "What was the biggest island in the world before the discovery of Australia by Captain Cook?",
      answer:
        "Australia was always the biggest island in the world, even before it was discovered"
    },
    {
      riddle:
        "The marathon man timed himself and found out that if he wore a bright white outfit he ran 20 miles in 80 minutes, but when he wore a dark outfit, he ran 20 miles in one hour and twenty minutes. What does this mean for his next race?",
      answer:
        "Absolutely nothing, as 80 minutes equals an hour and twenty minutes"
    },
    {
      riddle: "What starts with a T, ends with a T, and has T in it?",
      answer: "A teapot"
    },
    {
      riddle:
        "how does the turtle with no legs cross the road????????? HINT take the f out of free and the f out of way!!!!!!!!!",
      answer: "There is no f in way"
    },
    {
      riddle:
        "How many 1 foot by 1 foot bricks would it take to complete a building that's 20 feet long on all four sides and 20 feet high?",
      answer: "Only one; the last brick you put in will complete it"
    },
    {
      riddle:
        "There's a body lying dead on a bed, and on the floor beside it is a pair of scissors. The scissors were instrumental in his death, yet there's no trace of blood. The body reveals no signs of any cuts or bruises. How could the person have been murdered with the pair of scissors?",
      answer:
        "Waterbed {}The person slept on a waterbed. His killer used the scissors to cut the bed open and drown him"
    },
    {
      riddle: "If you drop a yellow hat in the Red Sea, what does it become?",
      answer: "Wet, duh!"
    },
    {
      riddle:
        "Below is a short poem to help you determine the next letter in the sequence that follows:  Both backward and forward I may go  But just one way makes sense Don't you know  So don't be confused, don't be surprised All you must do  Is use your eyes  What comes next?",
      answer: "S"
    },
    {
      riddle:
        "Violet, indigo, blue and green, yellow, orange and red; these are the colors you have seen after the storm has fled.What am I?",
      answer: "I am a Rainbow"
    },
    {
      riddle:
        "I have many feathers to help me fly. I have a body and head, but I'm not alive. It is your strength which determines how far I go. You can hold me in your hand, but I'm never thrown. What am I?",
      answer: "Indians  An Arrow"
    },
    {
      riddle:
        "What is significant about 3661 seconds past midnight on 1st January 2001?",
      answer: "The time and date will be 01:01:01 on 01/01/01"
    },
    {
      riddle: "What do you serve that you can't eat?",
      answer: "A tennis ball"
    },
    {
      riddle: "What kind of coat can be put on only when wet?",
      answer: "A coat of paint!"
    },
    {
      riddle:
        "If someone says to you, “I'll bet you $1 that if you give me $2, I will give you $3 in return“, would this be a good bet for you to accept?",
      answer:
        "No. This is a situation where you lose even if you win. Assuming the other person is being wise, they would take your $2 and say, “I lose“, and give you $1 in return. You win the bet, but you're out $1"
    },
    {
      riddle:
        "A rubber ball is tossed off the top of a 90 foot building. Every time it bounces, it goes back up half way. How many bounces will the ball take before it stops?",
      answer:
        "The answer is infinite, if the ball keeps bouncing half way up. But of course on earth gravity will eventually will stop it"
    },
    {
      riddle:
        "Dead on the field lie ten soldiers in white, felled by three eyes, black as night. What happened?",
      answer: "A strike was thrown in 10 pin bowling"
    },
    {
      riddle:
        "Old Mother Twitchett had but one eye, and a long tail which she let fly; and every time she went through a gap, a bit of her tail she left in a trap.  What is she?",
      answer: "A needle and thread"
    },
    {
      riddle:
        "A very pretty thing am I, fluttering in the pale-blue sky. Delicate, fragile on the wing, indeed I am a pretty thing.  What am I?",
      answer: "A Butterfly, delicate and unique"
    },
    {
      riddle:
        "You are walking down a road and you encounter a fork in the road and you do not know the correct way to go. There are two men standing at the junction and both know the correct road. One man always lies, and the other man always tells the truth, but you do not know who is the liar and who is the one who tells the truth. You can only ask each man one question, but it must be the same question for both. What is the question that would allow you to get the information necessary to choose the correct path?",
      answer:
        "You ask, “Which way would your companion say is the correct path?“. The liar would lie tell you that the truthful man would say to go down the wrong path. The truthful man would tell the truth and say that the liar would tell you to go down the wrong path. They both point to the wrong path, so then the alternate is the proper path"
    },
    {
      riddle:
        "Until I am measured, I am not known. Yet how you miss me, When I have flown.  What am I?",
      answer: "Time"
    },
    {
      riddle:
        "I live in the canopy. I rarely touch the forest floor. I hang upside down all day. I move as slow as a tortoise. My hair is brown and green. I eat tree leaves. Who am i?",
      answer: "Toedsloth"
    },
    {
      riddle: "What kind of running means walking?",
      answer: "Running out of gas!"
    },
    {
      riddle:
        "If you go to the movies and you're paying, is it cheaper to take one friend to the movies twice, or two friends to the movies at the same time?",
      answer:
        "It's cheaper to take two friends at the same time. In this case, you would only be buying three tickets, whereas if you take the same friend twice you are buying four tickets"
    },
    {
      riddle: "What's as big as you are yet doesn't weigh an ounce?",
      answer: "Your shadow"
    },
    {
      riddle:
        "You must keep this thing, its loss will affect your brothers. For once yours is lost, it will soon be lost by others.",
      answer: "Your Temper"
    },
    {
      riddle:
        "Who bought it doesnt need it Who needs it didnt buy it Who ever sees it makes them cry What on earth am i??",
      answer: "A coffin"
    },
    {
      riddle:
        "I am always hungry, I must always be fed, The finger I lick Will soon turn red.",
      answer: "I am Fire"
    },
    {
      riddle:
        "Until I am measured, I am not known. Yet how you miss me, When I have flown.",
      answer: "I am Time"
    },
    {
      riddle: "I am only useful When I am full, Yet I am always Full of holes.",
      answer: "I am a Sponge"
    },
    {
      riddle:
        "Determine what letter should replace the ? at the end:  M M L J A R C C G E P C ?",
      answer: "T"
    },
    {
      riddle:
        "Bouncing Bob was riding a particularly frisky horse when suddenly its bridle came off. As they raced down the road, a screaming Bob clung to the horse's ears for dear life. Out of the corner of his eye, Bob saw a car coming, and realizing the horse was completely out of control, he panicked. Flailing his arms about, he accidentally caused the horse to come to an abrupt halt. What could Bouncing Bob have done to make the horse stop?",
      answer:
        "Close your Eyes, what do you seeBob accidentally put his hands over the horse's eyes. If a horse can't see he will automatically stop"
    },
    {
      riddle:
        "A tree doubled in height each year until it reached its maximum height over the course of ten years. How many years did it take for the tree to reach half its maximum height?",
      answer:
        "It was 1/2 its Max height in year 9 so.. Nine Years. Because on the 10th year it doubled for the last time and reached the maximun height"
    },
    {
      riddle:
        "Three mountain climbers paid a lot of money to be the first to scale a mountain. After several days of climbing they finally reached the pinnacle, and to their dismay, found a cabin and three frozen bodies. Since the mountain climbers were the first to ever climb the summit, how could this be possible?",
      answer:
        "They found a cabin of an airplane that had crashed there with 3 bodies in it"
    },
    {
      riddle:
        "A certain crime is punishable if attempted but not punishable if committed. What is it?",
      answer: "Suicide"
    },
    {
      riddle:
        "Never resting, never still. Moving silently from hill to hill. It does not walk, run or trot, All is cool where it is not.  What is it?",
      answer: "Sunshine"
    },
    {
      riddle:
        "Which bird does not belong in this group? Finch, gull, eagle, ostrich, or sparrow?",
      answer: "The Ostrich. It's the only bird that doesn't fly"
    },
    {
      riddle:
        "Three people check into a hotel. They pay $30 to the manager and go to their room. The manager suddenly remembers that the room rate is $25 and gives $5 to the bellboy to return to the people. On the way to the room the bellboy reasons that $5 would be difficult to share among three people so he pockets $2 and gives $1 to each person. Now each person paid $10 and got back $1. So they paid $9 each, totalling $27. The bellboy has $2, totalling $29. Where is the missing $1?",
      answer:
        "We have to be careful what we are adding together. Originally, they paid $30, they each received back $1, thus they now have only paid $27. Of this $27, $25 went to the manager for the room and $2 went to the bellboy"
    },
    {
      riddle:
        "If you screw a light bulb into a socket by turning the bulb toward the right with your right hand, which way would you turn the socket with your left hand in order to unscrew it while holding the bulb stationary?",
      answer: "To the right. It's always the same direction"
    },
    {
      riddle:
        "If a man carried my burden He would break his back. I am not rich, But leave silver in my track.",
      answer: "I am a Snail"
    },
    {
      riddle:
        "I was framed, yet I didn't commit a crime, and the person who framed me committed no crime.  How is this possible?",
      answer: "I am a picture, and I was put in a picture frame"
    },
    {
      riddle:
        "A car's odometer shows 72927 miles, a palindromic number. What are the minimum miles you would need to travel to form another?",
      answer: "110 miles. (73037)"
    },
    {
      riddle: "Why are 1990 dollar bills worth more than 1989 dollar bills?",
      answer:
        "There is a one dollar differnce The same reason seven dollars is more than six. Because there is one more"
    },
    {
      riddle: "Which is heavier ? A pound of feathers or a pound of gold.",
      answer:
        "lots of feathers A pound of feathers. Some would say a pound is a pound, but the fact is: Gold is a precious metal and is therefore weighed in the Troy system of measurement. This means that a pound of gold weighs only 12 oz and a pound of feathers weighs 16 oz"
    },
    {
      riddle:
        "While exploring the wilds of Canada, Wild Man Dave was captured by hostile wood fairies. Brad, the powerful chief of the fairies told him he could make one final statement which would determine how he would die. If the statement he made was false, he would be boiled in water. If the statement were true, he would be fried in oil. Wild Man Dave found neither of this options too his liking, so he made a statement that got him out of this seemingly impossible situation. What is the one statement he could have made?",
      answer:
        "Wild Man Dave said: “You will boil me in water.”The fairies were faced with a dilemma. If they boil him in water, that would make his statement true, which means he should have been fried in oil. They can only fry him in oil if he makes a true statement, but if they do, it would make his final statement false. The fairies had no way our of their situation so they were forced to set Wild Man Dave free"
    },
    {
      riddle:
        "A man was born in 1898 He is still alive now at the age 33 How is this possible ?",
      answer: "he was born in room 1898 in the hospital"
    },
    {
      riddle:
        "An old man wanted to leave all of his money to one of his three sons, but he didn't know which one he should give it to. He gave each of them a few coins and told them to buy something that would be able to fill their living room. The first man bought straw, but there was not enough to fill the room. The second bought some sticks, but they still did not fill the room. The third man bought two things that filled the room, so he obtained his father's fortune. What were the two things that the man bought?",
      answer:
        "The wise son bought a candle and a box of matches. After lighting the candle, the light filled the entire room"
    },
    {
      riddle: "What goes around the world and stays in a corner?",
      answer: "Mail A stamp"
    },
    {
      riddle:
        "Some will use me, while others will not, some have remembered, while others have forgot. For profit or gain, I'm used expertly, I can't be picked off the ground or tossed into the sea. Only gained from patience and time, can you unravel my rhyme?",
      answer: "You can't fix stupid  Answer: I'm Knowledge"
    },
    {
      riddle:
        "What word starting with BR, that with the addition of the letter E, becomes another word that sounds the same as the first?",
      answer: "Braking becomes Breaking"
    },
    {
      riddle: "How far can a dog run into the woods?",
      answer: "Halfway, any further and he would be running out of the woods"
    },
    {
      riddle:
        "I am weightless, but you can see me. Put me in a bucket, and I'll make it lighter. What am I?",
      answer: "A hole"
    },
    {
      riddle: "Where on Earth do the winds always blow from the South?",
      answer: "The North Pole"
    },
    {
      riddle:
        "During the Holocaust there is a jewish man who has managed to evade the nazi soldiers fro many months. He has finally made it to the border of Germany, but to his dismay, there is a massive river blocking his way with only one bridge over. The bridge was under nazi control and any person caught trying to exit Germany will be killed on the spot, but any Polish person caught trying to enter Germany without the proper papers will be sent back to Poland. There is only one gaurd on this bridge and he only checks the bridge for people every three minutes. Now, no matter how quickly any person may run, this bridge will always take exactly five minutes to cross. How can the German man exit Germany without being caught and killed?",
      answer:
        "Simply, he walks for two minutes and fifty seconds, then turns around and pretends to walk into Germany. The guard comes out and sees him. He walks over to him and asks him for his papers. When he can't produce the proper papers he is sent to poland because the gaurd thought he was a Polish citizen"
    },
    {
      riddle: "How many of each type of animal did Moses take on the Ark?",
      answer: "None, it was Noah"
    },
    {
      riddle:
        "You use a knife to slice my head and weep beside me when I am dead. What am I?",
      answer: "An onion"
    },
    {
      riddle:
        "What word doesn't belong in this group? That, hat, what, mat, cat, sat, pat, or chat?",
      answer: "What. It's pronounced differently; all of the others rhyme"
    },
    {
      riddle:
        "A man takes a barrel that weighs 20 pounds, and then puts something in it. It now weighs less than 20 pounds. What did he put in the barrel?",
      answer: "Get a drill He put a hole in the barrel to make it weigh less"
    },
    {
      riddle:
        "Which word can be placed between the two following words to make two new ones: TABLE - - - - HOUSE",
      answer: "WARE"
    },
    {
      riddle:
        "The beginning of eternity, the end of time and space; the beginning of every end, and the end of every place. What am I?",
      answer:
        "The letter “E“.  The beginning of Eternity, the end of timE and spacE; the beginning of every End, and the end of every placE"
    },
    {
      riddle:
        "You are on a ship, over the side hangs a rope ladder with half meter rungs. The tide rises a half meter per hour. At the end of five hours, how much of the ladder will remain above the water assuming that nine rungs were above the water when the tide began to rise?",
      answer:
        "Remember the tde Nine rungs will be above the water. As the tide rises, so will the ship and the ladder"
    },
    {
      riddle:
        "I am a rock group that has 4 members, all of whom are dead, one of which was assasinated. What am I?",
      answer: "Mount Rushmore! Get it, rock group?"
    },
    {
      riddle: "How many letters are in the alphabet?",
      answer: "There are 11 letters in “THE ALPHABET.”Did you say 26?"
    },
    {
      riddle:
        "Something very extraordinary happened on the 6th of May, 1978 at 12:34 a.m.  What was it?",
      answer:
        "At that moment, the time and day could be written as: 12:34, 5/6/78"
    },
    {
      riddle:
        "Two men were playing tennis. They played five sets and each man won three sets.  How can this be possible?",
      answer: "Team up The two men were partners playing doubles"
    },
    {
      riddle:
        "My first is in fish but not in snail, My second is in rabbit but not in tail. My third is in up but not in down, My fourth is in tiara but not in crown. My fifth is in tree you plainly see, My whole a food for you and me. What am I?",
      answer: "I am a fruit"
    },
    {
      riddle:
        "Pronounced as one letter, And written with three, Two letters there are, And two only in me. I'm double, I'm single, I'm black, blue, and gray, I'm read from both ends, And the same either way. What am I?",
      answer: "You have two of them An eye"
    },
    {
      riddle:
        "Can you arrange the numbers 1 to 9 in the circles so that each straight line of three numbers totals 18?  {mospagebreak}{mospagebreak}",
      answer: "Answer:"
    },
    {
      riddle:
        "I never was, am always to be, No one ever saw me, nor ever will, And yet I am the confidence of all To live and breathe on this terrestrial ball. What am I?",
      answer: "The sun will come up ... Tomorrow"
    },
    {
      riddle: "The more there is the less you see.  What is it?",
      answer: "What time is it .   Darkness"
    },
    {
      riddle:
        "All about, but cannot be seen, Can be captured, cannot be held, No throat, but can be heard. What is it?",
      answer: "It blows The wind"
    },
    {
      riddle:
        "I make you weak at the worst of all times.  I keep you safe, I keep you fine.  I make your hands sweat, and your heart grow cold,  I visit the weak, but seldom the bold.    Who am I?",
      answer: "Fear"
    },
    {
      riddle:
        "A man is in a solid metal room. Solid metal floor, ceiling and walls. The ONLY thing in the room is a table. How does he get out?",
      answer:
        "He hits his arm against the wall until it gets saw, he then uses the saw to cut the table in half, he then puts the two pieces of table back together to make a hole, he climbs out the hole and escapes"
    },
    {
      riddle:
        "Joe and Sally where sitting in their family room one night. While Joe was watching T.V, his wife Sally was reading. All of a sudden the power went out and Joe decided to go to bed, but Sally kept on reading. With no use of artificial light, Sally kept on reading. How?",
      answer: "Sally was blind, she was reading a book by Braille"
    },
    {
      riddle:
        "It is the beginning of eternity, the end of time and space, the beginning of the end, and the end of every space.  What is it?",
      answer: "The answer is a letter The Letter E"
    },
    {
      riddle: "What can you catch but not throw?",
      answer: "A cold"
    },
    {
      riddle: "What tree do Fortune Tellers look at?",
      answer: "It's a kind of tree A palm tree of course"
    },
    {
      riddle:
        "How is it that a person born in Massachusetts, whose parents were both born in Massachusetts, is not born a U.S. Citizen?",
      answer:
        "When was he born If he was born before 1783, then Massachusetts would still be a British colony"
    },
    {
      riddle: "What demands an answer, but asks no question?",
      answer: "Ring Ring A Telephone"
    },
    {
      riddle:
        "Three men were walking out one day. Then it started raining hard. They raced 4 blocks to there house. When they got in, one man didnt get his hair wet. They did not have an umbrella, or a hat. How can this be?",
      answer: "He was bald"
    },
    {
      riddle:
        "A little pool with two layers of wall around it. One white and soft and the other dark and hard, amidst a light brown grassy lawn with an outline of a green grass. What am I?",
      answer: "You find these on tropical islands.A Coconut"
    },
    {
      riddle: "I give milk and have a horn but I'm not a cow? What am I?",
      answer: "I carry milk A milk truck"
    },
    {
      riddle:
        "Give me an x, I'll stand to face you. Give me a cross, I'll turn my back on you. What am I?",
      answer: "The Number 9 (9 x 9 = 81, 9 + 9 = 18)"
    },
    {
      riddle:
        "In a contest, four fruits (an apple, a banana, an orange, and a pear) have been placed in four closed boxes (one fruit per box). People may guess which fruit is in which box. 123 people participate in the contest. When the boxes are opened, it turns out that 43 people have guessed none of the fruits correctly, 39 people have guessed one fruit correctly, and 31 people have guessed two fruits correctly.  The Question: How many people have guessed three fruits correctly, and how many people have guessed four fruits correctly?",
      answer:
        "It is not possible to guess only three fruits correctly: the fourth fruit is then correct too! So nobody has guessed three fruits correctly and 123-43-39-31 = 10 people have guessed four fruits correctly"
    },
    {
      riddle:
        "RIDDLE ME THIS:A woman walked into an office building, looked at the guard, and said her name was Jenny. The next day she walked into the same building, looked at the same guard and said her name was Julie. What is going on?",
      answer:
        "The woman has Multiple Personality Disorder. This happens when a traumatic experience causes so much pain that they make another personality to cope with the situation"
    },
    {
      riddle:
        "I have holes on the top and bottom. I have holes on my left and on my right. And I have holes in the middle, yet I still hold water. What am I?",
      answer: "Clean your sink I'm a Sponge"
    },
    {
      riddle:
        "I am like day,  you can find me near the river any day,  and you can make almost anything out of me.  who am I?",
      answer: "clay"
    },
    {
      riddle:
        "Which country has been hidden in the paragraph below:  The local habitat around a railway track can be very interesting. For example, supporting the track is a sleeper, under which you can find the lesser spotted great weevil.",
      answer:
        "Peru: The local habitat around a railway track can be very interesting. For example, supporting the track is a sleeper, under which you can find the lesser spotted great weevil"
    },
    {
      riddle:
        "I have a heart that never beats, I have a home but I never sleep. I can take a mans house and build anothers, And I love to play games with my many brothers. I am a king among fools. Who am I?",
      answer: "The King of Hearts in a deck of cards"
    },
    {
      riddle: "what is brown and stiky and goes round and round",
      answer: "poo"
    },
    {
      riddle:
        "I turn polar bears white and I will make you cry. I make guys have to pee and girls comb their hair. I make celebrities look stupid and normal people look like celebrities. I turn pancakes brown and make your champane bubble. If you sqeeze me, I'll pop. If you look at me, you'll pop. Can you guess the riddle?  97% of Harvard graduates can not figure this riddle out, but 84% of kindergarten students were able to figure this out in 6 minutes or less. Can you guess the correct answer?",
      answer:
        "The anwser is no. Read the last sencence It says “Can you guess the riddle?”So the anwser is no"
    },
    {
      riddle:
        "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody.",
      answer: "Pencil lead"
    },
    {
      riddle:
        "The Pope has it but he does not use it. Your father has it but your mother uses it. Nuns do not need it. Your lady friend's husband has it and she uses it. What is it?",
      answer: "A Last Name"
    },
    {
      riddle: "Captain is to Private as Master is to",
      answer: "Slave"
    },
    {
      riddle:
        "Two convicts are locked in a cell. There is an unbarred window high up in the cell. No matter if they stand on the bed or one on top of the other they can't reach the window to escape. They then decide to tunnel out. However, they give up with the tunneling because it will take too long. Finally one of the convicts figures out how to escape from the cell. What is his plan?",
      answer: "His plan is to dig the tunnel and pile up the dirt to escape"
    },
    {
      riddle:
        "With pointed fangs it sits in wait, With piercing force its doles out fate, Over bloodless victims proclaiming its might, Eternally joining in a single bite. What am I?",
      answer: "I'm a Stapler"
    },
    {
      riddle:
        "It walks on four legs in the morning, two legs at noon and three legs in the evening. What is it",
      answer:
        "Man. He crawls on all fours as a baby, walks on two legs as a man and uses two legs and a cane when he's old"
    },
    {
      riddle:
        "If who I am is whom I love, but whom I love is lost.... then who am I?",
      answer: "there is no answer but its cool to think about"
    },
    {
      riddle:
        "A horse travels a certain distance each day. Strangely enough, two of its legs travel 30 miles each day and the other two legs travel nearly 31 miles. It would seem that two of the horse's legs must be one mile ahead of the other two legs, but of course this can't be true. Since the horse is normal, how is this situation possible?",
      answer:
        "The horse operates a mill and travels in a circular clockwise direction. The two outside legs will travel a greater distance than the two inside legs"
    },
    {
      riddle: "how do you make 30p with 2 coins? one of them is not a 20p..",
      answer: "a 20p and a 10p . one of them isnt a 20p, but the other one is!"
    },
    {
      riddle:
        "I am the creator, through thick and thin, My time is sunset then I begin. Worlds of men and beasts I make, to me these things are not fake. But Over and over I will kill , I am the tirent and creator but not at will. What am I?",
      answer: "A sleeping dreamer"
    },
    {
      riddle:
        "I am a box that holds keys without locks, yet they can unlock your soul.  What am I?",
      answer: "A Piano"
    },
    {
      riddle:
        "As I went across the bridge, I met a man with a load of wood which was neither straight nor crooked. What kind of wood was it?",
      answer: "Sawdust"
    },
    {
      riddle:
        "You heard me before, Yet you hear me again, Then I die, 'Till you call me again.",
      answer: "Hello...Hello...Hello I am an echo"
    },
    {
      riddle:
        "im a container with the inside golden than cant be opened unless im broken!!!",
      answer: "an egg"
    },
    {
      riddle:
        "Who spends the day at the window, goes to the table for meals and hides at night?",
      answer: "A fly"
    },
    {
      riddle: "I am a tree, but I am very small... Who am I?",
      answer: "grass"
    },
    {
      riddle:
        "Where are the lakes that are referred to in the “Los Angeles Lakers?“",
      answer:
        "In Minnesota. The team was originally known as the Minneapolis Lakers and kept the name when they moved west"
    },
    {
      riddle: "What has garbage and flies?",
      answer: "A garbage truck"
    },
    {
      riddle:
        "There is a certain family with both girl and boy children. Each of the boys has the same number of brothers as he has sisters. Each of the girls has twice as many brothers as she has sisters. How many boys and girls are there in this family?",
      answer: "Four boys and three girls"
    },
    {
      riddle:
        "Three lives have I. Gentle enough to soothe the skin. Light enough to caress the sky. Hard enough to crack rocks. What am I?",
      answer: "I am Water"
    },
    {
      riddle:
        "As I was going to the mall I met a man with seven wives, Each wive held two bags, Each bag held a mother cat, Each mother cat had six babies, How many people where going to the mall?",
      answer: "One! As I was going to the mall I met a man.."
    },
    {
      riddle:
        "its is the beginning of existence and the end of time, its the beginning of everything and the end of space, what am i?",
      answer: "the letter e"
    },
    {
      riddle: "A father's child, a mother's child, yet no one's son. Who am I.",
      answer: "I'm their daughter"
    },
    {
      riddle:
        "I am a fathers child and a mothers child, yet I am not a son. Who am I?",
      answer: "I am their daughter"
    },
    {
      riddle:
        "I dig out tiny caves, and store gold and silver in them. I also build bridges of silver and make crowns of gold. They are the smallest you could imagine. Sooner or later everybody needs my help, yet many people are afraid to let me help them. Who am I?",
      answer: "I am a Dentist"
    },
    {
      riddle:
        "When I point up it's bright, but when I point down it's dark. What am I?",
      answer: "A Light Switch"
    },
    {
      riddle:
        "The rich need it  The poor have it  If you eat it you will die  Who am I",
      answer: "NOTHING"
    },
    {
      riddle: "I killed one fourth of mankind. Who am I?",
      answer: "Cain (who killed Abel)"
    },
    {
      riddle:
        "I'm related to you. I'm really close to you!  I'm your cousins aunt. Who am I?",
      answer: "My Mother"
    },
    {
      riddle:
        "The strangest creature you'll ever find: Two eyes in front and many many more behind.",
      answer: "A Peacock"
    },
    {
      riddle:
        "ees llahs uoy dna sdrawkcab siht daer eeht ot flesti laever lliw elddir eht  erbmun a si eulc eht ton si rewsna eht redroni hguorht desuac redro fo tuo yltnerruc nihtiw seil rewsna eht",
      answer:
        "the answer is “turds“. want to know how to get this answer? here it is:  decifered -   read this backwards and you shall see the riddle will reveal itself to thee  the clue is a number the answer is not caused through inorder currently out of order the answer lies within   after this, the top paragraph is used for only one thing. the word “backwards” after you decifer the riddle, you still have to do some backwards reading. “the clue is a number“. to get this number, count the number of words in each line, for the first, its 5. count from the end of the line “r”and count 5 letters back. you end with “u“. do the same for the rest, and you end with :  “usdrt” the next part, is a riddle in itself. “caused through inorder currently out of order the answer lies within” the “caused through inorder”is suggesting an anagram. the “answer lies within”means that the answer is the solved anagram.  if we solve the anagram, we come up with two results that make sense. “durst”and “turds”now think, a teenager made this riddle, it would seem strange having an answer like “durst”leaving only one possibility.  yep, you guessed it. the answer is “turds“"
    },
    {
      riddle:
        "Once upon a time there was a beautiful princess named Anna. Anna's father, the King, wanted to be sure his daughter married an intelligent man. To test his daughter's suitors the King hid Anna's picture in one of three boxes. The suitor had to be able to select the box with Anna's picture on one try and within twenty seconds.  On the gold box was the message “Anna's picture is in this box“. The silver box had the message “Anna's picture is not in this box.”“Anna's picture is not in the gold box”was written on the bronze box.  The King would tell each suitor “Only one of the three messages is correct.”Which box contained Anna's picture?",
      answer:
        "The silver box contained Anna's picture. If her picture had been in the gold box, two statements would have been true. (The messages on both the gold box and the silver box.) If her picture had been in the bronze box, two statements would have been true. (The messages on the bronze box and the silver box.)"
    },
    {
      riddle:
        "I can be long, or I can be short. I can be grown, and I can be bought. I can be painted, or left bare. I can be round, or square. What am I?",
      answer: "Your fingernails"
    },
    {
      riddle:
        "I have no legs or arms but I still eat with a fork everyday, What am I?",
      answer: "a snake"
    },
    {
      riddle:
        "I am thin, tall and I cannot walk but I have a tilted head . What am I!?",
      answer: "The number 1"
    },
    {
      riddle: "What fastens two people yet touches only one?",
      answer: "A wedding ring"
    },
    {
      riddle: "A man but an animal, a horn with two hands. What am I?",
      answer: "A Minotaur"
    },
    {
      riddle:
        "Detective Marty had been trailing three men suspected of committing several fur robberies. He received a message in a sealed envelope delivered by Roscoe, an underworld contact and decided to call Detective Sam, his partner. “I think I found out where the merchandise is stored,”said Detective Marty. Obviously Marty didn't want Roscoe to know what was in the envelope, so he read it to Sam in code. This is what Marty had said:  “Flame mate weighty soak shave comedy debut stake scared.” What did the message say?",
      answer:
        "Am at Eight Oak Ave, come but take care. Read through it again to see!"
    },
    {
      riddle:
        "You can carry it everywhere you go, and it does not get heavy. What is it?",
      answer: "Your name"
    },
    {
      riddle:
        "I am six letters. When you take one away I am twelve. What am I?",
      answer: "The word Dozens"
    },
    {
      riddle:
        "All the electricity was out in town and none of the street lights or traffic signals had power. A dark limousine was cruising down the newly paved blacktop, with its headlights off. A young boy dressed totally in black (with no reflectors) stepped out to cross the street. The moon wasn?t out and the boy had no flashlight, yet the driver stopped to let the boy cross the street. How did the driver see the boy?",
      answer: "The driver saw the boy because it was during the daylight hours"
    },
    {
      riddle:
        "You are trapped in a dimly lit dungeon deep below the city of Berlin.You know that one door leads to freedom,and a holiday in the canary islands,while the other leads to death. There are two armed giants,each gaurding one of the doors.You know that the giants names are Ivan and Mike.You do not know which is which. You also know that one of them always tells the truth, while the other always tells lies.Yet again,you do not know which is which. You are allowed to ask one of the giants one question. What question should you ask???",
      answer:
        "If i ask the other man which door leads to freedom,what will he say??? P.S.You should take the door opposite to what he says!!!"
    },
    {
      riddle:
        "Some say we are red, some say we are green. Some play us, some spray us. What are we?",
      answer: "Pepper"
    },
    {
      riddle:
        "Mr. and Mrs. Wilson have five children, half of them are boys.How is this possible?",
      answer: "They are all boys"
    },
    {
      riddle:
        "A woman shoots her husband. Then she holds him under water for over 5 minutes. Finally, she hangs him. But 5 minutes later they both go out together and enjoy a wonderful dinner together. How can this be?",
      answer:
        "The woman was a photographer. She shot a picture of her husband, developed it, and hung it up to dry"
    },
    {
      riddle: "What falls but doesn't break, and what breaks but doesn't fall?",
      answer: "Night and Day"
    },
    {
      riddle: "what is a triangle with 2 sides?",
      answer: "no such thing"
    },
    {
      riddle: "What goes into the water red and comes out black?",
      answer: "A red-hot poker"
    },
    {
      riddle:
        "A magician was boasting one day at how long he could hold his breath under water. His record was 6 minutes. A kid that was listening said, “that's nothing, I can stay under water for 10 minutes using no types of equipment or air pockets!”The magician told the kid if he could do that, he'd give him $10,000. The kid did it and won the money. Can you figure out how?",
      answer:
        "The kid filled a glass of water and held it over his head for 10 minutes"
    },
    {
      riddle:
        "My first is high, My second damp, My whole a tie, A writer's cramp.",
      answer:
        "Hyphen. The first two lines yield high-fen. A hyphen is used by a writer to tie (or cramp) two words together"
    },
    {
      riddle:
        "I can be cracked, I can be made. I can be told, I can be played. What am I?",
      answer: "A Joke!"
    },
    {
      riddle: "what is perfect, pretty, and smart?",
      answer: "Anna!!!!"
    },
    {
      riddle: "{ I GO UP AND DOWN.... BUT NEVER MOVE. WHO AM I?",
      answer: "STAIRS"
    },
    {
      riddle:
        "On a fine sunny day a ship was in the harbor. All of a sudden the ship began to sink. There was no storm and nothing wrong with the ship yet it sank right in front of the spectators eyes. What caused the ship to sink?",
      answer: "It was a Submarine"
    },
    {
      riddle:
        "Find the four digit number in which the first digit is one fourth of the last digit, the second digit is 6 times the first digit, and the third digit is the second digit plus 3.",
      answer: "1694"
    },
    {
      riddle:
        "One by one we come to life and side by side we wait, while our company swells in number some come early some come late. Some will bore you, some enthrill, but you can not choose between us, you must take us one and all, because we're bound together tightly and we're naught if we break free; if you want some clues about us simply answer who are we?",
      answer: "Chapters"
    },
    {
      riddle:
        "No legs have I to dance, No lungs have I to breathe, No life have I to live or die And yet I do all three. What am I?",
      answer: "I am Fire"
    },
    {
      riddle:
        "A man buys a rope from a woman for $3.00 and hands the woman a $10 bill. The woman goes into the grocery store next door to get change. She returns and gives the man $7.00. After the man leaves, the clerk from the store comes and says, “Hey, that was a counterfeit bill you gave me.”The woman gives the clerk a good bill. How much has the woman lost?",
      answer: "Seven dollars plus the rope"
    },
    {
      riddle:
        "A man is late for an appointment and, in his haste, takes a corner so fast that only two wheel were on the pavement. A police man is standing on the corner, but he did not give him a ticket. Why?",
      answer: "He was on a motorcycle"
    },
    {
      riddle:
        "I am the black child of a white father, a wingless bird, flying even to the clouds of heaven. I give birth to tears of mourning in pupils that meet me, even though there is no cause for grief, and at once on my birth I am dissolved into air.  Who am I?",
      answer: "I am Smoke"
    },
    {
      riddle:
        "Harry went out to dinner with his friends Larry, Barry, and Gary. Harry sat across from Gary. At Gary's right, opposite Barry, sat Larry. When the waiter came for their orders, Larry and Barry ordered steak. Gary chose fish, and Harry (who likes to be difficult) ordered like this: “Unless the man at the left of the man opposite the man who ordered fish is not having what the man across from the man at the right of the man at my left is having, then I'll have what the man across from the man at the right of the man opposite me ordered. Otherwise, bring me the fettucine alfredo.”Assuming “right”and “left”is from the viewpoint of the diners, what did Harry order?",
      answer:
        "What he essentially said to the waiter was: “If Larry ordered the same thing as Gary, I'll have steak.”Since Larry ordered steak and Gary ordered fish, Harry does not get steak"
    },
    {
      riddle: "What goes into the water black and comes out red?",
      answer: "A lobster"
    },
    {
      riddle:
        "{ People walk on me day and night. I never sleep...... Who am I?",
      answer: "A sidewalk"
    },
    {
      riddle:
        "Here on Earth it's always true, that a day follows a day. But there is a place where yesterday always follows today!",
      answer: "In a dictionary"
    },
    {
      riddle:
        "I have two arms, but fingers none. I have two feet, but cannot run. I carry well, but I have found I carry best with my feet OFF the ground. What am I?",
      answer: "A Wheelbarrow"
    },
    {
      riddle:
        "The man who made it doesn't want it, The man who bought it doesn't need it, The man who has it can't see it... What is it???",
      answer: "A coffin,olbiously!!!"
    },
    {
      riddle:
        "there is a man he leaves home and runs around three blocks, when he comes back home their are two masked men, who are they?",
      answer: "the catcher and the umpire"
    },
    {
      riddle:
        "When one does not know what it is, then it is something; but when one knows what it is, then it is nothing.",
      answer: "A riddle"
    },
    {
      riddle:
        "{ A dad and son are in a car accident  and the dad dies instantly  and the son gets sent to hospital...    The doctors have to operate on him, but one of the doctors turns around and says, “I can't operate on him.... he's my son. ” Who am I??",
      answer: "his mother"
    },
    {
      riddle:
        "I make you weak at the worst of times but in the ned i keep you safe, You will sweat in my presience even as you grow cold, i dwell with the weak and easily the brave but with out me who could tell the difference. Who am I?",
      answer: "Fear"
    },
    {
      riddle:
        "A man was just about to put his key in the door when he heard his wife scream “No Charlie, don't do it!”The man walked in his house to find his wife dead on the floor next to a doctor, a lawyer and a police officer. None of them had name tags and the man did not know who any of them were. The only thing the man knew is that the police officer did it.  How did he know?",
      answer:
        "His wife yelled, “No Charlie.”The doctor and lawyer were both women, so the police officer had to be Charlie"
    },
    {
      riddle: "What time is it when the clock strikes 13?",
      answer: "Time to get the clock fixed"
    },
    {
      riddle:
        "There is a barrel with no lid and some wine in it. “This barrel of wine is more than half full,”said Curly. “No it's not,”says Mo. “It's less than half full.” Without any measuring implements and without removing any wine from the barrel, how can they easily determine who is correct?",
      answer:
        "Tilt the barrel until the wine barely touches the lip of the barrel. If the bottom of the barrel is visible then it is less than half full. If the barrel bottom is still completly coverd by the wine, then it is more than half full"
    },
    {
      riddle:
        "A certain number has three digits. The sum of the three digits equals 36 times this number. Seven times the left digit plus 9 is equal to 5 times the sum of the two other digits. 8 times the second digit minus 9 is equal to the sum of the first and third. What is the number?",
      answer: "This one is fairly easy - 324 is the answer"
    },
    {
      riddle:
        "Peter celebrated his birthday on one day, and two days later his older twin brother, Paul, celebrated his birthday. How could this be?",
      answer:
        "When the mother of the twins went into labor, she was travelling by boat. The older twin, Paul, was born first, barely on March 1st. The boat then crossed a time zone, and the younger twin was born on February the 28th. In a leap year the younger twin celebrates his birthday two days before his older brother"
    },
    {
      riddle:
        "a person was building a house, and then it fell down, he did not get hurt nor get mad,on the count on, he knew it was going to fall and he did not expect any one to live in it.what happened?",
      answer: "the person was a little boy who was building a house of cards!"
    },
    {
      riddle: "How Far Can You Walk into the woods?",
      answer: "HalfWay"
    },
    {
      riddle: "What has a head, a tail, is brown, and has no legs?",
      answer: "A Penny"
    },
    {
      riddle:
        "How can you clasp someone's hands together in such a manner that they cannot leave the room without unclasping them?",
      answer:
        "Put their hands around a stationary object in the room, which will keep them from leaving the room unless they open their hands"
    },
    {
      riddle:
        "I can trap many different things and colors, Ever changing, not boring. Look closely and you may find yourself also caught in my trap.  What am I?",
      answer: "A mirror, or a pool of water"
    },
    {
      riddle:
        "You can take off all of my skin and I will not cry but YOU will Why ?",
      answer: "I'm an onion"
    },
    {
      riddle:
        "I am a fruit. I taste very yummy. I came from trees, ofcourse. I am color orange. What am I?",
      answer: "I am a Orange!!"
    },
    {
      riddle: "I'm a god, a planet, and measurer of heat. Who am I?",
      answer: "Mercury"
    },
    {
      riddle:
        "Who are the two brothers who live on opposite sides of the road yet never see each other?",
      answer: "Eyes"
    },
    {
      riddle:
        "What force and strength cannot get through I with a gentle touch can do, And many in the street would stand were I not a friend in hand.",
      answer: "A key"
    },
    {
      riddle:
        "I am thought to be everywhere, and I only have one rival. He hides within himself, and stays wherever I cannot reach.  Who am I? and Who is my rival??",
      answer: "I am the light...... He is the dark"
    },
    {
      riddle:
        "I can be created by humans, but they cannot control me. I suck on wood, paper and flesh alike. I can be more of a hindrance than help. To my creators, I seem to be everywhere at once.  What am I?",
      answer: "A baby"
    },
    {
      riddle:
        "I am the beginning of sorrow, and the end of sickness. You cannot express happiness without me, yet I am in the midst of crosses. I am always in risk, yet never in danger. You may find me in the sun, but I am never out of darkness.",
      answer: "The letter S"
    },
    {
      riddle:
        "Why did the baseball coach tell the baseball player to go to the bank?",
      answer: "Because the baseball coach wanted his quarter back!"
    },
    {
      riddle: "how many animals did moses take on the arc with him?",
      answer: "none. noah went on the arc not moses"
    },
    {
      riddle:
        "I say everything I hear to others around. I'm not an animal, nor part of the human race. I will, immediately, repeat after you; But only if my tail is in place. What am I?",
      answer: "A microphone"
    },
    {
      riddle:
        "There is a bus full of people travelling over San Francisco and no one gets off the bus throughout the journey. But when it gets to the other side there is not a single person left. How is this possible?",
      answer: "They are all married"
    },
    {
      riddle:
        "A headless lawyer had a letter to write; It was read by a man who had lost his sight. The dumb repeated it word for word; And deaf was he who listened and heard.",
      answer:
        "The letter in question is the letter “O“. It is zero. The lawyer had nothing to write. The blind could read nothing. The person who was dumb could repeat nothing. The deaf man listened and heard nothing"
    },
    {
      riddle:
        "When you stop and look, you can always see me. If you try to touch you cannot feel me. I cannot move, but as you near me, I will move away from you. What am I?",
      answer: "I am the horizon"
    },
    {
      riddle:
        "I soar without wings, I see without eyes. I've traveled the universe to and fro. I've conquered the world, yet I've never been anywhere but home. Who am I?",
      answer: "I'm your imagination"
    },
    {
      riddle:
        "Ray Whitcombe is found dead in his office at his desk. The police have narrowed the suspects down to three people: Mrs. Barbara Whitcombe, Ray's wife; Mr. Jason McCubbins, Ray's business partner; and Mr. Harold Nichols, Ray's best friend. All three visited Mr. Whitcombe the day of his murder, but all three provide the police with stories of explanation as to the reason for their visit. Police found Mr. Whitcombe with his wrist watch still on his right arm, a torn up picture of his wife laying on the floor beside the trash can, and an ink pen in his right hand.  On the desk, the police found a name plate, a telephone that was off the hook, and a personal calendar turned to the July 5th page with 7B91011 written on it. After examining this evidence, the police knew their suspect. Who was it?",
      answer:
        "Jason McCubbins, Ray's business partner. The calendar is the clue to solving this murder. The police realized that since Mr. Whitcombe was wearing his watch on his right arm, he must be left handed. But the pen was found in his right hand. Realizing that the number on the calendar was written in a hurry and with his opposite hand, police matched the written number with the months of the year. So the B was an 8, thereby giving us 7-8-9-10-11: July, August, September, October, November. Use the first letter of each month and it spells J-A-S-O-N"
    },
    {
      riddle:
        "Shortly after jumping from an aircraft at 5000 or so feet, a man deploys his parachute. When he looks up he sees a rather large hole in his parachute.  Nonetheless he lands safely without assistance and without using his reserve chute. Why did he survive?",
      answer:
        "Most parachutes need a hole in them to let the air pass through. Otherwise the parachute would swing wildly side to side"
    },
    {
      riddle:
        "As a whole, I am both safe and secure. Behead me, and I become a place of meeting. Behead me again, and I am the partner of ready. Restore me, and I become the domain of beasts. What am I?",
      answer: "A Stable"
    },
    {
      riddle:
        "A white dove flew down by the castle. Along came a king and picked it up handless, ate it up toothless, and carried it away wingless.",
      answer: "Snow melted by the sun"
    },
    {
      riddle:
        "I'm not really more than holes tied to more holes; I'm strong as good steel, though not as stiff as a pole. What am I?",
      answer: "A steel chain"
    },
    {
      riddle:
        "When I left, I didn't know where I was going; when I got there, I didn't know where I was; when I returned, I didn't know where I had been. Who was I?",
      answer: "Christopher Columbus - when he found the Americas"
    },
    {
      riddle:
        "There lived a man in a house and everytime he went to bed he turned on the light. One night, the man forgot to turn on the light. The next day he read the paper and killed himself. Why?",
      answer:
        "The man lived in a lighthouse. He forgot to turn on the light and a ship crashed. The next morning he read in the paper that the ship crashed and killed himself because he felt guilty"
    },
    {
      riddle:
        "Round as a button, Deep as a well. If you want me to talk, You must first pull my tail.  What am I?",
      answer: "A bell"
    },
    {
      riddle:
        "A doctor and a bus driver are both in love with the same woman, an attractive girl named Sarah. The bus driver had to go on a long bustrip that would last a week. Before he left, he gave Sarah seven apples. Why?",
      answer: "An apple a day keeps the doctor away!"
    },
    {
      riddle:
        "a cat goes to the top of a 50 story building and jumpsout but doesnt die or get hurt and doesnt land on any thing,what happened",
      answer: "the cat jumped off the first floor"
    },
    {
      riddle:
        "If a man carried my burden he would break his back. I am not big but leave silver in my tracks. What am I?",
      answer: "A snail"
    },
    {
      riddle:
        "Pronounced as one letter, But look and you'll see, That really I'm written with three. I'm read from both ends, The same either way.  What am I?",
      answer: "I am an eye, or an ewe"
    },
    {
      riddle:
        "You see a pig in the middle of the road. What do you do? A)Yell piggy figgy higgy kiggy biggy diggy B)Get a burger C)Go to an Irish Dance Competition D)Buy a money clip E)Jump F)Call your mom and say WOOOO HOOOO! G)Yes",
      answer: "You Say here piggy piggy!!! i got ur slops wittle piggy!"
    },
    {
      riddle:
        "It runs and runs but can never flee. It is often watched, yet never sees. When long it brings boredom, When short it brings fear. What is it?",
      answer: "Time, which is often watched when you stare at a clock"
    },
    {
      riddle:
        "What is once in a minute, twice in a moment, and never in a thousand years?",
      answer: "The letter M"
    },
    {
      riddle: "What is the color of the vest's sleeves ? ...",
      answer: "Vests don't have sleeves"
    },
    {
      riddle:
        "Almost everyone sees me without noticing me, For what is beyond is what he or she seeks. What am I?",
      answer: "A window"
    },
    {
      riddle:
        "I'm the part of the bird that's not in the sky. I can swim in the ocean and yet remain dry. What am I?",
      answer: "A shadow"
    },
    {
      riddle:
        "In marble walls as white as milk, Lined with skin as soft as silk, Within a fountain crystal clear, A golden apple does appear. No doors are there to this stronghold-- Yet thieves break in and steal the gold.",
      answer: "an egg"
    },
    {
      riddle:
        "At dusk I come without being fetched.  At dawn I disappear without being stolen.  I'm a poet's tears and a sailor's guide. What am I ?",
      answer: "They're in the night sky Stars"
    },
    {
      riddle:
        "There is a pink single story house and everything in it is pink. The doors are pink, the windows are pink and the TV is pink. What color are the stairs....",
      answer: "There are no stairs in a single story house"
    },
    {
      riddle: "what has six legs but olny walks with 4?",
      answer: "a horse and his rider!"
    },
    {
      riddle: "What kind of storm is always in a rush?",
      answer: "a hurry- cane"
    },
    {
      riddle:
        "I am the fountain from which no one can drink. For many I am considered a necessary link. Like gold to all I am sought for, But my continued death brings wealth for all to want more. .What am I?",
      answer: "Oil"
    },
    {
      riddle:
        "You and your three friends stay over night at a hotel it costs thirty to stay over each of you pay 10 bucks shortly after you get back the bellhop arrives and gives you 5 bucks becasue it was only 25 dollars you give the bellhop a tip of 2 bucks and your friends both a dollar   WHERE DID THE LAST DOLLAR GO !!!",
      answer: "I don't know"
    },
    {
      riddle:
        "What sport has four letters, is played all around the world, and begins with a T?",
      answer: "Golf"
    },
    {
      riddle:
        "What is that which goes with a carriage, comes with a carriage, is of no use to a carriage, and yet the carriage cannot go without it?",
      answer: "Noise"
    },
    {
      riddle:
        "a man and his son were driving to meet there mom when they got in a car wreck. on the way to the ER the man past away. the surgeon said i cant operate on this boy he is my son. how ca n this be?",
      answer: "the surgeon is the mom"
    },
    {
      riddle:
        "A girl is twice as old as her brother and half as old as her father. In 50 years, her brother will be half as old as his father. How old is the daughter now?",
      answer: "50 years old"
    },
    {
      riddle:
        "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
      answer: "A river lolz!"
    },
    {
      riddle:
        "The higher I climb, the hotter I engage, I can not escape my crystal cage. What am I?",
      answer: "Mercury in a thermometer"
    },
    {
      riddle:
        "Poke your fingers in my eyes and I will open wide my jaws. Linen cloth, quills, or paper, my greedy lust devours them all.",
      answer: "Shears, or scissors"
    },
    {
      riddle:
        "When I am young I am tall. When I am old I am short.  What can I be?",
      answer: "Fire A Candle"
    },
    {
      riddle:
        "My voice is tender, my waist is slender and I'm often invited to play. Yet wherever I go I must take my bow or else I have nothing to say. What am I?",
      answer: "A violin"
    },
    {
      riddle:
        "so your in a mansion and the powers out. you see a green door and a red door which do you go through (It does'nt matter which door). Now you see a purple door and a orange door which do you go through. now you see a door with a golden handle and a door with a silver handle which door do you go through no you finally come to some signs 1 says death from drowning another says death from machine guns and the last 1 says death from electric chair (all the signs are on doors). then you see a big sign that says or stay in the mansion and starve to death. which do you do and also live.",
      answer: "The eletric chair the powers ouy"
    },
    {
      riddle: "What kind of can never needs a can-opener?",
      answer: "A pelican!"
    },
    {
      riddle:
        "You want to send a valuable object to a friend. You have a box which is more than large enough to contain the object. You have several locks with keys. The box has a locking ring which is more than large enough to have a lock attached. But your friend does not have the key to any lock that you have. How do you do it? Note that you cannot send a key in an unlocked box, since it might be copied.",
      answer:
        "Attach a lock to the ring. Send it to her. She attaches her own lock and sends it back. You remove your lock and send it back to her. She removes her lock"
    },
    {
      riddle:
        "A cloud was my mother, the wind is my father, my son is the cool stream, and my daughter is the fruit of the land. A rainbow is my bed, the earth my final resting place, and I'm the torment of man.",
      answer: "Rain"
    },
    {
      riddle: "If you say my name I am no more.",
      answer:
        "I am Silence. You are silent until u speak. When you say silence you break it. Therefore, silence does not exist when you say “it's”name"
    },
    {
      riddle:
        "Why Does  1 = 3  2 = 3  3 = 5  4 = 4  5 = 4  6 = 3  7 = 5  8 = 5  9 = 4  10 = 3",
      answer:
        "Just count how many letters are in the number  For Example  1 has 3 letters  2 has 3 letters  3 has 5 letters  4 has 4 letters  5 has 4 letters and so on"
    },
    {
      riddle:
        "Walking home one day, you take a short cut along the train tracks. The tracks cross a narrow bridge over a deep gorge. At the point you are 3/8 of the way across the bridge, you hear the train whistle somewhere behind you. You charge across the bridge, and jump off the track as the train is about to run you down. As it happens, if you had gone the other way, you would have reached safety just before being run over as well.  If you can run ten miles per hour, how fast is the train moving?",
      answer:
        "The train is moving at 40 miles per hour. Imagine that a friend is walking with you. When the train whistle blows, you head away from the train, he heads toward it. When he reaches safety, you will be 6/8 (or 3/4)of the way across the bridge, and the train will have just reached the bridge. For the train to cross 4/4 of the bridge in the time you cross the remaining 1/4, the train must be moving four times your speed"
    },
    {
      riddle:
        "I have a little house in which I live all alone. It has no doors or windows, and if I want to go out I must break through the wall.",
      answer: "A chick in an egg"
    },
    {
      riddle: "Why did the Indian chief wear so many feathers?",
      answer: "To keep his wigwam"
    },
    {
      riddle:
        "if you stack thousands of pizza pies on top of eachother what would you get?",
      answer: "the leaning tower of pizza"
    },
    {
      riddle:
        "Joe bets Tony $100 that he can predict the score of the football game before it starts. Tony agrees, but loses the bet. Why did Tony lose the bet?",
      answer:
        "Joe said the score would be 0-0 and he was right. “Before”any football game starts, the score is always 0-0"
    },
    {
      riddle:
        "A young boy needs to cross a bridge that can only hold 100 pounds of weight. The young boy weighs 98 pounds. The young boy also has 3 balls that each weigh 1 pound each. The yougn boy needs to get across the bridge with all the balls at the exact same time. How does he get across the bridge with all 3 balls at the same time?",
      answer: "The Boy juggles all 3 balls while he walks across the bridge"
    },
    {
      riddle:
        "if you're paddling upstream in a canoe and a wheel falls off, how many pancakes are in the doghouse?",
      answer: "green, because ice-cream doesnt have a celphone"
    },
    {
      riddle:
        "Trains travel from one town to another town all day, always on the same track, always going nonstop and at the same speed. The noon train took 80 minutes to complete the trip, but the 4 PM train took an hour and 20 minutes. Why?",
      answer: "80 minutes is the same as an hour and 20 minutes"
    },
    {
      riddle:
        "Some try to hide, some try to cheat, but time will show, we always will meet. Try as you might, to guess my name, I promise you'll know, when you I do claim. Who am I?",
      answer: "Death"
    },
    {
      riddle:
        "There was a buss with 26 people in it. Then, they decided to cross the Golden Gate Bridge. When they crossed the bridge, there was no single person left. Also, no one got out from the bus. What happened?",
      answer: "They all got married"
    },
    {
      riddle:
        "A man lay dead in a room with 51 bicycles around him. What happened?",
      answer:
        "The man was playing a poker game and cheated. The bicycles are a type of card"
    },
    {
      riddle:
        "John was very tired after a long day of work. He went to bed at 10 p.m., wound his alarm clock and set it for noon the next day. Since John fell asleep almost immediately, how many hours of sleep did he get before the alarm woke him?",
      answer:
        "Two hours. Wind-up clocks can't be set more than 12 hours in advance"
    },
    {
      riddle: "What is so fragile that when you say its name you break it?",
      answer: "Silence"
    },
    {
      riddle:
        "Other than being colors, what do the words orange, silver and purple have in common?",
      answer: "There is no word in the English language that rhymes with them"
    },
    {
      riddle: "What has a head, a tail, is brown, and has no legs?",
      answer: "A penny"
    },
    {
      riddle:
        "What is round as a dishpan, deep as a tub, and still the oceans couldn't fill it up?",
      answer: "A sieve"
    },
    {
      riddle:
        "A kind man comes across a dirty box, a voice says to him “Coconuts, $5 a dozen”With his lightning quick arithmetic he calculates that if he sold those same coconuts to the coconut air assault team for the accepted rate of $3 per dozen that in no time at all he would be a millionaire. What's with this guy, assuming his math is accurate?",
      answer: "He was a billionaire"
    },
    {
      riddle:
        "If you spell out all the numbers, how far do you have to go until you use the letter a?",
      answer: "one thousand"
    },
    {
      riddle:
        "A man ordered a length of rope by telephone from his nearest hardware shop. But when he went to collect the rope, he found that the assistant had miswritten the order by interchanging feet and inches. As a result of this, the rope was only 30 percent of the length that the man wanted. What length did he want and what length did he get?",
      answer: "The man ordered 9 feet 2 inches of rope, and got 2 feet 9 inches"
    },
    {
      riddle:
        "In a pond there are some flowers with some bees hovering over the flowers. How many flowers and bees are there if both the following statements are true:  1. If each bee lands on a flower, one bee doesn't get a flower. 2. If two bees share each flower, there is one flower left out.",
      answer: "4 bees and 3 flowers"
    },
    {
      riddle:
        "Five women each purchase a household item for use in a different room.  1. Mrs. Simpson does not keep her item in the bedroom. 2. Amy has a television; Mrs. Griggs has a hi-fi. 3. Kylie does not keep her item in the bedroom. 4. Clara does not have a telephone. 5. Mrs. Williams does not keep her item in the kitchen. 6. Kylie keeps hers in the conservatory. 7. Michelle has a bookcase; Mrs. Dingle has a computer. 8. Michelle does not keep her in the living room. 9. Mrs. Pringle keeps hers in the study; Roxanne keeps hers in the kitchen.  Can you work out the full name of each woman, her item and where she keeps it?",
      answer:
        "Kylie Dingle - Conservatory - Computer Amy Williams - Bedroom - Television Clara Griggs - Living Room - Hi-Fi Roxanne Simpson - Kitchen - Telephone Michelle Pringle - Study - Bookcase"
    },
    {
      riddle:
        "I fly, yet I have no wings. I cry, yet I have no eyes. Darkness follows me; lower light I never see.",
      answer: "A cloud"
    },
    {
      riddle:
        "There were five men going to church and it started to rain. The four that ran got wet and the one that stood still stayed dry.",
      answer: "A body in a coffin with the bearers"
    },
    {
      riddle:
        "Three cars had driven into a parking lot at the same time, and the three drivers left them all for the attendant to park. Unfortunately, he isn't too good at remembering exactly which driver drove which car. However, he is sure of these 6 facts:  a. Colin drove the BMW if and only if Mr. Cooper drove the Avenger. b. Alan drove the Cortina if and only if Mr. Cooper drove the BMW. c. Colin is Mr. Brown if and only if Mr. Andrews drove the BMW. d. Brian is Mr. Andrews if and only if Colin drove the BMW. e. Mr. Cooper drove the Avenger if and only if Alan is Mr. Brown. f. Colin is Mr. Brown if and only if Alan drove the Cortina.  Who arrived with which car?",
      answer:
        "Brian Brown drove the BMW, Alan Andrew's drove the Avenger, and Colin Cooper drove the Cortina"
    },
    {
      riddle:
        "My voice rises above the din, Sometimes catching all unaware. I never ask questions, yet get many answers.",
      answer: "I am a doorbell"
    },
    {
      riddle:
        "I can flutter and take your breath away. I can take a beating, but do not bruise. If I stopped you would be sure to lose. Everyday I am with you. What am I?",
      answer: "Your heart"
    },
    {
      riddle:
        "I herald the darkness which descends on all creatures; You will know my approach by moans and wracked features. I visit the hippo, hyena, and horse, But never go near snails and spiders, of course. I would circle the glove, leaping one to the other, Should all the world's people ever clasp hands together.  What am I?",
      answer: "I am a Yawn"
    },
    {
      riddle: "If you are a velophile, what is it that you love?",
      answer: "bicycle"
    },
    {
      riddle:
        "My thunder comes before the lightning; My lightning comes before the clouds; My rain dries all the land it touches. What am I?",
      answer: "A volcano"
    },
    {
      riddle:
        "There are four brothers in this world that were all born together. The first runs and never wearies. The second eats and is never full. The third drinks and is always thirsty. The fourth sings a song that is never good.",
      answer: "Water, Fire, Earth, and Wind"
    },
    {
      riddle:
        "A hiker comes to a fork in the road and doesn't know which way to go to reach his destination. There are two men at the fork, one of whom always tells the truth while the other always lies. The hiker doesn't know which is which, though. He may ask one of the men only one question to find his way. Which man does he ask, and what is the question?",
      answer:
        "Either man should be asked the following question: “If I were to ask you if this is the way I should go, would you say yes?”While asking the question, the hiker should be pointing at either of the directions going from the fork"
    },
    {
      riddle:
        "They can trickle down, They can tickle too. Or make you sneeze, Or comfort you. Their rustling sound, you've rarely heard, Unless you're a pillow or a bird!  What are they?",
      answer: "They are feathers"
    },
    {
      riddle:
        "Four children, Rob, Danny, Martha and Bent, had a race across the yard. Danny was as many places behind Martha as Bent was ahead of Rob. Martha was not first and Rob was not second.  Who was first, second, third and fourth?",
      answer: "First - Bent Second - Martha Third - Rob Fourth - Danny"
    },
    {
      riddle: "What has to be broken before it can be used?",
      answer: "An egg"
    },
    {
      riddle:
        "It's been around for millions of years, but it's no more than a month old. What is it?",
      answer: "The moon"
    },
    {
      riddle:
        "Rungs of a Ladder The rungs of a 10 foot ladder attached to a ship are 1 foot apart. If the water is rising at the rate of one foot an hour, how long will it take until the water covers over the ladder?...",
      answer:
        "It will never cover the ladder because as the water rises, so will the floating ship"
    },
    {
      riddle: "A father's child, a mother's child, yet no one's son. Who am I?",
      answer: "The daughter"
    },
    {
      riddle:
        "There was a yellow eye on a blue face, and a red eye on a green face. The yellow eye said to the red eye “we are both the same, only i'm higher, and you are lower“. What are they?",
      answer: "The sun in the sky, and a rose on the grass"
    },
    {
      riddle:
        "The two dice in each pair are identical. As usual, the numbers on opposite sides add up to seven.  On each pair, what is the total of the two hidden sides that face each other?   CLUE:Dice A has a 5 and 3{mospagebreak}",
      answer: "Dice A.) 5 + 3 = 8  Dice B.) 4 + 4 = 8"
    },
    {
      riddle:
        "life after death it repeats it's self, green to brown it is neither men nor women. what am I?",
      answer: "a tree"
    },
    {
      riddle:
        "Inspector Morse was outside a milkbar when a lady screamed 'NO JOHN NO!!' inspector Morse ran inside the milkbar and inside there was a woman dead on the floor in the Bar there was a lawyer , a milkman , a singer , a teacher and the shop owner . Without hesitation Inspector Morse arrested the milkman. Why is this ?",
      answer: "Because the milkman was the only male"
    },
    {
      riddle:
        "What has no heart Yet is alive? It never moves People stab it with knives.",
      answer: "A tree"
    },
    {
      riddle: "A father's child, a mother's child, yet no one's son. Who am I?",
      answer: "I'm their daughter"
    },
    {
      riddle:
        "I've got ten or more daughters. I've got less than ten daughters. I've got at least one daughter. If only one of these statements is true, how many daughters have I got?",
      answer:
        "If I have any daughters, there will always be two statements which are true. Therefore, I have no daughters"
    },
    {
      riddle:
        "a cat goes to the top of a 50 story building and jumpsout but doesnt die or get hurt and doesnt land on any thing,what happened",
      answer: "the cat jumped off the first floor"
    },
    {
      riddle:
        "You pick it, You peel the outside, You cook the inside, You eat the outside, And throw away the inside.  What am I?",
      answer: "Corn"
    },
    {
      riddle: "what is black when clean and white when dirty?",
      answer: "a chalkboard"
    },
    {
      riddle:
        "I come at the end of time and at the start of eternitiy. I come four times in every week, but only once in a thousand years. What am I?",
      answer: "The letter E."
    }
  ];
  return (
    <div className="text-center">
      <p className="display-4 text-info">Riddles</p>
      <div className="d-flex flex-column">
        {prouctsList.map((productObj) => (
          <Game2Product productObj={productObj} />
        ))}
      </div>
    </div>
  );
}

export default Products;
