// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import handler from "../../apicomponent/handler";
import db from 'diskdb';

db.connect('./public', ['votes']);

export default handler.post( (req, res) => {
try{
    const vote = {
        yes :  req.body.counteryes,
        no : req.body.counterno,
    }

    var query = {
      _id:"a3dfdf2cbbdf48a296e6d082ca7ac4ae"
    };


    db.votes.update(query,vote)
    //db.votes.save(vote);
    res.send(req.body.counteryes)
}
    
  catch (error) {
    console.log(error)
  }
})


