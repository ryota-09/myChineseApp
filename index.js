const json_data = [
    {"ja":"こんにちは","ch":"你好"}
];

const Jindex =JSON.stringify(json_data);

const Sindex = localStorage.setItem('json_data',Jindex);


const Gindex = localStorage.getItem('json_data');
const lang_ja = JSON.parse(Gindex);


//const new_word = {"ja":"ありがとう","ch":"谢谢"};
//json_data.push(new_word);


/*-----------------------------------------------*/

let add_ja = document.getElementById('add_ja');
let add_ch = document.getElementById('add_ch');
let save = document.getElementById('save');
let display_ja = document.getElementById('display_ja');
let display_ch = document.getElementById('display_ch');


function saveJson_data(){
	let save_json = JSON.stringify(json_data);    //「学習データ（配列）」を「JSON」へ変換
	localStorage.setItem('learning_data', save_json);   //「ローカルストレージ」へセーブ
};



save.addEventListener('click',() =>{
    var new_word = {"ja":`${add_ja.value}`,"ch":`${add_ch.value}`};

    json_data.push(new_word);
    display_ja.textContent = JSON.parse(JSON.stringify(json_data[-1+json_data.length].ja));
    display_ch.textContent = JSON.parse(JSON.stringify(json_data[-1+json_data.length].ch));

    console.log(json_data);

    saveJson_data();

});