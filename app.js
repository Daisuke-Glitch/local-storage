const inKey = document.getElementById('inKey')
const inVal = document.getElementById('inVal')
const add = document.getElementById('add')
const cls = document.getElementById('clear')
const output = document.getElementById('output')
add.addEventListener('click', () => {
    const key = inKey.value;
    const val = inVal.value;

    if(key && val){
        localStorage.setItem(key, val)
        location.reload()
    }
    if(key == '' && val == ''){
        alert('Empty inputs')
    }
});
cls.addEventListener('click', () => {
    localStorage.clear()
    output.innerHTML = '';
})

for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);

    output.innerHTML += `<li>${key} ${val}</li>`
}
