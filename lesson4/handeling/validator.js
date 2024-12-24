function checkParams(scheme) {
	return (req, res, next) => {
		const validationResult = scheme.validate(req.params);
		if (validationResult.error) {
			return res.status(404).send(validationResult.error.details);
		}
		next();
	};
}

function checkBody(scheme) {
	return (req, res, next) => {
		const validationResult = scheme.validate(req.body);
		if (validationResult.error) {
			return res.status(404).send(validationResult.error.details);
		}
		next();
	};
}

module.exports = { checkParams, checkBody };