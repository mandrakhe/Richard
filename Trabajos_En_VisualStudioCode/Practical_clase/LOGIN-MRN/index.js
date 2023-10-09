import app from './app.js';
import{connectDB} from './db.js';

connectDB(app);
app.listen(5000,()=>console.log('listening on port'));