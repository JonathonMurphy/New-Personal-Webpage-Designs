function height() {
	var blogContainer = document.getElementById("blog-container");
	var blogContainerHeight = document.getElementById("blog-container").clientHeight; 
	var marginHeight = blogContainerHeight - 900; 
	blogContainer.style.marginTop = marginHeight + "px";
}
height();