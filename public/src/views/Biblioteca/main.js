const pdfLinksContainer = document.getElementById('pdfLinks');

fetch('/pdfs')
    .then(response => response.json())
    .then(pdfList => {
        pdfList.forEach(pdf => {
            const onlyName = pdf.split('.').shift().split('-').join(' ')
            const link = document.createElement('a');
            link.href = `/pdfs/${pdf}`;
            link.textContent = onlyName;
            pdfLinksContainer.appendChild(link);
            pdfLinksContainer.appendChild(document.createElement('br'));
        });
    })
    .catch(error => console.error('Error al obtener la lista de PDFs:', error));