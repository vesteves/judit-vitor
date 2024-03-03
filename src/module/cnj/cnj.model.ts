import { mongoose } from '@/service/database'

const Schema = mongoose.Schema

const ListSchema = new Schema({
    listRef: {
        type: Schema.Types.ObjectId,
        ref: 'List'
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const CNJSchema = new Schema({
    searchKey: String,
    requestId: String,
    lastStatus: String,
    lists: [ListSchema],
    lastStatusDate: {
        type: Date,
        default: new Date()
    },
}, { timestamps: true });

CNJSchema.pre('save', function (next) {
    if (this.isModified('lists')) {
        this.lists.forEach(list => {
            if (!list.date) {
                list.date = new Date();
            }
        });
    }
    next();
});

CNJSchema.pre('updateOne', function (next) {
    this.set({ lastStatusDate: new Date() });
    next();
});

CNJSchema.pre('findOneAndUpdate', function (next) {
    this.set({ lastStatusDate: new Date() });
    next();
});

const CNJModel = mongoose.model('CNJ', CNJSchema);

export default CNJModel;