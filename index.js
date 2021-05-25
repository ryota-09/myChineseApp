/*const json_data = [
    {"ja":"こんにちは","ch":"你好"}
];

const learning_data = [];

const Jindex =JSON.stringify(json_data);

const Sindex = localStorage.setItem('json_data',Jindex);


const Gindex = localStorage.getItem('json_data');
const lang_ja = JSON.parse(Gindex);


//const new_word = {"ja":"ありがとう","ch":"谢谢"};
//json_data.push(new_word);


-----------------------------------------------

let add_ja = document.getElementById('add_ja');
let add_ch = document.getElementById('add_ch');
let save = document.getElementById('save');
let display_ja = document.getElementById('display_ja');
let display_ch = document.getElementById('display_ch');


var new_word =　{"ja":`${add_ja.value}`,"ch":`${add_ch.value}`};
let g_learning_data = [];



function saveJson_data(){
    let save_json = JSON.stringify(g_learning_data);    //「学習データ（配列）」を「JSON」へ変換
	localStorage.setItem('learning_data', save_json);   //「ローカルストレージ」へセーブ
};


function createId(learning_data, data_id){
    console.log(data_id);
}


save.addEventListener('click',() =>{
    g_learning_data;
    var new_word = {"ja":`${add_ja.value}`,"ch":`${add_ch.value}`};

    g_learning_data.push(new_word);
    //display_ja.textContent = JSON.parse(JSON.stringify(json_data[-1+json_data.length].ja));
    //display_ch.textContent = JSON.parse(JSON.stringify(json_data[-1+json_data.length].ch));

    saveJson_data(g_learning_data);
    console.log(learning_data);
    createId();

});*/

let g_learning_data = [{"ja":"こんにちは","ch":"你好"}];





function execRegist(){
    clearErrors();  //エラーデータ表示をクリア
    let contents = getElmId('contents').value;  //「問題」
    let select_1 = getElmId('select_1').value;  //「選択肢１」
    let select_2 = getElmId('select_2').value;  //「選択肢２」
    let select_3 = getElmId('select_3').value;  //「選択肢３」
    let select_4 = getElmId('select_4').value;  //「選択肢４」
    let answer = getElmId('answer').value;      //「正解」

    //「配列データ」を作成
    let regist_data = {
        'contents': contents,
        'select_1': select_1,
        'select_2': select_2,
        'select_3': select_3,
        'select_4': select_4,
        'answer': answer,
        'challenge_count': 0,
        'success_count': 0
    } 

    let chk_result = checkRegistData(regist_data);  //「登録」データのチェック処理

    if(chk_result === false){
        g_learning_data.push(regist_data);
        saveLearningData();  //「学習データ」をセーブ
        dispLearningData();  //「学習データ」を表示

        getElmId('contents').value = '';  //「問題」
        getElmId('select_1').value = '';  //「選択肢１」
        getElmId('select_2').value = '';  //「選択肢２」
        getElmId('select_3').value = '';  //「選択肢３」
        getElmId('select_4').value = '';  //「選択肢４」
        getElmId('answer').value = '1';   //「正解」
        alert('クイズデータを登録しました。');
    }
}

function dispLearningData(){
    var html = "";   
    var data_id = 0;
    if(g_learning_data.length > 0){
        g_learning_data.forEach(data => {
            html += createTableData(data,data_id);
            data_id++;
        });
    }

    let table_header_html = "<caption>登録データ(" + g_learning_data.length + "件)</caption><tr><th>問題</th><th>選択肢</th><th>正解番号</th><th>正解数/問題チャレンジ回数</th><th>編集</th><th>削除</th>"
    document.getElementById('learning_data').innerHTML = table_header_html + html;
}

function createTableData(learning_data, data_id){
    
    let html = "<tr>";
    html += "<td>" + learning_data['contents']; + "</td>";
    html += "<td>";
    html += "<ol>";
    html += "<li>"+learning_data['select_1']+"</li>";
    html += "<li>"+learning_data['select_2']+"</li>";
    html += "<li>"+learning_data['select_3']+"</li>"; 
    html += "<li>"+learning_data['select_4']+"</li>";
    html += "</ol>";
    html += "</td>";
    html += "<td>" + learning_data['answer']; + "</td>";
    html += "<td><button class='edit_btn' data-id='" + data_id +"'>編集</button></td>";
    html += "<td><button class='delete_btn' data-id='" + data_id +"'>削除</button></td>";
    html += "</tr>";
    return html;
}

dispLearningData();
createTableData();