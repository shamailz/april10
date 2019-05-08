 $(document).ready(function(){

	console.log("i hate coding :)")

var animateAll = function(){
		$(".squirrel1").each(function(){

			var squirrel = $(this);
			var thisIndex = squirrel.index()
			console.log(thisIndex)
			
			TweenMax.to(squirrel, 1, {	x: "100px", 
										delay : thisIndex/2,
										ease: Power4.easeIn
									})
			console.log(".squirrel1")
		})
	}

	var animateTimeLine = function(){

		var ourTimeline = new TimelineMax({repeat: 0})

		ourTimeline.add(TweenMax.to($(".squirrel1"), .5, {y: "-50px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 1.25, {x: "100px" }))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 0.5, {y: "40px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), .5, {y: "-50px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 0.5, {y: "40px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), .5, {y: "-50px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 1.25, {x: "250px" }))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 0.5, {y: "40px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), .5, {y: "-50px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 1.25, {x: "400px" }))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 0.5, {y: "40px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), .5, {y: "-50px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 0.5, {y: "40px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), .5, {y: "-50px"}))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 1.25, {x: "550px" }))
		ourTimeline.add(TweenMax.to($(".squirrel1"), 0.5, {y: "40px"}))

		
	}

	$(".squirrel1").click(function(){
		// animateAll()
		// TweenMax.to($("div"), 1, {y: "100px"})
		// TweenMax.to($("div"), 1.25, {delay: 1, x: "150px", backgroundColor: "rgb(0,0,0)"})
		// TweenMax.to($("div"), 0.5, { delay: 1.5, x: "100px"})
	

		animateTimeLine()




	})
})