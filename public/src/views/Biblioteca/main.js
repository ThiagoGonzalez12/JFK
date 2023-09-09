const pdfLinksContainer = document.getElementById('pdfLinks');

fetch('/pdfs')
    .then(response => response.json())
    .then(pdfList => {
        pdfList.forEach(pdf => {
            const onlyName = pdf.split('.').shift().split('-').join(' ')
            const container =  document.createElement('DIV')
            container.classList.add("container")
            const img = document.createElement('IMG')
            img.setAttribute('src', '../../images/pdf.png')
            img.classList.add("img")
            const link = document.createElement('a')
            link.classList.add("aPDFS")
            link.href = `/pdfs/${pdf}`;
            link.textContent = onlyName;
            link.appendChild(img)
            container.appendChild(link)
            pdfLinksContainer.appendChild(container);
        });
    })
    .catch(error => console.error('Error al obtener la lista de PDFs:', error));


const input = document.querySelector(".texto")
const valor = document.querySelector(".valor")
valor.addEventListener("click", () =>{
    const texto = input.value
    while (pdfLinksContainer.firstChild) {
        pdfLinksContainer.removeChild(pdfLinksContainer.firstChild);
    }
    fetch('/pdfs')
        .then(response => response.json())
        .then(pdfList =>{
                pdfList.forEach(pdf => {
                    const onlyName = pdf.split('.').shift().split('-').join(' ')
                    if (onlyName.includes(texto)) {
                        const container =  document.createElement('DIV')
                        container.classList.add("container")
                        const img = document.createElement('IMG')
                        img.setAttribute('src', '../../images/pdf.png')
                        img.classList.add("img")
                        const link = document.createElement('a')
                        link.classList.add("aPDFS")
                        link.href = `/pdfs/${pdf}`;
                        link.textContent = onlyName;
                        link.appendChild(img)
                        container.appendChild(link)
                        pdfLinksContainer.appendChild(container);
                    }
                })
        })
})