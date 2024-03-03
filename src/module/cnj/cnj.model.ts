import { mongoose } from '@/service/database'

const Schema = mongoose.Schema

const CNJSchema = new Schema({
    searchKey: String,
    requestId: String,
    lastStatus: String,
    lastStatusDate: {
        type: Date,
        default: new Date()
    },
}, { timestamps: true })

CNJSchema.pre('updateOne', function (next) {
    this.set({ lastStatusDate: new Date() })
    next()
});

CNJSchema.pre('findOneAndUpdate', function (next) {
    this.set({ lastStatusDate: new Date() })
    next()
});

const CNJModel = mongoose.model('CNJ', CNJSchema);

export default CNJModel