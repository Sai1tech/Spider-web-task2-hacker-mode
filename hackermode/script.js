var marks=0;
var i=0;
var qn = new Array();
const choices = Array.from(document.querySelectorAll(".choice"));
const qnnumber = Array.from(document.querySelectorAll(".qnnumber"));
var answered = [1,1,1,1,1,1,1,1,1,1,1,1];
var selectedchoice = new Array();
window.onload = document.getElementById('submit').style.display = "none";
window.onload = document.querySelector('.resultcontainer').style.display = "none";
window.onload = document.querySelector('.quiz').style.display = "none";
window.onload = document.querySelector('body').classList.add('bgcolor');
qn[0]={
	q: "How long does the novel coronavirus survive outside the body?",
	a: "A week in the air and on surfaces",
	b: "Several hours to days",           // (ANSWER)
	c: "Up to a two and a half weeks",
	d: "None of the Above",
	ans: 2,
}

qn[1]={
	q: "What's more important for preventing infection?",
	a: "Frequent hand-washing",   // (ANSWER)
	b: "Wearing a face mask",
	c: "Exercising regularly",
	d: "Eating fast foods",
	ans: 1,
}

qn[2]={
	q: "What precentage of people confirmed to have Covid-19 develop mild or moderate symptoms?",
	a: "20%",
	b: "40%",
	c: "80%",  // (ANSWER)
	d: "100%",
	ans: 3,
}

qn[3]={
	q: "What a fomite?",
	a: "A hospital-grade disinfectant",
	b: "An immunity-boosting supplement",
	c: "A disease carrier",
	d: "A contaminated object or surface",   // (ANSWER)
	ans: 4,
}

qn[4]={
	q: "What's safe distance to stay apart from someone who's sick?",
	a: "At least 1 foot (30 cm)",
	b: "At least 3 feet (1 meter)", // (ANSWER)
	c: "At least 4 feet (1.2 meter)",
	d: "None Of The Above",
	ans: 2,
}

qn[5]={
	q: "Markets reacted to the outbreak with a huge increase in volatility. What was the record set in March by the sell-off in U.S. stocks?",
	a: "Fatest-ever 20% drop",    // (ANSWER)
	b: "Record low level",
	c: "Longest market closure",
	d: "Most delistings",
	ans: 1,
}

qn[6]={
	q: "How much money have the world's governments and central banks pledged in stimulus to counter the economic shock of the virus?",
	a: "$1 trillion",
	b: "Almost $2 trillion",
	c: "At least $3 trillion",    // (ANSWER)
	d: "$10 trillion",
	ans: 3,
}

qn[7]={
	q: "Which of the following statement is/are correct about Favipiravir?",
	a: "Favipiravir is an antiviral COVID-19 drug",
    b: "Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir",
    c: "It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.",
    d: "All the above are correct",   // (ANSWER)
    ans: 4,
}

qn[8]={
	q: "Who's at highest risk of developing severe Covid-19 disease?", 
	a: "Children",
	b: "People over 60 years of age",    // (ANSWER)
	c: "Pregnant women",
	d: "All the above",
	ans: 2,
}

qn[9]={
	q: "What does Covid-19 stand for?",
	a: "It's a term for coronavirus disease 19, because it's the 19th strain of coronavirus discovered",
	b: "It's a term that stands for coronavirus disease 2019, the year it was first identified",   // (ANSWER)
	c: "It takes 19 days to notice the symptoms of Covid-19",
	d: "The diseased person can infect only 19 healthy people",
	ans: 2,
}

qn[10]={
	q: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
	a: "More than 50",
	b: "More than 200",   // (ANSWER)
	c: "More than 150",
	d: "More than 100",
	ans: 2,
}

qn[11]={
	q: "There are currently vaccines for the following coronaviruses:",
	a: "SARS",
	b: "MERS",
	c: "SARS and MERS",
	d: "None of the above",   // (ANSWER)
	ans: 4,
}

// ******************END OF QUESTIONS AND OPTIONS WITH ANSWERS***************************

qn.sort(function(a, b){return 0.5 - Math.random()});
var nameofplayer;
var date;

document.querySelector('.start').addEventListener("click", ()=>{
	clock();
	nameofplayer = document.getElementById("name").value;
	nameofplayer = nameofplayer.toUpperCase();
	document.querySelector('.quiz').style.display = "initial";
	document.querySelector('.startcontainer').style.display = "none";
	document.querySelector('body').classList.remove('bgcolor');
	date = new Date();
})

window.onload = printquestion(0);
// window.onload = function() {alert("Options can be selected only once!")};

function printquestion(n) {
	var j = n+1;
	if (n===0)
		document.querySelector('#prev').style.display="none";
	document.querySelector('.questn').textContent= j + ". " + qn[n].q;
	document.querySelector('#a').textContent=qn[n].a;
	document.querySelector('#b').textContent=qn[n].b;
	document.querySelector('#c').textContent=qn[n].c;
	document.querySelector('#d').textContent=qn[n].d;
}

function next() {
		i++;
		document.querySelector('#prev').style.display="initial";
		if(i===11){
			document.querySelector('#next').style.display="none";
			document.querySelector('#submit').style.display="initial";
		}
		printquestion(i);
	}

