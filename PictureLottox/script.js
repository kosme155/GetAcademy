function show(id)
            {
                console.log(id);
            if(id === 'dog1')
				document.getElementById(id).innerHTML = `<img src="img/dog.jpg"/>`;
			if(id === 'frog1')
				document.getElementById(id).innerHTML = `<img src="img/frog.jpg"/>`;
			if(id === 'horse1')
				document.getElementById(id).innerHTML = `<img src="img/horse.jpg"/>`;
			if(id === 'chicken1')
				document.getElementById(id).innerHTML = `<img src="img/chicken.jpg"/>`;
			if(id === 'spider1')
				document.getElementById(id).innerHTML = `<img src="img/spider.jpg"/>`;
			if(id === 'frog2')
				document.getElementById(id).innerHTML = `<img src="img/frog.jpg"/>`;
			if(id === 'spider2')
				document.getElementById(id).innerHTML = `<img src="img/spider.jpg"/>`;
			if(id === 'tiger1')
				document.getElementById(id).innerHTML = `<img src="img/tiger.jpg"/>`;
			if(id === 'chicken2')
				document.getElementById(id).innerHTML = `<img src="img/chicken.jpg"/>`;
			if(id === 'dog2')
				document.getElementById(id).innerHTML = `<img src="img/dog.jpg"/>`;
			if(id === 'elephant1')
				document.getElementById(id).innerHTML = `<img src="img/elephant.jpg"/>`;
			if(id === 'cat1')
				document.getElementById(id).innerHTML = `<img src="img/cat.gif"/>`;
			if(id === 'cat2')
				document.getElementById(id).innerHTML = `<img src="img/cat.gif"/>`;
			if(id === 'elephant2')
				document.getElementById(id).innerHTML = `<img src="img/elephant.jpg"/>`;
			if(id === 'horse2')
				document.getElementById(id).innerHTML = `<img src="img/horse.jpg"/>`;
			/* hehe... */
			if(id === 'empty')
				blankall();
            }
            function blankall()
		{
			document.getElementById('dog1').innerHTML = /*HTML*/``;
			document.getElementById('frog1').innerHTML = /*HTML*/``;
			document.getElementById('horse1').innerHTML = /*HTML*/``;
			document.getElementById('chicken1').innerHTML = /*HTML*/``;
			document.getElementById('spider1').innerHTML = /*HTML*/``;
			document.getElementById('frog2').innerHTML = /*HTML*/``;
			document.getElementById('spider2').innerHTML = /*HTML*/``;
			document.getElementById('tiger1').innerHTML = /*HTML*/``;
			document.getElementById('chicken2').innerHTML = /*HTML*/``;
			document.getElementById('dog2').innerHTML = /*HTML*/``;
			document.getElementById('elephant1').innerHTML = /*HTML*/``;
			document.getElementById('cat1').innerHTML = /*HTML*/``;
			document.getElementById('cat2').innerHTML = /*HTML*/``;
			document.getElementById('elephant2').innerHTML = /*HTML*/``;
			document.getElementById('horse2').innerHTML = /*HTML*/``;
		}
		window.onload = function()
		{
			blankall();
		}