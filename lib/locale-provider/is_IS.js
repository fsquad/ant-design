'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _is_IS = require('rc-pagination/lib/locale/is_IS');

var _is_IS2 = _interopRequireDefault(_is_IS);

var _is_IS3 = require('../date-picker/locale/is_IS');

var _is_IS4 = _interopRequireDefault(_is_IS3);

var _is_IS5 = require('../time-picker/locale/is_IS');

var _is_IS6 = _interopRequireDefault(_is_IS5);

var _is_IS7 = require('../calendar/locale/is_IS');

var _is_IS8 = _interopRequireDefault(_is_IS7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('is');
exports['default'] = {
    locale: 'is',
    Pagination: _is_IS2['default'],
    DatePicker: _is_IS4['default'],
    TimePicker: _is_IS6['default'],
    Calendar: _is_IS8['default'],
    Table: {
        filterTitle: 'Afmarkanir',
        filterConfirm: 'Staðfesta',
        filterReset: 'Núllstilla',
        emptyText: 'Engin gögn',
        selectAll: 'Velja allt',
        selectInvert: 'Viðsnúa vali'
    },
    Modal: {
        okText: 'Áfram',
        cancelText: 'Hætta við',
        justOkText: 'Í lagi'
    },
    Popconfirm: {
        okText: 'Áfram',
        cancelText: 'Hætta við'
    },
    Transfer: {
        notFoundContent: 'Engar færslur',
        searchPlaceholder: 'Leita hér',
        itemUnit: 'færsla',
        itemsUnit: 'færslur'
    },
    Select: {
        notFoundContent: 'Ekkert finnst'
    },
    Upload: {
        uploading: 'Hleð upp...',
        removeFile: 'Fjarlægja skrá',
        uploadError: 'Villa við að hlaða upp',
        previewFile: 'Forskoða skrá'
    }
};
module.exports = exports['default'];