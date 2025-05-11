const OwnerModel = require("../../models/users/ownerModel");
const { statusCodes, errorCodes } = require("../../constants/customCodes")

const ownerSignUp = async (req, res) => {
    try {
        const { mobile, email, aadharNumber } = req.body;

        const ownerMobile = await OwnerModel.findOne({ mobile });
        if (ownerMobile) {
            return res.status(400).json({
                code: 2020,
                message: errorCodes[2020],
            });
        }

        const ownerEmail = await OwnerModel.findOne({ email });
        if (ownerEmail) {
            return res.status(400).json({
                code: 2021,
                message: errorCodes[2021],
            });
        }

        const ownerAadhar = await OwnerModel.findOne({ aadharNumber });
        if (ownerAadhar) {
            return res.status(400).json({
                code: 2022,
                message: errorCodes[2022],
            });
        }

        return res.status(200).json({
            code: 1000,
            message: statusCodes[1000],
        });
    } catch (error) {
        console.error("Error during owner sign-up:", error.message);
        return res.status(500).json({
            code: 8000,
            message: errorCodes[8000],
        });
    }
}

module.exports = ownerSignUp