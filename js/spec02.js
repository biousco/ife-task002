describe("Testing Task02-1", function () {
	var reg = window.reg,
		input = $("#time"),
		button = $("#confirm"),
		t_time = $("#target_time"),
		l_time = $("#last_time"),
		tips = $("#tips"),
		c_time = new Date();

	it("Testing Date Format", function () {
		var t1 = "1994-04-25",
			t2 = "2222-22-22",
			t3 = "aada-ff-ss",
			t4 = "74521-12-11",
			t5 = "1243-52-14";

		expect(reg.test(t1)).to.eql(true);
		expect(reg.test(t2)).to.eql(false);
		expect(reg.test(t3)).to.eql(false);
		expect(reg.test(t4)).to.eql(false);
		expect(reg.test(t5)).to.eql(false);
	});

	it("Adding target_time", function () {
		var t1 = "1994-07-15";
		input.value = t1;
		button.click();
		expect(t_time.innerHTML).to.eql("1994年07月15日");
	});
	
	it("Adding correct time", function () {
		var t1 = "2015-11-18";
		input.value = t1;
		button.click();
		//expect(t_time.innerHTML).to.eql()
	})
})