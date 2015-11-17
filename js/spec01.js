describe("Testing Task02-1", function () {
	var $input = $("#input01"),
		$button = $("#button01"),
		$render_text = $("#intre");

	before(function () {
		$input.value = "";
	});

	it("Add item:", function () {
		$input.value = "dfa ,dsf,dasf,adf,a,df     ,dfsdf,          ,222";
		$button.click();
		expect($render_text.innerHTML).to.eql("dfa dsf dasf adf a df dfsdf 222");

		$input.value = "123，554,111";
		$button.click();
		expect($render_text.innerHTML).to.eql("123，554 111");

		$input.value = "222,222";
		$button.click();
		expect($render_text.innerHTML).to.eql("222");
	});
})

describe("Testing Task02-2", function () {
	var $input = $("#textarea01"),
		$button = $("#button02"),
		$render_text = $("#intre02");

	before(function () {
		$input.value = "";
	});

	it("Unique Item & space as separate:", function () {
		$input.value = "222 222";
		$button.click();
		expect($render_text.innerHTML).to.eql("222");
	});

	it("Unique Item", function () {
		$input.value = "222,222";
		$button.click();
		expect($render_text.innerHTML).to.eql("222");
	});

	it("separate by ,", function () {
		$input.value = "dfa ,dsf,dasf,adf,a,df     ,dfsdf,          ,222";
		$button.click();
		expect($render_text.innerHTML).to.eql("dfa dsf dasf adf a df dfsdf 222");
	});

	it("separate by different code", function () {
		$input.value = "123，554,111;333；444、252 11111 554";
		$button.click();
		expect($render_text.innerHTML).to.eql("123 554 111 333 444 252 11111");
	});

	it("Append same Item", function () {
		$input.value += " 222,222 111";
		$button.click();
		expect($render_text.innerHTML).to.eql("123 554 111 333 444 252 11111 222");
	});

	it("Append Item", function () {
		$input.value += "995";
		$button.click();
		expect($render_text.innerHTML).to.eql("123 554 111 333 444 252 11111 222 111995");
	});

})

describe("Testing Task02-3", function () {
	var $input = $("#textarea02"),
		$button = $("#button03"),
		$error_text = $("#error");

	before(function () {
		$input.value = "";
	});

	beforeEach(function clearResult() {
		$("#result01").innerHTML = "";
	})

	it("Unique Item & space as separate:", function () {
		$input.value = "222 222";
		$button.click();
		expect($error_text.innerHTML).to.eql("");
		expect($("input[name=intres]").length).to.eql(1);
		expect($("label[name=intres]")[0].innerHTML).to.eql("222");
	});

	it("Unique Item", function () {
		$input.value = "222,222";
		$button.click();
		expect($error_text.innerHTML).to.eql("");
		expect($("input[name=intres]").length).to.eql(1);
		expect($("label[name=intres]")[0].innerHTML).to.eql("222");
	});

	it("separate by ,", function () {
		$input.value = "dfa ,dsf,dasf,adf,a,df     ,dfsdf,          ,222";
		$button.click();
		expect($error_text.innerHTML).to.eql("");
		expect($("input[name=intres]").length).to.eql(8);
		expect($("label[name=intres]")[0].innerHTML).to.eql("dfa");
		expect($("label[name=intres]")[7].innerHTML).to.eql("222");
	});

	it("separate by different code", function () {
		$input.value = "123，554,111;333；444、252 11111 554";
		$button.click();
		expect($error_text.innerHTML).to.eql("");
		expect($("input[name=intres]").length).to.eql(7);
		expect($("label[name=intres]")[0].innerHTML).to.eql("123");
		expect($("label[name=intres]")[6].innerHTML).to.eql("11111");
	});

	it("length should be less than 10:", function () {
		$input.value = "123，554,111;333；444、252 11111 554,aa,ddd,ww 555555";
		$button.click();
		expect($error_text.innerHTML).to.eql("不能超过10个！");
		expect($("input[name=intres]").length).to.eql(0);
		expect($("label[name=intres]")[0]).to.eql(undefined);
	});

	it("length should not be empty:", function () {
		$input.value = "";
		$button.click();
		expect($error_text.innerHTML).to.eql("输入不能为空！");
		expect($("input[name=intres]").length).to.eql(0);
		expect($("label[name=intres]")[0]).to.eql(undefined);
	});

	it("Append same Item", function () {
		$input.value = "222,222";
		$button.click();
		expect($error_text.innerHTML).to.eql("");
		expect($("input[name=intres]").length).to.eql(1);
		expect($("label[name=intres]")[0].innerHTML).to.eql("222");

		$input.value += " 111;111";
		$button.click();
		expect($error_text.innerHTML).to.eql("");
		expect($("input[name=intres]").length).to.eql(2);
		expect($("label[name=intres]")[0].innerHTML).to.eql("222");
		expect($("label[name=intres]")[1].innerHTML).to.eql("111");
	});
})