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
			modal.slideDown('slow')
		});
	}	

	close.on('click', (event) =>{
		event.preventDefault();
		modal.slideUp('slow', ()=>{
			overlay.animate({
				opacity : 'toggle'
			}, 1000)});
	});
});