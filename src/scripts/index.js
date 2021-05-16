import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mobile.css';

// data restaurant
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData);
    let datas = jsonData['restaurants'];
    let dataList = '';
    datas.forEach(function(data){
        dataList +=`
        <div class="card">
            <img class="img-fluid" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}" />
            <div>${data['city']}</div>
            <a href="#">${data['rating']}</a>
            <div class="text-primary">${data['description'].slice(0,150)}...</div>
        </div>
        `
        
    }) 
    document.querySelector('#myResto').innerHTML = dataList;
});

console.log('Hello Coders! :)');
