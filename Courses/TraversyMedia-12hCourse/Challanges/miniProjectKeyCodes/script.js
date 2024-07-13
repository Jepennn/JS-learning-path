
// /*Hear are you gone write js code to pressent i key code of 
//   the key you press on the screen*/

//   //Method 1
//   window.addEventListener('keydown', (e) => {
//     console.log(e);
  
//     const keyCode = document.querySelector('.key-code');
//     const key = document.querySelector('.key');
//     const code = document.querySelector('.code');

//     const insert = document.getElementById('insert');

//     insert.innerHTML =`
//         <div class="key">
//             <small>e.key</small>
//             ${e.key === ' ' ? 'Space' : e.key}
//         </div>
//         <div class="key">
//             <small>e.keyCode</small>
//             ${e.keyCode}
//         </div>
//         <div class="key">
//             <small>e.code</small>
//             ${e.code}
//         </div>
//     </div>`;
// });

  //Method 2

    
  function keyPressed(e) {

    const allValues = {
        "e.key": e.key === " " ? "space" : e.key,
        "e.keyCode": e.keyCode,
        "e.code": e.code,
    }

    const insert = document.getElementById('insert');
    insert.innerHTML = "";

    for(let key in allValues){

        const div = document.createElement("div");
        const keyValue = document.createTextNode(allValues[key]);
        div.appendChild(keyValue);
        div.className = "key";

        const small = document.createElement("small");
        const keyText = document.createTextNode(key);
        small.appendChild(keyText)

        div.appendChild(small)
        insert.appendChild(div)
    }

  }
  
  
  
  window.addEventListener('keydown', keyPressed);


