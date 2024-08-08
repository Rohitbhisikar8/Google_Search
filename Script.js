
 const btn = document.querySelector("#btn");
 btn.addEventListener('click', async () => {

 const search = document.querySelector('#text').value;
if(!search) {
    alert('search somthing')

}
else{const url = `https://google-search74.p.rapidapi.com/?query=${search}&limit=10&related_keywords=true`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3749ebcd34mshf90ed1e44337526p1a1179jsn8469a6a9c72f',
            'x-rapidapi-host': 'google-search74.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data= result.results;
        data.map((val) => {
            document.querySelector('#result').innerHTML+=`
            <div><h1><a href="${val.url}">${val.title}</a></h1>
            <p>${val.description}</p>
            </div>
            `
        })
    } catch (error) {
        console.error(error);
    }
    
}

 })
 
