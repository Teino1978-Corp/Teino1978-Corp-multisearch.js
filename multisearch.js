<script type="text/javascript">
	function fn_search() {
		var leader= ';'; //this key determines its a search prefix
		var searchForm=document.getElementById('searchForm');
		var actionList=[ // match string prefix names, field names and default input required by search engines
				//{	//template
				//	match_string: "",
				//	name: "",
				//	url: "",
				//	extra_inputs: [
				//		{type: "hidden", attributes: [ ['name', 'title'], ['value', "Special:Search" ] ]},
				//	]
				//},
				{	//google (default)
					match_string: "g",
					name: "q",
					url:"https://encrypted.google.com/search",
					extra_inputs: []
				},
				{	//duckduckgo
					match_string: "ddg",
					name: "q",
					url: "https://duckduckgo.com/",
					extra_inputs: []
				},
				{	// youtube
					match_string: "yt",
					name: "search_query",
					url:"https://www.youtube.com/results",
					extra_inputs: []
				},
				{	//reddit
					match_string: "redd",
					name: "q",
					url:"https://www.reddit.com/search",
					extra_inputs: []
				},
				{	//imdb
					match_string: "imdb",
					name: "q",
					url: "http://www.imdb.com/find",
					extra_inputs: []
				},
				{	//wikipedia
					match_string:"wiki",
					name: "search",
					url:"https://en.wikipedia.org/wiki/search-redirect.php",
					extra_inputs:[
						{type: "hidden", attributes: [ ['name', 'title'], ['value', "Special:Search" ] ]},
						{type: "hidden", attributes: [ ['name', 'fulltext'], ['value', "Search" ] ]},
						{type: "hidden", attributes: [ ['name', 'profile'], ['value', "default" ] ]}
					]
				},
				{	//flipkart
					match_string:"flip",
					name: "q",
					url:"http://www.flipkart.com/search",
					extra_inputs:[
						{type: "hidden", attributes: [ ['name', 'as'], ['value', "off" ] ]},
						{type: "hidden", attributes: [ ['name', 'as-show'], ['value', "off" ] ]}
					]
				},
				{	//library genesis
					match_string: "libg",
					name: "req",
					url: "http://gen.lib.rus.ec/search.php",
					extra_inputs: [
						{type: "hidden", attributes: [ ['name', 'open'], ['value', "0" ] ]},
						{type: "hidden", attributes: [ ['name', 'view'], ['value', "detailed" ] ]},
						{type: "hidden", attributes: [ ['name', 'column'], ['value', "def" ] ]}
					]
				},
				{	//TPB
					match_string: "tpb",
					name: "q",
					url: "https://thepiratebay.se/s/",
					extra_inputs: [
						{type: "hidden", attributes: [ ['name', 'page'], ['value', "0" ] ]},
						{type: "hidden", attributes: [ ['name', 'orderby'], ['value', "99" ] ]}
					]
				},
				{	//torbox
					match_string: "tbox",
					name: "q",
					url: "http://torbox.net/index.php",
					extra_inputs: [
						{type: "hidden", attributes: [ ['name', 'c'], ['value', "e" ] ]}
					]
				}
			];
		for (var action in actionList) {
			//look for ;match
			var match=searchForm.searchText.value.search(leader + actionList[action].match_string);
			if (match != -1) {
				searchForm.searchText.name=actionList[action].name; //set input name
				searchForm.action=actionList[action].url; //set action url

				//create and append extra input fields
				if (actionList[action].extra_inputs.length !== 0) {
					for (var obj in actionList[action].extra_inputs) {
						var child_obj=document.createElement('input');
						child_obj.type=actionList[action].extra_inputs[obj].type;
						child_obj.style.display="none";
						//set attributes
						for (attr in actionList[action].extra_inputs[obj].attributes) {
							var attr_name=actionList[action].extra_inputs[obj].attributes[attr][0];
							child_obj[attr_name]=actionList[action].extra_inputs[obj].attributes[attr][1];
						}
						searchForm.appendChild(child_obj);
					}
				//alert("searching "+actionList[action].match_string);
				}
				//hoping atleast one succeeds //remove matched substring
				searchForm.searchText.value=searchForm.searchText.value.replace(leader + actionList[action].match_string+" ", "");
				searchForm.searchText.value=searchForm.searchText.value.replace(leader + actionList[action].match_string, "");
				break;
			}
		}
	}
</script>