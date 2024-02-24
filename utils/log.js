const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#DC143C").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#32CD32").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#12BDF3").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#DC143C").bold('[ CYBER-CAT ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#32CD32").bold('[ CYBER-CAT ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#32CD32").bold(`[ CYBER-CAT ] » `) + data);
			break;
	}
}