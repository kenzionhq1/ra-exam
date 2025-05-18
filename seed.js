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
 
  {
    question: "Why is it important for an Intern to write about their experience sharing Christ with someone? (Q2)",
    options: [
      "To become a counselor faster",
      "To reflect on personal evangelism growth",
      "To compete with other members",
      "To skip memory verse recitation"
    ],
    correctAnswer: "To reflect on personal evangelism growth",
    rank: "Intern"
  },


  {
    "rank": "Assistant Intern",
    "question": "What is the biblical reference for the Royal Ambassadors motto?",
    "options": [
      "Matthew 28:19",
      "2 Corinthians 5:20",
      "Romans 10:9",
      "Luke 15:3-9"
    ],
    "correctAnswer": "2 Corinthians 5:20"
  },
  {
    "rank": "Assistant Intern",
    "question": "Why is memorizing the RA pledge important for an Assistant Intern?",
    "options": [
      "To prepare for public speeches",
      "To impress church leaders",
      "To internalize core Christian values of the RA movement",
      "To meet Sunday school requirements"
    ],
    "correctAnswer": "To internalize core Christian values of the RA movement"
  },
  {
    "rank": "Assistant Intern",
    "question": "According to the RA Manual, how many RA meetings must an Assistant Intern attend in a year?",
    "options": [
      "30",
      "35",
      "40",
      "45"
    ],
    "correctAnswer": "40"
  },
  {
    "rank": "Assistant Intern",
    "question": "What lesson does the story of the lost sheep teach an Assistant Intern?",
    "options": [
      "That the church should be wealthy",
      "That one lost person matters to God",
      "That sheep are holy animals",
      "That pastors should be rich"
    ],
    "correctAnswer": "That one lost person matters to God"
  },
  {
    "rank": "Assistant Intern",
    "question": "What is the first stanza of the RA hymn about?",
    "options": [
      "God's judgment on the wicked",
      "Representing Christ in a foreign land",
      "Victory over evil spirits",
      "Praising angels in heaven"
    ],
    "correctAnswer": "Representing Christ in a foreign land"
  },
  {
    "rank": "Assistant Intern",
    "question": "Which of the following is one of the first three commandments an Assistant Intern must memorize?",
    "options": [
      "Thou shalt not steal",
      "Remember the sabbath day",
      "Thou shalt have no other gods before me",
      "Honor your father and mother"
    ],
    "correctAnswer": "Thou shalt have no other gods before me"
  },
  {
    "rank": "Assistant Intern",
    "question": "What message is shared in Luke 15:3-9, which Assistant Interns are required to study?",
    "options": [
      "A man plants a seed",
      "Jesus walks on water",
      "The joy in heaven over one sinner who repents",
      "The crucifixion of Jesus"
    ],
    "correctAnswer": "The joy in heaven over one sinner who repents"
  },
  {
    "rank": "Assistant Intern",
    "question": "Why does the RA Manual require Assistant Interns to perform acts of service for elderly members?",
    "options": [
      "To receive financial rewards",
      "To be seen in church",
      "To imitate Christ\u2019s humility and selfless service",
      "To impress the ranking officer"
    ],
    "correctAnswer": "To imitate Christ\u2019s humility and selfless service"
  },
  {
    "rank": "Assistant Intern",
    "question": "Which of these is a community service expected of an Assistant Intern?",
    "options": [
      "Giving a church sermon",
      "Visiting and helping two elderly members without expecting a reward",
      "Collecting offerings",
      "Becoming a youth pastor"
    ],
    "correctAnswer": "Visiting and helping two elderly members without expecting a reward"
  },
  {
    "rank": "Assistant Intern",
    "question": "What is the spiritual lesson behind inviting a friend to Sunday school or RA meeting?",
    "options": [
      "Obeying school rules",
      "Growing church attendance",
      "Participating in RA drama",
      "Practicing evangelism and outreach"
    ],
    "correctAnswer": "Practicing evangelism and outreach"
  },
  {
    "rank": "Assistant Intern",
    "question": "Which of these is the correct order of the first six books of the Bible?",
    "options": [
      "Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua",
      "Genesis, Numbers, Exodus, Deuteronomy, Leviticus, Joshua",
      "Exodus, Genesis, Leviticus, Numbers, Judges, Ruth",
      "Genesis, Exodus, Psalms, Proverbs, Deuteronomy, Joshua"
    ],
    "correctAnswer": "Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua"
  },
  {
    "rank": "Assistant Intern",
    "question": "Which country hosted the 2023 United Nations Climate Change Conference (COP28)?",
    "options": [
      "Qatar",
      "Egypt",
      "United Arab Emirates",
      "Kenya"
    ],
    "correctAnswer": "United Arab Emirates"
  },
  {
    "rank": "Assistant Intern",
    "question": "Who won the Ballon d'Or in 2023, an event closely followed in the RA football segment?",
    "options": [
      "Erling Haaland",
      "Lionel Messi",
      "Kylian Mbappe",
      "Cristiano Ronaldo"
    ],
    "correctAnswer": "Lionel Messi"
  },
  {
    "rank": "Assistant Intern",
    "question": "How does learning the RA hymn help build spiritual identity for Assistant Interns?",
    "options": [
      "It improves public performance",
      "It prepares them for music ministry",
      "It reminds them of their mission as Christ's ambassadors",
      "It helps with church entertainment"
    ],
    "correctAnswer": "It reminds them of their mission as Christ's ambassadors"
  },
  {
    rank: "Assistant Intern",
    question: "Why is it important for Assistant Interns to attend house fellowship regularly?",
    options: [
      "To socialize with friends", 
      "To learn cultural dances",
      "To deepen fellowship and Christian growth",
      "To qualify for RA uniforms"
    ],
    correctAnswer: "To deepen fellowship and Christian growth"
  },
  {
    rank: "Assistant Intern",
    question: "Which of these best defines the purpose of RA as taught to Assistant Interns?",
    options: [
      "To promote social gatherings",
      "To train boys to be good athletes",
      "To raise missionaries who represent Christ in word and deed",
      "To learn church administration"
    ],
    correctAnswer: "To raise missionaries who represent Christ in word and deed"
  },





  {
    "rank": "Intern",
    "question": "According to the RA Manual, what is the purpose of an Intern writing about a personal evangelism experience?",
    "options": [
      "To impress counselors",
      "To fulfill the mission goal of sharing Christ",
      "To win awards",
      "To prepare for senior ranks"
    ],
    "correctAnswer": "To fulfill the mission goal of sharing Christ"
  },
  {
    "rank": "Intern",
    "question": "Why are Interns asked to describe a sport or hobby they enjoy in RA meetings?",
    "options": [
      "To learn public speaking",
      "To build self-confidence and group bonding",
      "To help the church organize games",
      "To prepare for talent competitions"
    ],
    "correctAnswer": "To build self-confidence and group bonding"
  },
  {
    "rank": "Intern",
    "question": "What important truth is found in John 14:6 that Interns must memorize?",
    "options": [
      "Jesus teaches about the Sabbath",
      "Jesus is the way, the truth, and the life",
      "The fruits of the Spirit",
      "The creation story"
    ],
    "correctAnswer": "Jesus is the way, the truth, and the life"
  },
  {
    "rank": "Intern",
    "question": "What spiritual habit is reinforced by requiring Interns to attend Sunday School for at least 6 months?",
    "options": [
      "Regular church performance",
      "Discipline and consistency in Christian learning",
      "Musical worship practice",
      "Preaching in services"
    ],
    "correctAnswer": "Discipline and consistency in Christian learning"
  },
  {
    "rank": "Intern",
    "question": "What key lesson does Luke 2:41–52 teach Interns about Jesus?",
    "options": [
      "Jesus played with his friends",
      "Jesus got lost in the wilderness",
      "Jesus grew in wisdom and favor with God and man",
      "Jesus fasted for 40 days"
    ],
    "correctAnswer": "Jesus grew in wisdom and favor with God and man"
  },
  {
    "rank": "Intern",
    "question": "What is the main purpose of participating in a community task like church cleaning as an Intern?",
    "options": [
      "To avoid punishment",
      "To develop humility and servant leadership",
      "To impress church members",
      "To gain physical strength"
    ],
    "correctAnswer": "To develop humility and servant leadership"
  },
  {
    "rank": "Intern",
    "question": "Which Bible passage teaches the gift of salvation Interns are expected to memorize?",
    "options": [
      "Romans 5:8",
      "Ephesians 2:8–9",
      "Luke 15:7",
      "Acts 2:1"
    ],
    "correctAnswer": "Ephesians 2:8–9"
  },
  {
    "rank": "Intern",
    "question": "Why is teamwork emphasized through sports discussions among Interns?",
    "options": [
      "To teach game rules",
      "To train professional athletes",
      "To encourage social skills and cooperation",
      "To win RA tournaments"
    ],
    "correctAnswer": "To encourage social skills and cooperation"
  },
  {
    "rank": "Intern",
    "question": "How does sharing one’s hobby reflect biblical fellowship in the RA context?",
    "options": [
      "It shows who is talented",
      "It promotes envy",
      "It builds joyful relationships within the body of Christ",
      "It helps avoid evangelism tasks"
    ],
    "correctAnswer": "It builds joyful relationships within the body of Christ"
  },
  {
    "rank": "Intern",
    "question": "Why must an Intern write about what they learned in RA meetings during their rank assessment?",
    "options": [
      "To show off writing skills",
      "To compete with others",
      "To demonstrate spiritual growth and reflection",
      "To satisfy schoolwork"
    ],
    "correctAnswer": "To demonstrate spiritual growth and reflection"
  },
  {
    "rank": "Intern",
    "question": "What is the Christian lesson in Luke 2:52, required for Interns?",
    "options": [
      "God helps those who help themselves",
      "Spiritual gifts are more important than obedience",
      "Jesus matured in mind, body, and spirit",
      "Obedience comes through miracles"
    ],
    "correctAnswer": "Jesus matured in mind, body, and spirit"
  },
  {
    "rank": "Intern",
    "question": "Which global youth movement highlights young people's responsibility to protect creation, aligning with RA values?",
    "options": [
      "Youth for Crypto",
      "Youth Climate Action",
      "Digital Africa Forum",
      "Virtual Safety Alliance"
    ],
    "correctAnswer": "Youth Climate Action"
  },
  {
    "rank": "Intern",
    "question": "Who won the 2023 FIFA U-20 World Cup, highlighting the importance of youth development in football?",
    "options": [
      "Brazil",
      "Argentina",
      "South Korea",
      "Italy"
    ],
    "correctAnswer": "Uruguay"
  },
  {
    "rank": "Intern",
    "question": "What makes the memory of John 3:16 foundational for Interns in the RA program?",
    "options": [
      "It describes God's plan of salvation through Jesus",
      "It teaches church history",
      "It is used in RA meetings only",
      "It is a pledge replacement"
    ],
    "correctAnswer": "It describes God's plan of salvation through Jesus"
  },
  {
    "rank": "Intern",
    "question": "Why are Interns encouraged to give testimonies about sharing Christ?",
    "options": [
      "To gain experience in public preaching",
      "To grow in courage and obedience to the Great Commission",
      "To become RA president",
      "To receive awards from counselors"
    ],
    "correctAnswer": "To grow in courage and obedience to the Great Commission"
  },
  {
    "rank": "Intern",
    "question": "Why is it important for Interns to understand how to interact respectfully with peers during group activities?",
    "options": [
      "To avoid punishment",
      "To reflect biblical unity and love",
      "To please church elders",
      "To win best team award"
    ],
    "correctAnswer": "To reflect biblical unity and love"
  },
  {
    "rank": "Intern",
    "question": "Why do Interns participate in group discussions about faith in meetings?",
    "options": [
      "To criticize other beliefs",
      "To encourage boldness in sharing the gospel",
      "To debate for ranking purposes",
      "To test their RA knowledge"
    ],
    "correctAnswer": "To encourage boldness in sharing the gospel"
  },
  {
    "rank": "Intern",
    "question": "What does Ephesians 2:8–9 teach about how salvation is obtained?",
    "options": [
      "By good works",
      "By family traditions",
      "By grace through faith, not works",
      "By praying loudly"
    ],
    "correctAnswer": "By grace through faith, not works"
  },
  {
    "rank": "Intern",
    "question": "What is the primary goal of cleaning the church compound as an RA Intern activity?",
    "options": [
      "To be seen as helpful",
      "To replace janitors",
      "To practice humility and serve God’s house",
      "To reduce staff costs"
    ],
    "correctAnswer": "To practice humility and serve God’s house"
  },
  {
    "rank": "Intern",
    "question": "Which Christian habit is reinforced when Interns consistently attend Sunday School?",
    "options": [
      "Biblical worship through music",
      "Theological debate",
      "Faithfulness in growing spiritually",
      "Proper dressing for church"
    ],
    "correctAnswer": "Faithfulness in growing spiritually"
  },


  
    {
      "rank": "Intern",
      "question": "Why does the RA Manual emphasize learning the first six books of the Bible for Interns?",
      "options": [
        "To memorize key stories",
        "To understand the history of Israel and God’s covenant",
        "To prepare for advanced rank",
        "To replace Bible study books"
      ],
      "correctAnswer": "To understand the history of Israel and God’s covenant"
    },
    {
      "rank": "Intern",
      "question": "Which of the following is part of an Intern's responsibility when visiting elderly members?",
      "options": [
        "Bringing food and gifts",
        "Offering prayers and assistance without expecting rewards",
        "Sharing personal testimonies",
        "Singing in choir"
      ],
      "correctAnswer": "Offering prayers and assistance without expecting rewards"
    },
    {
      "rank": "Intern",
      "question": "What does the story of the prodigal son, as found in Luke 15:11-32, teach Interns about repentance?",
      "options": [
        "Repentance is only for the poor",
        "Repentance is a choice that leads to restoration and celebration",
        "Repentance only works for the lost",
        "Repentance means giving up material wealth"
      ],
      "correctAnswer": "Repentance is a choice that leads to restoration and celebration"
    },
    {
      "rank": "Intern",
      "question": "What is the biblical connection of Luke 15:3-9 for an Intern in terms of outreach?",
      "options": [
        "God values all individuals, even when they are lost",
        "Only the righteous are saved",
        "Repentance is for adults only",
        "Jesus came to judge the sinners"
      ],
      "correctAnswer": "God values all individuals, even when they are lost"
    },
    {
      "rank": "Intern",
      "question": "Why must Interns memorize scripture passages like John 3:16?",
      "options": [
        "To win Bible quiz competitions",
        "To understand God's love for the world",
        "To prepare for church leadership",
        "To impress their peers"
      ],
      "correctAnswer": "To understand God's love for the world"
    },
    {
      "rank": "Intern",
      "question": "How does participating in RA service projects benefit an Intern’s spiritual development?",
      "options": [
        "It helps them gain material rewards",
        "It builds the habit of selfless service and humility",
        "It makes them popular among church members",
        "It helps with public speaking"
      ],
      "correctAnswer": "It builds the habit of selfless service and humility"
    },
    {
      "rank": "Intern",
      "question": "What biblical lesson do Interns learn from the call to serve others selflessly?",
      "options": [
        "Jesus showed selfless love by washing his disciples' feet",
        "Jesus became a king by conquering nations",
        "God rewards selfishness with material wealth",
        "Salvation is for the strongest only"
      ],
      "correctAnswer": "Jesus showed selfless love by washing his disciples' feet"
    },
    {
      "rank": "Intern",
      "question": "How does John 15:5 relate to an Intern’s role in staying connected to Christ?",
      "options": [
        "Christ is the vine, and we are the branches, producing good fruit",
        "Interns must learn to plant their own seeds",
        "Interns should focus on competition",
        "Interns need to build their own church"
      ],
      "correctAnswer": "Christ is the vine, and we are the branches, producing good fruit"
    },
    {
      "rank": "Intern",
      "question": "Why is it critical for Interns to practice Bible reading and memorization?",
      "options": [
        "To win competitions",
        "To develop spiritual discipline and understanding",
        "To become church leaders",
        "To prepare for confirmation"
      ],
      "correctAnswer": "To develop spiritual discipline and understanding"
    },
    {
      "rank": "Intern",
      "question": "What important leadership quality is developed through the RA Manual's requirement for Interns to serve others?",
      "options": [
        "Self-promotion",
        "Humility and sacrificial leadership",
        "Independence",
        "Ability to speak publicly"
      ],
      "correctAnswer": "Humility and sacrificial leadership"
    },
    {
      "rank": "Intern",
      "question": "What global event did the youth-led climate movement address in 2024, showing the impact of young people taking responsibility?",
      "options": [
        "The end of world hunger",
        "The climate emergency and youth actions for change",
        "Global financial policies",
        "Space exploration agreements"
      ],
      "correctAnswer": "The climate emergency and youth actions for change"
    },
    {
      "rank": "Intern",
      "question": "Which footballer recently became the highest scorer in the 2024 CAF Africa Cup of Nations?",
      "options": [
        "Mohamed Salah",
        "Pierre-Emerick Aubameyang",
        "Victor Osimhen",
        "Sadio Mané"
      ],
      "correctAnswer": "Victor Osimhen"
    },
    {
      "rank": "Intern",
      "question": "What lesson can Interns learn from the success of Senegal’s national football team in recent African competitions?",
      "options": [
        "Teamwork and national pride are essential for success",
        "It’s important to win every game at all costs",
        "Individual skill is more important than teamwork",
        "Winning without playing fairly is acceptable"
      ],
      "correctAnswer": "Teamwork and national pride are essential for success"
    },
    {
      "rank": "Intern",
      "question": "How does the practice of biblical memorization benefit Interns in their spiritual life?",
      "options": [
        "It helps with time management",
        "It prepares them to speak fluently in public",
        "It strengthens their relationship with God and understanding of His Word",
        "It allows them to become wealthy"
      ],
      "correctAnswer": "It strengthens their relationship with God and understanding of His Word"
    },
    {
      "rank": "Intern",
      "question": "Why are Interns encouraged to read and reflect on their experiences of faith during their RA journey?",
      "options": [
        "To gain social status",
        "To develop personal and spiritual growth in Christ",
        "To compete for leadership positions",
        "To fill out reports for counselors"
      ],
      "correctAnswer": "To develop personal and spiritual growth in Christ"
    },
    {
      "rank": "Intern",
      "question": "What lesson is emphasized in Luke 15:11-32 about forgiveness for Interns in the RA program?",
      "options": [
        "Forgiveness is for the strong only",
        "Forgiveness brings restoration and joy, no matter the sin",
        "Forgiveness is not necessary in the church",
        "Forgiveness is for personal gain"
      ],
      "correctAnswer": "Forgiveness brings restoration and joy, no matter the sin"
    },
  

    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q1)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q1)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q1)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q1)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q1)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q2)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q2)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q2)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q2)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q2)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q3)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q3)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q3)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q3)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q3)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q4)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q4)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q4)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q4)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q4)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q5)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q5)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q5)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q5)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q5)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q6)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q6)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q6)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q6)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q6)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q7)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q7)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q7)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q7)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q7)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q8)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q8)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q8)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q8)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q8)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q9)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q9)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q9)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q9)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q9)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q10)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q10)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q10)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q10)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q10)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q11)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q11)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q11)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q11)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q11)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q12)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q12)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q12)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q12)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q12)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q13)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q13)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q13)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q13)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q13)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q14)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q14)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q14)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q14)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q14)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q15)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q15)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q15)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q15)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q15)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q16)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q16)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q16)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q16)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q16)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q17)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q17)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q17)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q17)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q17)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q18)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q18)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q18)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q18)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q18)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q19)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q19)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q19)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q19)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q19)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },
    {
      "question": "Which passage teaches Interns that faith in Christ grants the right to become children of God? (Q20)",
      "options": [
        "John 1:12",
        "Luke 2:52",
        "Ephesians 2:8",
        "Matthew 28:19"
      ],
      "correctAnswer": "John 1:12",
      "rank": "Intern"
    },
    {
      "question": "What does the RA Manual highlight as the spiritual benefit of serving the elderly without expectation of reward? (Q20)",
      "options": [
        "It earns physical recognition in church",
        "It demonstrates Christlike humility and love in action",
        "It replaces evangelism tasks",
        "It builds physical endurance"
      ],
      "correctAnswer": "It demonstrates Christlike humility and love in action",
      "rank": "Intern"
    },
    {
      "question": "According to the RA Manual, why should Interns be consistent in Sunday School attendance? (Q20)",
      "options": [
        "To fulfill a ranking requirement",
        "To deepen biblical knowledge and spiritual discipline",
        "To please their counselors",
        "To increase their speaking chances"
      ],
      "correctAnswer": "To deepen biblical knowledge and spiritual discipline",
      "rank": "Intern"
    },
    {
      "question": "Why does the RA Manual include John 14:6 in the Intern memory verses? (Q20)",
      "options": [
        "It defines Christian exclusivity in salvation through Christ",
        "It shows Jesus' compassion for sinners",
        "It explains heaven\u2019s structure",
        "It outlines church leadership"
      ],
      "correctAnswer": "It defines Christian exclusivity in salvation through Christ",
      "rank": "Intern"
    },
    {
      "question": "Which spiritual truth is illustrated in Luke 15:3\u20139, part of the Intern curriculum? (Q20)",
      "options": [
        "Heaven rejoices over one sinner who repents",
        "Believers must isolate from sinners",
        "Salvation is earned through works",
        "Disciples should avoid troublemakers"
      ],
      "correctAnswer": "Heaven rejoices over one sinner who repents",
      "rank": "Intern"
    },



    
      {
        "rank": "Senior Intern",
        "question": "According to the RA Manual, what is the spiritual significance of understanding the RA emblem for a Senior Intern?",
        "options": [
          "It helps decorate the RA meeting hall",
          "It visually represents the core mission of Royal Ambassadors",
          "It replaces the need to memorize Bible verses",
          "It is only used in RA competitions"
        ],
        "correctAnswer": "It visually represents the core mission of Royal Ambassadors"
      },
      {
        "rank": "Senior Intern",
        "question": "What is the primary message conveyed in the Parable of the Good Samaritan for Senior Interns?",
        "options": [
          "Assistance should be limited to one's friends",
          "Compassion must transcend social and cultural boundaries",
          "Always consult a priest before helping someone",
          "Service is a competition among believers"
        ],
        "correctAnswer": "Compassion must transcend social and cultural boundaries"
      },
      {
        "rank": "Senior Intern",
        "question": "Why is it essential for a Senior Intern to learn and explain the seven objectives of the Royal Ambassadors?",
        "options": [
          "To pass the final RA exam",
          "To demonstrate full understanding of RA mission and values",
          "To be able to teach other groups",
          "To memorize it for stage presentation"
        ],
        "correctAnswer": "To demonstrate full understanding of RA mission and values"
      },
      {
        "rank": "Senior Intern",
        "question": "What does Matthew 28:19–20, the Great Commission, teach Senior Interns about their responsibility?",
        "options": [
          "To start their own churches",
          "To preach only within their neighborhood",
          "To disciple and teach all nations as commanded by Christ",
          "To memorize long scriptures for rewards"
        ],
        "correctAnswer": "To disciple and teach all nations as commanded by Christ"
      },
      {
        "rank": "Senior Intern",
        "question": "Which of the following best reflects the biblical principle of neighborly love expected of a Senior Intern?",
        "options": [
          "Ignoring others when busy",
          "Helping others regardless of social or religious differences",
          "Only supporting those in your chapter",
          "Respecting RA counselors"
        ],
        "correctAnswer": "Helping others regardless of social or religious differences"
      },
      {
        "rank": "Senior Intern",
        "question": "Why should Senior Interns engage in a Christian service project without receiving any reward?",
        "options": [
          "To complete their rank assessment",
          "To understand the value of sacrificial service",
          "To fulfill a school requirement",
          "To qualify for a leadership role"
        ],
        "correctAnswer": "To understand the value of sacrificial service"
      },
      {
        "rank": "Senior Intern",
        "question": "What message does the RA hymn (all stanzas) convey to Senior Interns?",
        "options": [
          "The value of loyalty to friends",
          "The duty of representing Christ faithfully in every situation",
          "The joy of being a child",
          "The importance of learning many hymns"
        ],
        "correctAnswer": "The duty of representing Christ faithfully in every situation"
      },
      {
        "rank": "Senior Intern",
        "question": "Why is it necessary for a Senior Intern to memorize and explain Luke 10:25–37?",
        "options": [
          "To meet the RA memory work quota",
          "To develop a heart of compassion modeled after Christ",
          "To win a Bible competition",
          "To become a preacher"
        ],
        "correctAnswer": "To develop a heart of compassion modeled after Christ"
      },
      {
        "rank": "Senior Intern",
        "question": "What leadership trait is demonstrated when a Senior Intern teaches younger RAs about the RA objectives?",
        "options": [
          "Boldness",
          "Patience",
          "Initiative and responsibility",
          "Competition"
        ],
        "correctAnswer": "Initiative and responsibility"
      },
      {
        "rank": "Senior Intern",
        "question": "What core spiritual lesson is found in the Good Samaritan’s choice to help a stranger?",
        "options": [
          "Assistance should be transactional",
          "Mercy defines Christian character, not convenience",
          "Christians must be wealthy to help",
          "Strangers should first be tested"
        ],
        "correctAnswer": "Mercy defines Christian character, not convenience"
      },
      {
        "rank": "Senior Intern",
        "question": "How does the RA emblem help reinforce RA identity for Senior Interns?",
        "options": [
          "It helps prepare for pageants",
          "It is used to assign uniforms",
          "It symbolizes the mission and values RA members live by",
          "It is important only for parades"
        ],
        "correctAnswer": "It symbolizes the mission and values RA members live by"
      },
      {
        "rank": "Senior Intern",
        "question": "Why is it important for a Senior Intern to apply the Great Commission in everyday life?",
        "options": [
          "It qualifies them for ordination",
          "It leads to mission field trips",
          "It reflects obedience to Jesus’ global discipleship mandate",
          "It makes them eligible for dean nomination"
        ],
        "correctAnswer": "It reflects obedience to Jesus’ global discipleship mandate"
      },
      {
        "rank": "Senior Intern",
        "question": "Which of these statements aligns with the RA motto as understood by a Senior Intern?",
        "options": [
          "We are members of a royal party",
          "We are ambassadors representing Christ to the world",
          "We are competitors for God’s prize",
          "We are soldiers in a gospel army"
        ],
        "correctAnswer": "We are ambassadors representing Christ to the world"
      },
      {
        "rank": "Senior Intern",
        "question": "What does the commitment to do a good deed without being seen teach a Senior Intern?",
        "options": [
          "It earns peer respect",
          "It reflects true service done for God’s glory, not man’s praise",
          "It helps achieve promotion",
          "It trains them for RA drills"
        ],
        "correctAnswer": "It reflects true service done for God’s glory, not man’s praise"
      },
      {
        "rank": "Senior Intern",
        "question": "What lesson can Senior Interns draw from Matthew 5:16 in relation to their service projects?",
        "options": [
          "Let your light shine through public announcements",
          "Let your good deeds reflect God's glory to others",
          "Only help those who are your friends",
          "Never work without supervision"
        ],
        "correctAnswer": "Let your good deeds reflect God's glory to others"
      },
      {
        "rank": "Senior Intern",
        "question": "Why must Senior Interns engage in both memory work and community service?",
        "options": [
          "To balance brain and body",
          "To complete tradition",
          "To apply scripture practically and spiritually",
          "To impress RA examiners"
        ],
        "correctAnswer": "To apply scripture practically and spiritually"
      },
      {
        "rank": "Senior Intern",
        "question": "What do the colors and shapes in the RA emblem typically represent?",
        "options": [
          "Church culture and dance",
          "Symbolic Christian values and spiritual calling",
          "Military ranking",
          "Denominational differences"
        ],
        "correctAnswer": "Symbolic Christian values and spiritual calling"
      },
      {
        "rank": "Senior Intern",
        "question": "How does a Senior Intern demonstrate understanding of the phrase ‘Royal Ambassador for Christ’?",
        "options": [
          "By attending all meetings regularly",
          "By acting as a representative of Christ in conduct and speech",
          "By quoting the RA pledge",
          "By wearing uniform correctly"
        ],
        "correctAnswer": "By acting as a representative of Christ in conduct and speech"
      },
      {
        "rank": "Senior Intern",
        "question": "Which aspect of leadership is developed when Senior Interns help organize service activities?",
        "options": [
          "Creativity",
          "Authority",
          "Responsibility and influence",
          "Punctuality"
        ],
        "correctAnswer": "Responsibility and influence"
      },
      {
        "rank": "Senior Intern",
        "question": "Why are Senior Interns encouraged to practice intentional kindness to strangers?",
        "options": [
          "To prepare for travel",
          "To qualify for reward systems",
          "To live out the message of the Good Samaritan",
          "To compete for ambassador title"
        ],
        "correctAnswer": "To live out the message of the Good Samaritan"
      },

      
        {
          "rank": "Senior Intern",
          "question": "According to the RA Manual, how should a Senior Intern respond when given a leadership role in a chapter activity?",
          "options": [
            "By asserting personal opinions strongly",
            "By serving humbly and guiding others with a Christlike attitude",
            "By following only his own plan",
            "By avoiding suggestions from others"
          ],
          "correctAnswer": "By serving humbly and guiding others with a Christlike attitude"
        },
        {
          "rank": "Senior Intern",
          "question": "Which biblical principle is most demonstrated when a Senior Intern helps a fellow member in need without being asked?",
          "options": [
            "Faith without works",
            "Love in action",
            "Hope through prayer",
            "Teaching through fasting"
          ],
          "correctAnswer": "Love in action"
        },
        {
          "rank": "Senior Intern",
          "question": "What aspect of the RA emblem should a Senior Intern be able to explain?",
          "options": [
            "The names of former ambassadors",
            "Its symbolic representation of spiritual responsibility",
            "Its origin from church law",
            "Its designer and color codes"
          ],
          "correctAnswer": "Its symbolic representation of spiritual responsibility"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is the Parable of the Good Samaritan a key passage in the Senior Intern requirements?",
          "options": [
            "It teaches hospitality skills",
            "It models selfless love and inclusive service",
            "It supports church growth through service",
            "It shows how to build a local ministry"
          ],
          "correctAnswer": "It models selfless love and inclusive service"
        },
        {
          "rank": "Senior Intern",
          "question": "Which quality does a Senior Intern exhibit by taking initiative to plan a chapter outreach project?",
          "options": [
            "Charisma",
            "Leadership",
            "Flexibility",
            "Punctuality"
          ],
          "correctAnswer": "Leadership"
        },
        {
          "rank": "Senior Intern",
          "question": "What does it mean when the RA emblem includes a globe or circle?",
          "options": [
            "World domination",
            "World mission and evangelism focus",
            "Geography of missionary countries",
            "Unity of RA chapters"
          ],
          "correctAnswer": "World mission and evangelism focus"
        },
        {
          "rank": "Senior Intern",
          "question": "Why must a Senior Intern serve others quietly, without seeking attention?",
          "options": [
            "It shows he is shy",
            "It reflects Christ’s example of humble service",
            "It keeps him from being chosen again",
            "It avoids responsibility"
          ],
          "correctAnswer": "It reflects Christ’s example of humble service"
        },
        {
          "rank": "Senior Intern",
          "question": "Which phrase from the RA Pledge best applies to the life of a Senior Intern?",
          "options": [
            "To honor Christ in all I do",
            "To speak when I am told",
            "To remember my uniform",
            "To pray for church elders"
          ],
          "correctAnswer": "To honor Christ in all I do"
        },
        {
          "rank": "Senior Intern",
          "question": "In what way is the Good Samaritan a model of RA ministry to modern society?",
          "options": [
            "He helped to build the temple",
            "He demonstrated mercy regardless of status or religion",
            "He reported the injured man to the elders",
            "He used his influence to get others involved"
          ],
          "correctAnswer": "He demonstrated mercy regardless of status or religion"
        },
        {
          "rank": "Senior Intern",
          "question": "What is a key characteristic of leadership emphasized during the Senior Intern rank development?",
          "options": [
            "Command",
            "Control",
            "Compassion",
            "Correction"
          ],
          "correctAnswer": "Compassion"
        },
        {
          "rank": "Senior Intern",
          "question": "Which passage reinforces the message of spiritual service over public recognition?",
          "options": [
            "Matthew 6:1-4",
            "Matthew 28:19-20",
            "Luke 10:25-37",
            "John 3:16"
          ],
          "correctAnswer": "Matthew 6:1-4"
        },
        {
          "rank": "Senior Intern",
          "question": "Why must Senior Interns memorize and explain the RA hymn in full?",
          "options": [
            "To pass the hymn competition",
            "To understand and internalize the RA mission message",
            "To compete in church events",
            "To assist the choir team"
          ],
          "correctAnswer": "To understand and internalize the RA mission message"
        },
        {
          "rank": "Senior Intern",
          "question": "What does the red color in the RA emblem traditionally symbolize?",
          "options": [
            "Victory in competition",
            "The blood of Jesus and sacrificial love",
            "Passion for learning",
            "Alertness in RA drills"
          ],
          "correctAnswer": "The blood of Jesus and sacrificial love"
        },
        {
          "rank": "Senior Intern",
          "question": "What does it mean to be a 'representative of Christ' as described in the RA motto?",
          "options": [
            "To wear a badge of faith",
            "To live in a way that reflects Christ’s character daily",
            "To promote RA programs",
            "To obey church staff"
          ],
          "correctAnswer": "To live in a way that reflects Christ’s character daily"
        },
        {
          "rank": "Senior Intern",
          "question": "What is one reason the Great Commission is assigned for study at the Senior Intern level?",
          "options": [
            "To prepare for missionary travel",
            "To encourage understanding of global evangelism responsibility",
            "To complete a biblical sequence",
            "To participate in church funding"
          ],
          "correctAnswer": "To encourage understanding of global evangelism responsibility"
        },
        {
          "rank": "Senior Intern",
          "question": "What is one expected outcome when a Senior Intern serves others without expecting reward?",
          "options": [
            "Faster promotion",
            "Greater spiritual maturity",
            "Increased visibility",
            "Automatic leadership"
          ],
          "correctAnswer": "Greater spiritual maturity"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is memorizing all the objectives of RA essential for Senior Interns?",
          "options": [
            "It helps answer quiz questions",
            "It is required for certificate presentation",
            "It deepens personal conviction of RA purpose",
            "It qualifies one for parade leadership"
          ],
          "correctAnswer": "It deepens personal conviction of RA purpose"
        },
        {
          "rank": "Senior Intern",
          "question": "What does a Senior Intern demonstrate by voluntarily leading a devotional during a meeting?",
          "options": [
            "Confidence in speaking",
            "A willingness to serve and minister spiritually",
            "Leadership ambition",
            "Obedience to RA rules"
          ],
          "correctAnswer": "A willingness to serve and minister spiritually"
        },
        {
          "rank": "Senior Intern",
          "question": "Which biblical figure's compassion most aligns with the expectations of a Senior Intern?",
          "options": [
            "David in battle",
            "Paul in prison",
            "The Good Samaritan",
            "Noah in the ark"
          ],
          "correctAnswer": "The Good Samaritan"
        },
        {
          "rank": "Senior Intern",
          "question": "Why does the RA Manual expect Senior Interns to write a report on their service experience?",
          "options": [
            "To keep records of chapter activity",
            "To reflect deeply on personal spiritual application",
            "To measure RA project outcomes",
            "To share with other churches"
          ],
          "correctAnswer": "To reflect deeply on personal spiritual application"
        },
        {
          "rank": "Senior Intern",
          "question": "What lesson is illustrated in Matthew 25:40 that applies to a Senior Intern's service project?",
          "options": [
            "Whatever is done for others is done for Christ Himself",
            "Only big acts of service are remembered by God",
            "Service is better in groups than alone",
            "God rewards visible actions more than quiet ones"
          ],
          "correctAnswer": "Whatever is done for others is done for Christ Himself"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is it important for Senior Interns to be familiar with all stanzas of the RA hymn?",
          "options": [
            "It helps lead congregational worship",
            "It reinforces the theological depth of the RA mission",
            "It qualifies them for choir leadership",
            "It prepares them for hymn competitions"
          ],
          "correctAnswer": "It reinforces the theological depth of the RA mission"
        },
        {
          "rank": "Senior Intern",
          "question": "How does selfless service distinguish a Senior Intern from lower-ranking members?",
          "options": [
            "It shows he is ready for graduation",
            "It fulfills a leadership criterion",
            "It reflects spiritual maturity and Christlike responsibility",
            "It demonstrates memorization skill"
          ],
          "correctAnswer": "It reflects spiritual maturity and Christlike responsibility"
        },
        {
          "rank": "Senior Intern",
          "question": "What does the shield symbol in the RA emblem typically stand for?",
          "options": [
            "Defense against sin and a call to spiritual readiness",
            "Military history of the church",
            "Scriptural knowledge",
            "Church authority"
          ],
          "correctAnswer": "Defense against sin and a call to spiritual readiness"
        },
        {
          "rank": "Senior Intern",
          "question": "Which of the following best summarizes the RA objective to 'learn how to work with others'?",
          "options": [
            "Be the leader in every task",
            "Avoid delegation",
            "Build teamwork skills grounded in love and cooperation",
            "Only work with people from your chapter"
          ],
          "correctAnswer": "Build teamwork skills grounded in love and cooperation"
        },
        {
          "rank": "Senior Intern",
          "question": "Why should Senior Interns study Luke 10:25–37 thoroughly?",
          "options": [
            "To memorize a parable for competition",
            "To internalize the principle of active compassion",
            "To earn promotion points",
            "To fulfill leadership requirements"
          ],
          "correctAnswer": "To internalize the principle of active compassion"
        },
        {
          "rank": "Senior Intern",
          "question": "How does completing a service project without expecting a reward help a Senior Intern grow spiritually?",
          "options": [
            "It proves his independence",
            "It teaches delayed gratification",
            "It aligns with biblical humility and God-centered service",
            "It helps him lead more projects"
          ],
          "correctAnswer": "It aligns with biblical humility and God-centered service"
        },
        {
          "rank": "Senior Intern",
          "question": "What is one way a Senior Intern can demonstrate Christlike leadership during a chapter event?",
          "options": [
            "Assigning others while observing",
            "Leading by example with humility and love",
            "Correcting everyone publicly",
            "Giving orders without feedback"
          ],
          "correctAnswer": "Leading by example with humility and love"
        },
        {
          "rank": "Senior Intern",
          "question": "Which part of the Great Commission reflects a Senior Intern's duty beyond the local church?",
          "options": [
            "Go into all the world and make disciples",
            "Memorize scripture thoroughly",
            "Preach only in your community",
            "Submit monthly RA reports"
          ],
          "correctAnswer": "Go into all the world and make disciples"
        },
        {
          "rank": "Senior Intern",
          "question": "What should motivate a Senior Intern to engage in Christian service?",
          "options": [
            "To fulfill chapter requirements",
            "To earn recognition from RA leaders",
            "To demonstrate personal faith and obedience to Christ",
            "To increase RA attendance"
          ],
          "correctAnswer": "To demonstrate personal faith and obedience to Christ"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is it beneficial for a Senior Intern to explain the RA emblem during a group presentation?",
          "options": [
            "To entertain the audience",
            "To demonstrate memory ability",
            "To strengthen the chapter’s identity and values",
            "To receive awards"
          ],
          "correctAnswer": "To strengthen the chapter’s identity and values"
        },
        {
          "rank": "Senior Intern",
          "question": "How should a Senior Intern respond if another RA member struggles with an assigned duty?",
          "options": [
            "Report the member to a counselor",
            "Assist them lovingly and guide them through the task",
            "Take over the task silently",
            "Correct them in public"
          ],
          "correctAnswer": "Assist them lovingly and guide them through the task"
        },
        {
          "rank": "Senior Intern",
          "question": "Which aspect of Christian leadership is emphasized through memorization and explanation of RA objectives?",
          "options": [
            "Verbal fluency",
            "Spiritual accountability and knowledge",
            "Public speaking confidence",
            "Promotion to dean"
          ],
          "correctAnswer": "Spiritual accountability and knowledge"
        },
        {
          "rank": "Senior Intern",
          "question": "What does Matthew 6:1–4 teach that applies directly to the lifestyle of a Senior Intern?",
          "options": [
            "Give only in private",
            "Do good works without seeking public attention",
            "Serve only when noticed",
            "Correct others during giving"
          ],
          "correctAnswer": "Do good works without seeking public attention"
        },
        {
          "rank": "Senior Intern",
          "question": "Why must a Senior Intern reflect on their service experiences in written form?",
          "options": [
            "To qualify for promotion",
            "To meet evaluation requirements",
            "To assess personal growth and biblical application",
            "To compete for RA awards"
          ],
          "correctAnswer": "To assess personal growth and biblical application"
        },
        {
          "rank": "Senior Intern",
          "question": "What is one sign that a Senior Intern is maturing spiritually?",
          "options": [
            "Ability to memorize many scriptures",
            "Initiating service projects without being told",
            "Receiving compliments from members",
            "Participation in competitions"
          ],
          "correctAnswer": "Initiating service projects without being told"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the central idea behind the instruction to 'love your neighbor' in the context of RA service?",
          "options": [
            "Be nice when convenient",
            "Support only those who support you",
            "Actively help those in need regardless of background",
            "Always give public gifts"
          ],
          "correctAnswer": "Actively help those in need regardless of background"
        },
        {
          "rank": "Senior Intern",
          "question": "What character trait is shown when a Senior Intern volunteers to clean the church without being told?",
          "options": [
            "Strength",
            "Courage",
            "Initiative",
            "Formality"
          ],
          "correctAnswer": "Initiative"
        },
        {
          "rank": "Senior Intern",
          "question": "How does the RA motto guide the behavior of a Senior Intern?",
          "options": [
            "It encourages discipline and strict order",
            "It calls them to live daily as true ambassadors of Christ",
            "It helps them memorize the creed",
            "It provides cultural direction"
          ],
          "correctAnswer": "It calls them to live daily as true ambassadors of Christ"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is it necessary for a Senior Intern to study and practice Matthew 5:16?",
          "options": [
            "It supports public speaking",
            "It reminds them to shine light through good deeds for God’s glory",
            "It qualifies them for exams",
            "It helps during hymn rehearsal"
          ],
          "correctAnswer": "It reminds them to shine light through good deeds for God’s glory"
        },
        {
          "rank": "Senior Intern",
          "question": "In the RA emblem, what does the shield primarily signify for a Royal Ambassador?",
          "options": [
            "A decorative element of uniform design",
            "The biblical defense of faith and preparedness against temptation",
            "The RA commitment to church attendance",
            "The heritage of Christian kingship"
          ],
          "correctAnswer": "The biblical defense of faith and preparedness against temptation"
        },
        {
          "rank": "Senior Intern",
          "question": "Why does the RA Manual assign Luke 10:25–37 as a required passage for the Senior Intern rank?",
          "options": [
            "It teaches the importance of memorizing parables",
            "It describes a cultural tradition of hospitality",
            "It shows a model of spiritual leadership and compassion in action",
            "It introduces the concept of church tithing"
          ],
          "correctAnswer": "It shows a model of spiritual leadership and compassion in action"
        },
        {
          "rank": "Senior Intern",
          "question": "How does living out the RA motto affect the daily behavior of a Senior Intern?",
          "options": [
            "It gives the member permission to lead prayer meetings",
            "It reminds them to represent Christ in conduct and integrity everywhere",
            "It ensures promotion to the next RA rank",
            "It encourages participation in Sunday services only"
          ],
          "correctAnswer": "It reminds them to represent Christ in conduct and integrity everywhere"
        },
        {
          "rank": "Senior Intern",
          "question": "What does the phrase 'Do a kind deed without being seen' cultivate in a Senior Intern?",
          "options": [
            "Consistency in public acts",
            "Self-discipline for competitions",
            "Genuine humility and unseen Christian service",
            "Avoidance of group activities"
          ],
          "correctAnswer": "Genuine humility and unseen Christian service"
        },
        {
          "rank": "Senior Intern",
          "question": "Which component of the RA emblem most reflects the global vision of the Great Commission?",
          "options": [
            "The torch representing knowledge",
            "The globe indicating worldwide Christian mission",
            "The crown for royal service",
            "The cross as a symbol of suffering"
          ],
          "correctAnswer": "The globe indicating worldwide Christian mission"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the primary reason Senior Interns are asked to explain the seven RA objectives?",
          "options": [
            "To recite them during RA inspection",
            "To pass a required memory test",
            "To internalize their calling as purposeful Christian witnesses",
            "To complete a group performance"
          ],
          "correctAnswer": "To internalize their calling as purposeful Christian witnesses"
        },
        {
          "rank": "Senior Intern",
          "question": "Which of the following best reflects the Christlike mindset expected of a Senior Intern?",
          "options": [
            "Seeking approval through public ministry",
            "Exercising silent and sacrificial leadership for God's glory",
            "Competing for positions in RA leadership",
            "Prioritizing chapter reputation"
          ],
          "correctAnswer": "Exercising silent and sacrificial leadership for God's glory"
        },
        {
          "rank": "Senior Intern",
          "question": "How can a Senior Intern best apply Matthew 5:16 in a practical church setting?",
          "options": [
            "By quoting it during worship",
            "By allowing their daily actions to reflect godliness without boasting",
            "By displaying Bible verses on clothing",
            "By teaching it in Bible class"
          ],
          "correctAnswer": "By allowing their daily actions to reflect godliness without boasting"
        },
        {
          "rank": "Senior Intern",
          "question": "Which leadership quality is demonstrated when a Senior Intern helps junior members prepare for rank requirements?",
          "options": [
            "Administrative efficiency",
            "Mentorship rooted in humility and service",
            "Scriptural accuracy",
            "Cultural understanding"
          ],
          "correctAnswer": "Mentorship rooted in humility and service"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the deeper lesson behind memorizing the entire RA hymn for a Senior Intern?",
          "options": [
            "To prepare for musical service in church",
            "To understand and live out the full message of Christ’s ambassadorial mission",
            "To lead others in hymn recitation",
            "To fulfill a leadership requirement"
          ],
          "correctAnswer": "To understand and live out the full message of Christ’s ambassadorial mission"
        },
        {
          "rank": "Senior Intern",
          "question": "Which scriptural value is violated if a Senior Intern serves only to gain recognition?",
          "options": [
            "Wisdom",
            "Humility",
            "Justice",
            "Joy"
          ],
          "correctAnswer": "Humility"
        },
        {
          "rank": "Senior Intern",
          "question": "What does it mean for a Senior Intern to be 'set apart for Christ’s service' according to the RA objectives?",
          "options": [
            "They should serve only during Sunday meetings",
            "They should dedicate their time and talents to God’s mission, regardless of convenience",
            "They should wear a different uniform",
            "They are excused from physical activities"
          ],
          "correctAnswer": "They should dedicate their time and talents to God’s mission, regardless of convenience"
        },
        {
          "rank": "Senior Intern",
          "question": "What would be an improper motivation for a Senior Intern to complete a service project?",
          "options": [
            "To learn obedience through action",
            "To fulfill a spiritual goal",
            "To receive praise from counselors",
            "To demonstrate love in Christ’s name"
          ],
          "correctAnswer": "To receive praise from counselors"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is reflection important after a service activity, as required for Senior Interns?",
          "options": [
            "It allows them to document successes for promotion",
            "It enables them to recognize spiritual growth and areas for improvement",
            "It helps the counselor update the logbook",
            "It proves they were present at the event"
          ],
          "correctAnswer": "It enables them to recognize spiritual growth and areas for improvement"
        },
        {
          "rank": "Senior Intern",
          "question": "In Luke 10:37, Jesus says, 'Go and do likewise.' What action is expected from a Senior Intern based on this command?",
          "options": [
            "Teach the parable to others weekly",
            "Live a life marked by compassionate action toward others",
            "Wear RA colors proudly",
            "Plan group evangelism trips"
          ],
          "correctAnswer": "Live a life marked by compassionate action toward others"
        },
        {
          "rank": "Senior Intern",
          "question": "What type of service best reflects the RA goal of being 'on mission with God'?",
          "options": [
            "Helping organize an RA inspection drill",
            "Offering support to a stranger in need with no expectation of reward",
            "Quoting long Bible verses during parades",
            "Volunteering for RA presentations"
          ],
          "correctAnswer": "Offering support to a stranger in need with no expectation of reward"
        },
        {
          "rank": "Senior Intern",
          "question": "What leadership behavior should a Senior Intern avoid during a team project?",
          "options": [
            "Encouraging shared responsibility",
            "Delegating with fairness",
            "Acting independently without team input",
            "Motivating others to participate"
          ],
          "correctAnswer": "Acting independently without team input"
        },
        {
          "rank": "Senior Intern",
          "question": "Why does the RA Manual emphasize understanding all parts of the RA emblem?",
          "options": [
            "It is part of uniform etiquette",
            "Each symbol reinforces biblical truths and RA purpose",
            "It helps with RA marching drills",
            "It connects members to older RA traditions"
          ],
          "correctAnswer": "Each symbol reinforces biblical truths and RA purpose"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the intended outcome of community service for a Senior Intern?",
          "options": [
            "Social recognition",
            "Spiritual impact and reflection of Christ’s love",
            "Physical endurance and respect",
            "Practice for evangelism exams"
          ],
          "correctAnswer": "Spiritual impact and reflection of Christ’s love"
        },
        {
          "rank": "Senior Intern",
          "question": "What does Matthew 28:20 teach Senior Interns about discipleship?",
          "options": [
            "They must train only younger RAs",
            "They are to teach others to obey everything Christ commanded",
            "They should memorize all four Gospels",
            "They must become youth pastors"
          ],
          "correctAnswer": "They are to teach others to obey everything Christ commanded"
        },
        {
          "rank": "Senior Intern",
          "question": "What does the RA objective 'to develop Christlike character' require from a Senior Intern?",
          "options": [
            "To participate in RA parades regularly",
            "To imitate Christ’s humility, patience, and love in daily life",
            "To focus on high-ranking officers as mentors",
            "To teach Bible history weekly"
          ],
          "correctAnswer": "To imitate Christ’s humility, patience, and love in daily life"
        },
        {
          "rank": "Senior Intern",
          "question": "How does organizing a voluntary clean-up in the church reflect Senior Intern maturity?",
          "options": [
            "It earns praise during evaluation",
            "It teaches discipline and respect for elders",
            "It demonstrates internal motivation to serve God and the community",
            "It replaces their preaching assignment"
          ],
          "correctAnswer": "It demonstrates internal motivation to serve God and the community"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the spiritual meaning of the crown often seen in RA emblem designs?",
          "options": [
            "Victory in sports and academic games",
            "Symbol of Christian authority and reward in heaven",
            "Mark of leadership rank in RA meetings",
            "Reminder to follow kingly traditions"
          ],
          "correctAnswer": "Symbol of Christian authority and reward in heaven"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is intentional, quiet service valued more than public recognition in RA training?",
          "options": [
            "It makes it easier to avoid mistakes",
            "It tests obedience under pressure",
            "It reflects the biblical principle of serving for God's glory, not man’s applause",
            "It avoids peer criticism"
          ],
          "correctAnswer": "It reflects the biblical principle of serving for God's glory, not man’s applause"
        },
        {
          "rank": "Senior Intern",
          "question": "How should a Senior Intern respond when others refuse to serve during a group outreach?",
          "options": [
            "Inform the counselor immediately",
            "Encourage others by setting an example through action",
            "Step away to avoid conflict",
            "Assign the work to new members"
          ],
          "correctAnswer": "Encourage others by setting an example through action"
        },
        {
          "rank": "Senior Intern",
          "question": "Which leadership trait is best demonstrated when a Senior Intern gives credit to others for a successful team project?",
          "options": [
            "Tact",
            "Delegation",
            "Humility",
            "Discipline"
          ],
          "correctAnswer": "Humility"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the core lesson of the Great Commission that every Senior Intern should remember?",
          "options": [
            "Christians must preach only when assigned",
            "Evangelism must begin with family members",
            "Christians are sent to disciple all nations in obedience to Christ",
            "Discipleship requires advanced Bible school training"
          ],
          "correctAnswer": "Christians are sent to disciple all nations in obedience to Christ"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is it recommended that Senior Interns document their personal growth during the rank?",
          "options": [
            "To compare themselves with others",
            "To record details for final review",
            "To reflect on how their actions align with Christlike values",
            "To prepare for chapter presentations"
          ],
          "correctAnswer": "To reflect on how their actions align with Christlike values"
        },
        {
          "rank": "Senior Intern",
          "question": "In the RA context, what does it mean to 'represent Christ in every area of life'?",
          "options": [
            "To wear RA colors proudly",
            "To speak the gospel in every gathering",
            "To demonstrate Christlike values in school, home, and society",
            "To attend all meetings"
          ],
          "correctAnswer": "To demonstrate Christlike values in school, home, and society"
        },
        {
          "rank": "Senior Intern",
          "question": "Which behavior contradicts the biblical model of servant leadership expected at the Senior Intern level?",
          "options": [
            "Delegating tasks to teammates",
            "Seeking recognition before offering help",
            "Serving others regardless of reward",
            "Leading with compassion"
          ],
          "correctAnswer": "Seeking recognition before offering help"
        },
        {
          "rank": "Senior Intern",
          "question": "Why is teamwork a necessary quality in fulfilling RA objectives at the Senior Intern level?",
          "options": [
            "It ensures everyone learns to lead",
            "It strengthens unity in executing RA projects",
            "It helps distribute punishment evenly",
            "It reduces individual workloads"
          ],
          "correctAnswer": "It strengthens unity in executing RA projects"
        },
        {
          "rank": "Senior Intern",
          "question": "What best defines the outcome of a Senior Intern applying Matthew 28:20 in school?",
          "options": [
            "Improving grades",
            "Teaching obedience to Christ’s word through example",
            "Organizing prayer services daily",
            "Promoting RA meetings"
          ],
          "correctAnswer": "Teaching obedience to Christ’s word through example"
        },
        {
          "rank": "Senior Intern",
          "question": "Which of these actions best reflects the RA objective to 'help others at all times'?",
          "options": [
            "Donating money during Sunday service",
            "Assisting a classmate without being asked",
            "Preaching from a pulpit",
            "Competing in Bible quiz"
          ],
          "correctAnswer": "Assisting a classmate without being asked"
        },
        {
          "rank": "Senior Intern",
          "question": "Which is the most appropriate way for a Senior Intern to prepare others for RA rankings?",
          "options": [
            "Assign tasks and wait for feedback",
            "Teach them memory verses only",
            "Mentor them through guidance, encouragement, and example",
            "Ask the counselor to test them"
          ],
          "correctAnswer": "Mentor them through guidance, encouragement, and example"
        },
        {
          "rank": "Senior Intern",
          "question": "Why are Senior Interns encouraged to go beyond minimum rank requirements?",
          "options": [
            "To receive special badges",
            "To be selected for international events",
            "To model excellence and spiritual growth",
            "To fast-track their promotion"
          ],
          "correctAnswer": "To model excellence and spiritual growth"
        },
        {
          "rank": "Senior Intern",
          "question": "How does explaining the emblem build leadership confidence in Senior Interns?",
          "options": [
            "It helps them speak publicly under pressure",
            "It sharpens visual memory",
            "It reinforces their belief in RA symbolism and meaning",
            "It replaces other academic activities"
          ],
          "correctAnswer": "It reinforces their belief in RA symbolism and meaning"
        },
        {
          "rank": "Senior Intern",
          "question": "What is a Senior Intern’s role when RA members argue during a group task?",
          "options": [
            "Take sides with the leader",
            "Remain silent until the counselor intervenes",
            "Facilitate peace and refocus on the shared goal",
            "Ask others to leave the group"
          ],
          "correctAnswer": "Facilitate peace and refocus on the shared goal"
        },
        {
          "rank": "Senior Intern",
          "question": "What lesson is reflected in the phrase 'do a kind deed without being seen'?",
          "options": [
            "Good works should remain secret",
            "The value of sincerity in Christian service",
            "Leadership should be quiet",
            "Recognition ruins reward"
          ],
          "correctAnswer": "The value of sincerity in Christian service"
        },
        {
          "rank": "Senior Intern",
          "question": "What does successful leadership at the Senior Intern level depend most upon?",
          "options": [
            "Memorization of more objectives",
            "Earning higher ranks quickly",
            "Serving others with intentional love and wisdom",
            "Becoming parade commander"
          ],
          "correctAnswer": "Serving others with intentional love and wisdom"
        },
        {
          "rank": "Senior Intern",
          "question": "What is the biblical basis for helping a stranger in need, even when others refuse?",
          "options": [
            "Luke 19:10",
            "John 15:13",
            "Luke 10:33–37",
            "Acts 1:8"
          ],
          "correctAnswer": "Luke 10:33–37"
        },
        {
    "rank": "Senior Intern",
    "question": "What does the RA objective 'to develop Christlike character' require from a Senior Intern?",
    "options": [
      "To participate in RA parades regularly",
      "To imitate Christ’s humility, patience, and love in daily life",
      "To focus on high-ranking officers as mentors",
      "To teach Bible history weekly"
    ],
    "correctAnswer": "To imitate Christ’s humility, patience, and love in daily life"
  },
  {
    "rank": "Senior Intern",
    "question": "How does organizing a voluntary clean-up in the church reflect Senior Intern maturity?",
    "options": [
      "It earns praise during evaluation",
      "It teaches discipline and respect for elders",
      "It demonstrates internal motivation to serve God and the community",
      "It replaces their preaching assignment"
    ],
    "correctAnswer": "It demonstrates internal motivation to serve God and the community"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the spiritual meaning of the crown often seen in RA emblem designs?",
    "options": [
      "Victory in sports and academic games",
      "Symbol of Christian authority and reward in heaven",
      "Mark of leadership rank in RA meetings",
      "Reminder to follow kingly traditions"
    ],
    "correctAnswer": "Symbol of Christian authority and reward in heaven"
  },
  {
    "rank": "Senior Intern",
    "question": "Why is intentional, quiet service valued more than public recognition in RA training?",
    "options": [
      "It makes it easier to avoid mistakes",
      "It tests obedience under pressure",
      "It reflects the biblical principle of serving for God's glory, not man’s applause",
      "It avoids peer criticism"
    ],
    "correctAnswer": "It reflects the biblical principle of serving for God's glory, not man’s applause"
  },
  {
    "rank": "Senior Intern",
    "question": "How should a Senior Intern respond when others refuse to serve during a group outreach?",
    "options": [
      "Inform the counselor immediately",
      "Encourage others by setting an example through action",
      "Step away to avoid conflict",
      "Assign the work to new members"
    ],
    "correctAnswer": "Encourage others by setting an example through action"
  },
  {
    "rank": "Senior Intern",
    "question": "Which leadership trait is best demonstrated when a Senior Intern gives credit to others for a successful team project?",
    "options": [
      "Tact",
      "Delegation",
      "Humility",
      "Discipline"
    ],
    "correctAnswer": "Humility"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the core lesson of the Great Commission that every Senior Intern should remember?",
    "options": [
      "Christians must preach only when assigned",
      "Evangelism must begin with family members",
      "Christians are sent to disciple all nations in obedience to Christ",
      "Discipleship requires advanced Bible school training"
    ],
    "correctAnswer": "Christians are sent to disciple all nations in obedience to Christ"
  },
  {
    "rank": "Senior Intern",
    "question": "Why is it recommended that Senior Interns document their personal growth during the rank?",
    "options": [
      "To compare themselves with others",
      "To record details for final review",
      "To reflect on how their actions align with Christlike values",
      "To prepare for chapter presentations"
    ],
    "correctAnswer": "To reflect on how their actions align with Christlike values"
  },
  {
    "rank": "Senior Intern",
    "question": "In the RA context, what does it mean to 'represent Christ in every area of life'?",
    "options": [
      "To wear RA colors proudly",
      "To speak the gospel in every gathering",
      "To demonstrate Christlike values in school, home, and society",
      "To attend all meetings"
    ],
    "correctAnswer": "To demonstrate Christlike values in school, home, and society"
  },
  {
    "rank": "Senior Intern",
    "question": "Which behavior contradicts the biblical model of servant leadership expected at the Senior Intern level?",
    "options": [
      "Delegating tasks to teammates",
      "Seeking recognition before offering help",
      "Serving others regardless of reward",
      "Leading with compassion"
    ],
    "correctAnswer": "Seeking recognition before offering help"
  },
  {
    "rank": "Senior Intern",
    "question": "Why is teamwork a necessary quality in fulfilling RA objectives at the Senior Intern level?",
    "options": [
      "It ensures everyone learns to lead",
      "It strengthens unity in executing RA projects",
      "It helps distribute punishment evenly",
      "It reduces individual workloads"
    ],
    "correctAnswer": "It strengthens unity in executing RA projects"
  },
  {
    "rank": "Senior Intern",
    "question": "What best defines the outcome of a Senior Intern applying Matthew 28:20 in school?",
    "options": [
      "Improving grades",
      "Teaching obedience to Christ’s word through example",
      "Organizing prayer services daily",
      "Promoting RA meetings"
    ],
    "correctAnswer": "Teaching obedience to Christ’s word through example"
  },
  {
    "rank": "Senior Intern",
    "question": "Which of these actions best reflects the RA objective to 'help others at all times'?",
    "options": [
      "Donating money during Sunday service",
      "Assisting a classmate without being asked",
      "Preaching from a pulpit",
      "Competing in Bible quiz"
    ],
    "correctAnswer": "Assisting a classmate without being asked"
  },
  {
    "rank": "Senior Intern",
    "question": "Which is the most appropriate way for a Senior Intern to prepare others for RA rankings?",
    "options": [
      "Assign tasks and wait for feedback",
      "Teach them memory verses only",
      "Mentor them through guidance, encouragement, and example",
      "Ask the counselor to test them"
    ],
    "correctAnswer": "Mentor them through guidance, encouragement, and example"
  },
  {
    "rank": "Senior Intern",
    "question": "Why are Senior Interns encouraged to go beyond minimum rank requirements?",
    "options": [
      "To receive special badges",
      "To be selected for international events",
      "To model excellence and spiritual growth",
      "To fast-track their promotion"
    ],
    "correctAnswer": "To model excellence and spiritual growth"
  },
  {
    "rank": "Senior Intern",
    "question": "How does explaining the emblem build leadership confidence in Senior Interns?",
    "options": [
      "It helps them speak publicly under pressure",
      "It sharpens visual memory",
      "It reinforces their belief in RA symbolism and meaning",
      "It replaces other academic activities"
    ],
    "correctAnswer": "It reinforces their belief in RA symbolism and meaning"
  },
  {
    "rank": "Senior Intern",
    "question": "What is a Senior Intern’s role when RA members argue during a group task?",
    "options": [
      "Take sides with the leader",
      "Remain silent until the counselor intervenes",
      "Facilitate peace and refocus on the shared goal",
      "Ask others to leave the group"
    ],
    "correctAnswer": "Facilitate peace and refocus on the shared goal"
  },
  {
    "rank": "Senior Intern",
    "question": "What lesson is reflected in the phrase 'do a kind deed without being seen'?",
    "options": [
      "Good works should remain secret",
      "The value of sincerity in Christian service",
      "Leadership should be quiet",
      "Recognition ruins reward"
    ],
    "correctAnswer": "The value of sincerity in Christian service"
  },
  {
    "rank": "Senior Intern",
    "question": "What does successful leadership at the Senior Intern level depend most upon?",
    "options": [
      "Memorization of more objectives",
      "Earning higher ranks quickly",
      "Serving others with intentional love and wisdom",
      "Becoming parade commander"
    ],
    "correctAnswer": "Serving others with intentional love and wisdom"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the biblical basis for helping a stranger in need, even when others refuse?",
    "options": [
      "Luke 19:10",
      "John 15:13",
      "Luke 10:33–37",
      "Acts 1:8"
    ],
    "correctAnswer": "Luke 10:33–37"
  },
  {
    "rank": "Senior Intern",
    "question": "How does consistent participation in Christian service deepen the character of a Senior Intern? (Q6)",
    "options": [
      "It helps gain favor with church leaders",
      "It shows loyalty to the RA organization",
      "It builds a reputation within the chapter",
      "It cultivates habits of compassion and responsibility modeled after Christ"
    ],
    "correctAnswer": "It cultivates habits of compassion and responsibility modeled after Christ"
  },
  {
    "rank": "Senior Intern",
    "question": "Why should a Senior Intern lead others in RA activities without seeking recognition? (Q6)",
    "options": [
      "It prevents unnecessary competition",
      "It reflects true servant leadership aligned with biblical values",
      "It earns secret benefits from counselors",
      "It prepares them for Sunday school leadership"
    ],
    "correctAnswer": "It reflects true servant leadership aligned with biblical values"
  },
  {
    "rank": "Senior Intern",
    "question": "What leadership principle does a Senior Intern display by planning a group outreach with input from others? (Q6)",
    "options": [
      "Authoritative coordination",
      "Shared vision and collaborative planning",
      "Efficiency and speed",
      "Delegated enforcement"
    ],
    "correctAnswer": "Shared vision and collaborative planning"
  },
  {
    "rank": "Senior Intern",
    "question": "Which action most contradicts the spirit of the RA objective 'to become a well-informed, responsible follower of Christ'? (Q6)",
    "options": [
      "Asking questions during Bible study",
      "Participating in community projects",
      "Avoiding tasks unless being rewarded",
      "Studying the Great Commission"
    ],
    "correctAnswer": "Avoiding tasks unless being rewarded"
  },
  {
    "rank": "Senior Intern",
    "question": "When evaluating a service activity, what is the most important aspect a Senior Intern should reflect on? (Q6)",
    "options": [
      "How well they were praised",
      "If it looked good on camera",
      "What they learned spiritually and how it changed them",
      "Whether their uniform was neat"
    ],
    "correctAnswer": "What they learned spiritually and how it changed them"
  },
  {
    "rank": "Senior Intern",
    "question": "How should a Senior Intern respond if peers are unwilling to contribute to a chapter project? (Q7)",
    "options": [
      "Do the task alone and complain later",
      "Force them to join immediately",
      "Seek a counselor’s intervention before starting",
      "Model cooperation and invite others to join through example"
    ],
    "correctAnswer": "Model cooperation and invite others to join through example"
  },
  {
    "rank": "Senior Intern",
    "question": "What defines a 'mission-focused' mindset in the RA Senior Intern rank? (Q7)",
    "options": [
      "Volunteering only when instructed",
      "Seeking promotions for good performance",
      "Serving with purpose based on Christ’s command to make disciples",
      "Participating in mission drills regularly"
    ],
    "correctAnswer": "Serving with purpose based on Christ’s command to make disciples"
  },
  {
    "rank": "Senior Intern",
    "question": "Why are Senior Interns encouraged to write personal reflections after service? (Q7)",
    "options": [
      "To compare with other members",
      "To prepare for church interviews",
      "To analyze spiritual growth and biblical obedience",
      "To avoid repetition in future tasks"
    ],
    "correctAnswer": "To analyze spiritual growth and biblical obedience"
  },
  {
    "rank": "Senior Intern",
    "question": "How should a Senior Intern handle leadership failure in a chapter outreach activity? (Q7)",
    "options": [
      "Blame the juniors and file a report",
      "Withdraw from similar future tasks",
      "Reflect, learn, and improve leadership skills with humility",
      "Avoid all leadership duties for a while"
    ],
    "correctAnswer": "Reflect, learn, and improve leadership skills with humility"
  },
  {
    "rank": "Senior Intern",
    "question": "Which part of the RA motto is best demonstrated through organizing a local mission effort? (Q7)",
    "options": [
      "To become a skilled counselor",
      "To help grow the local RA group",
      "To be on mission with God",
      "To memorize the gospel"
    ],
    "correctAnswer": "To be on mission with God"
  },
  {
    "rank": "Senior Intern",
    "question": "In RA leadership, how should correction be delivered by a Senior Intern? (Q7)",
    "options": [
      "Privately and respectfully to preserve dignity",
      "Quickly and openly for clarity",
      "Through sarcasm to motivate",
      "Only by referring issues to officers"
    ],
    "correctAnswer": "Privately and respectfully to preserve dignity"
  },
  {
    "rank": "Senior Intern",
    "question": "What character trait does a Senior Intern show by continuing service when no one else volunteers? (Q7)",
    "options": [
      "Competitiveness",
      "Dependability",
      "Ambition",
      "Silence"
    ],
    "correctAnswer": "Dependability"
  },
  {
    "rank": "Senior Intern",
    "question": "Which passage reinforces that true greatness in God’s Kingdom is found in service? (Q7)",
    "options": [
      "Luke 2:52",
      "Matthew 23:11",
      "John 10:10",
      "Psalm 119:105"
    ],
    "correctAnswer": "Matthew 23:11"
  },
  {
    "rank": "Senior Intern",
    "question": "What is a biblical example that RA Senior Interns are encouraged to model in missions? (Q7)",
    "options": [
      "The faith of Peter",
      "The discipline of Paul",
      "The compassion of the Good Samaritan",
      "The dreams of Joseph"
    ],
    "correctAnswer": "The compassion of the Good Samaritan"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the benefit of group leadership experience for a Senior Intern's development? (Q7)",
    "options": [
      "Public recognition",
      "Enhanced responsibility and spiritual accountability",
      "Increased chapter popularity",
      "Quick advancement to Special Envoy"
    ],
    "correctAnswer": "Enhanced responsibility and spiritual accountability"
  },
  {
    "rank": "Senior Intern",
    "question": "Why should a Senior Intern avoid boasting after completing a difficult task? (Q7)",
    "options": [
      "To avoid making others jealous",
      "To prepare for harder ones later",
      "To reflect humility and give God the glory",
      "To protect the RA name"
    ],
    "correctAnswer": "To reflect humility and give God the glory"
  },
  {
    "rank": "Senior Intern",
    "question": "What is a strong indicator that a Senior Intern is ready for higher RA responsibilities? (Q7)",
    "options": [
      "Winning competitions",
      "Leading without supervision or self-promotion",
      "Perfectly reciting all hymns",
      "Submitting assignments early"
    ],
    "correctAnswer": "Leading without supervision or self-promotion"
  },
  {
    "rank": "Senior Intern",
    "question": "Which of these decisions shows the highest RA integrity for a Senior Intern? (Q7)",
    "options": [
      "Offering to serve when it's easy",
      "Waiting for a reward before participating",
      "Staying committed to a project even if no one notices",
      "Leading only when appointed"
    ],
    "correctAnswer": "Staying committed to a project even if no one notices"
  },
  {
    "rank": "Senior Intern",
    "question": "How should a Senior Intern explain the connection between RA service and Christ’s mission?",
    "options": [
      "RA activities teach time management for youth",
      "RA ranking is similar to church hierarchy",
      "RA service trains us to imitate Christ by loving and serving others faithfully",
      "RA work improves confidence for speaking"
    ],
    "correctAnswer": "RA service trains us to imitate Christ by loving and serving others faithfully"
  },
  {
    "rank": "Senior Intern",
    "question": "Which action shows a misunderstanding of the RA motto at the Senior Intern level?",
    "options": [
      "Inviting friends to RA meetings",
      "Quoting Matthew 28:19-20",
      "Serving only when praised",
      "Helping others quietly"
    ],
    "correctAnswer": "Serving only when praised"
  },
  
    {
      "rank": "Senior Intern",
      "question": "What is the most appropriate way a Senior Intern can motivate junior members during a service task?",
      "options": [
        "Give orders to ensure speed",
        "Lead by doing and encourage through example",
        "Wait until they act, then correct",
        "Promise gifts for participation"
      ],
      "correctAnswer": "Lead by doing and encourage through example"
    },
    {
      "rank": "Senior Intern",
      "question": "What is the goal of integrating Matthew 28:19–20 into the Senior Intern curriculum?",
      "options": [
        "To complete scriptural memorization tasks",
        "To help Interns identify missionary routes",
        "To equip them with a global vision for making disciples",
        "To prepare them for youth camp activities"
      ],
      "correctAnswer": "To equip them with a global vision for making disciples"
    },
    {
      "rank": "Senior Intern",
      "question": "What spiritual discipline is strengthened when a Senior Intern does service without being reminded?",
      "options": [
        "Fasting",
        "Self-initiative in godly obedience",
        "Formal leadership training",
        "Biblical scholarship"
      ],
      "correctAnswer": "Self-initiative in godly obedience"
    },
    {
      "rank": "Senior Intern",
      "question": "Which of the following best reflects the biblical expectation for leaders according to Mark 10:45?",
      "options": [
        "A leader must prove superior skills",
        "A leader is one who is served by others",
        "A leader serves others sacrificially like Christ",
        "A leader must be elected before serving"
      ],
      "correctAnswer": "A leader serves others sacrificially like Christ"
    },
    {
      "rank": "Senior Intern",
      "question": "What aspect of RA training is most enhanced through group project coordination?",
      "options": [
        "Oral recitation",
        "Timekeeping",
        "Team leadership and accountability",
        "Event promotion"
      ],
      "correctAnswer": "Team leadership and accountability"
    },
    {
      "rank": "Senior Intern",
      "question": "Why does the RA Manual recommend including personal reflections after a rank activity?",
      "options": [
        "To complete the activity record",
        "To meet expectations of RA counselors",
        "To promote journaling habits",
        "To internalize the spiritual lessons from the experience"
      ],
      "correctAnswer": "To internalize the spiritual lessons from the experience"
    },
    {
      "rank": "Senior Intern",
      "question": "What attitude should a Senior Intern exhibit when plans do not go as expected?",
      "options": [
        "Frustration and withdrawal",
        "Patience and problem-solving rooted in faith",
        "Firm insistence on their way",
        "Delegation of blame"
      ],
      "correctAnswer": "Patience and problem-solving rooted in faith"
    },
    {
      "rank": "Senior Intern",
      "question": "What does the Great Commission require from all followers of Christ, including RA Senior Interns?",
      "options": [
        "To teach others how to sing hymns",
        "To memorize all parables",
        "To go, make disciples, and teach Christ’s commands",
        "To become missionaries in rural villages"
      ],
      "correctAnswer": "To go, make disciples, and teach Christ’s commands"
    },
    {
      "rank": "Senior Intern",
      "question": "Which of these actions undermines RA values at the Senior Intern level?",
      "options": [
        "Leading a mission trip",
        "Helping only when there's public recognition",
        "Quoting scripture in meetings",
        "Guiding junior members in hymn practice"
      ],
      "correctAnswer": "Helping only when there's public recognition"
    },
    {
      "rank": "Senior Intern",
      "question": "Why is it spiritually important for Senior Interns to act kindly even when not noticed?",
      "options": [
        "To develop independence",
        "To follow chapter traditions",
        "Because God sees what man may not",
        "To gain favor with chapter leaders"
      ],
      "correctAnswer": "Because God sees what man may not"
    },
    {
      "rank": "Senior Intern",
      "question": "What is the most Christlike response to being overlooked after completing a service project?",
      "options": [
        "Express dissatisfaction to leaders",
        "Seek attention in the next event",
        "Accept it humbly and rejoice in unseen service",
        "Quit leading and work privately"
      ],
      "correctAnswer": "Accept it humbly and rejoice in unseen service"
    },
    {
      "rank": "Senior Intern",
      "question": "What quality is most evident when a Senior Intern helps lead a service team through conflict?",
      "options": [
        "Confidence",
        "Popularity",
        "Peacemaking rooted in Christian maturity",
        "Strict discipline"
      ],
      "correctAnswer": "Peacemaking rooted in Christian maturity"
    },
    {
      "rank": "Senior Intern",
      "question": "What does Philippians 2:3 teach that aligns with the attitude of a Senior Intern?",
      "options": [
        "Be humble and value others above yourself",
        "Correct others publicly to stay sharp",
        "Boast only in scripture",
        "Ask for help during exams"
      ],
      "correctAnswer": "Be humble and value others above yourself"
    },
    {
      "rank": "Senior Intern",
      "question": "What is one way Senior Interns can build the next generation of RAs?",
      "options": [
        "Lead hymn practices consistently",
        "Teach them obedience to RA parade orders",
        "Model faithfulness and servant leadership to inspire them",
        "Limit their participation to monthly events"
      ],
      "correctAnswer": "Model faithfulness and servant leadership to inspire them"
    },
    {
      "rank": "Senior Intern",
      "question": "What habit supports long-term spiritual leadership for Senior Interns?",
      "options": [
        "Attending every church event",
        "Writing notes for others",
        "Practicing daily private devotion and reflection",
        "Reporting issues regularly"
      ],
      "correctAnswer": "Practicing daily private devotion and reflection"
    },
    {
      "rank": "Senior Intern",
      "question": "What attitude should guide a Senior Intern when serving with people who are difficult to work with?",
      "options": [
        "Polite silence",
        "Strategic isolation",
        "Love, patience, and collaborative grace",
        "Assertive correction"
      ],
      "correctAnswer": "Love, patience, and collaborative grace"
    },
    {
      "rank": "Senior Intern",
      "question": "What best demonstrates the goal of RA's emphasis on Christlike character development?",
      "options": [
        "Perfect uniform and posture",
        "Consistent attendance",
        "Acting with integrity even when no one is watching",
        "Winning chapter contests"
      ],
      "correctAnswer": "Acting with integrity even when no one is watching"
    },
    {
      "rank": "Senior Intern",
      "question": "How can a Senior Intern reflect biblical justice during a group task division?",
      "options": [
        "Select based on skill level",
        "Divide tasks fairly and serve alongside others",
        "Allow stronger members to dominate",
        "Let counselors assign everyone"
      ],
      "correctAnswer": "Divide tasks fairly and serve alongside others"
    },
    {
      "rank": "Senior Intern",
      "question": "What does Luke 6:31 teach a Senior Intern about relationships in the RA chapter?",
      "options": [
        "Avoid harsh judgment of others",
        "Be quick to teach and slow to follow",
        "Treat others the way you want to be treated",
        "Seek peace through silence"
      ],
      "correctAnswer": "Treat others the way you want to be treated"
    },
    {
      "rank": "Senior Intern",
      "question": "What is a biblical way to respond if your team fails and you were the leader?",
      "options": [
        "Avoid responsibility and remain silent",
        "Blame others and justify your actions",
        "Accept responsibility and seek growth in humility",
        "Step down and change roles"
      ],
      "correctAnswer": "Accept responsibility and seek growth in humility"
    },

  
  {
    "rank": "Senior Intern",
    "question": "What is the purpose of practicing RA service in private according to Matthew 6:3–4?",
    "options": [
      "To avoid distractions",
      "To stay humble and receive reward from God, not man",
      "To remain unnoticed by peers",
      "To fulfill personal devotions"
    ],
    "correctAnswer": "To stay humble and receive reward from God, not man"
  },
  {
    "rank": "Senior Intern",
    "question": "How does the RA hymn promote spiritual discipline for a Senior Intern?",
    "options": [
      "By promoting musical excellence",
      "By encouraging poetic memory",
      "By reinforcing the call to live as Christ’s representative",
      "By serving as a traditional church chant"
    ],
    "correctAnswer": "By reinforcing the call to live as Christ’s representative"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the best way a Senior Intern can respond to being falsely accused during a project?",
    "options": [
      "Defend immediately and aggressively",
      "Walk away and avoid confrontation",
      "Remain calm, clarify respectfully, and trust God’s justice",
      "Refuse further participation"
    ],
    "correctAnswer": "Remain calm, clarify respectfully, and trust God’s justice"
  },
  {
    "rank": "Senior Intern",
    "question": "What leadership virtue does Jesus model in John 13:14–15 that applies to Senior Interns?",
    "options": [
      "Teaching through debate",
      "Correcting others publicly",
      "Serving others despite one’s position",
      "Delegating with force"
    ],
    "correctAnswer": "Serving others despite one’s position"
  },
  {
    "rank": "Senior Intern",
    "question": "How does a Senior Intern show integrity during mission assignments?",
    "options": [
      "By being punctual and visible",
      "By reporting his own success honestly",
      "By faithfully completing responsibilities, even if unnoticed",
      "By overseeing others’ work"
    ],
    "correctAnswer": "By faithfully completing responsibilities, even if unnoticed"
  },
  {
    "rank": "Senior Intern",
    "question": "Why is spiritual reflection an essential part of the Senior Intern experience?",
    "options": [
      "To avoid repeating mistakes",
      "To increase leadership points",
      "To deepen awareness of God’s hand in their journey",
      "To report back to the chapter secretary"
    ],
    "correctAnswer": "To deepen awareness of God’s hand in their journey"
  },
  {
    "rank": "Senior Intern",
    "question": "When others mock your faith during RA outreach, how should a Senior Intern respond?",
    "options": [
      "Withdraw quietly to avoid conflict",
      "Challenge them with Scripture",
      "Demonstrate Christlike love and remain committed",
      "Complain to the counselor"
    ],
    "correctAnswer": "Demonstrate Christlike love and remain committed"
  },
  {
    "rank": "Senior Intern",
    "question": "What aspect of servant leadership is demonstrated in Galatians 6:2?",
    "options": [
      "Exhortation in speech",
      "Willingness to carry others’ burdens in love",
      "Formal correction of others",
      "Appointing roles for success"
    ],
    "correctAnswer": "Willingness to carry others’ burdens in love"
  },
  {
    "rank": "Senior Intern",
    "question": "Which action best shows the RA motto 'on mission with God' in daily life?",
    "options": [
      "Completing church routines consistently",
      "Sharing the gospel through action and word",
      "Quoting mission verses in school",
      "Wearing the RA uniform to class"
    ],
    "correctAnswer": "Sharing the gospel through action and word"
  },
  {
    "rank": "Senior Intern",
    "question": "What makes leading through example more effective than verbal instruction alone?",
    "options": [
      "It takes less effort",
      "It builds spiritual credibility and earns trust",
      "It fulfills manual expectations",
      "It helps avoid speaking publicly"
    ],
    "correctAnswer": "It builds spiritual credibility and earns trust"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the correct biblical response to jealousy during service work?",
    "options": [
      "Ignore everyone else",
      "Boast in your accomplishments",
      "Give God the glory and serve with sincerity",
      "Ask to be assigned separately"
    ],
    "correctAnswer": "Give God the glory and serve with sincerity"
  },
  {
    "rank": "Senior Intern",
    "question": "What is the most appropriate response to conflict during a mission trip task?",
    "options": [
      "Walk away and report later",
      "Pray, listen, and mediate with peace",
      "Let the leader handle everything",
      "Cancel the activity"
    ],
    "correctAnswer": "Pray, listen, and mediate with peace"
  },
  {
    "rank": "Senior Intern",
    "question": "Which phrase best reflects spiritual maturity in a Senior Intern?",
    "options": [
      "Correcting others immediately",
      "Delegating all tasks",
      "Serving without recognition and remaining joyful",
      "Asking for authority first"
    ],
    "correctAnswer": "Serving without recognition and remaining joyful"
  },
  {
    "rank": "Senior Intern",
    "question": "Why is the Parable of the Good Samaritan essential for Senior Intern training?",
    "options": [
      "It is a story used in quizzes",
      "It describes common RA practices",
      "It models the type of mercy expected of true Christian witnesses",
      "It fits into the Luke memory assignment"
    ],
    "correctAnswer": "It models the type of mercy expected of true Christian witnesses"
  },
  {
    "rank": "Senior Intern",
    "question": "What RA value is tested when a task assigned is difficult or uncomfortable?",
    "options": [
      "Leadership potential",
      "Team spirit",
      "Obedience and sacrifice in service",
      "Personal ambition"
    ],
    "correctAnswer": "Obedience and sacrifice in service"
  },
  {
    "rank": "Senior Intern",
    "question": "When faced with unfair treatment during leadership, what should a Senior Intern prioritize?",
    "options": [
      "Retaliating with equal force",
      "Stepping down immediately",
      "Maintaining spiritual discipline and modeling forgiveness",
      "Requesting a private replacement"
    ],
    "correctAnswer": "Maintaining spiritual discipline and modeling forgiveness"
  },
  {
    "rank": "Senior Intern",
    "question": "What kind of leadership best prepares Senior Interns for future roles in the RA hierarchy?",
    "options": [
      "Strict and rule-based",
      "Publicly dominant",
      "Humble, consistent, and spiritually grounded",
      "Silent and reactive"
    ],
    "correctAnswer": "Humble, consistent, and spiritually grounded"
  },
  {
    "rank": "Senior Intern",
    "question": "Which attribute most aligns with the RA's vision of influencing the world for Christ?",
    "options": [
      "Strength",
      "Status",
      "Faithful witness and active love",
      "Academic success"
    ],
    "correctAnswer": "Faithful witness and active love"
  },
  {
    "rank": "Senior Intern",
    "question": "Why is it important to learn from failure during a service assignment?",
    "options": [
      "It helps avoid future RA roles",
      "It gives you a break from responsibility",
      "It allows spiritual growth and better preparation next time",
      "It helps avoid redoing the task"
    ],
    "correctAnswer": "It allows spiritual growth and better preparation next time"
  },
  {
    "rank": "Senior Intern",
    "question": "When RA service becomes difficult, what mindset should a Senior Intern adopt?",
    "options": [
      "Delegate and exit",
      "Remain faithful and recall the example of Christ",
      "Reschedule it entirely",
      "Push for replacements"
    ],
    "correctAnswer": "Remain faithful and recall the example of Christ"
  },

  
    {
      "rank": "Senior Intern",
      "question": "What does it mean to be 'on mission with God' as emphasized in the RA pledge?",
      "options": [
        "To be available for every church program",
        "To be actively involved in sharing God's love through service and words",
        "To memorize all the RA requirements",
        "To learn the history of the church"
      ],
      "correctAnswer": "To be actively involved in sharing God's love through service and words"
    },
    {
      "rank": "Senior Intern",
      "question": "What spiritual lesson can be drawn when a Senior Intern continues a project after being discouraged?",
      "options": [
        "Consistency attracts recognition",
        "True faith is proven in adversity and quiet endurance",
        "Leadership roles come through effort",
        "Reputation must be protected"
      ],
      "correctAnswer": "True faith is proven in adversity and quiet endurance"
    },
    {
      "rank": "Senior Intern",
      "question": "What does Romans 12:11–13 encourage believers like Senior Interns to do?",
      "options": [
        "Pray often for promotion",
        "Stay quiet and hidden in service",
        "Serve the Lord with zeal, share with others, and practice hospitality",
        "Memorize scripture thoroughly"
      ],
      "correctAnswer": "Serve the Lord with zeal, share with others, and practice hospitality"
    },
    {
      "rank": "Senior Intern",
      "question": "Which of these most reflects Christlike leadership?",
      "options": [
        "Being feared and respected",
        "Having authority and demanding obedience",
        "Serving others willingly with love and humility",
        "Leading large projects with confidence"
      ],
      "correctAnswer": "Serving others willingly with love and humility"
    },
    {
      "rank": "Senior Intern",
      "question": "Why should a Senior Intern reflect deeply on the story of the Good Samaritan?",
      "options": [
        "To learn how to explain it in class",
        "To find motivation for RA tests",
        "To grasp what true neighborly compassion looks like in practice",
        "To impress counselors"
      ],
      "correctAnswer": "To grasp what true neighborly compassion looks like in practice"
    },
    {
      "rank": "Senior Intern",
      "question": "What leadership mistake should a Senior Intern avoid when others disagree with a plan?",
      "options": [
        "Seeking guidance",
        "Listening respectfully",
        "Becoming defensive or dismissive",
        "Revising the idea together"
      ],
      "correctAnswer": "Becoming defensive or dismissive"
    },
    {
      "rank": "Senior Intern",
      "question": "Why are RA activities built around both memorization and action?",
      "options": [
        "To prepare for exams and performances",
        "To balance intellect and effort",
        "To ensure that biblical knowledge is practiced in daily life",
        "To meet manual expectations"
      ],
      "correctAnswer": "To ensure that biblical knowledge is practiced in daily life"
    },
    {
      "rank": "Senior Intern",
      "question": "What is the correct response when a Senior Intern sees unfairness in group task division?",
      "options": [
        "Walk away from the task",
        "Complain publicly to others",
        "Help balance roles while modeling fairness",
        "Remain silent and observe"
      ],
      "correctAnswer": "Help balance roles while modeling fairness"
    },
    {
      "rank": "Senior Intern",
      "question": "How can a Senior Intern strengthen their RA team during a stressful mission event?",
      "options": [
        "Assign extra duties to juniors",
        "Give strict instructions",
        "Pray with them and encourage unity in purpose",
        "Lead from the back silently"
      ],
      "correctAnswer": "Pray with them and encourage unity in purpose"
    },
    {
      "rank": "Senior Intern",
      "question": "Which verse best supports the idea of serving without public attention?",
      "options": [
        "Luke 10:27",
        "John 14:6",
        "Matthew 6:4",
        "Romans 12:2"
      ],
      "correctAnswer": "Matthew 6:4"
    },
    {
      "rank": "Senior Intern",
      "question": "What is one way Senior Interns can apply Luke 2:52 in their lives?",
      "options": [
        "Grow in wisdom, favor with God and man through balance in all areas",
        "Focus only on spiritual things",
        "Ignore worldly concerns completely",
        "Avoid public leadership roles"
      ],
      "correctAnswer": "Grow in wisdom, favor with God and man through balance in all areas"
    },
    {
      "rank": "Senior Intern",
      "question": "What type of character is built through regular, unnoticed service?",
      "options": [
        "Pride",
        "Endurance and genuine humility",
        "Anxiety",
        "Eagerness for praise"
      ],
      "correctAnswer": "Endurance and genuine humility"
    },
    {
      "rank": "Senior Intern",
      "question": "How can Senior Interns support younger RAs without becoming overbearing?",
      "options": [
        "Direct them with firm commands",
        "Allow mistakes without support",
        "Encourage through mentoring, example, and correction in love",
        "Let counselors manage them"
      ],
      "correctAnswer": "Encourage through mentoring, example, and correction in love"
    },
    {
      "rank": "Senior Intern",
      "question": "What does a Senior Intern demonstrate by remaining faithful in service despite being ignored?",
      "options": [
        "Spiritual weakness",
        "Religious anxiety",
        "Character rooted in obedience to God",
        "Desire to impress"
      ],
      "correctAnswer": "Character rooted in obedience to God"
    },
    {
      "rank": "Senior Intern",
      "question": "Why is teamwork important for accomplishing RA service goals?",
      "options": [
        "So everyone gets promoted",
        "Because many voices are needed in every task",
        "Because it reflects the body of Christ working together in unity",
        "Because no one can fail alone"
      ],
      "correctAnswer": "Because it reflects the body of Christ working together in unity"
    },
    {
      "rank": "Senior Intern",
      "question": "What is the most biblical reason to avoid doing service just for attention?",
      "options": [
        "Attention fades quickly",
        "God rewards what is done sincerely from the heart",
        "The chapter may not promote you",
        "Friends might gossip"
      ],
      "correctAnswer": "God rewards what is done sincerely from the heart"
    },
    {
      "rank": "Senior Intern",
      "question": "What is one way a Senior Intern can be a strong influence in their local community?",
      "options": [
        "Organize regular games",
        "Speak only in church",
        "Serve the needy and represent Christ with consistency",
        "Focus on youth-only events"
      ],
      "correctAnswer": "Serve the needy and represent Christ with consistency"
    },
    {
      "rank": "Senior Intern",
      "question": "How does forgiveness enhance leadership growth for Senior Interns?",
      "options": [
        "It avoids unnecessary apologies",
        "It prevents discipline by the counselor",
        "It helps maintain unity and mirrors the character of Christ",
        "It guarantees future positions"
      ],
      "correctAnswer": "It helps maintain unity and mirrors the character of Christ"
    },
    {
      "rank": "Senior Intern",
      "question": "What should be the Senior Intern's main motivation for serving others?",
      "options": [
        "To get promoted to Envoy",
        "To receive applause from members",
        "To obey Christ and reflect His love to others",
        "To compete for leadership roles"
      ],
      "correctAnswer": "To obey Christ and reflect His love to others"
    },
    {
      "rank": "Senior Intern",
      "question": "What best defines a successful RA project?",
      "options": [
        "Finishing on time and under budget",
        "Getting approval from the pastor",
        "Bringing spiritual growth, unity, and gospel impact",
        "Becoming an annual tradition"
      ],
      "correctAnswer": "Bringing spiritual growth, unity, and gospel impact"
    }
  
  
  

      ]
      
    
    
  




mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log("Questions seeded");
  process.exit();
});
