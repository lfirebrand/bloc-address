const ContactController = require('../controllers/ContactController');
const sequelize = require('../db/models/index').sequelize;

describe('ContactController', () => {
	beforeEach(done => {
		this.book = new ContactController();
		// #1 Before each test, we want to clear the test database of any entries created.
		sequelize
			.sync({ force: true })
			.then(res => {
				done();
			})
			.catch(err => {
				done();
			});
	});

	// #2 We want to scope the call to describe to the ContactController suite.
	describe('#addContact()', () => {
		it('should add a single contact into the book', done => {
			this.book
				.addContact('Alice', '001-101-1010', 'alice.smith@gmail.com')
				.then(contact => {
					expect(contact.name).toBe('Alice');
					expect(contact.phone).toBe('001-101-1010');
					expect(contact.email).toBe('alice.smith@gmail.com');
					done();
				})
				.catch(err => {
					done();
				});
		});
	});
});