function prev()  {
		i--;

		if(i===0)
		{
			document.querySelector('#prev').style.display="none";
			printquestion(i);
		}
		else
			printquestion(i);

		if(i===10)
		{
			document.querySelector('#next').style.display="initial";
			document.getElementById('submit').style.display = "none";
		}

	}

qnnumber.forEach(number => {
	number.addEventListener('click', e=>{
		const selectedqnumber = e.target;
		const n = selectedqnumber.dataset['question']-1;

		i=n;
		if(n===0)
			document.querySelector('#prev').style.display="none";
		if(n>0)
			document.querySelector('#prev').style.display="initial";
		if(n===11)
		{
			document.querySelector('#next').style.display="none";
			document.querySelector('#submit').style.display="initial";
		}
		if(n<11)
		{
			document.querySelector('#next').style.display="initial";
			document.querySelector('#submit').style.display="none";
		}
		printquestion(n);
	})
})

let classtoapply;
var crct = 0;
var wrng = 0;

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(answered[i]===0) 
			return;
		answered[i]--;

		const selectedchoice = e.target;
		const selectedanswer = selectedchoice.dataset['number'];

		classtoapply = selectedanswer == qn[i].ans ? 'correct' : 'wrong';

		selectedchoice.parentElement.classList.add(classtoapply);

		if(classtoapply=='correct')
		{
			qnnumber[i].parentElement.style["background-color"] = "lime";
			marks++;
			crct++;
		}
		else
		{
			qnnumber[i].parentElement.style["background-color"] = "red";
			qnnumber[i].parentElement.style.color = "white";
			wrng++;
		}

		setTimeout(() => {
			selectedchoice.parentElement.classList.remove(classtoapply);
		},1000);

		window.selectedchoice = selectedchoice[i];
	})
})

var m = 9;
var s = 60;
var ms = 0;
var ts = 0;
var tm = 0;
var watch;
var clockelement = document.querySelector('.timer');

function clock() {
	if(!watch)
	watch = setInterval(run,10);
}

function run() {
	clockelement.textContent = (m < 10 ? "0" + m : m) + " min : " + (s < 10 ? "0" + s : s) + " sec";
	ms++;
	if(ms==100)
	{
		ms = 0;
		s--;
	}

	if(s==0)
	{
		s=60;
		m--;
	}

	if(m==0)
		undoresultcontainer();
}

function result() {
	document.querySelector('.qcontainer').style.display = "none";
	document.querySelector('footer').style.display = "none";
	document.querySelector('body').style["background-color"] = "powderblue";
	document.querySelector('.sidenav').style.display = "none";
	document.querySelector('#end').innerHTML = "QUIZ RESULT";
	document.querySelector('#resulttext').innerHTML = "HI " + nameofplayer + ", YOU HAD SCORED " + "'" + marks + "'" + " POINTS <em>(Time Taken : " + tm + " min " + ts + " sec)</em>";

}

function nostorage() {
	alert("Sorry, No Web Storage Support...")
}

var highscorername;

var highscore = 0;

function highscoredetails() {
	var time = tm + " min " + ts + " sec";

	if(typeof(Storage)!=="undefined")
	{
		if(marks>highscore)
		{
			highscorername = nameofplayer;
			highscore = marks;
			var d = date.getDate();
			var month = date.getMonth()+1;
			var yr = date.getFullYear();
			var hr = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var hightime = (hr < 10 ? "0" + hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
			var highdate = d + "/" + month + "/" + yr;
			localStorage.setItem("highscorername",highscorername);
			localStorage.setItem("highscore", highscore);
			localStorage.setItem("datehigh",highdate);
			localStorage.setItem("hightime", hightime);
			localStorage.setItem("timetakenhigh",time);
		}
	} else {
		nostorage();
	}

	document.querySelector('.playerdetails').innerHTML = "'" + localStorage.getItem("highscorername") + "'" + " had scored " + localStorage.getItem("highscore") + " points within " + localStorage.getItem("timetakenhigh") + " on " + localStorage.getItem("datehigh") + " at " + localStorage.getItem("hightime") + "(IST)";
	
	
}

function undoresultcontainer() {
	document.querySelector('.resultcontainer').style.display = "initial";
	clearInterval(watch);
	watch = false;
	tm = 9-m;
	ts = 60-s;

	document.querySelector('#resulttext').style.fontFamily = "Noto Serif, serif";
	document.querySelector('.playerdetails').style.fontFamily = "Noto Serif, serif";

	if(m==9 && s>30)
		marks*=100;
	else if(m==9 && s<30)
		marks*=90;
	else if(m==8 && s>30)
		marks*=85;
	else if(m==8 && s<30)
		marks*=80;
	else if(m==7 && s>30)
		marks*=75;
	else if(m==7 && s<30)
		marks*=70;
	else if(m==6 && s>30)
		marks*=65;
	else if(m==6 && s<30)
		marks*=60;
	else
		marks*=50;

	if(crct >= 9&&wrng<=3)
		marks+=100;
	else if(crct>5&&wrng<=5)
		marks+=50;
	result();
	highscoredetails();
}

document.getElementById('submit').addEventListener('click', undoresultcontainer);