'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("a")

const TiniesName =["Amy","Basil","Clara","Desmond","Ernest","Fanny","George","Hector","Ida","James","Kate","Leo","Maud","Naville","Olive","Prue","Quentin","Roda","Susan","Titus","Una","Victor","Winnie","Xerxes","Yrick","Zira"]


//const TiniesCod = {0:"階段おちた",1:"クマにやられた",2:"やつれ衰え",3:"そりから投げられ",4:"モモで窒息",5:"ヒルが吸血",6:"絨毯のしたじき",7:"ごろつきの餌食",8:"溺れて不憫",9:"アルカリ誤飲",10:"まさかりぐさり",11:"画鋲をごくり",12:"藻屑と消えて",13:"望みも失せて",14:"錐がつきぬけ",15:"喧嘩のまきぞえ",16:"落ちたのは沼",17:"哀れ火だるま",18:"引きつり永眠",19:"ドカン、粉みじん",20:"下水に落下し",21:"線路で圧死",22:"寒い寒い氷の中",24:"痛い痛いネズミの歯は",25:"脳天割られ",26:"ジンを深酒"}


function Quiz(){
    const TiniesCod = {0:"階段おちた",1:"クマにやられた",2:"やつれ衰え",3:"そりから投げられ",4:"モモで窒息",5:"ヒルが吸血",6:"絨毯のしたじき",7:"ごろつきの餌食",8:"溺れて不憫",9:"アルカリ誤飲",10:"まさかりぐさり",11:"画鋲をごくり",12:"藻屑と消えて",13:"望みも失せて",14:"錐がつきぬけ",15:"喧嘩のまきぞえ",16:"落ちたのは沼",17:"哀れ火だるま",18:"引きつり永眠",19:"ドカン、粉みじん",20:"下水に落下し",21:"線路で圧死",22:"寒い寒い氷の中",23:"痛い痛いネズミの歯は",24:"脳天割られ",25:"ジンを深酒"
    };
    document.getElementById("button").addEventListener("click",function(){
        let cod =Object.values(TiniesCod);
        let randomcod = cod[Math.floor(Math.random()*26)];
        let resulttext = document.getElementById("rectangle").innerText = randomcod;
        resulttext.classList.toggle("text")
           
    })
}
Quiz()

function result(){
    const TiniesName = ["Amy","Basil","Clara","Desmond","Ernest","Fanny","George","Hector","Ida","James","Kate","Leo","Maud","Naville","Olive","Prue","Quentin","Roda","Susan","Titus","Una","Victor","Winnie","Xerxes","Yrick","Zira"]

    const TiniesNam={"Amy":"階段おちた",
                     "Basil":"クマにやられた",
                     "Clara":"やつれ衰え",
                     "Desmond":"そりから投げられ",
                     "Ernest":"モモで窒息",
                     "Fanny":"ヒルが吸血",
                     "George":"絨毯のしたじき",
                     "Hector":"ごろつきの餌食",
                     "Ida":"溺れて不憫",
                     "James":"アルカリ誤飲",
                     "Kate":"まさかりぐさり",
                     "Leo":"画鋲をごくり",
                     "Maud":"藻屑と消えて",
                     "Naville":"望みも失せて",
                     "Olive":"錐がつきぬけ",
                     "Prue":"喧嘩のまきぞえ",
                     "Quentin":"落ちたのは沼",
                     "Roda":"哀れ火だるま",
                     "Susan":"引きつり永眠",
                     "Titus":"ドカン、粉みじん",
                     "Una":"下水に落下し",
                     "Victor":"線路で圧死",
                     "Winnie":"寒い寒い氷の中",
                     "Xerxes":"痛い痛いネズミの歯は",
                     "Yrick":"脳天割られ",
                     "Zira":"ジンを深酒"}
}



 
