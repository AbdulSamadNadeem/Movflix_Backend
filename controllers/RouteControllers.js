const MoviesModel = require('./../Models/Models')


exports.DeleteDoc = async(req,res)=>{
    try{
      await MoviesModel.findByIdAndDelete(req.params.id)
      res.status(204).json({
         status:"success",
         data:null
      })
    } catch(err){
      res.status(404).json({
         status:"failed",
         message:err.message
    })
    }
}

exports.UpdateDoc  = async(req,res)=>{
    try{
      const UpdateMovie = await MoviesModel.findByIdAndUpdate(req.params.id , req.body , {new:true , runValidators:true})
      res.status(200).json({
         status:"success",
         data:{
            UpdateMovie,
         }
      })
    }catch(err){
      res.status(404).json({
         status:"failed",
         message:err.message
    })
    }
}

exports.CreateDoc  = async(req,res)=>{
   try{
    const MovieReq = await MoviesModel.create(req.body)
     res.status(201).json({
        status:"success",
        data:{
            movies:MovieReq
        }
     })
   }catch(err){
    res.status(400).json({
        status:"failed",
        message:err.message
     })
   }

}
exports.getDocbyId = async(req,res)=>{
   try{
      const AllMovies = await MoviesModel.findById(req.params.id)
      res.status(200).json({
         status:"success",
         data:{
            AllMovies,
         }
      })
    }catch(err){
      res.status(400).json({
           status:"failed",
           message:err.message
      })
    }
}

exports.getAllDoc = async(req,res)=>{
    try{
      const AllMovies = await MoviesModel.find()
      res.status(200).json({
         status:"success",
         length:AllMovies.length,
         data:{
            AllMovies,
         }
      })
    }catch(err){
      res.status(404).json({
           status:"failed",
           message:err.message
      })
    }
 }