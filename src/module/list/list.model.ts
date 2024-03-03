import { mongoose } from '@/service/database'

const Schema = mongoose.Schema

const ListSchema = new Schema({
    name: String,
})

const ListModel = mongoose.model('List', ListSchema);

export default ListModel