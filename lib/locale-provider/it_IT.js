'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _it_IT = require('rc-pagination/lib/locale/it_IT');

var _it_IT2 = _interopRequireDefault(_it_IT);

var _it_IT3 = require('../date-picker/locale/it_IT');

var _it_IT4 = _interopRequireDefault(_it_IT3);

var _it_IT5 = require('../time-picker/locale/it_IT');

var _it_IT6 = _interopRequireDefault(_it_IT5);

var _it_IT7 = require('../calendar/locale/it_IT');

var _it_IT8 = _interopRequireDefault(_it_IT7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('it');
exports['default'] = {
    locale: 'it',
    Pagination: _it_IT2['default'],
    DatePicker: _it_IT4['default'],
    TimePicker: _it_IT6['default'],
    Calendar: _it_IT8['default'],
    Table: {
        filterTitle: 'Menu Filtro',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'Nessun dato',
        selectAll: 'Seleziona pagina corrente',
        selectInvert: 'Selezionare Inverti'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annulla',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annulla'
    },
    Transfer: {
        notFoundContent: 'Non trovato',
        searchPlaceholder: 'Cerca qui',
        itemUnit: 'articolo',
        itemsUnit: 'elementi'
    },
    Select: {
        notFoundContent: 'Non trovato'
    },
    Upload: {
        uploading: 'Caricamento...',
        removeFile: 'Rimuovi il file',
        uploadError: 'Errore di caricamento',
        previewFile: 'Anteprima file'
    }
};
module.exports = exports['default'];