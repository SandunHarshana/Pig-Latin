
class Program {

	_phrases = {
		"Hello": "Ellohay",
		"Pig Latin": "Igpay Atinlay",
		"The first month is Janurary": "Ethay irstfay onthmay isway Anuraryjay",
		"The floor is sticky": "Ethay oorflay isway ickystay"
	}

	constructor() {
		for (let english in this._phrases) {
			this._testEquals(english, this._phrases[english], this._translateEnglishToPigLatin(english));
		}
	}

	_translateEnglishToPigLatin(english) {
		// Initialise vowel array
		let vowels = ['a', 'e', 'i', 'o', 'u'];
		let newStr = "";
		let pigLatin = [];

		// Split sentence to get each word
		for (let englishWord of english.split(" ")) {
			// Check weather 1st character is vowel or not
			if (vowels.indexOf(englishWord[0]) > -1) {
				newStr = englishWord + "way";
				pigLatin.push(this._restoreFirstLetterCase(englishWord, newStr));
			} else {
				// Get first vowel
				let firstMatch = englishWord.match(/[aeiou]/g) || 0;
				// Get index of first vowel
				let vowel = englishWord.indexOf(firstMatch[0]);
				// Create pig latin word ( 1st vowel to last character + 1st character to 1st vowel + 'ay')
				newStr = englishWord.substring(vowel) + englishWord.substring(0, vowel) + "ay";
				pigLatin.push(this._restoreFirstLetterCase(englishWord, newStr));
			}
		}
		// Convert array to string with space and return
		return pigLatin.join(' ');
	}

	// Restore first letter case
	_restoreFirstLetterCase(englishWord, piglatinWord){
		if(this._startsWithCapital(englishWord)){
			return this._capitalizeFirstLetter(piglatinWord);
		}
		return piglatinWord;
	}

	// Check weather word start with capital letter
	_startsWithCapital(word){
		return word.charAt(0) === word.charAt(0).toUpperCase()
	}

	// Changed first letter to capital
	_capitalizeFirstLetter(word){
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	}

	_testEquals(input, expect, actual) {
		if (expect.toLowerCase() == actual.toLowerCase()) {
			if (expect != expect.toLowerCase() && expect == actual) {
				console.log("PASS (Bonus)! "+input+" -> "+actual);
			} else {
				console.log("PASS! "+input+" -> "+actual);
			}
		} else {
			console.log("FAIL!");
			console.log("  Input: "+input);
			console.log("  Expect: "+expect);
			console.log("  Actual: "+actual);
		}
	}

}

new Program();
