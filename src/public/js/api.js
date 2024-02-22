const cblog = document.querySelector('#blog')

async function  getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    const posts = await res.json()
    posts.forEach(p => {
    
        const card = document.createElement('card')
        card.className = "card-blog" 

        const title = document.createElement('h3')
        title.textContent = p.title

        const paragraph = document.createElement('p')
        paragraph.textContent = p.body

        const reaccion = document.createElement('img')
        reaccion.src = "https://spng.pngfind.com/pngs/s/247-2474217_png-file-svg-comment-icon-transparent-png.png"

        card.append(title, paragraph, reaccion)
        cblog.append(card)
    });
    
    
}

getData();



