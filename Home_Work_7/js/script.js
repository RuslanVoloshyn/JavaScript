let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (numOrStr) {
	case null: //if(numOrStr === null)
		console.log("ви скасували");
		break;
	case "": //else if( numOrStr.trim() === '' )
		console.log("Empty String");
		break;
	case isNaN(numOrStr) && numOrStr: //else if ( isNaN( +numOrStr ) )
		console.log("number is Ba_NaN");
		break;
	default:
		console.log("OK!");
}
