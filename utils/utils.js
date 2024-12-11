import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const getOptions = (req) => {
    const search = req.query.search || "";
    const pageSize = parseInt(req.params.pageSize) || 10;
    const page = +req.params.page || 1;
    const skip = (page - 1) * pageSize;
    const { dir = "asc", sort = "name" } = req.query;
    let filter = {};
    if (search) {
        filter = {
            name: { $regex: search, $options: "i" },
        };
    }
    return {
        filter,
        sort,
        dir,
        skip,
        pageSize,
    };
};
const authenticate = (req, res, next) => {
    // console.log(req.headers.authorization);
    if (req.headers.authorization) {
        const encodedStr = req.headers.authorization.split(" ")[1]
        const decodedStr = Buffer.from(encodedStr, "base64").toString()
        const [email, password] = decodedStr.split(":")
        if (email === "admin" && password === "123456") {
            next()
        } else {
            res.status(401).send({ message: "Unauthorized from authenticate utils middleware! 0", success: false })
        }
    } else {
        res.status(401).send({ message: "Unauthorized from authenticate utils middleware!", success: false })
    }
}
const hashPassword = (password) => {
    return bcrypt.hash(password, 2);
};
const comparePassword = (plainPass, hashedPass) => {
    return bcrypt.compare(plainPass, hashedPass);
}
const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: 60 });
};
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        console.log("decoded", decoded);
        if (err) {
            console.log(err);
            res.status(401).send({ message: "Unauthorized! from jwtVerify", success: false });
        } else {
            req.decoded = decoded;
            next();
        }
    });
};
export { getOptions, authenticate, hashPassword, comparePassword, generateToken, verifyToken };