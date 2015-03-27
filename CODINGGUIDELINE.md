
#Typescript Coding Guidline



### 1.Casing Rules

* Pascal Casing
	* Types (Class, Interface, Enumeration ..)
	* Constants
	* Resource Keys
* Camel Casing
	* Function Names
	* Property and local variables
	* Method arguments


Example :

	class Person {
		private fullName: string;

		constructor(public firstName: string, public lastName: string) {
			this.fullName = firstName + ' ' + lastName;
		}

		walkFor(millis: number) {
			console.log(this.fullName + ' is now walking.');

			setTimeout(() => {
				console.log(this.fullName + ' has stopped walking.');
				}, millis);
		}

		toString() {
			return this.fullName;
		}
	}

###2.Style and Naming

1.All identifiers should be named using English words.

2.Resources should be named using only alphanumeric characters.

3.Do not use "I" as a prefix for interface names.

		public interface Configurable
		{

		}

4.Do not use "_" as a prefix for private properties.

	WRONG: private _fullname : string
	CORRECT: private fullname : string

5.1 file per logical component.

6.Use double quotes for strings.

	WRONG: 'string content'
	CORRECT: "string content"

7.Use arrow functions over anonymous function expressions.

	WRONG: function(x) { x + x }
	CORRECT x => { x + x }

8.Arrays should be defined as Array<type> instead of type[].

	WRONG: var numbers: number[] = [];
	CORRECT: var numbers: Array<number> = [];

9.Do not forget the important thing is to remain consistent within a project.
