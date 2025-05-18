document.addEventListener('DOMContentLoaded', function() {
 
    const contrasteBtn = document.querySelector('.btn-ac[title="Alto Contraste"]');
const aumentarBtn = document.querySelector('.btn-ac[title="Aumentar Fonte"]');
const reduzirBtn = document.querySelector('.btn-ac[title="Reduzir Fonte"]');

    
    contrasteBtn.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
        
                if (document.body.classList.contains('alto-contraste')) {
            localStorage.setItem('altoContraste', 'true');
        } else {
            localStorage.removeItem('altoContraste');
        }
    });
    
      if (localStorage.getItem('altoContraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }
    
    if (localStorage.getItem('fonteGrande') === 'true') {
        document.body.classList.add('fonte-grande');
    }
    
        const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
                      const tempoLivre = document.getElementById('pref-tempo').value;
            const barulho = document.querySelector('input[name="barulho"]:checked');
            const comentarios = document.getElementById('comentarios').value;
            
                      let perfil = 'indefinido';
            let mensagem = '';
            
            if ((tempoLivre === 'campo' && barulho && barulho.value === 'campo') || 
                (tempoLivre === 'cidade' && barulho && barulho.value === 'cidade')) {
                perfil = tempoLivre || barulho.value;
            } else if (tempoLivre || (barulho && barulho.value)) {
                perfil = tempoLivre || barulho.value;
            }
            
                      switch(perfil) {
                case 'campo':
                    mensagem = 'Você parece se identificar mais com a vida no campo! A tranquilidade e conexão com a natureza são importantes para você.';
                    break;
                case 'cidade':
                    mensagem = 'Você parece se identificar mais com a vida na cidade! A conveniência e as oportunidades urbanas combinam com seu estilo.';
                    break;
                default:
                    mensagem = 'Seu perfil é equilibrado! Você valoriza aspectos tanto da vida no campo quanto da cidade.';
            }
            
                     if (comentarios.trim() !== '') {
                mensagem += '\n\nObrigada por compartilhar suas preferências: ' + comentarios;
            }
            
            alert(mensagem);
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
                   const nome = document.getElementById('nome').value;
            alert(`Obrigada, ${nome}! Sua mensagem foi recebida. Entraremos em contato em breve.`);
            
                    contactForm.reset();
        });
    }
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});