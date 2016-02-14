/**
 * Created by sergeyzubov on 14/02/16.
 */
var records = [
    {id: 1, username: 'sergey', password: 'secret', displayName: 'Sergey Zubov', emails: [{value: 'jack@example.com'}]}
    , {
        id: 2,
        username: 'alex',
        password: 'birthday',
        displayName: 'Alexandr Zubov',
        emails: [{value: 'jill@example.com'}]
    }
];

exports.findById = function (id, cb) {
    process.nextTick(function () {
        var idx = id - 1;
        if (records[idx]) {
            cb(null, records[idx]);
        } else {
            cb(new Error('User ' + id + ' does not exist'));
        }
    });
}

exports.findByUsername = function (username, cb) {
    process.nextTick(function () {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.username === username) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
}