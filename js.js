

let button = document.querySelectorAll('.burger, .closeBurger, .mobile_menu nav a');
let menu = document.querySelector('.mobile_menu');
button.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
})









const info = document.querySelectorAll(".detali__name")
info.forEach(item =>{
	let cont = item.querySelector("span")
	cont.addEventListener("click", () => {
		cont.classList.toggle("active");
		document.getElementById(cont.dataset.cont).classList.toggle("show")
	})
})






if (window.screen.width >= 550) {
	const swiper = new Swiper('.tabs .swiper', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.tab-button-next',
			prevEl: '.tab-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			580: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 35
			},
			1360: {
				slidesPerView: 4,
				spaceBetween: 56
			}
		}

	});
}









const swiper2 = new Swiper('.swiper_2', {
	loop: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		580: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		992: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
});








const swiper3 = new Swiper('#nashi__rab-syl .swiper_3', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.tab-button-next',
		prevEl: '.tab-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		580: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 35
		},
		1360: {
			slidesPerView: 3,
			spaceBetween: 55
		}
	}
});








const swiper4 = new Swiper('.fon_otzivov .swiper_3', {
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {el: '.swiper-pagination.otz_pag'}
		},
		580: {
			slidesPerView: 2,
			spaceBetween: 25, 
			pagination: false
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 35
		},
		1360: {
			slidesPerView: 3,
			spaceBetween: 55
		}
	}
});





const load_more = document.querySelector('#load-slide')
const tabs = document.querySelectorAll('.tabs__caption > li')
const tabs_cont = document.querySelectorAll('.tabs__content')


function show_el(block, step = 2, show = true) {
	if (show){
		let items = block.querySelectorAll('.swiper > div > .swiper-slide:not(.show)')
		if (items.length <= step){
			step = items.length
			load_more.classList.add('hide')
		}
		for (let i = 0; i < step; i++) {
			items[i].classList.add('show')
		}
	} else {
		let items = block.querySelectorAll('.swiper > div > .swiper-slide')
		items.forEach(item => {
			item.classList.remove('show')
		})
		load_more.classList.remove('hide')
	}
	
}

tabs.forEach(tab => {
	tab.addEventListener('click',() => {
		if (!tab.classList.contains('active')){
			tabs_cont.forEach(tab_cont => {
				show_el(tab_cont, 2, false)
			})
			setTimeout(() => {
				let tabs_cont_activ = document.querySelector('.tabs__content.active')
				show_el(tabs_cont_activ, 4)
			}, 100);
		}
	})
})

let tab_active = document.querySelector('.tabs__content.active')
show_el(tab_active, 4)

load_more.addEventListener('click', () => {
	let tab_active = document.querySelector('.tabs__content.active')
	show_el(tab_active, 6)

})


document.addEventListener('DOMContentLoaded', () => {

  const ajaxSend = async (formData) => {
      const fetchResp = await fetch('mail.php', {
          method: 'POST',
          body: formData
      });
      if (!fetchResp.ok) {
          throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
      }
      return await fetchResp.text();
  };

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
      form.addEventListener('submit', function (e) {
          e.preventDefault();
          const formData = new FormData(this);

          ajaxSend(formData)
              .then((response) => {
                  alert(response);
                  form.reset(); // очищаем поля формы 
              })
              .catch((err) => console.error(err))
      });
  });

});