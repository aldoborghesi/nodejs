const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_finance', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Error.messages.Number.min = "O valor minimo aceito é de '{MIN}'"
mongoose.Error.messages.Number.max = "O valor máximo aceito é de '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."
