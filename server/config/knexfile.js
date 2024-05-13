module.exports = {
	client: 'pg',
	connection: {
		host: 'localhost',
		port: '5432',
		user: 'postgres', //Логин для подключения к БД
		password: 'Qwsazx34', //Пароль
		database: 'air' //Название БД
	},
	migrations: {
		directory: '../migrations'
	},
	seeds: {
		directory: '../seeds'
	}
}