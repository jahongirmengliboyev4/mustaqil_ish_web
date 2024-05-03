fetch('http://172.20.190.201:3000/api/building/all')
      .then(response => response.json())
      .then(data => {
            const container = document.getElementById('show-card');
            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add("card_body")
                div.innerHTML = `
                    <div class="card_img_body">
                     <img src="${item.images}" alt="Home_img"/>
                    </div>
                    <div class="card_text_body">
                    <h3>${item.title}</h3>
                    <span>${item.price}</span>
                    <p>${item.text1}<p/>
                    </div>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
