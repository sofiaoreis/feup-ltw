
$(document).ready(function() {

	$("#fileToUpload").change(function(){

	    if (this.files && this.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#prev').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(this.files[0]);
	    }
	});

});