const listOftabs = document.querySelectorAll('.tabs li')
const webDev=document.querySelector('.web-dev')
const webWordpress=document.querySelector('.wordpress-dev')
const webUI=document.querySelector('.uiux-desg')
const webGraphics=document.querySelector('.graphic-desg')

listOftabs.forEach (list => {
    list.addEventListener('click', e => {
       
        
       
        if(e.target.textContent==='Wordpress Developer')
        {
            webDev.classList.add('d-none')
            webWordpress.classList.remove('d-none')
            webUI.classList.add('d-none')
            webGraphics.classList.add('d-none')

           
        }
        else if(e.target.textContent==='Web Developer')
        {
            webDev.classList.remove('d-none')
            webWordpress.classList.add('d-none')
            webUI.classList.add('d-none')
            webGraphics.classList.add('d-none')
            
        }
        else if(e.target.textContent==='UiUX Designer')
        {
            webDev.classList.add('d-none')
            webWordpress.classList.add('d-none')
            webUI.classList.remove('d-none')
            webGraphics.classList.add('d-none')
           
        }
        else if(e.target.textContent==='Graphic Desiner')
        {
            webDev.classList.add('d-none')
            webWordpress.classList.add('d-none')
            webUI.classList.add('d-none')
            webGraphics.classList.remove('d-none')
            
        }

        listOftabs.forEach (l => {
        const btn=l.querySelector('.btn')
        btn.classList.remove('active')
});
e.target.classList.remove('active');





e.target.classList.add('active')



    })
});