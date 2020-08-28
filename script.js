var marks=0;
var i=0;
var qn = new Array();
const choices = Array.from(document.querySelectorAll(".choice"));
var acceptingAnswers=true;
var answered = [1,1,1,1,1,1,1,1,1,1,1,1];
var selectedchoice = new Array();
window.onload = document.getElementById('submit').style.display = "none";
window.onload = document.querySelector('.resultcontainer').style.display = "none";

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
	d: "Eating tasty food",
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
	b: "A contaminated object or surface",   // (ANSWER)
	c: "A disease carrier",
	d: "An immunity-boosting supplement",
	ans: 2,
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
	b: "More than 100",
	c: "More than 150",
	d: "More than 200",   // (ANSWER)
	ans: 4,
}

qn[11]={
	q: "There are currently vaccines for the following coronaviruses:",
	a: "SARS",
	b: "MERS",
	c: "SARS and MERS",
	d: "None of the above",   // (ANSWER)
	ans: 4,
}

qn[12]={
	q: "What other viruses belong the coronavirus family?",
	a: "SARS and influenza",
	b: "SARS and MERS",   // (ANSWER)
	c: "SARS and HIV",
	d: "None Of The Above",
	ans: 2,
}
// ******************END OF QUESTIONS AND OPTIONS WITH ANSWERS***************************

window.onload = printquestion(0);
window.onload = function() {alert("Options can be selected only once!")};

function printquestion(n) {
	n=i;
	var j = i+1;
	if (i===0)
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

		// if(answered[i]===0)
		// {

		// }
		// else
		// {
		// 	selectedchoice[i].parentElement.classList.remove(classtoapply);
		// }
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

let classtoapply = new Array(11);

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(answered[i]===0) 
			return;

		answered[i]--;

		const selectedchoice = e.target;
		const selectedanswer = selectedchoice.dataset['number'];

		classtoapply[i] = selectedanswer == qn[i].ans ? 'correct' : 'wrong';

		if (classtoapply[i]==='correct')
		{
			marks++;
		}

		selectedchoice.parentElement.classList.add(classtoapply[i]);

		setTimeout(() => {
			selectedchoice.parentElement.classList.remove(classtoapply[i]);
		},1500);

		window.selectedchoice = selectedchoice[i];
	})
})

function result() {
	document.querySelector('.qcontainer').style.display = "none";
	document.querySelector('footer').style.display = "none";
	document.querySelector('body').style["background-color"] = "powderblue";
	document.querySelector('#resulttext').style.fontFamily = "Balsamiq Sans, cursive";
	document.querySelector('h1').textContent = "QUIZ RESULT";
	document.querySelector('#resulttext').innerHTML = "YOUR SCORE IS " + "'" + marks + "'";
}

function undoresultcontainer() {
	document.querySelector('.resultcontainer').style.display = "initial";
	result();
}

document.getElementById('submit').addEventListener('click', undoresultcontainer);