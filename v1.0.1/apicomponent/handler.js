import nextConnect from "next-connect";

export default nextConnect({

onError(error,req,res) { res.status(501)},

    onNoMatch(req, res) {res.status(404)}

}) 