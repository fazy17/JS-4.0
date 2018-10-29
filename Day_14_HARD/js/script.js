jQuery(document).ready(function() {

	let scheduleBtn = $('a:eq(8)'),
		tourBtn = $('.main_btna'),
		contactBtn = $('.contact'),
		overlay = $('.overlay'),
		modal = $('.modal'),
		close = $('.close');

    scheduleBtn.on('click', (event)=>{
        Animate();
    });
	tourBtn.on('click', (event)=>{
		Animate();
	});
	contactBtn.on('click', (event)=>{
		Animate();
	});



	function Animate(){
		event.preventDefault();
		overlay.animate({opacity : 'toggle'}, 1000, ()=>{
			modal.animate({opacity : 'toggle'}, 1000, ()=> {
				modal.animate({bottom : '-150px'}, 1000, ()=> {
					modal.animate({left : '50px'}, 1500, ()=> {
						modal.animate({left : '-50px'}, 1500, ()=> {
							modal.animate({bottom : '150px'}, 1000, ()=> {
				
							});
						});
					});
				});
			});
		});
	}	

	close.on('click', (event) =>{
		event.preventDefault();
		modal.slideUp('slow', ()=>{
			overlay.animate({
				opacity : 'toggle'
			}, 1000)});
	});

	// форма
	let form = $('form'),
		back = $('.back'),
		thanks = $('.thanks');


        form.submit(function(event) {
			event.preventDefault();

			let formData = new FormData(this);

			let obj = {};
			formData.forEach(function(value, key) {
				obj[key] = value;
			});

			let json = JSON.stringify(obj);

			$.ajax({
				async: true,
				type: "POST",
				url: "server.php",
				contentType: "application/json; charset=utf-8",
				data: json
			});
		});
	

	back.on('click', () => {
		overlay.animate({opacity: 'toggle'}, 1500);
		thanks.animate({opacity: 'toggle'}, 1500);
	});
});