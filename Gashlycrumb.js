 'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function Quiz(){
    const TiniesCod = {0:"階段おちた",1:"クマにやられた",2:"やつれ衰え",3:"そりから投げられ",4:"モモで窒息",5:"ヒルが吸血",6:"絨毯のしたじき",7:"ごろつきの餌食",8:"溺れて不憫",9:"アルカリ誤飲",10:"まさかりぐさり",11:"画鋲をごくり",12:"藻屑と消えて",13:"望みも失せて",14:"錐がつきぬけ",15:"喧嘩のまきぞえ",16:"落ちたのは沼",17:"哀れ火だるま",18:"引きつり永眠",19:"ドカン、粉みじん",20:"下水に落下し",21:"線路で圧死",22:"寒い寒い氷の中",23:"痛い痛いネズミの歯は",24:"脳天割られ",25:"ジンを深酒"
    };
    document.getElementById("button").addEventListener("click",function(){
        let cod =Object.values(TiniesCod);
        let randomcod = cod[Math.floor(Math.random()*26)];
        let resulttext = document.getElementById("rectangle").innerText = randomcod;
        resulttext.classList.toggle("text")
        console.log(randomcod)
           
    })
}
Quiz()

function resultA(name){
    document.getElementById(name).addEventListener("click",function(){
        const resultBox = document.getElementById("rectangle1");
        const TiniesCod = ["階段おちた","クマにやられた","やつれ衰え","そりから投げられ","モモで窒息","ヒルが吸血","絨毯のしたじき","ごろつきの餌食","溺れて不憫","アルカリ誤飲","まさかりぐさり","画鋲をごくり","藻屑と消えて","望みも失せて","錐がつきぬけ","喧嘩のまきぞえ","落ちたのは沼","哀れ火だるま","引きつり永眠","ドカン、粉みじん","下水に落下し","線路で圧死","寒い寒い氷の中","痛い痛いネズミの歯は","脳天割られ","ジンを深酒"]
        if(name === "Amy"){
            resultBox.textContent = "回答:"+TiniesCod[0]
        }else if(name === "Basil"){
            resultBox.textContent = "回答:"+TiniesCod[1]
        }else if(name === "Clara"){
            resultBox.textContent = "回答:"+TiniesCod[2]
        }else if(name === "Desmond"){
            resultBox.textContent = "回答:"+TiniesCod[3]
        }else if(name === "Ernest"){
            resultBox.textContent = "回答:"+TiniesCod[4]
        }else if(name === "Fanny"){
            resultBox.textContent = "回答:"+TiniesCod[5]
        }else if(name === "George"){
            resultBox.textContent = "回答:"+TiniesCod[6]
        }else if(name === "Hector"){
            resultBox.textContent = "回答:"+TiniesCod[7]
        }else if(name === "Ida"){
            resultBox.textContent = "回答:"+TiniesCod[8]
        }else if(name === "James"){
            resultBox.textContent = "回答:"+TiniesCod[9]
        }else if(name === "Kate"){
            resultBox.textContent = "回答:"+TiniesCod[10]
        }else if(name === "Leo"){
            resultBox.textContent = "回答:"+TiniesCod[11]
        }else if(name === "Maud"){
            resultBox.textContent = "回答:"+TiniesCod[12]
        }else if(name === "Naville"){
            resultBox.textContent = "回答:"+TiniesCod[13]
        }else if(name === "Olive"){
            resultBox.textContent = "回答:"+TiniesCod[14]
        }else if(name === "Prue"){
            resultBox.textContent = "回答:"+TiniesCod[15]
        }else if(name === "Quentin"){
            resultBox.textContent = "回答:"+TiniesCod[16]
        }else if(name === "Roda"){
            resultBox.textContent = "回答:"+TiniesCod[17]
        }else if(name === "Susan"){
            resultBox.textContent = "回答:"+TiniesCod[18]
        }else if(name === "Titus"){
            resultBox.textContent = "回答:"+TiniesCod[19]
        }else if(name === "Una"){
            resultBox.textContent = "回答:"+TiniesCod[20]
        }else if(name === "Victor"){
            resultBox.textContent = "回答:"+TiniesCod[21]
        }else if(name === "Winnie"){
            resultBox.textContent = "回答:"+TiniesCod[22]
        }else if(name === "Xerxes"){
            resultBox.textContent = "回答:"+TiniesCod[23]
        }else if(name === "Yrick"){ 
            resultBox.textContent = "回答:"+TiniesCod[24]
        }else if(name === "Zira"){
            resultBox.textContent = "回答:"+TiniesCod[25]
        }else if(name === "clear"){
            resultBox.textContent = ""
        }
    })
}
resultA("Amy")
resultA("Basil")
resultA("Clara")
resultA("Desmond")
resultA("Ernest")
resultA("Fanny")
resultA("George")
resultA("Hector")
resultA("Ida")
resultA("James")
resultA("Kate") 
resultA("Leo")
resultA("Maud")
resultA("Naville")
resultA("Olive")
resultA("Prue")
resultA("Quentin") 
resultA("Roda")  
resultA("Susan")
resultA("Titus")
resultA("Una")
resultA("Victor")
resultA("Winnie")
resultA("Xerxes")
resultA("Yrick")
resultA("Zira")
resultA("clear")
