import { mongoose } from '@/service/database'

const Schema = mongoose.Schema

const CNJRefSchema = new Schema({
    cnjRef: {
        type: Schema.Types.ObjectId,
        ref: 'CNJ'
    },
    addedDate: {
        type: Date,
        default: new Date()
    }
});

const ListSchema = new Schema({
    name: String,
    cnjs: [CNJRefSchema],
})

const ListModel = mongoose.model('List', ListSchema);

export default ListModel