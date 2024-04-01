//listeners for GC958 kettles
const PREVIOUS = document.querySelector('#previous');
const NEXT = document.querySelector('#next');


if (PREVIOUS) {
	PREVIOUS.addEventListener('click', function(){
		//do something useful.
		// console.log('made it to previous');
		
		site.scSelectBatchPreviousPage();
	});
}


if (NEXT) {
	NEXT.addEventListener('click', function () {
		// body...
		site.scSelectBatchNextPage();
	});
}