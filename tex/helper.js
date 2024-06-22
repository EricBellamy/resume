module.exports = {
	replaceString: function (text, target, replacement) {
		let targetIndex = text.indexOf(target);
		while (targetIndex != -1) {
			let start = text.substring(0, targetIndex);
			text = start + replacement + text.substring(targetIndex + target.length);

			targetIndex = text.indexOf(target);
		}
		return text;
	},
	newLine: function (input) {
		return "\n" + input;
	},
	escapeLatex: function (str) {
		const replacements = {
			'&': '\\&',
			'%': '\\%',
			'$': '\\$',
			'#': '\\#',
			'_': '\\_',
			'{': '\\{',
			'}': '\\}',
			'~': '\\textasciitilde{}',
			'^': '\\textasciicircum{}'
		};

		return str.replace(/[&%$#_{}~^]/g, match => replacements[match]);
	}
}