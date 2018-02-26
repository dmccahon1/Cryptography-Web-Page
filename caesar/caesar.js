function caesar_encrypt() {
	var plain_text = document.getElementById("caesar_encrypt").value;
	plain_text = plain_text.toLowerCase();
	var shift = parseInt(document.getElementById("shift").value);
	var cipher_text = [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
					't','u','v','w','x','y','z']
					
	for (var idx=0; idx < plain_text.length; idx++)
	{
		var input = alphabet.indexOf(plain_text[idx]);
		if(input === -1 )
		{
			cipher_text.push(plain_text[idx]);
		}
		else
		{
			var coded = (input+shift)%26;
			var letter = alphabet[coded];
			cipher_text.push(letter);
		}
	}
	document.getElementById("caesar_decrypt").innerHTML = cipher_text.join("");
}	

function caesar_decrypt() {
	var cipher_text = document.getElementById("caesar_decrypt").value;
	cipher_text = cipher_text.toLowerCase();
	var shift = parseInt(document.getElementById("shift").value);
	var plain_text = [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
					't','u','v','w','x','y','z']
					
	for (var idx=0; idx < cipher_text.length; idx++)
	{
		var input = alphabet.indexOf(cipher_text[idx]);
		
		if(input === -1 )
		{
			plain_text.push("error")
		}
		else
		{
			input = input + 26;
			var coded = (input-shift)%26;
			var letter = alphabet[coded];
			plain_text.push(letter);
		}
	}
	document.getElementById("caesar_encrypt").innerHTML = plain_text.join("");
}
