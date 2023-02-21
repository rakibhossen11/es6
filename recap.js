document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('freind');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
    // console.log(friends);
})

document.getElementById('center-btn').addEventListener('click',function(){
    const center = document.getElementById('third');
    center.style.textAlign = 'center';
})
document.getElementById('add-friend').addEventListener('click',function(){
    const container = document.getElementById('friend');
    const friend = document.createElement('div');
    friend.innerHTML = `
    <h3>New Friend</h3>
    <p>something new added</p>
    `
    container.appendChild(friend);
})