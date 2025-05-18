import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from './models/Question.js';

dotenv.config();

const questions = [
  {
    rank: "Assistant Intern",
    question: "Who is the founder of Royal Ambassadors?",
    options: ["Dr. Ayokunle", "William Carey", "J.M. Frost", "Billy Graham"],
    correctAnswer: "J.M. Frost"
  },
  {
    rank: "Assistant Intern",
    question: "What is the RA motto?",
    options: ["Onward Christian Soldiers", "We are Ambassadors for Christ", "To Live is Christ", "Christ in Us"],
    correctAnswer: "We are Ambassadors for Christ"
  },
  {
    rank: "Assistant Intern",
    question: "Which scripture inspires the RA Motto?",
    options: ["2 Corinthians 5:20", "Romans 12:1", "John 3:16", "Mark 16:15"],
    correctAnswer: "2 Corinthians 5:20"
  },
  {
    rank: "Assistant Intern",
    question: "Which color in the RA emblem stands for purity?",
    options: ["Red", "Blue", "White", "Gold"],
    correctAnswer: "White"
  },
  {
    rank: "Assistant Intern",
    question: "What is the highest RA rank?",
    options: ["Senior Envoy", "Special Envoy", "Envoy", "Intern"],
    correctAnswer: "Senior Envoy"
  },
  {
    rank: "Assistant Intern",
    question: "What is the purpose of the RA uniform?",
    options: ["Decoration", "Identity and discipline", "Tradition", "Color matching"],
    correctAnswer: "Identity and discipline"
  },
  {
    rank: "Assistant Intern",
    question: "What does the open Bible symbolize in RA emblem?",
    options: ["Judgment", "Evangelism", "The Word of God", "Teaching"],
    correctAnswer: "The Word of God"
  },
  {
    rank: "Assistant Intern",
    question: "What day is commonly used for RA unit meetings?",
    options: ["Monday", "Sunday", "Saturday", "Friday"],
    correctAnswer: "Saturday"
  },
  {
    rank: "Assistant Intern",
    question: "Which part of the RA emblem represents spiritual warfare?",
    options: ["Torch", "Sword", "Shield", "Cross"],
    correctAnswer: "Sword"
  },
  {
    rank: "Assistant Intern",
    question: "How many points are in the RA pledge?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },
  {
    rank: "Assistant Intern",
    question: "What is the symbol of RA's commitment to missions?",
    options: ["Torch", "Sword", "Open Bible", "Blue sash"],
    correctAnswer: "Torch"
  },
  {
    rank: "Assistant Intern",
    question: "Which RA officer is responsible for parade conduct?",
    options: ["President", "Parade Commander", "Mission Officer", "PRO"],
    correctAnswer: "Parade Commander"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the current RA National President?",
    options: ["Amb. Pleni. Kayode Adediran", "Nathaniel Aribo", "Victor Aderonmu", "Akinrinola"],
    correctAnswer: "Amb. Pleni. Kayode Adediran"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the RAG2BA Treasurer?",
    options: ["Amb. Pleni. Adedayo Adeleke", "Michael Agbebi", "Taiwo Idowu", "Olushola Korede"],
    correctAnswer: "Amb. Pleni. Adedayo Adeleke"
  },
  {
    rank: "Assistant Intern",
    question: "What fruit of the spirit is listed first in Galatians 5?",
    options: ["Joy", "Peace", "Love", "Self-control"],
    correctAnswer: "Love"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the founder of the Baptist denomination?",
    options: ["John Smith", "Martin Luther", "Thomas Helwys", "William Carey"],
    correctAnswer: "John Smith"
  },
  {
    rank: "Assistant Intern",
    question: "What is the official uniform color for RA?",
    options: ["Red and white", "Blue and gold", "Blue and white", "Green and black"],
    correctAnswer: "Blue and white"
  },
  {
    rank: "Assistant Intern",
    question: "Which gospel comes first in the New Testament?",
    options: ["Mark", "Luke", "Matthew", "John"],
    correctAnswer: "Matthew"
  },
  {
    rank: "Assistant Intern",
    question: "What does RAG2BA stand for?",
    options: ["Royal Ambassadors of God to Baptist Association", "Royal Assembly of Global Baptists of Africa", "Royal Ambassadors of God 2 Baptist Association", "RA Global 2 Baptist Alliance"],
    correctAnswer: "Royal Ambassadors of God 2 Baptist Association"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the RAG2BA Mission Officer?",
    options: ["Amb. Pleni. Olaleye Awobode", "Amb. Pleni. Nathaniel Aribo", "Amb. Pleni. Victor Aderonmu", "Amb. Extra. Ayeni Joshua"],
    correctAnswer: "Amb. Pleni. Olaleye Awobode"
  },
  {
    rank: "Assistant Intern",
    question: "Which scripture talks about being ambassadors for Christ?",
    options: ["2 Corinthians 5:20", "Romans 12:1", "Matthew 5:13", "1 Peter 2:9"],
    correctAnswer: "2 Corinthians 5:20"
  },
  {
    rank: "Assistant Intern",
    question: "The color blue in the RA emblem represents what?",
    options: ["Loyalty", "Courage", "Heaven", "Purity"],
    correctAnswer: "Loyalty"
  },
  {
    rank: "Assistant Intern",
    question: "Which officer keeps financial records?",
    options: ["Treasurer", "Financial Secretary", "Recording Secretary", "President"],
    correctAnswer: "Financial Secretary"
  },
  {
    rank: "Assistant Intern",
    question: "Which officer oversees RA records?",
    options: ["Mission Officer", "Recording Secretary", "Parade Commander", "Custodian"],
    correctAnswer: "Recording Secretary"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the Custodian of RAG2BA?",
    options: ["Amb. Extra. Gideon Olusegun", "Amb. Extra. Ayeni Joshua", "Amb. Pleni. Olushola Korede", "Amb. Pleni. Victor Aderonmu"],
    correctAnswer: "Amb. Extra. Gideon Olusegun"
  },
  {
    rank: "Assistant Intern",
    question: "Which part of the Bible is called the Pentateuch?",
    options: ["First 5 books", "Last 5 books", "Middle Psalms", "Prophets"],
    correctAnswer: "First 5 books"
  },
  {
    rank: "Assistant Intern",
    question: "What is the first book of the Bible?",
    options: ["Genesis", "Exodus", "Matthew", "John"],
    correctAnswer: "Genesis"
  },
  {
    rank: "Assistant Intern",
    question: "How many chapters are in the book of Psalms?",
    options: ["100", "150", "121", "99"],
    correctAnswer: "150"
  },
  {
    rank: "Assistant Intern",
    question: "What does the torch in the RA emblem symbolize?",
    options: ["Discipline", "Spiritual Light", "Unity", "Tradition"],
    correctAnswer: "Spiritual Light"
  },
  {
    rank: "Assistant Intern",
    question: "What is the role of the PRO in RA?",
    options: ["Prayer leader", "Parade controller", "Public Relations Officer", "Pledge enforcer"],
    correctAnswer: "Public Relations Officer"
  },
  {
    rank: "Assistant Intern",
    question: "What fruit of the spirit relates to control?",
    options: ["Joy", "Peace", "Self-control", "Faithfulness"],
    correctAnswer: "Self-control"
  },
  {
    rank: "Assistant Intern",
    question: "Where is the book of Revelation found?",
    options: ["Old Testament", "Gospels", "Epistles", "New Testament"],
    correctAnswer: "New Testament"
  },
  {
    rank: "Assistant Intern",
    question: "The Great Commission is found in which scripture?",
    options: ["Matthew 28:19–20", "Mark 1:17", "John 3:16", "Acts 1:8"],
    correctAnswer: "Matthew 28:19–20"
  },
  {
    rank: "Assistant Intern",
    question: "What day is most RA induction held?",
    options: ["Saturday", "Sunday", "Friday", "Monday"],
    correctAnswer: "Sunday"
  },
  {
    rank: "Assistant Intern",
    question: "Which of these is NOT part of the RA badge?",
    options: ["Sword", "Torch", "Cross", "Star"],
    correctAnswer: "Star"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the current ASVC Coordinator?",
    options: ["Amb. Extra. Ayeni Joshua", "Amb. Pleni. Kayode Adediran", "Amb. Pleni. Olaleye Awobode", "Couns. 'Seye Adewuyi"],
    correctAnswer: "Amb. Extra. Ayeni Joshua"
  },
  {
    rank: "Assistant Intern",
    question: "What do RA's use for their pledge?",
    options: ["RA Manual", "RA Constitution", "Scripture card", "Unit handbook"],
    correctAnswer: "RA Manual"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the Ex. Officio of RAG2BA?",
    options: ["Couns. 'Seye Adewuyi", "Amb. Pleni. Michael Agbebi", "Amb. Pleni. Kayode Adediran", "Amb. Pleni. Obafemi Osinubi"],
    correctAnswer: "Couns. 'Seye Adewuyi"
  },
  {
    rank: "Assistant Intern",
    question: "RA stands for?",
    options: ["Royal Ambassadors", "Redeemed Ambassadors", "Royal Alliance", "Righteous Activists"],
    correctAnswer: "Royal Ambassadors"
  },
  {
    rank: "Assistant Intern",
    question: "Which gospel details the birth of Jesus?",
    options: ["Luke", "Mark", "John", "Acts"],
    correctAnswer: "Luke"
  },
  {
    rank: "Assistant Intern",
    question: "Who wrote the most books in the New Testament?",
    options: ["Peter", "John", "Paul", "James"],
    correctAnswer: "Paul"
  },
  {
    rank: "Assistant Intern",
    question: "What is the role of a Mission Officer?",
    options: ["Teach doctrine", "Manage unit funds", "Oversee mission activities", "Train drill leaders"],
    correctAnswer: "Oversee mission activities"
  },
  {
    rank: "Assistant Intern",
    question: "The color gold in RA represents?",
    options: ["Courage", "Faith", "Royalty", "Victory"],
    correctAnswer: "Royalty"
  },
  {
    rank: "Assistant Intern",
    question: "Where is the RA manual sourced from?",
    options: ["Nigeria Baptist Convention", "RA USA", "Nigerian Army", "Youth Council"],
    correctAnswer: "Nigeria Baptist Convention"
  },
  {
    rank: "Assistant Intern",
    question: "RA weekly unit activities must include?",
    options: ["Worship, Bible Study, Drill, Report", "Singing, Donations, Drama", "Food sharing", "Outreach only"],
    correctAnswer: "Worship, Bible Study, Drill, Report"
  },
  {
    rank: "Assistant Intern",
    question: "What book comes after Genesis?",
    options: ["Leviticus", "Numbers", "Exodus", "Deuteronomy"],
    correctAnswer: "Exodus"
  },
  {
    rank: "Assistant Intern",
    question: "Which rank comes after Assistant Intern?",
    options: ["Intern", "Senior Intern", "Envoy", "Junior Envoy"],
    correctAnswer: "Intern"
  },


  {
    rank: "Assistant Intern",
    question: "How many gospels are in the New Testament?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },
  {
    rank: "Assistant Intern",
    question: "What is the last book of the Bible?",
    options: ["Jude", "Revelation", "Malachi", "Acts"],
    correctAnswer: "Revelation"
  },
  {
    rank: "Assistant Intern",
    question: "Which officer records all unit activities?",
    options: ["Custodian", "PRO", "Recording Secretary", "Mission Officer"],
    correctAnswer: "Recording Secretary"
  },
  {
    rank: "Assistant Intern",
    question: "The RA Pledge commits to becoming what?",
    options: ["Military leader", "Teacher", "A well-rounded ambassador for Christ", "Prophet"],
    correctAnswer: "A well-rounded ambassador for Christ"
  },
  {
    rank: "Assistant Intern",
    question: "The RA emblem is shaped like a?",
    options: ["Circle", "Shield", "Cross", "Rectangle"],
    correctAnswer: "Shield"
  },
  {
    rank: "Assistant Intern",
    question: "Which verse says 'Go ye into all the world and preach the gospel'?",
    options: ["Mark 16:15", "Matthew 5:14", "Acts 1:8", "John 3:16"],
    correctAnswer: "Mark 16:15"
  },
  {
    rank: "Assistant Intern",
    question: "What does the white uniform represent?",
    options: ["Peace", "Power", "Victory", "Purity"],
    correctAnswer: "Purity"
  },
  {
    rank: "Assistant Intern",
    question: "How many books are in the Bible?",
    options: ["63", "64", "66", "70"],
    correctAnswer: "66"
  },
  {
    rank: "Assistant Intern",
    question: "What color is mostly used in the RA sash?",
    options: ["Black", "Gold", "Green", "Blue"],
    correctAnswer: "Blue"
  },
  {
    rank: "Assistant Intern",
    question: "What is the Christian’s final reward according to scripture?",
    options: ["Crown of Life", "Money", "Peace", "Victory"],
    correctAnswer: "Crown of Life"
  },
  {
    rank: "Assistant Intern",
    question: "Which of these is a RA core value?",
    options: ["Disobedience", "Faithfulness", "Pride", "Hatred"],
    correctAnswer: "Faithfulness"
  },
  {
    rank: "Assistant Intern",
    question: "Who led the Israelites across the Red Sea?",
    options: ["Abraham", "Jacob", "Moses", "Joshua"],
    correctAnswer: "Moses"
  },
  {
    rank: "Assistant Intern",
    question: "RA prayer time focuses on?",
    options: ["Self", "Friends", "Missions and the lost", "Leaders only"],
    correctAnswer: "Missions and the lost"
  },
  {
    rank: "Assistant Intern",
    question: "Which officer communicates unit progress to the public?",
    options: ["PRO", "Custodian", "Vice President", "Chaplain"],
    correctAnswer: "PRO"
  },
  {
    rank: "Assistant Intern",
    question: "Which disciple walked on water?",
    options: ["John", "Paul", "Peter", "Thomas"],
    correctAnswer: "Peter"
  },
  {
    rank: "Assistant Intern",
    question: "The Christian race requires?",
    options: ["Discipline", "Anger", "Greed", "Laziness"],
    correctAnswer: "Discipline"
  },
  {
    rank: "Assistant Intern",
    question: "Where was Jesus baptized?",
    options: ["River Nile", "River Jordan", "Red Sea", "Lake Galilee"],
    correctAnswer: "River Jordan"
  },
  {
    rank: "Assistant Intern",
    question: "Which gospel focuses most on Jesus' miracles?",
    options: ["Matthew", "Luke", "John", "Mark"],
    correctAnswer: "Mark"
  },
  {
    rank: "Assistant Intern",
    question: "Who denied Jesus three times?",
    options: ["John", "Peter", "James", "Thomas"],
    correctAnswer: "Peter"
  },
  {
    rank: "Assistant Intern",
    question: "The RA code of conduct emphasizes?",
    options: ["Discipline and loyalty", "Power and force", "Popularity", "Fashion"],
    correctAnswer: "Discipline and loyalty"
  },
  {
    rank: "Assistant Intern",
    question: "RA is organized by what body?",
    options: ["Red Cross", "NBC", "Catholic Secretariat", "Boy Scouts"],
    correctAnswer: "NBC"
  },
  {
    rank: "Assistant Intern",
    question: "A missionary is?",
    options: ["A preacher", "A spiritual soldier", "A Christian sent to preach", "A singer"],
    correctAnswer: "A Christian sent to preach"
  },
  {
    rank: "Assistant Intern",
    question: "What is the name of the longest Psalm?",
    options: ["Psalm 1", "Psalm 23", "Psalm 119", "Psalm 150"],
    correctAnswer: "Psalm 119"
  },
  {
    rank: "Assistant Intern",
    question: "RA uniform must be worn?",
    options: ["At all times", "Only for parade", "With pride and discipline", "In church only"],
    correctAnswer: "With pride and discipline"
  },
  {
    rank: "Assistant Intern",
    question: "Who led the Israelites after Moses?",
    options: ["Aaron", "Joshua", "Samuel", "David"],
    correctAnswer: "Joshua"
  },
  {
    rank: "Assistant Intern",
    question: "The RA emblem sword signifies?",
    options: ["Violence", "Discipline", "Word of God", "Mission"],
    correctAnswer: "Word of God"
  },
  {
    rank: "Assistant Intern",
    question: "Which of these is NOT a gospel?",
    options: ["Matthew", "John", "Jude", "Luke"],
    correctAnswer: "Jude"
  },
  {
    rank: "Assistant Intern",
    question: "Mission work involves?",
    options: ["Entertainment", "Prayer and outreach", "Finance only", "Argument"],
    correctAnswer: "Prayer and outreach"
  },
  {
    rank: "Assistant Intern",
    question: "How many disciples did Jesus call?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },
  {
    rank: "Assistant Intern",
    question: "Jesus’ last command to disciples was to?",
    options: ["Sing hymns", "Wait in Jerusalem", "Go into all nations", "Write scriptures"],
    correctAnswer: "Go into all nations"
  },
  {
    rank: "Assistant Intern",
    question: "What part of RA unit handles drill?",
    options: ["Chaplain", "PRO", "Parade Commander", "Treasurer"],
    correctAnswer: "Parade Commander"
  },
  {
    rank: "Assistant Intern",
    question: "Who is known as the father of faith?",
    options: ["Moses", "Abraham", "David", "Isaac"],
    correctAnswer: "Abraham"
  },
  {
    rank: "Assistant Intern",
    question: "How did Jesus die?",
    options: ["Beheading", "Hanging", "Crucifixion", "Stoning"],
    correctAnswer: "Crucifixion"
  },
  {
    rank: "Assistant Intern",
    question: "What does the Bible call believers?",
    options: ["Conquerors", "Ambassadors", "Sons", "Winners"],
    correctAnswer: "Ambassadors"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the author of Acts?",
    options: ["Paul", "Luke", "Peter", "John"],
    correctAnswer: "Luke"
  },
  {
    rank: "Assistant Intern",
    question: "How many testaments are in the Bible?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    rank: "Assistant Intern",
    question: "Which book follows the gospels?",
    options: ["Acts", "Romans", "Revelation", "Hebrews"],
    correctAnswer: "Acts"
  },
  {
    rank: "Assistant Intern",
    question: "Who was the first king of Israel?",
    options: ["Saul", "David", "Solomon", "Samuel"],
    correctAnswer: "Saul"
  },
  {
    rank: "Assistant Intern",
    question: "Which book has the Ten Commandments?",
    options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correctAnswer: "Exodus"
  },
  {
    rank: "Assistant Intern",
    question: "What is the last word in the Bible?",
    options: ["Amen", "Grace", "Jesus", "Glory"],
    correctAnswer: "Amen"
  },
  {
    rank: "Assistant Intern",
    question: "RA teachings aim to produce?",
    options: ["Doctors", "Lawyers", "Missionaries", "Faithful Christian Leaders"],
    correctAnswer: "Faithful Christian Leaders"
  },
  {
    rank: "Assistant Intern",
    question: "What year was RA founded?",
    options: ["1880", "1898", "1908", "1925"],
    correctAnswer: "1908"
  },
  {
    rank: "Assistant Intern",
    question: "RA's 5-fold aim includes?",
    options: ["Spiritual, mental, physical, social, missionary", "Political, economic", "Academic, music", "Parade, drama"],
    correctAnswer: "Spiritual, mental, physical, social, missionary"
  },
  {
    rank: "Assistant Intern",
    question: "Which fruit of the Spirit includes kindness?",
    options: ["Peace", "Love", "Kindness", "Joy"],
    correctAnswer: "Kindness"
  },
  {
    rank: "Assistant Intern",
    question: "Who betrayed Jesus?",
    options: ["Peter", "Judas", "Thomas", "James"],
    correctAnswer: "Judas"
  },
  {
    rank: "Assistant Intern",
    question: "What is RA’s guiding scripture?",
    options: ["2 Corinthians 5:20", "Acts 1:8", "Matthew 6:33", "Romans 8:28"],
    correctAnswer: "2 Corinthians 5:20"
  },

  {
    rank: "Assistant Intern",
    question: "How many books are in the Old Testament?",
    options: ["27", "39", "40", "66"],
    correctAnswer: "39"
  },
  {
    rank: "Assistant Intern",
    question: "The RA motto encourages members to be what for Christ?",
    options: ["Soldiers", "Warriors", "Ambassadors", "Servants"],
    correctAnswer: "Ambassadors"
  },
  {
    rank: "Assistant Intern",
    question: "What does the RA badge sword represent?",
    options: ["Peace", "Discipline", "Victory", "Word of God"],
    correctAnswer: "Word of God"
  },
  {
    rank: "Assistant Intern",
    question: "Which officer keeps the unit's equipment?",
    options: ["Custodian", "Treasurer", "President", "Parade Commander"],
    correctAnswer: "Custodian"
  },
  {
    rank: "Assistant Intern",
    question: "What is the meaning of NBC in the RA structure?",
    options: ["Nigerian Bible Council", "National Baptist Church", "Nigerian Baptist Convention", "Nigerian Baptist Council"],
    correctAnswer: "Nigerian Baptist Convention"
  },
  {
    rank: "Assistant Intern",
    question: "Which of these is part of the RA badge?",
    options: ["Shield", "Anchor", "Palm tree", "Olive branch"],
    correctAnswer: "Shield"
  },
  {
    rank: "Assistant Intern",
    question: "How many commandments did God give to Moses?",
    options: ["5", "7", "10", "12"],
    correctAnswer: "10"
  },
  {
    rank: "Assistant Intern",
    question: "What is a disciple?",
    options: ["Soldier", "Servant", "Learner/Follower", "Pharisee"],
    correctAnswer: "Learner/Follower"
  },
  {
    rank: "Assistant Intern",
    question: "Jesus turned water into wine at where?",
    options: ["Jerusalem", "Nazareth", "Bethlehem", "Cana"],
    correctAnswer: "Cana"
  },
  {
    rank: "Assistant Intern",
    question: "What is the color of the sash for senior envoys?",
    options: ["White", "Green", "Blue", "Gold"],
    correctAnswer: "Gold"
  },
  {
    rank: "Assistant Intern",
    question: "Which leader anointed David as king?",
    options: ["Nathan", "Elijah", "Samuel", "Moses"],
    correctAnswer: "Samuel"
  },
  {
    rank: "Assistant Intern",
    question: "How did Jesus teach most times?",
    options: ["By law", "By signs", "By parables", "By letters"],
    correctAnswer: "By parables"
  },
  {
    rank: "Assistant Intern",
    question: "What do the four gospels describe?",
    options: ["Laws of Moses", "The early church", "Jesus’ life and ministry", "The End times"],
    correctAnswer: "Jesus’ life and ministry"
  },
  {
    rank: "Assistant Intern",
    question: "What does the term ‘envoy’ mean in RA?",
    options: ["Messenger", "Commander", "Preacher", "Officer"],
    correctAnswer: "Messenger"
  },
  {
    rank: "Assistant Intern",
    question: "Which event marks the beginning of RA?",
    options: ["Revival", "Evangelism Outreach", "Founding of the Manual", "Inauguration of J.M. Frost"],
    correctAnswer: "Inauguration of J.M. Frost"
  },
  {
    rank: "Assistant Intern",
    question: "What rank comes after Intern?",
    options: ["Assistant Intern", "Senior Intern", "Envoy", "Special Envoy"],
    correctAnswer: "Senior Intern"
  },
  {
    rank: "Assistant Intern",
    question: "Jesus is often referred to as?",
    options: ["Shepherd", "Brother", "Leader", "Ambassador"],
    correctAnswer: "Shepherd"
  },
  {
    rank: "Assistant Intern",
    question: "How did God appear to Moses in the wilderness?",
    options: ["Cloud", "Fire", "Burning Bush", "Thunder"],
    correctAnswer: "Burning Bush"
  },
  {
    rank: "Assistant Intern",
    question: "What symbol represents missions in the RA badge?",
    options: ["Torch", "Sword", "Bible", "Globe"],
    correctAnswer: "Torch"
  },
  {
    rank: "Assistant Intern",
    question: "Which part of the Bible was written first?",
    options: ["New Testament", "Genesis", "Matthew", "Psalms"],
    correctAnswer: "Genesis"
  },
  {
    rank: "Assistant Intern",
    question: "Who was swallowed by a big fish?",
    options: ["Moses", "Jonah", "Elijah", "Daniel"],
    correctAnswer: "Jonah"
  },
  {
    rank: "Assistant Intern",
    question: "Which book focuses on Christian missions?",
    options: ["Romans", "Revelation", "Acts", "Hebrews"],
    correctAnswer: "Acts"
  },
  {
    rank: "Assistant Intern",
    question: "What event in Acts chapter 2 empowered the disciples?",
    options: ["Feast", "Vision", "Pentecost", "Judgment"],
    correctAnswer: "Pentecost"
  },
  {
    rank: "Assistant Intern",
    question: "What is the core message of RA?",
    options: ["Serve Church", "Learn Bible", "Be Ambassadors for Christ", "Support Missions"],
    correctAnswer: "Be Ambassadors for Christ"
  },
  {
    rank: "Assistant Intern",
    question: "Which part of the uniform is worn across the shoulder?",
    options: ["Belt", "Beret", "Sash", "Scarf"],
    correctAnswer: "Sash"
  },
  {
    rank: "Assistant Intern",
    question: "How does RA contribute to the church?",
    options: ["Financial support", "Evangelism and Missions", "Parade only", "Youth rebellion"],
    correctAnswer: "Evangelism and Missions"
  },
  {
    rank: "Assistant Intern",
    question: "Which gospel emphasizes Jesus' kingship?",
    options: ["Matthew", "Mark", "John", "Luke"],
    correctAnswer: "Matthew"
  },
  {
    rank: "Assistant Intern",
    question: "Who wrote the most Psalms?",
    options: ["Moses", "Asaph", "Solomon", "David"],
    correctAnswer: "David"
  },
  {
    rank: "Assistant Intern",
    question: "How many books did Paul write in the New Testament?",
    options: ["10", "12", "13", "14"],
    correctAnswer: "13"
  },
  {
    rank: "Assistant Intern",
    question: "Who interpreted Pharaoh’s dream?",
    options: ["Moses", "Joseph", "Daniel", "Jacob"],
    correctAnswer: "Joseph"
  },
  {
    rank: "Assistant Intern",
    question: "What must a Royal Ambassador avoid?",
    options: ["Discipline", "Loyalty", "Sinful behavior", "Evangelism"],
    correctAnswer: "Sinful behavior"
  },
  {
    rank: "Assistant Intern",
    question: "Which event marked the start of Jesus' ministry?",
    options: ["Baptism", "Resurrection", "Birth", "Wedding"],
    correctAnswer: "Baptism"
  },
  {
    rank: "Assistant Intern",
    question: "What is the Christian mission?",
    options: ["Go and preach", "Pray alone", "Build churches", "Sing praises"],
    correctAnswer: "Go and preach"
  },
  {
    rank: "Assistant Intern",
    question: "What is a parable?",
    options: ["Prophecy", "Poem", "Earthly story with spiritual meaning", "Riddle"],
    correctAnswer: "Earthly story with spiritual meaning"
  },
  {
    rank: "Assistant Intern",
    question: "What color is the RA beret?",
    options: ["Blue", "White", "Black", "Red"],
    correctAnswer: "Blue"
  },
  {
    rank: "Assistant Intern",
    question: "What is the goal of a RA unit?",
    options: ["Parade excellence", "Spiritual growth and missions", "Collect uniforms", "Win debates"],
    correctAnswer: "Spiritual growth and missions"
  },
  {
    rank: "Assistant Intern",
    question: "What tool is used to assess member growth?",
    options: ["Manual", "Bible", "Rank system", "Parade rating"],
    correctAnswer: "Rank system"
  },
  {
    rank: "Assistant Intern",
    question: "Which rank supervises others in the unit?",
    options: ["Intern", "President", "Envoy", "Custodian"],
    correctAnswer: "President"
  },
  {
    rank: "Assistant Intern",
    question: "When should RA devotions be held?",
    options: ["Sunday only", "Daily", "Once a month", "During retreat"],
    correctAnswer: "Daily"
  },
  {
    rank: "Assistant Intern",
    question: "Which book of the Bible has creation story?",
    options: ["Genesis", "Exodus", "Psalms", "Isaiah"],
    correctAnswer: "Genesis"
  },
  {
    rank: "Assistant Intern",
    question: "What does 'ambassador' mean?",
    options: ["Messenger", "Soldier", "Friend", "King"],
    correctAnswer: "Messenger"
  },
  {
    rank: "Assistant Intern",
    question: "What is an RA’s identity based on?",
    options: ["Uniform", "Bible study", "Relationship with Christ", "Drill"],
    correctAnswer: "Relationship with Christ"
  },
  {
    rank: "Assistant Intern",
    question: "What kind of leaders should RA produce?",
    options: ["Dictators", "Servant Leaders", "Billionaires", "Politicians"],
    correctAnswer: "Servant Leaders"
  },
  {
    rank: "Assistant Intern",
    question: "What makes an RA stand out?",
    options: ["Uniform", "Prayer life", "Faith and lifestyle", "Knowledge"],
    correctAnswer: "Faith and lifestyle"
  },
  {
    rank: "Assistant Intern",
    question: "Which gift of the Spirit helps RA share the gospel?",
    options: ["Speaking in tongues", "Teaching", "Evangelism", "Singing"],
    correctAnswer: "Evangelism"
  },
  {
    rank: "Assistant Intern",
    question: "Who was known as the weeping prophet?",
    options: ["Jeremiah", "Isaiah", "Ezekiel", "Habakkuk"],
    correctAnswer: "Jeremiah"
  },

  {
    rank: "Assistant Intern",
    question: "What book tells the story of Moses leading Israel out of Egypt?",
    options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correctAnswer: "Exodus"
  },
  {
    rank: "Assistant Intern",
    question: "Which prophet challenged the prophets of Baal?",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    correctAnswer: "Elijah"
  },
  {
    rank: "Assistant Intern",
    question: "Which RA activity involves marching and coordination?",
    options: ["Bible Study", "Parade Drill", "Devotion", "Evangelism"],
    correctAnswer: "Parade Drill"
  },
  {
    rank: "Assistant Intern",
    question: "What color on the RA badge represents loyalty?",
    options: ["White", "Gold", "Blue", "Red"],
    correctAnswer: "Blue"
  },
  {
    rank: "Assistant Intern",
    question: "What part of RA teaches missionary work?",
    options: ["Manuals", "Missions Segment", "RA TV", "Facebook"],
    correctAnswer: "Missions Segment"
  },
  {
    rank: "Assistant Intern",
    question: "What is the symbol of Christ’s sacrifice?",
    options: ["Bread", "Wine", "Cross", "Bible"],
    correctAnswer: "Cross"
  },
  {
    rank: "Assistant Intern",
    question: "The Bible is divided into how many major parts?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    rank: "Assistant Intern",
    question: "Who was RA’s founder?",
    options: ["J.M. Frost", "John Bunyan", "Thomas Carey", "Samuel Ajayi"],
    correctAnswer: "J.M. Frost"
  },
  {
    rank: "Assistant Intern",
    question: "Which book contains the fruit of the Spirit?",
    options: ["Galatians", "Romans", "Acts", "Matthew"],
    correctAnswer: "Galatians"
  },
  {
    rank: "Assistant Intern",
    question: "What RA rank comes before Envoy?",
    options: ["Senior Intern", "Intern", "Assistant Intern", "Mission Cadet"],
    correctAnswer: "Senior Intern"
  },
  {
    rank: "Assistant Intern",
    question: "What is the main goal of every RA?",
    options: ["Lead worship", "Become rich", "Be ambassador for Christ", "Preach at crusades"],
    correctAnswer: "Be ambassador for Christ"
  },
  {
    rank: "Assistant Intern",
    question: "Where did Paul write many epistles from?",
    options: ["Jerusalem", "Nazareth", "Rome", "Prison"],
    correctAnswer: "Prison"
  },
  {
    rank: "Assistant Intern",
    question: "What does baptism represent?",
    options: ["Cleansing", "Singing", "Donation", "Offerings"],
    correctAnswer: "Cleansing"
  },
  {
    rank: "Assistant Intern",
    question: "Which Bible book contains 150 chapters?",
    options: ["Proverbs", "Isaiah", "Psalms", "Acts"],
    correctAnswer: "Psalms"
  },
  {
    rank: "Assistant Intern",
    question: "Who was RA’s first Nigerian president?",
    options: ["Ajayi Crowther", "Moses Adedeji", "Akinrinola", "Femi Ogunrinde"],
    correctAnswer: "Moses Adedeji"
  },
  {
    rank: "Assistant Intern",
    question: "RA uniform must be worn with?",
    options: ["Matching shoes", "Pride", "Discipline", "All the above"],
    correctAnswer: "All the above"
  },
  {
    rank: "Assistant Intern",
    question: "Who is the Parade Commander?",
    options: ["Person who preaches", "Person who controls drills", "Person who sings", "Person who supervises the kitchen"],
    correctAnswer: "Person who controls drills"
  },
  {
    rank: "Assistant Intern",
    question: "What does RA teach about honesty?",
    options: ["Hide it", "Ignore it", "Live it daily", "Say it only in church"],
    correctAnswer: "Live it daily"
  },
  {
    rank: "Assistant Intern",
    question: "What book has RA activities and structure?",
    options: ["Bible", "Hymnal", "Manual", "Leadership Guide"],
    correctAnswer: "Manual"
  },
  {
    rank: "Assistant Intern",
    question: "The early church began in what book?",
    options: ["Matthew", "Romans", "Revelation", "Acts"],
    correctAnswer: "Acts"
  },
 
  
];



mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log("Questions seeded");
  process.exit();
});
