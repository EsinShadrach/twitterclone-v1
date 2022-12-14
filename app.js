/*
// toggle dark mode
document.getElementsByTagName("body")[0].classList.add("light");
document.getElementsByTagName("body")[0].classList.remove("light");
*/
/* search input logic startblock*/
{
	const searchInput = document.querySelector(".search-twitter");
	const bodySelectAll = document.querySelector("body");
	const clearSearch = document.querySelector(".clear-search");
	const searchContainer = document.querySelector(".search-bar");
	const svgSearch = document.querySelector(".search-svg");
	const rc = document.querySelector(".right-cont-b");

	searchContainer.addEventListener("click", () => {
		searchContainer.classList.add("search-bar-is-active");
		console.log(searchContainer);
		clearSearch.classList.add("item-is-active");
		svgSearch.classList.add("item-is-active");
	});

	rc.addEventListener("click", () => {
		searchContainer.classList.remove("search-bar-is-active");
		clearSearch.classList.remove("item-is-active");
		svgSearch.classList.remove("item-is-active");
	});
	
	for (let i = 0; i < bodySelectAll.children.length - 2; i++) {
		const element_selector = bodySelectAll.children[i];
		element_selector.addEventListener("click", () => {
			searchContainer.classList.remove("search-bar-is-active");
			clearSearch.classList.remove("item-is-active");
			svgSearch.classList.remove("item-is-active");
		});
	}
	clearSearch.addEventListener("click", () => {
		searchInput.value = "";
	});
}
/* search input logic endblock */
{
	const zz = document.querySelector(".btn-close");
	const aa = document.querySelector(".btn-light")
	if (document.querySelector(".light")) {
	}else{
		zz.classList.add("btn-close-white")
	}
}

{
	function select_N_unselect(qSelectorAll, classToAdd) {
		const items = document.querySelectorAll(qSelectorAll);
		// items[0].classList.add(classToAdd);
		// // items[1].classList.add(classToAdd);
		for (let i = 0; i < items.length; i++) {
			items[i].addEventListener("click", select);
		}
		function select() {
			deselect(this);
			this.classList.add(classToAdd);
		}
		function deselect(c) {
			for (let i = 0; i < items.length; i++) {
				if (items[i] != c) {
					items[i].classList.remove(classToAdd);
				}
			}
		}
	}
	select_N_unselect(".icon-mobile", "icon-mobile-active")
	select_N_unselect(".menu-item", "bold")
}

/* reaction logic startblock*/
{
	const hide_cont = "visually-hidden";
	const reacted = document.querySelectorAll(".replace-heart");
	const reaction_count = document.querySelectorAll(".reaction-count");
	const retweet = document.querySelectorAll(".retweet");
	const not_reacted = document.querySelectorAll(".heart-svg");
	const tweet_count = document.querySelector(".tweet-cont");
	const mobile_tweet_cont = document.querySelector(".tweet-cont-mobile")
	let reactionCount = 0;

	tweet_count.addEventListener("click", () => {
		tweet_count.classList.add("tweet-is-active");
	});
	mobile_tweet_cont.addEventListener("click", () => {
		mobile_tweet_cont.classList.add("tweet-is-active");
	});

	for (let i = 0; i < retweet.length; i++) {
		const selector = retweet[i];
		selector;
		selector.addEventListener("click", () => {
			selector.classList.toggle("retweet-active");
		});
	}

	for (let i = 0; i < not_reacted.length; i++) {
		not_reacted[i].addEventListener("click", () => {
			reactionCount = 1;
			reaction_count[i].textContent = reactionCount;
			not_reacted[i].classList.add(hide_cont);
			reacted[i].classList.remove(hide_cont);
		});
	}

	for (let i = 0; i < not_reacted.length; i++) {
		reacted[i].addEventListener("click", () => {
			if (reactionCount == 1) {
				reactionCount = "";
			}
			reaction_count[i].textContent = reactionCount;
			not_reacted[i].classList.remove(hide_cont);
			reacted[i].classList.add(hide_cont);
		});
	}
}
/* reaction logic endblock */