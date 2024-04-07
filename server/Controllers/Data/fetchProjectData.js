const calculationData = require('../../Models/calculationData');

const fetchProjectData=async(req,res)=>{
    try {
        const id=req.query.id
        const response= await calculationData.find({_id:id});
        if(response){
            res.status(200).json(response)
            // console.log(response,id);
        }
        else{
            res.status(400).json('data not foud')
        }
    } catch (error) {
        console.error(error);    
    }
}

module.exports=fetchProjectData;