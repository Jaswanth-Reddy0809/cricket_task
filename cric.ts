class game{
    Teams:Array<Team>=[];
    team_name:String;
    Winner_team:number;
    scores_teams:Array<number>=[];
    constructor()
    {
        for(let i=1;i<=2;i++)
        {
            let a=new Team(i)
            this.Teams.push(a)
            this.team_name="Team"+String(i)
            this.scores_teams.push(a.Team_score)

        }
        let a=Math.max.apply(Math, this.scores_teams)
        this.Winner_team=this.scores_teams.indexOf(Math.max.apply(Math, this.scores_teams))+1
        

    }

}
class Team{
    Players:Array<players>=[];
    Team_number:number;
    Team_score:number=0;
    Highscore:number=0;
    high_scorer:number=0;
    player_scores:Array<number>=[]
    constructor(id:number)
    {
        this.Team_number=id;
        for(let i=1;i<=10;i++)
        {
            let a=new players(i)
            this.Players.push(a)
            this.Team_score=this.Team_score+a.score
            this.player_scores.push(a.score)
        }
        this.high_scorer=this.player_scores.indexOf(Math.max.apply(Math, this.player_scores))
        this.Highscore=Math.max.apply(Math, this.player_scores)


        
    }
}
class players{
    name:String;
    score:number=0;
    id:number;
    balls:number=0;
    ballscore:Array<number>=[];
    runtype:string
    constructor(id:number)
    {

    
        this.id=id;
        this.name="player"+String(id)
        for(let i=1;i<=6;i++)
        {
    let run=Math.floor(Math.random()*7);
    if (run==0)    
    { this.ballscore.push(run);
        this.balls=this.balls+1
        break;
    }
    else
    {
    this.ballscore.push(run);
    this.score=this.score+run;
    this.balls=this.balls+1
    }
}

    


}
}

var title=document.createElement("div")
title.setAttribute("class","container")
title.innerHTML="cricket10"
title.style.position="relative"
title.style.left="600px"

var row=document.createElement("div")
row.setAttribute("class","row")
row.style.position="relative";
row.style.left="200px"
var col1=document.createElement("div")
col1.setAttribute("class","col-lg-4")
col1.setAttribute("padding","100px")
var score1=document.createElement("div")
score1.innerHTML="score"
col1.innerHTML="team1"
col1.append(score1)
var bt=document.createElement("button")
bt.setAttribute("class","btn btn-primary")
bt.type="button"
bt.innerHTML="hit"
col1.append(bt)
var tab1=document.createElement("table")
tab1.style.border="2px solid black"
var rowtab=document.createElement("tr")
var coltab=document.createElement("td")
var headtab1=document.createElement("th")
headtab1.style.border="2px solid black"
var headtab2=document.createElement("th")
headtab2.style.border="2px solid black"
headtab1.innerHTML="TEAM 1"
tab1.append(headtab1)
for(let i=1;i<=6;i++)
{   var headtab=document.createElement("th")
headtab.style.border="2px solid black"
    headtab.setAttribute("id","headtab"+String(i))
    headtab.innerHTML="ball"+String(i)
    tab1.append(headtab)
}
headtab2.innerHTML="TOTAL"
tab1.append(headtab2)
for(let i=1;i<=10;i++)
{
    var tr=document.createElement("tr")
    tr.style.border="2px solid black"
    tr.setAttribute("id","tr"+String(i))
    var player=document.createElement("td")
    player.setAttribute("class","player"+String(i))
    player.innerHTML="player"+String(i)
    tr.append(player)
    for(let j=1;j<=6;j++)
    {
        var td=document.createElement("td")
        td.style.border="2px solid black"
        td.setAttribute("id","td"+String(i)+String(j))
        tr.append(td)


    }
    var total=document.createElement("td")
    total.setAttribute("id","total"+String(i))
    tr.append(total)


    tab1.append(tr)
}

col1.append(tab1)





var col2=document.createElement("div")
col2.setAttribute("class","col-lg-4")
col2.setAttribute("padding","100px")
col2.innerHTML="TIMER"
var time=document.createElement("h2")
time.innerHTML="60"
col2.append(time)

var b=document.createElement("button")
b.setAttribute("id","myid")
b.setAttribute("class","btn btn-primary")
b.type="button"
b.innerHTML="Generate Result"
var a=new game()

b.addEventListener("click",() => {
    console.log(a)
})
col2.append(b)









var col3=document.createElement("div")
col3.setAttribute("class","col-lg-4")
col3.setAttribute("padding","100px")
col3.innerHTML="Team2"
var score2=document.createElement("div")
score2.innerHTML="score"
col3.append(score2)
var bt2=document.createElement("button")
bt2.setAttribute("class","btn btn-primary")
bt2.type="button"
bt2.innerHTML="hit"
col3.append(bt2)

var tab2=document.createElement("table")
tab2.style.border="2px solid black"
var rowtab2=document.createElement("tr")
var coltab2=document.createElement("td")
var headtab1_2=document.createElement("th")
headtab1_2.style.border="2px solid black"
var headtab2_2=document.createElement("th")
headtab2_2.style.border="2px solid black"
headtab1_2.innerHTML="TEAM 2"
tab2.append(headtab1_2)
for(let i=1;i<=6;i++)
{   var headtab_2=document.createElement("th")
headtab_2.style.border="2px solid black"
    headtab_2.setAttribute("id","headtab2"+String(i))
    headtab_2.innerHTML="ball"+String(i)
    tab2.append(headtab_2)
}
headtab2_2.innerHTML="TOTAL"
tab2.append(headtab2_2)
for(let i=1;i<=10;i++)
{
    var tr2=document.createElement("tr")
    tr2.style.border="2px solid black"
    tr2.setAttribute("id","tr2"+String(i))
    var player2=document.createElement("td")
    player2.setAttribute("class","2player"+String(i))
    player2.innerHTML="player"+String(i)
    tr2.append(player2)
    for(let j=1;j<=6;j++)
    {
        var td2=document.createElement("td")
        td2.style.border="2px solid black"
        td2.setAttribute("id","2td"+String(i)+String(j))
        tr2.append(td2)


    }
    var total2=document.createElement("td")
    tr2.append(total2)


    tab2.append(tr2)
}

col3.append(tab2)

bt.addEventListener("click",() =>
{ 
    for(let i=1;i<=10;i++)
    {
        for(let j=1;j<=6;j++)
        {

        
            if (typeof(a.Teams[0].Players[i-1].ballscore[j-1])=="undefined")
            {
                setTimeout(function(){
                    document.getElementById("td"+String(i)+String(j)).innerHTML=""

                },1000)
                
            }
            else{
                setTimeout(function (){
                    document.getElementById("td"+String(i)+String(j)).innerHTML=String(a.Teams[0].Players[i-1].ballscore[j-1])
                },1000)
                
            }
        }
        document.getElementById("total"+String(i)).innerHTML=String(a.Teams[0].player_scores[i-1])
    }
        
        

        
       
})


row.append(col1)
row.append(col2)
row.append(col3)
document.body.append(title)
document.body.append(row)
