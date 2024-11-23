const cblog = document.querySelector('#blog')

async function  getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await res.json()
    posts.forEach(p => {
    
        const card = document.createElement('card')
        card.className = "card-blog" 

        const title = document.createElement('h3')
        title.textContent = p.title

        const paragraph = document.createElement('p')
        paragraph.textContent = p.body

        const corazon = document.createElement('img')
        corazon.src = "https://cdn.icon-icons.com/icons2/510/PNG/512/heart_icon-icons.com_50374.png"

         const carita = document.createElement('img')
        carita.src = "https://cdn.icon-icons.com/icons2/1123/PNG/512/happysmilingemoticonface_79597.png"

        const comentario = document.createElement('img')
        comentario.src = "https://spng.pngfind.com/pngs/s/247-2474217_png-file-svg-comment-icon-transparent-png.png"

        card.append(title, paragraph, corazon, comentario, carita)
        cblog.append(card)
    });
    
    
}

getData();



