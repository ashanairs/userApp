const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ashanair605:Q2ZHeObzCpG92Hxn@cluster0.xclqmip.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB connected')
}).catch((res)=>{
    console.log("DB not connected")
});