describe("Testing Util", function () {

	var setText = function (text, selector) {
		var input = $(selector);
		return input.value = text;
	};

	before(function () {

	});

	it("Add number", function () {
		setText('1', "#number1");
		setText("1", "#number2");
		$("#addbtn").click();
		expect($("#result").innerHTML, 10).to.be.equal("2");

		setText('15e', "#number1");
		setText("20s", "#number2");
		$("#addbtn").click();
		expect($("#result").innerHTML, 10).to.be.equal("35");
	});

	it("Clone Object", function () {
		var srcObj = {
			a: 1,
			b: {
				b1: ["Nooo", "hi"],
				b2: "JavaScript"
			}
		};
		var abObj = srcObj;
		var tarObj = cloneObject(srcObj);
		srcObj.a = 2;
		srcObj.b.b1[0] = "Hello";

		expect(abObj.a).to.be.equal(2);
		expect(abObj.b.b1[0]).to.be.equal("Hello");
		expect(tarObj.a).to.be.equal(1);
		expect(tarObj.b.b1[0]).to.be.equal("Nooo");
	});

	it("UniqArray", function () {
		var a = [1, 3, 5, 7, 5, 3];
		var b = uniqArray(a);
		expect(b).to.eql([1, 3, 5, 7]);
	});

	it("Trim", function () {
		var str = "    h i 	  ";
		str = trim(str);
		expect(str).to.equal("h i");
	});

	it("Array Each", function () {
		var arr = ['java', 'c', 'php', 'html'];
		var tar = [], tar2 = {};
		function output(item) {
			tar.push(item);
		}
		each(arr, output);
		expect(tar).to.eql(['java', 'c', 'php', 'html']);

		function output2(item, index) {
			tar2[index] = item;
		}
		each(arr, output2);
		expect(tar2).to.eql({ 0: 'java', 1: 'c', 2: 'php', 3: 'html' });
	});

	it("getObjectLength", function () {
		var obj = {
			a: 1,
			b: 2,
			c: {
				c1: 3,
				c2: 4
			}
		};
		var len = getObjectLength(obj);
		expect(len).to.eql(3);
	});
	
	it("Email&Phone Reg", function () {
		var email01 = "ssdfsdf@dd.com";
		var email02 = "ldsjflskdjfalkdsf";
		var phone01 = "188194904344";
		var phone02 = "56sdfsddsfsdf";
		var phone03 = "15565234125";
		expect(isEmail(email01)).to.eql(true);
		expect(isEmail(email02)).to.eql(false);
		expect(isMobilePhone(phone01)).to.eql(false);
		expect(isMobilePhone(phone02)).to.eql(false);
		expect(isMobilePhone(phone03)).to.eql(true);
	})


})