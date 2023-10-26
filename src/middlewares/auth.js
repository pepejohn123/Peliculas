/* const authMiddleware = (req,res,next)=>{
    console.log(req.query); // parámetros de query (los que llevan ? en la url) 

    const token = req.query.token;

    if(token ==='123'){
        next();    
    }
    else{
        res.status(401).send('Unauthenticated');
    }
    
};

module.exports = authMiddleware; */